import moment from 'moment';
import {
  Photo,
  foundationPlatformPltService1
} from './generated/foundation-platform-plt-service-1';
import { Person } from './model/person';
import { readPersons } from './read-persons';
import { transformSfsfPhoto } from './util/appointment-transformation';
import { Image } from './model/photo';

export async function readPhotos(
  srv: any,
  readSfsfPhotoByPersonFn = readSfsfPhotoByPerson
): Promise<[{ photos: Image[] }]> {
  return readPersons(srv)
    .then(persons =>
      Promise.all([
        readRemotePhotos(
          readSfsfPhotoByPersonFn,
          transformSfsfPhoto,
        )(persons),
      ])
    )
    .then(([sfsfPhotos]) => [
      {
        photos: [
          ...sfsfPhotos
        ]
      }
    ]);
}

export async function readSfsfPhotoByPerson(
  person: Person,
): Promise<Photo[]> {
  const photoType = 7;
  const personId = person.sfsfID;

  // TODO: Retrieve EmployeeTime from SAP SuccessFactors here. Use the above variables for filtering.
  // return [];
  const { photoApi } = foundationPlatformPltService1();
  return photoApi
    .requestBuilder()
    .getAll()
    .select(
      photoApi.schema.USER_ID,
      photoApi.schema.PHOTO,
    )
    .filter(
      photoApi.schema.PHOTO_TYPE.equals(photoType),
      photoApi.schema.USER_ID.equals(personId)
    )
    .execute({ destinationName: 'SFSF' });

}

function readRemotePhotos<T>(
  readFn: (person: Person) => Promise<T[]>,
  transformFn: (photo: T, person: Person) => Image
): (persons: Person[]) => Promise<Image[]> {
      return (persons: Person[]) =>
        Promise.all(
          persons.map(person =>
            readFn(person).then((photos: T[]) =>
              photos.map(photo =>
                transformFn(photo, person)
              )
            )
          )
        ).then((photosByPerson: Image[][]) =>
          photosByPerson.reduce(
            (allPhotos, photosForOnePerson) => [
              ...allPhotos,
              ...photosForOnePerson
            ],
            []
          )
        );
}
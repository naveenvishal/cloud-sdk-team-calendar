/* import { Person } from './model/person';
import { readPersons } from './read-persons';
import {   Photo,
    foundationPlatformPltService1 } from './generated/foundation-platform-plt-service-1';

export async function readImages(
  srv: any,
  readSfsfImagesByPersonFn = readSfsfImagesByPerson
): Promise<
  [
    {
      images: {
        id: string;
        name: string;
        image: string; // Base64 or URL
      }[];
    }
  ]
> {
  return readPersons(srv).then((persons) =>
    Promise.all([
      readRemoteImages(readSfsfImagesByPersonFn)(persons),
    ]).then(([sfsfImages]) => [
      {
        images: [...sfsfImages],
      },
    ])
  );
}

export async function readSfsfImagesByPerson(person: Person): Promise<any[]> {
  const personId = person.sfsfID;

  // Call SuccessFactors API to retrieve the photo for the user
  const { photoApi } = foundationPlatformPltService1();
  return photoApi
    .requestBuilder()
    .getAll()
    .select(
        photoApi.schema.PHOTO // Assuming this is the field for the photo
    )
    .filter(photoApi.schema.USER_ID.equals(personId))
    .execute({ destinationName: 'SFSF' });
}

function readRemoteImages<T>(
  readFn: (person: Person) => Promise<T[]>
): (persons: Person[]) => Promise<{ id: string; name: string; image: string }[]> {
  return (persons: Person[]) =>
    Promise.all(
      persons.map((person) =>
        readFn(person).then((images) =>
          images.map((image) => ({
            id: person.ID,
            name: person.name,
            image: image.PHOTO, // Assuming `PHOTO` contains the image data
          }))
        )
      )
    ).then((imagesByPerson) =>
      imagesByPerson.reduce(
        (allImages, imagesForOnePerson) => [...allImages, ...imagesForOnePerson],
        []
      )
    );
} */
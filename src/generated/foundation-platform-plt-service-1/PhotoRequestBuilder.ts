/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Photo } from './Photo';

/**
 * Request builder class for operations supported on the {@link Photo} entity.
 */
export class PhotoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Photo<T>, T> {
  /**
   * Returns a request builder for retrieving one `Photo` entity based on its keys.
   * @param photoType Key property. See {@link Photo.photoType}.
   * @param userId Key property. See {@link Photo.userId}.
   * @returns A request builder for creating requests to retrieve one `Photo` entity based on its keys.
   */
  getByKey(
    photoType: DeserializedType<T, 'Edm.Int32'>,
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Photo<T>, T> {
    return new GetByKeyRequestBuilder<Photo<T>, T>(this.entityApi, {
      photoType: photoType,
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `Photo` entities.
   * @returns A request builder for creating requests to retrieve all `Photo` entities.
   */
  getAll(): GetAllRequestBuilder<Photo<T>, T> {
    return new GetAllRequestBuilder<Photo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Photo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Photo`.
   */
  create(entity: Photo<T>): CreateRequestBuilder<Photo<T>, T> {
    return new CreateRequestBuilder<Photo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Photo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Photo`.
   */
  update(entity: Photo<T>): UpdateRequestBuilder<Photo<T>, T> {
    return new UpdateRequestBuilder<Photo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Photo`.
   * @param photoType Key property. See {@link Photo.photoType}.
   * @param userId Key property. See {@link Photo.userId}.
   * @returns A request builder for creating requests that delete an entity of type `Photo`.
   */
  delete(photoType: number, userId: string): DeleteRequestBuilder<Photo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Photo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Photo` by taking the entity as a parameter.
   */
  delete(entity: Photo<T>): DeleteRequestBuilder<Photo<T>, T>;
  delete(
    photoTypeOrEntity: any,
    userId?: string
  ): DeleteRequestBuilder<Photo<T>, T> {
    return new DeleteRequestBuilder<Photo<T>, T>(
      this.entityApi,
      photoTypeOrEntity instanceof Photo
        ? photoTypeOrEntity
        : {
            photoType: photoTypeOrEntity!,
            userId: userId!
          }
    );
  }
}

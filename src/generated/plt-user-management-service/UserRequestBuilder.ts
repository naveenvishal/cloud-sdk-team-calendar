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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { User } from './User';

/**
 * Request builder class for operations supported on the {@link User} entity.
 */
export class UserRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<User<T>, T> {
  /**
   * Returns a request builder for retrieving one `User` entity based on its keys.
   * @param userId Key property. See {@link User.userId}.
   * @returns A request builder for creating requests to retrieve one `User` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<User<T>, T> {
    return new GetByKeyRequestBuilder<User<T>, T>(this.entityApi, {
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `User` entities.
   * @returns A request builder for creating requests to retrieve all `User` entities.
   */
  getAll(): GetAllRequestBuilder<User<T>, T> {
    return new GetAllRequestBuilder<User<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `User` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `User`.
   */
  create(entity: User<T>): CreateRequestBuilder<User<T>, T> {
    return new CreateRequestBuilder<User<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `User`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `User`.
   */
  update(entity: User<T>): UpdateRequestBuilder<User<T>, T> {
    return new UpdateRequestBuilder<User<T>, T>(this.entityApi, entity);
  }
}

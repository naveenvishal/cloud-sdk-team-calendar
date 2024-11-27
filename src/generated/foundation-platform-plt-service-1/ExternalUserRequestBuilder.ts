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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ExternalUser } from './ExternalUser';

/**
 * Request builder class for operations supported on the {@link ExternalUser} entity.
 */
export class ExternalUserRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalUser<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalUser` entity based on its keys.
   * @param userId Key property. See {@link ExternalUser.userId}.
   * @returns A request builder for creating requests to retrieve one `ExternalUser` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalUser<T>, T> {
    return new GetByKeyRequestBuilder<ExternalUser<T>, T>(this.entityApi, {
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `ExternalUser` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalUser` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalUser<T>, T> {
    return new GetAllRequestBuilder<ExternalUser<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalUser` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalUser`.
   */
  create(entity: ExternalUser<T>): CreateRequestBuilder<ExternalUser<T>, T> {
    return new CreateRequestBuilder<ExternalUser<T>, T>(this.entityApi, entity);
  }
}

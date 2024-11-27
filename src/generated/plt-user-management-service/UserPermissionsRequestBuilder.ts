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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { UserPermissions } from './UserPermissions';

/**
 * Request builder class for operations supported on the {@link UserPermissions} entity.
 */
export class UserPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UserPermissions<T>, T> {
  /**
   * Returns a request builder for retrieving one `UserPermissions` entity based on its keys.
   * @param userId Key property. See {@link UserPermissions.userId}.
   * @returns A request builder for creating requests to retrieve one `UserPermissions` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.Byte'>
  ): GetByKeyRequestBuilder<UserPermissions<T>, T> {
    return new GetByKeyRequestBuilder<UserPermissions<T>, T>(this.entityApi, {
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `UserPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `UserPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<UserPermissions<T>, T> {
    return new GetAllRequestBuilder<UserPermissions<T>, T>(this.entityApi);
  }
}

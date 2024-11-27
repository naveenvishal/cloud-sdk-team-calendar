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
import { PeriodicTimeAccountUpdateProfile } from './PeriodicTimeAccountUpdateProfile';

/**
 * Request builder class for operations supported on the {@link PeriodicTimeAccountUpdateProfile} entity.
 */
export class PeriodicTimeAccountUpdateProfileRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodicTimeAccountUpdateProfile<T>, T> {
  /**
   * Returns a request builder for retrieving one `PeriodicTimeAccountUpdateProfile` entity based on its keys.
   * @param externalCode Key property. See {@link PeriodicTimeAccountUpdateProfile.externalCode}.
   * @returns A request builder for creating requests to retrieve one `PeriodicTimeAccountUpdateProfile` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PeriodicTimeAccountUpdateProfile<T>, T> {
    return new GetByKeyRequestBuilder<PeriodicTimeAccountUpdateProfile<T>, T>(
      this.entityApi,
      { externalCode: externalCode }
    );
  }

  /**
   * Returns a request builder for querying all `PeriodicTimeAccountUpdateProfile` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodicTimeAccountUpdateProfile` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodicTimeAccountUpdateProfile<T>, T> {
    return new GetAllRequestBuilder<PeriodicTimeAccountUpdateProfile<T>, T>(
      this.entityApi
    );
  }
}

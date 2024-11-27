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
import { Picklist } from './Picklist';

/**
 * Request builder class for operations supported on the {@link Picklist} entity.
 */
export class PicklistRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Picklist<T>, T> {
  /**
   * Returns a request builder for retrieving one `Picklist` entity based on its keys.
   * @param picklistId Key property. See {@link Picklist.picklistId}.
   * @returns A request builder for creating requests to retrieve one `Picklist` entity based on its keys.
   */
  getByKey(
    picklistId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Picklist<T>, T> {
    return new GetByKeyRequestBuilder<Picklist<T>, T>(this.entityApi, {
      picklistId: picklistId
    });
  }

  /**
   * Returns a request builder for querying all `Picklist` entities.
   * @returns A request builder for creating requests to retrieve all `Picklist` entities.
   */
  getAll(): GetAllRequestBuilder<Picklist<T>, T> {
    return new GetAllRequestBuilder<Picklist<T>, T>(this.entityApi);
  }
}

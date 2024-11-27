/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ExtAddressInfo } from './ExtAddressInfo';

/**
 * Request builder class for operations supported on the {@link ExtAddressInfo} entity.
 */
export class ExtAddressInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtAddressInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExtAddressInfo` entity based on its keys.
   * @param addressId Key property. See {@link ExtAddressInfo.addressId}.
   * @returns A request builder for creating requests to retrieve one `ExtAddressInfo` entity based on its keys.
   */
  getByKey(
    addressId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExtAddressInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExtAddressInfo<T>, T>(this.entityApi, {
      addressId: addressId
    });
  }

  /**
   * Returns a request builder for querying all `ExtAddressInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtAddressInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtAddressInfo<T>, T> {
    return new GetAllRequestBuilder<ExtAddressInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtAddressInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtAddressInfo`.
   */
  create(
    entity: ExtAddressInfo<T>
  ): CreateRequestBuilder<ExtAddressInfo<T>, T> {
    return new CreateRequestBuilder<ExtAddressInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

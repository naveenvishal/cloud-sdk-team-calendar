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
import { ExtPhoneInfo } from './ExtPhoneInfo';

/**
 * Request builder class for operations supported on the {@link ExtPhoneInfo} entity.
 */
export class ExtPhoneInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtPhoneInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExtPhoneInfo` entity based on its keys.
   * @param phoneInfoId Key property. See {@link ExtPhoneInfo.phoneInfoId}.
   * @returns A request builder for creating requests to retrieve one `ExtPhoneInfo` entity based on its keys.
   */
  getByKey(
    phoneInfoId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExtPhoneInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExtPhoneInfo<T>, T>(this.entityApi, {
      phoneInfoId: phoneInfoId
    });
  }

  /**
   * Returns a request builder for querying all `ExtPhoneInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtPhoneInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtPhoneInfo<T>, T> {
    return new GetAllRequestBuilder<ExtPhoneInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtPhoneInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtPhoneInfo`.
   */
  create(entity: ExtPhoneInfo<T>): CreateRequestBuilder<ExtPhoneInfo<T>, T> {
    return new CreateRequestBuilder<ExtPhoneInfo<T>, T>(this.entityApi, entity);
  }
}

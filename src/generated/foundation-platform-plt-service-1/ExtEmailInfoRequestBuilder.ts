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
import { ExtEmailInfo } from './ExtEmailInfo';

/**
 * Request builder class for operations supported on the {@link ExtEmailInfo} entity.
 */
export class ExtEmailInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtEmailInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExtEmailInfo` entity based on its keys.
   * @param emailInfoId Key property. See {@link ExtEmailInfo.emailInfoId}.
   * @returns A request builder for creating requests to retrieve one `ExtEmailInfo` entity based on its keys.
   */
  getByKey(
    emailInfoId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExtEmailInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExtEmailInfo<T>, T>(this.entityApi, {
      emailInfoId: emailInfoId
    });
  }

  /**
   * Returns a request builder for querying all `ExtEmailInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtEmailInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtEmailInfo<T>, T> {
    return new GetAllRequestBuilder<ExtEmailInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtEmailInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtEmailInfo`.
   */
  create(entity: ExtEmailInfo<T>): CreateRequestBuilder<ExtEmailInfo<T>, T> {
    return new CreateRequestBuilder<ExtEmailInfo<T>, T>(this.entityApi, entity);
  }
}

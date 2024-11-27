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
import { ExtPersonalInfo } from './ExtPersonalInfo';

/**
 * Request builder class for operations supported on the {@link ExtPersonalInfo} entity.
 */
export class ExtPersonalInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExtPersonalInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExtPersonalInfo` entity based on its keys.
   * @param personalInfoId Key property. See {@link ExtPersonalInfo.personalInfoId}.
   * @returns A request builder for creating requests to retrieve one `ExtPersonalInfo` entity based on its keys.
   */
  getByKey(
    personalInfoId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExtPersonalInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExtPersonalInfo<T>, T>(this.entityApi, {
      personalInfoId: personalInfoId
    });
  }

  /**
   * Returns a request builder for querying all `ExtPersonalInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtPersonalInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtPersonalInfo<T>, T> {
    return new GetAllRequestBuilder<ExtPersonalInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExtPersonalInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtPersonalInfo`.
   */
  create(
    entity: ExtPersonalInfo<T>
  ): CreateRequestBuilder<ExtPersonalInfo<T>, T> {
    return new CreateRequestBuilder<ExtPersonalInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

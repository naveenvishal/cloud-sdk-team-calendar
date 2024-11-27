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
  UpdateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { PicklistOption } from './PicklistOption';

/**
 * Request builder class for operations supported on the {@link PicklistOption} entity.
 */
export class PicklistOptionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PicklistOption<T>, T> {
  /**
   * Returns a request builder for retrieving one `PicklistOption` entity based on its keys.
   * @param id Key property. See {@link PicklistOption.id}.
   * @returns A request builder for creating requests to retrieve one `PicklistOption` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PicklistOption<T>, T> {
    return new GetByKeyRequestBuilder<PicklistOption<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `PicklistOption` entities.
   * @returns A request builder for creating requests to retrieve all `PicklistOption` entities.
   */
  getAll(): GetAllRequestBuilder<PicklistOption<T>, T> {
    return new GetAllRequestBuilder<PicklistOption<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PicklistOption` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PicklistOption`.
   */
  create(
    entity: PicklistOption<T>
  ): CreateRequestBuilder<PicklistOption<T>, T> {
    return new CreateRequestBuilder<PicklistOption<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PicklistOption`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PicklistOption`.
   */
  update(
    entity: PicklistOption<T>
  ): UpdateRequestBuilder<PicklistOption<T>, T> {
    return new UpdateRequestBuilder<PicklistOption<T>, T>(
      this.entityApi,
      entity
    );
  }
}

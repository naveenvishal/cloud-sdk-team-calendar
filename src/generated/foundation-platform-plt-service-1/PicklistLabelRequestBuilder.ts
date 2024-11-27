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
import { PicklistLabel } from './PicklistLabel';

/**
 * Request builder class for operations supported on the {@link PicklistLabel} entity.
 */
export class PicklistLabelRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PicklistLabel<T>, T> {
  /**
   * Returns a request builder for retrieving one `PicklistLabel` entity based on its keys.
   * @param locale Key property. See {@link PicklistLabel.locale}.
   * @param optionId Key property. See {@link PicklistLabel.optionId}.
   * @returns A request builder for creating requests to retrieve one `PicklistLabel` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    optionId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PicklistLabel<T>, T> {
    return new GetByKeyRequestBuilder<PicklistLabel<T>, T>(this.entityApi, {
      locale: locale,
      optionId: optionId
    });
  }

  /**
   * Returns a request builder for querying all `PicklistLabel` entities.
   * @returns A request builder for creating requests to retrieve all `PicklistLabel` entities.
   */
  getAll(): GetAllRequestBuilder<PicklistLabel<T>, T> {
    return new GetAllRequestBuilder<PicklistLabel<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PicklistLabel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PicklistLabel`.
   */
  create(entity: PicklistLabel<T>): CreateRequestBuilder<PicklistLabel<T>, T> {
    return new CreateRequestBuilder<PicklistLabel<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PicklistLabel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PicklistLabel`.
   */
  update(entity: PicklistLabel<T>): UpdateRequestBuilder<PicklistLabel<T>, T> {
    return new UpdateRequestBuilder<PicklistLabel<T>, T>(
      this.entityApi,
      entity
    );
  }
}

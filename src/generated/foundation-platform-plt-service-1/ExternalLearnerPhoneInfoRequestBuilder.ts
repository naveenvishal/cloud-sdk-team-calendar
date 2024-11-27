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
import { ExternalLearnerPhoneInfo } from './ExternalLearnerPhoneInfo';

/**
 * Request builder class for operations supported on the {@link ExternalLearnerPhoneInfo} entity.
 */
export class ExternalLearnerPhoneInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLearnerPhoneInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerPhoneInfo` entity based on its keys.
   * @param itemId Key property. See {@link ExternalLearnerPhoneInfo.itemId}.
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerPhoneInfo` entity based on its keys.
   */
  getByKey(
    itemId: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ExternalLearnerPhoneInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLearnerPhoneInfo<T>, T>(
      this.entityApi,
      { itemId: itemId }
    );
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerPhoneInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerPhoneInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerPhoneInfo<T>, T> {
    return new GetAllRequestBuilder<ExternalLearnerPhoneInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerPhoneInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPhoneInfo`.
   */
  create(
    entity: ExternalLearnerPhoneInfo<T>
  ): CreateRequestBuilder<ExternalLearnerPhoneInfo<T>, T> {
    return new CreateRequestBuilder<ExternalLearnerPhoneInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

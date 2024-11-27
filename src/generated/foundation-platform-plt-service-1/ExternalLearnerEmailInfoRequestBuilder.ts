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
import { ExternalLearnerEmailInfo } from './ExternalLearnerEmailInfo';

/**
 * Request builder class for operations supported on the {@link ExternalLearnerEmailInfo} entity.
 */
export class ExternalLearnerEmailInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLearnerEmailInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerEmailInfo` entity based on its keys.
   * @param itemId Key property. See {@link ExternalLearnerEmailInfo.itemId}.
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerEmailInfo` entity based on its keys.
   */
  getByKey(
    itemId: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ExternalLearnerEmailInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLearnerEmailInfo<T>, T>(
      this.entityApi,
      { itemId: itemId }
    );
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerEmailInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerEmailInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerEmailInfo<T>, T> {
    return new GetAllRequestBuilder<ExternalLearnerEmailInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerEmailInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerEmailInfo`.
   */
  create(
    entity: ExternalLearnerEmailInfo<T>
  ): CreateRequestBuilder<ExternalLearnerEmailInfo<T>, T> {
    return new CreateRequestBuilder<ExternalLearnerEmailInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

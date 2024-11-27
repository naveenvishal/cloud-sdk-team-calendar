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
import { ExternalLearnerPersonalInfo } from './ExternalLearnerPersonalInfo';

/**
 * Request builder class for operations supported on the {@link ExternalLearnerPersonalInfo} entity.
 */
export class ExternalLearnerPersonalInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLearnerPersonalInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerPersonalInfo` entity based on its keys.
   * @param itemId Key property. See {@link ExternalLearnerPersonalInfo.itemId}.
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerPersonalInfo` entity based on its keys.
   */
  getByKey(
    itemId: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ExternalLearnerPersonalInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLearnerPersonalInfo<T>, T>(
      this.entityApi,
      { itemId: itemId }
    );
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerPersonalInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerPersonalInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerPersonalInfo<T>, T> {
    return new GetAllRequestBuilder<ExternalLearnerPersonalInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerPersonalInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerPersonalInfo`.
   */
  create(
    entity: ExternalLearnerPersonalInfo<T>
  ): CreateRequestBuilder<ExternalLearnerPersonalInfo<T>, T> {
    return new CreateRequestBuilder<ExternalLearnerPersonalInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

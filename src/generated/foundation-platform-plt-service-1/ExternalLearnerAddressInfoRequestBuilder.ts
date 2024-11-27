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
import { ExternalLearnerAddressInfo } from './ExternalLearnerAddressInfo';

/**
 * Request builder class for operations supported on the {@link ExternalLearnerAddressInfo} entity.
 */
export class ExternalLearnerAddressInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLearnerAddressInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalLearnerAddressInfo` entity based on its keys.
   * @param itemId Key property. See {@link ExternalLearnerAddressInfo.itemId}.
   * @returns A request builder for creating requests to retrieve one `ExternalLearnerAddressInfo` entity based on its keys.
   */
  getByKey(
    itemId: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ExternalLearnerAddressInfo<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLearnerAddressInfo<T>, T>(
      this.entityApi,
      { itemId: itemId }
    );
  }

  /**
   * Returns a request builder for querying all `ExternalLearnerAddressInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearnerAddressInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearnerAddressInfo<T>, T> {
    return new GetAllRequestBuilder<ExternalLearnerAddressInfo<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalLearnerAddressInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearnerAddressInfo`.
   */
  create(
    entity: ExternalLearnerAddressInfo<T>
  ): CreateRequestBuilder<ExternalLearnerAddressInfo<T>, T> {
    return new CreateRequestBuilder<ExternalLearnerAddressInfo<T>, T>(
      this.entityApi,
      entity
    );
  }
}

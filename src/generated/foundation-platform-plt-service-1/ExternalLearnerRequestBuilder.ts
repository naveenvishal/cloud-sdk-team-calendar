/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { ExternalLearner } from './ExternalLearner';

/**
 * Request builder class for operations supported on the {@link ExternalLearner} entity.
 */
export class ExternalLearnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalLearner<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalLearner` entity based on its keys.
   * @param userId Key property. See {@link ExternalLearner.userId}.
   * @returns A request builder for creating requests to retrieve one `ExternalLearner` entity based on its keys.
   */
  getByKey(
    userId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalLearner<T>, T> {
    return new GetByKeyRequestBuilder<ExternalLearner<T>, T>(this.entityApi, {
      userId: userId
    });
  }

  /**
   * Returns a request builder for querying all `ExternalLearner` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalLearner` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalLearner<T>, T> {
    return new GetAllRequestBuilder<ExternalLearner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExternalLearner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalLearner`.
   */
  create(
    entity: ExternalLearner<T>
  ): CreateRequestBuilder<ExternalLearner<T>, T> {
    return new CreateRequestBuilder<ExternalLearner<T>, T>(
      this.entityApi,
      entity
    );
  }
}

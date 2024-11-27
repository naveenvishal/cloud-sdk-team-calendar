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
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CompetencyRating } from './CompetencyRating';

/**
 * Request builder class for operations supported on the {@link CompetencyRating} entity.
 */
export class CompetencyRatingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompetencyRating<T>, T> {
  /**
   * Returns a request builder for retrieving one `CompetencyRating` entity based on its keys.
   * @param id Key property. See {@link CompetencyRating.id}.
   * @returns A request builder for creating requests to retrieve one `CompetencyRating` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CompetencyRating<T>, T> {
    return new GetByKeyRequestBuilder<CompetencyRating<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `CompetencyRating` entities.
   * @returns A request builder for creating requests to retrieve all `CompetencyRating` entities.
   */
  getAll(): GetAllRequestBuilder<CompetencyRating<T>, T> {
    return new GetAllRequestBuilder<CompetencyRating<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompetencyRating` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompetencyRating`.
   */
  create(
    entity: CompetencyRating<T>
  ): CreateRequestBuilder<CompetencyRating<T>, T> {
    return new CreateRequestBuilder<CompetencyRating<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompetencyRating`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompetencyRating`.
   */
  update(
    entity: CompetencyRating<T>
  ): UpdateRequestBuilder<CompetencyRating<T>, T> {
    return new UpdateRequestBuilder<CompetencyRating<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompetencyRating`.
   * @param id Key property. See {@link CompetencyRating.id}.
   * @returns A request builder for creating requests that delete an entity of type `CompetencyRating`.
   */
  delete(id: BigNumber): DeleteRequestBuilder<CompetencyRating<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompetencyRating`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompetencyRating` by taking the entity as a parameter.
   */
  delete(
    entity: CompetencyRating<T>
  ): DeleteRequestBuilder<CompetencyRating<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<CompetencyRating<T>, T> {
    return new DeleteRequestBuilder<CompetencyRating<T>, T>(
      this.entityApi,
      idOrEntity instanceof CompetencyRating ? idOrEntity : { id: idOrEntity! }
    );
  }
}

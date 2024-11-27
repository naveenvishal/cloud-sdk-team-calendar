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
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { TeamGoalOwner } from './TeamGoalOwner';

/**
 * Request builder class for operations supported on the {@link TeamGoalOwner} entity.
 */
export class TeamGoalOwnerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TeamGoalOwner<T>, T> {
  /**
   * Returns a request builder for retrieving one `TeamGoalOwner` entity based on its keys.
   * @param externalCode Key property. See {@link TeamGoalOwner.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TeamGoalOwner` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TeamGoalOwner<T>, T> {
    return new GetByKeyRequestBuilder<TeamGoalOwner<T>, T>(this.entityApi, {
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TeamGoalOwner` entities.
   * @returns A request builder for creating requests to retrieve all `TeamGoalOwner` entities.
   */
  getAll(): GetAllRequestBuilder<TeamGoalOwner<T>, T> {
    return new GetAllRequestBuilder<TeamGoalOwner<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TeamGoalOwner` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TeamGoalOwner`.
   */
  create(entity: TeamGoalOwner<T>): CreateRequestBuilder<TeamGoalOwner<T>, T> {
    return new CreateRequestBuilder<TeamGoalOwner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TeamGoalOwner`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TeamGoalOwner`.
   */
  update(entity: TeamGoalOwner<T>): UpdateRequestBuilder<TeamGoalOwner<T>, T> {
    return new UpdateRequestBuilder<TeamGoalOwner<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TeamGoalOwner`.
   * @param externalCode Key property. See {@link TeamGoalOwner.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `TeamGoalOwner`.
   */
  delete(externalCode: string): DeleteRequestBuilder<TeamGoalOwner<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TeamGoalOwner`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TeamGoalOwner` by taking the entity as a parameter.
   */
  delete(entity: TeamGoalOwner<T>): DeleteRequestBuilder<TeamGoalOwner<T>, T>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<TeamGoalOwner<T>, T> {
    return new DeleteRequestBuilder<TeamGoalOwner<T>, T>(
      this.entityApi,
      externalCodeOrEntity instanceof TeamGoalOwner
        ? externalCodeOrEntity
        : { externalCode: externalCodeOrEntity! }
    );
  }
}

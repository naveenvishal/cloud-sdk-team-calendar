/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { WorkOrder } from './WorkOrder';

/**
 * Request builder class for operations supported on the {@link WorkOrder} entity.
 */
export class WorkOrderRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkOrder<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkOrder` entity based on its keys.
   * @param effectiveStartDate Key property. See {@link WorkOrder.effectiveStartDate}.
   * @param userSysId Key property. See {@link WorkOrder.userSysId}.
   * @returns A request builder for creating requests to retrieve one `WorkOrder` entity based on its keys.
   */
  getByKey(
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>,
    userSysId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkOrder<T>, T> {
    return new GetByKeyRequestBuilder<WorkOrder<T>, T>(this.entityApi, {
      effectiveStartDate: effectiveStartDate,
      userSysId: userSysId
    });
  }

  /**
   * Returns a request builder for querying all `WorkOrder` entities.
   * @returns A request builder for creating requests to retrieve all `WorkOrder` entities.
   */
  getAll(): GetAllRequestBuilder<WorkOrder<T>, T> {
    return new GetAllRequestBuilder<WorkOrder<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkOrder` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkOrder`.
   */
  create(entity: WorkOrder<T>): CreateRequestBuilder<WorkOrder<T>, T> {
    return new CreateRequestBuilder<WorkOrder<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkOrder`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkOrder`.
   */
  update(entity: WorkOrder<T>): UpdateRequestBuilder<WorkOrder<T>, T> {
    return new UpdateRequestBuilder<WorkOrder<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkOrder`.
   * @param effectiveStartDate Key property. See {@link WorkOrder.effectiveStartDate}.
   * @param userSysId Key property. See {@link WorkOrder.userSysId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkOrder`.
   */
  delete(
    effectiveStartDate: Moment,
    userSysId: string
  ): DeleteRequestBuilder<WorkOrder<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkOrder`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkOrder` by taking the entity as a parameter.
   */
  delete(entity: WorkOrder<T>): DeleteRequestBuilder<WorkOrder<T>, T>;
  delete(
    effectiveStartDateOrEntity: any,
    userSysId?: string
  ): DeleteRequestBuilder<WorkOrder<T>, T> {
    return new DeleteRequestBuilder<WorkOrder<T>, T>(
      this.entityApi,
      effectiveStartDateOrEntity instanceof WorkOrder
        ? effectiveStartDateOrEntity
        : {
            effectiveStartDate: effectiveStartDateOrEntity!,
            userSysId: userSysId!
          }
    );
  }
}

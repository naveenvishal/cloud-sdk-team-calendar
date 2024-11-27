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
import { TimeZone } from './TimeZone';

/**
 * Request builder class for operations supported on the {@link TimeZone} entity.
 */
export class TimeZoneRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeZone<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeZone` entity based on its keys.
   * @param effectiveStartDate Key property. See {@link TimeZone.effectiveStartDate}.
   * @param externalCode Key property. See {@link TimeZone.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeZone` entity based on its keys.
   */
  getByKey(
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeZone<T>, T> {
    return new GetByKeyRequestBuilder<TimeZone<T>, T>(this.entityApi, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeZone` entities.
   * @returns A request builder for creating requests to retrieve all `TimeZone` entities.
   */
  getAll(): GetAllRequestBuilder<TimeZone<T>, T> {
    return new GetAllRequestBuilder<TimeZone<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeZone` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeZone`.
   */
  create(entity: TimeZone<T>): CreateRequestBuilder<TimeZone<T>, T> {
    return new CreateRequestBuilder<TimeZone<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TimeZone`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeZone`.
   */
  update(entity: TimeZone<T>): UpdateRequestBuilder<TimeZone<T>, T> {
    return new UpdateRequestBuilder<TimeZone<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeZone`.
   * @param effectiveStartDate Key property. See {@link TimeZone.effectiveStartDate}.
   * @param externalCode Key property. See {@link TimeZone.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `TimeZone`.
   */
  delete(
    effectiveStartDate: Moment,
    externalCode: string
  ): DeleteRequestBuilder<TimeZone<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeZone`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeZone` by taking the entity as a parameter.
   */
  delete(entity: TimeZone<T>): DeleteRequestBuilder<TimeZone<T>, T>;
  delete(
    effectiveStartDateOrEntity: any,
    externalCode?: string
  ): DeleteRequestBuilder<TimeZone<T>, T> {
    return new DeleteRequestBuilder<TimeZone<T>, T>(
      this.entityApi,
      effectiveStartDateOrEntity instanceof TimeZone
        ? effectiveStartDateOrEntity
        : {
            effectiveStartDate: effectiveStartDateOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

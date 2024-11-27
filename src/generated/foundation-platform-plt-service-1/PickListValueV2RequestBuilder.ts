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
import { PickListValueV2 } from './PickListValueV2';

/**
 * Request builder class for operations supported on the {@link PickListValueV2} entity.
 */
export class PickListValueV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PickListValueV2<T>, T> {
  /**
   * Returns a request builder for retrieving one `PickListValueV2` entity based on its keys.
   * @param pickListV2EffectiveStartDate Key property. See {@link PickListValueV2.pickListV2EffectiveStartDate}.
   * @param pickListV2Id Key property. See {@link PickListValueV2.pickListV2Id}.
   * @param externalCode Key property. See {@link PickListValueV2.externalCode}.
   * @returns A request builder for creating requests to retrieve one `PickListValueV2` entity based on its keys.
   */
  getByKey(
    pickListV2EffectiveStartDate: DeserializedType<T, 'Edm.DateTime'>,
    pickListV2Id: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PickListValueV2<T>, T> {
    return new GetByKeyRequestBuilder<PickListValueV2<T>, T>(this.entityApi, {
      PickListV2_effectiveStartDate: pickListV2EffectiveStartDate,
      PickListV2_id: pickListV2Id,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PickListValueV2` entities.
   * @returns A request builder for creating requests to retrieve all `PickListValueV2` entities.
   */
  getAll(): GetAllRequestBuilder<PickListValueV2<T>, T> {
    return new GetAllRequestBuilder<PickListValueV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PickListValueV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickListValueV2`.
   */
  create(
    entity: PickListValueV2<T>
  ): CreateRequestBuilder<PickListValueV2<T>, T> {
    return new CreateRequestBuilder<PickListValueV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PickListValueV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickListValueV2`.
   */
  update(
    entity: PickListValueV2<T>
  ): UpdateRequestBuilder<PickListValueV2<T>, T> {
    return new UpdateRequestBuilder<PickListValueV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PickListValueV2`.
   * @param pickListV2EffectiveStartDate Key property. See {@link PickListValueV2.pickListV2EffectiveStartDate}.
   * @param pickListV2Id Key property. See {@link PickListValueV2.pickListV2Id}.
   * @param externalCode Key property. See {@link PickListValueV2.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `PickListValueV2`.
   */
  delete(
    pickListV2EffectiveStartDate: Moment,
    pickListV2Id: string,
    externalCode: string
  ): DeleteRequestBuilder<PickListValueV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PickListValueV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickListValueV2` by taking the entity as a parameter.
   */
  delete(
    entity: PickListValueV2<T>
  ): DeleteRequestBuilder<PickListValueV2<T>, T>;
  delete(
    pickListV2EffectiveStartDateOrEntity: any,
    pickListV2Id?: string,
    externalCode?: string
  ): DeleteRequestBuilder<PickListValueV2<T>, T> {
    return new DeleteRequestBuilder<PickListValueV2<T>, T>(
      this.entityApi,
      pickListV2EffectiveStartDateOrEntity instanceof PickListValueV2
        ? pickListV2EffectiveStartDateOrEntity
        : {
            PickListV2_effectiveStartDate:
              pickListV2EffectiveStartDateOrEntity!,
            PickListV2_id: pickListV2Id!,
            externalCode: externalCode!
          }
    );
  }
}

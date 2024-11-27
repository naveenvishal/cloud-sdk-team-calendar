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
import { VendorInfo } from './VendorInfo';

/**
 * Request builder class for operations supported on the {@link VendorInfo} entity.
 */
export class VendorInfoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorInfo<T>, T> {
  /**
   * Returns a request builder for retrieving one `VendorInfo` entity based on its keys.
   * @param effectiveStartDate Key property. See {@link VendorInfo.effectiveStartDate}.
   * @param vendorCode Key property. See {@link VendorInfo.vendorCode}.
   * @returns A request builder for creating requests to retrieve one `VendorInfo` entity based on its keys.
   */
  getByKey(
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>,
    vendorCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendorInfo<T>, T> {
    return new GetByKeyRequestBuilder<VendorInfo<T>, T>(this.entityApi, {
      effectiveStartDate: effectiveStartDate,
      vendorCode: vendorCode
    });
  }

  /**
   * Returns a request builder for querying all `VendorInfo` entities.
   * @returns A request builder for creating requests to retrieve all `VendorInfo` entities.
   */
  getAll(): GetAllRequestBuilder<VendorInfo<T>, T> {
    return new GetAllRequestBuilder<VendorInfo<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendorInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorInfo`.
   */
  create(entity: VendorInfo<T>): CreateRequestBuilder<VendorInfo<T>, T> {
    return new CreateRequestBuilder<VendorInfo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `VendorInfo`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorInfo`.
   */
  update(entity: VendorInfo<T>): UpdateRequestBuilder<VendorInfo<T>, T> {
    return new UpdateRequestBuilder<VendorInfo<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorInfo`.
   * @param effectiveStartDate Key property. See {@link VendorInfo.effectiveStartDate}.
   * @param vendorCode Key property. See {@link VendorInfo.vendorCode}.
   * @returns A request builder for creating requests that delete an entity of type `VendorInfo`.
   */
  delete(
    effectiveStartDate: Moment,
    vendorCode: string
  ): DeleteRequestBuilder<VendorInfo<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorInfo`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorInfo` by taking the entity as a parameter.
   */
  delete(entity: VendorInfo<T>): DeleteRequestBuilder<VendorInfo<T>, T>;
  delete(
    effectiveStartDateOrEntity: any,
    vendorCode?: string
  ): DeleteRequestBuilder<VendorInfo<T>, T> {
    return new DeleteRequestBuilder<VendorInfo<T>, T>(
      this.entityApi,
      effectiveStartDateOrEntity instanceof VendorInfo
        ? effectiveStartDateOrEntity
        : {
            effectiveStartDate: effectiveStartDateOrEntity!,
            vendorCode: vendorCode!
          }
    );
  }
}

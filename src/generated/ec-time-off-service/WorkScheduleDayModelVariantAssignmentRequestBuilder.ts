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
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { WorkScheduleDayModelVariantAssignment } from './WorkScheduleDayModelVariantAssignment';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelVariantAssignment} entity.
 */
export class WorkScheduleDayModelVariantAssignmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkScheduleDayModelVariantAssignment<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelVariantAssignment` entity based on its keys.
   * @param workScheduleDayModelExternalCode Key property. See {@link WorkScheduleDayModelVariantAssignment.workScheduleDayModelExternalCode}.
   * @param externalCode Key property. See {@link WorkScheduleDayModelVariantAssignment.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelVariantAssignment` entity based on its keys.
   */
  getByKey(
    workScheduleDayModelExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkScheduleDayModelVariantAssignment<T>, T> {
    return new GetByKeyRequestBuilder<
      WorkScheduleDayModelVariantAssignment<T>,
      T
    >(this.entityApi, {
      WorkScheduleDayModel_externalCode: workScheduleDayModelExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModelVariantAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelVariantAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelVariantAssignment<T>, T> {
    return new GetAllRequestBuilder<
      WorkScheduleDayModelVariantAssignment<T>,
      T
    >(this.entityApi);
  }
}

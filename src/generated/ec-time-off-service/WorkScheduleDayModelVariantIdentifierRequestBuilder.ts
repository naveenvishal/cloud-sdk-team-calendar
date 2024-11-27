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
import { WorkScheduleDayModelVariantIdentifier } from './WorkScheduleDayModelVariantIdentifier';

/**
 * Request builder class for operations supported on the {@link WorkScheduleDayModelVariantIdentifier} entity.
 */
export class WorkScheduleDayModelVariantIdentifierRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkScheduleDayModelVariantIdentifier<T>, T> {
  /**
   * Returns a request builder for retrieving one `WorkScheduleDayModelVariantIdentifier` entity based on its keys.
   * @param externalCode Key property. See {@link WorkScheduleDayModelVariantIdentifier.externalCode}.
   * @returns A request builder for creating requests to retrieve one `WorkScheduleDayModelVariantIdentifier` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WorkScheduleDayModelVariantIdentifier<T>, T> {
    return new GetByKeyRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<T>,
      T
    >(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `WorkScheduleDayModelVariantIdentifier` entities.
   * @returns A request builder for creating requests to retrieve all `WorkScheduleDayModelVariantIdentifier` entities.
   */
  getAll(): GetAllRequestBuilder<WorkScheduleDayModelVariantIdentifier<T>, T> {
    return new GetAllRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<T>,
      T
    >(this.entityApi);
  }
}

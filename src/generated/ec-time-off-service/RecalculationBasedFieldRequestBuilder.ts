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
import { RecalculationBasedField } from './RecalculationBasedField';

/**
 * Request builder class for operations supported on the {@link RecalculationBasedField} entity.
 */
export class RecalculationBasedFieldRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecalculationBasedField<T>, T> {
  /**
   * Returns a request builder for retrieving one `RecalculationBasedField` entity based on its keys.
   * @param timeAccountTypeExternalCode Key property. See {@link RecalculationBasedField.timeAccountTypeExternalCode}.
   * @param recalcField Key property. See {@link RecalculationBasedField.recalcField}.
   * @returns A request builder for creating requests to retrieve one `RecalculationBasedField` entity based on its keys.
   */
  getByKey(
    timeAccountTypeExternalCode: DeserializedType<T, 'Edm.String'>,
    recalcField: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecalculationBasedField<T>, T> {
    return new GetByKeyRequestBuilder<RecalculationBasedField<T>, T>(
      this.entityApi,
      {
        TimeAccountType_externalCode: timeAccountTypeExternalCode,
        recalcField: recalcField
      }
    );
  }

  /**
   * Returns a request builder for querying all `RecalculationBasedField` entities.
   * @returns A request builder for creating requests to retrieve all `RecalculationBasedField` entities.
   */
  getAll(): GetAllRequestBuilder<RecalculationBasedField<T>, T> {
    return new GetAllRequestBuilder<RecalculationBasedField<T>, T>(
      this.entityApi
    );
  }
}

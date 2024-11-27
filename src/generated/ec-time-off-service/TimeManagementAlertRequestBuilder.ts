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
import { TimeManagementAlert } from './TimeManagementAlert';

/**
 * Request builder class for operations supported on the {@link TimeManagementAlert} entity.
 */
export class TimeManagementAlertRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeManagementAlert<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeManagementAlert` entity based on its keys.
   * @param externalCode Key property. See {@link TimeManagementAlert.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementAlert` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeManagementAlert<T>, T> {
    return new GetByKeyRequestBuilder<TimeManagementAlert<T>, T>(
      this.entityApi,
      { externalCode: externalCode }
    );
  }

  /**
   * Returns a request builder for querying all `TimeManagementAlert` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementAlert` entities.
   */
  getAll(): GetAllRequestBuilder<TimeManagementAlert<T>, T> {
    return new GetAllRequestBuilder<TimeManagementAlert<T>, T>(this.entityApi);
  }
}

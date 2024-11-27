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
import { TimeManagementAlertMessage } from './TimeManagementAlertMessage';

/**
 * Request builder class for operations supported on the {@link TimeManagementAlertMessage} entity.
 */
export class TimeManagementAlertMessageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeManagementAlertMessage<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeManagementAlertMessage` entity based on its keys.
   * @param timeManagementAlertExternalCode Key property. See {@link TimeManagementAlertMessage.timeManagementAlertExternalCode}.
   * @param externalCode Key property. See {@link TimeManagementAlertMessage.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementAlertMessage` entity based on its keys.
   */
  getByKey(
    timeManagementAlertExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeManagementAlertMessage<T>, T> {
    return new GetByKeyRequestBuilder<TimeManagementAlertMessage<T>, T>(
      this.entityApi,
      {
        TimeManagementAlert_externalCode: timeManagementAlertExternalCode,
        externalCode: externalCode
      }
    );
  }

  /**
   * Returns a request builder for querying all `TimeManagementAlertMessage` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementAlertMessage` entities.
   */
  getAll(): GetAllRequestBuilder<TimeManagementAlertMessage<T>, T> {
    return new GetAllRequestBuilder<TimeManagementAlertMessage<T>, T>(
      this.entityApi
    );
  }
}

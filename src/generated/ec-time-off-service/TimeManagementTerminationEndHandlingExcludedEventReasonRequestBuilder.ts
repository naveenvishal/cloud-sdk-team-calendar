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
import { TimeManagementTerminationEndHandlingExcludedEventReason } from './TimeManagementTerminationEndHandlingExcludedEventReason';

/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExcludedEventReason} entity.
 */
export class TimeManagementTerminationEndHandlingExcludedEventReasonRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TimeManagementTerminationEndHandlingExcludedEventReason<T>,
  T
> {
  /**
   * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExcludedEventReason` entity based on its keys.
   * @param timeManagementTerminationEndHandlingExclusionExternalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedEventReason.timeManagementTerminationEndHandlingExclusionExternalCode}.
   * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedEventReason.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExcludedEventReason` entity based on its keys.
   */
  getByKey(
    timeManagementTerminationEndHandlingExclusionExternalCode: DeserializedType<
      T,
      'Edm.String'
    >,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TimeManagementTerminationEndHandlingExcludedEventReason<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<T>,
      T
    >(this.entityApi, {
      TimeManagementTerminationEndHandlingExclusion_externalCode:
        timeManagementTerminationEndHandlingExclusionExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExcludedEventReason` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExcludedEventReason` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeManagementTerminationEndHandlingExcludedEventReason<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<T>,
      T
    >(this.entityApi);
  }
}

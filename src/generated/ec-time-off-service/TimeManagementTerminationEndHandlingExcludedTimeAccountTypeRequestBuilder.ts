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
import { TimeManagementTerminationEndHandlingExcludedTimeAccountType } from './TimeManagementTerminationEndHandlingExcludedTimeAccountType';

/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType} entity.
 */
export class TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>,
  T
> {
  /**
   * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entity based on its keys.
   * @param timeManagementTerminationEndHandlingExclusionExternalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType.timeManagementTerminationEndHandlingExclusionExternalCode}.
   * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entity based on its keys.
   */
  getByKey(
    timeManagementTerminationEndHandlingExclusionExternalCode: DeserializedType<
      T,
      'Edm.String'
    >,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>,
      T
    >(this.entityApi, {
      TimeManagementTerminationEndHandlingExclusion_externalCode:
        timeManagementTerminationEndHandlingExclusionExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExcludedTimeAccountType` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>,
      T
    >(this.entityApi);
  }
}

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
import { TimeManagementTerminationEndHandlingExclusion } from './TimeManagementTerminationEndHandlingExclusion';

/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingExclusion} entity.
 */
export class TimeManagementTerminationEndHandlingExclusionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeManagementTerminationEndHandlingExclusion<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingExclusion` entity based on its keys.
   * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingExclusion.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingExclusion` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TimeManagementTerminationEndHandlingExclusion<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<T>,
      T
    >(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeManagementTerminationEndHandlingExclusion` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingExclusion` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeManagementTerminationEndHandlingExclusion<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<T>,
      T
    >(this.entityApi);
  }
}

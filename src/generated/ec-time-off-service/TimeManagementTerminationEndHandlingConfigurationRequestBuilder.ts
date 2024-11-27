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
import { TimeManagementTerminationEndHandlingConfiguration } from './TimeManagementTerminationEndHandlingConfiguration';

/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingConfiguration} entity.
 */
export class TimeManagementTerminationEndHandlingConfigurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TimeManagementTerminationEndHandlingConfiguration<T>,
  T
> {
  /**
   * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingConfiguration` entity based on its keys.
   * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingConfiguration.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingConfiguration` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TimeManagementTerminationEndHandlingConfiguration<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<T>,
      T
    >(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TimeManagementTerminationEndHandlingConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeManagementTerminationEndHandlingConfiguration<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<T>,
      T
    >(this.entityApi);
  }
}

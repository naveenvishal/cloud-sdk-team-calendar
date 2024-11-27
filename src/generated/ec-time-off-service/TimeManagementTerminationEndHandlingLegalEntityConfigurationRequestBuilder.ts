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
import { TimeManagementTerminationEndHandlingLegalEntityConfiguration } from './TimeManagementTerminationEndHandlingLegalEntityConfiguration';

/**
 * Request builder class for operations supported on the {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration} entity.
 */
export class TimeManagementTerminationEndHandlingLegalEntityConfigurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>,
  T
> {
  /**
   * Returns a request builder for retrieving one `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entity based on its keys.
   * @param timeManagementTerminationEndHandlingConfigurationExternalCode Key property. See {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration.timeManagementTerminationEndHandlingConfigurationExternalCode}.
   * @param externalCode Key property. See {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entity based on its keys.
   */
  getByKey(
    timeManagementTerminationEndHandlingConfigurationExternalCode: DeserializedType<
      T,
      'Edm.String'
    >,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>,
      T
    >(this.entityApi, {
      TimeManagementTerminationEndHandlingConfiguration_externalCode:
        timeManagementTerminationEndHandlingConfigurationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `TimeManagementTerminationEndHandlingLegalEntityConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<
    TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>,
    T
  > {
    return new GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>,
      T
    >(this.entityApi);
  }
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { TimeManagementTerminationEndHandlingConfigurationApi } from './TimeManagementTerminationEndHandlingConfigurationApi';
import {
  TimeManagementTerminationEndHandlingLegalEntityConfiguration,
  TimeManagementTerminationEndHandlingLegalEntityConfigurationType
} from './TimeManagementTerminationEndHandlingLegalEntityConfiguration';
import {
  TimeManagementTerminationEndHandlingExclusion,
  TimeManagementTerminationEndHandlingExclusionType
} from './TimeManagementTerminationEndHandlingExclusion';

/**
 * This class represents the entity "TimeManagementTerminationEndHandlingConfiguration" of service "ECTimeOff".
 */
export class TimeManagementTerminationEndHandlingConfiguration<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeManagementTerminationEndHandlingConfigurationType<T>
{
  /**
   * Technical entity name for TimeManagementTerminationEndHandlingConfiguration.
   */
  static _entityName = 'TimeManagementTerminationEndHandlingConfiguration';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementTerminationEndHandlingConfiguration entity
   */
  static _keys = ['externalCode'];
  /**
   * Activation Status.
   * Maximum length: 128.
   * @nullable
   */
  activationStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level of Automation of Absence Request Processing.
   * Maximum length: 128.
   * @nullable
   */
  automationLevelOfEmployeeTimeProcessing?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Level of Automation of Time Account Closure.
   * Maximum length: 128.
   * @nullable
   */
  automationLevelOfTimeAccountClosing?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Configuration Excluded from Termination End Handling.
   * Maximum length: 128.
   * @nullable
   */
  excludes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset In Days.
   * @nullable
   */
  offsetInDays?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * One-to-many navigation property to the {@link TimeManagementTerminationEndHandlingLegalEntityConfiguration} entity.
   */
  countryConfiguration!: TimeManagementTerminationEndHandlingLegalEntityConfiguration<T>[];
  /**
   * One-to-one navigation property to the {@link TimeManagementTerminationEndHandlingExclusion} entity.
   */
  excludesNav?: TimeManagementTerminationEndHandlingExclusion<T> | null;

  constructor(
    readonly _entityApi: TimeManagementTerminationEndHandlingConfigurationApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeManagementTerminationEndHandlingConfigurationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  activationStatus?: DeserializedType<T, 'Edm.String'> | null;
  automationLevelOfEmployeeTimeProcessing?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  automationLevelOfTimeAccountClosing?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  excludes?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  offsetInDays?: DeserializedType<T, 'Edm.Int64'> | null;
  countryConfiguration: TimeManagementTerminationEndHandlingLegalEntityConfigurationType<T>[];
  excludesNav?: TimeManagementTerminationEndHandlingExclusionType<T> | null;
}

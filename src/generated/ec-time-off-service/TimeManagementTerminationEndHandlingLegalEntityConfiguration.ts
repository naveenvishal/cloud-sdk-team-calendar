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
import type { TimeManagementTerminationEndHandlingLegalEntityConfigurationApi } from './TimeManagementTerminationEndHandlingLegalEntityConfigurationApi';
import {
  TimeManagementTerminationEndHandlingExclusion,
  TimeManagementTerminationEndHandlingExclusionType
} from './TimeManagementTerminationEndHandlingExclusion';

/**
 * This class represents the entity "TimeManagementTerminationEndHandlingLegalEntityConfiguration" of service "ECTimeOff".
 */
export class TimeManagementTerminationEndHandlingLegalEntityConfiguration<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    TimeManagementTerminationEndHandlingLegalEntityConfigurationType<T>
{
  /**
   * Technical entity name for TimeManagementTerminationEndHandlingLegalEntityConfiguration.
   */
  static _entityName =
    'TimeManagementTerminationEndHandlingLegalEntityConfiguration';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementTerminationEndHandlingLegalEntityConfiguration entity
   */
  static _keys = [
    'TimeManagementTerminationEndHandlingConfiguration_externalCode',
    'externalCode'
  ];
  /**
   * Time Management Termination End Handling Configuration_External Code.
   * Maximum length: 128.
   */
  timeManagementTerminationEndHandlingConfigurationExternalCode!: DeserializedType<
    T,
    'Edm.String'
  >;
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
   * Legal Entity.
   * Maximum length: 128.
   * @nullable
   */
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link TimeManagementTerminationEndHandlingExclusion} entity.
   */
  excludesNav?: TimeManagementTerminationEndHandlingExclusion<T> | null;

  constructor(
    readonly _entityApi: TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeManagementTerminationEndHandlingLegalEntityConfigurationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeManagementTerminationEndHandlingConfigurationExternalCode: DeserializedType<
    T,
    'Edm.String'
  >;
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
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  offsetInDays?: DeserializedType<T, 'Edm.Int64'> | null;
  excludesNav?: TimeManagementTerminationEndHandlingExclusionType<T> | null;
}

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
import type { TimeManagementTerminationEndHandlingExclusionApi } from './TimeManagementTerminationEndHandlingExclusionApi';
import {
  TimeManagementTerminationEndHandlingExcludedEventReason,
  TimeManagementTerminationEndHandlingExcludedEventReasonType
} from './TimeManagementTerminationEndHandlingExcludedEventReason';
import {
  TimeManagementTerminationEndHandlingExcludedTimeAccountType,
  TimeManagementTerminationEndHandlingExcludedTimeAccountTypeType
} from './TimeManagementTerminationEndHandlingExcludedTimeAccountType';

/**
 * This class represents the entity "TimeManagementTerminationEndHandlingExclusion" of service "ECTimeOff".
 */
export class TimeManagementTerminationEndHandlingExclusion<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeManagementTerminationEndHandlingExclusionType<T>
{
  /**
   * Technical entity name for TimeManagementTerminationEndHandlingExclusion.
   */
  static _entityName = 'TimeManagementTerminationEndHandlingExclusion';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementTerminationEndHandlingExclusion entity
   */
  static _keys = ['externalCode'];
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
   * One-to-many navigation property to the {@link TimeManagementTerminationEndHandlingExcludedEventReason} entity.
   */
  excludedEventReasons!: TimeManagementTerminationEndHandlingExcludedEventReason<T>[];
  /**
   * One-to-many navigation property to the {@link TimeManagementTerminationEndHandlingExcludedTimeAccountType} entity.
   */
  excludedTimeAccountTypes!: TimeManagementTerminationEndHandlingExcludedTimeAccountType<T>[];

  constructor(
    readonly _entityApi: TimeManagementTerminationEndHandlingExclusionApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeManagementTerminationEndHandlingExclusionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  excludedEventReasons: TimeManagementTerminationEndHandlingExcludedEventReasonType<T>[];
  excludedTimeAccountTypes: TimeManagementTerminationEndHandlingExcludedTimeAccountTypeType<T>[];
}

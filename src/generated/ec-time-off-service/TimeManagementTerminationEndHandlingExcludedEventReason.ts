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
import type { TimeManagementTerminationEndHandlingExcludedEventReasonApi } from './TimeManagementTerminationEndHandlingExcludedEventReasonApi';

/**
 * This class represents the entity "TimeManagementTerminationEndHandlingExcludedEventReason" of service "ECTimeOff".
 */
export class TimeManagementTerminationEndHandlingExcludedEventReason<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeManagementTerminationEndHandlingExcludedEventReasonType<T>
{
  /**
   * Technical entity name for TimeManagementTerminationEndHandlingExcludedEventReason.
   */
  static _entityName =
    'TimeManagementTerminationEndHandlingExcludedEventReason';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementTerminationEndHandlingExcludedEventReason entity
   */
  static _keys = [
    'TimeManagementTerminationEndHandlingExclusion_externalCode',
    'externalCode'
  ];
  /**
   * Time Management Termination End Handling Exclusion_External Code.
   * Maximum length: 128.
   */
  timeManagementTerminationEndHandlingExclusionExternalCode!: DeserializedType<
    T,
    'Edm.String'
  >;
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
   * Event Reason.
   * Maximum length: 32.
   * @nullable
   */
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(
    readonly _entityApi: TimeManagementTerminationEndHandlingExcludedEventReasonApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeManagementTerminationEndHandlingExcludedEventReasonType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeManagementTerminationEndHandlingExclusionExternalCode: DeserializedType<
    T,
    'Edm.String'
  >;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  eventReason?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
}

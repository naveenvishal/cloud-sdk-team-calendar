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
import type { TimeTypeNldApi } from './TimeTypeNldApi';

/**
 * This class represents the entity "TimeTypeNLD" of service "ECTimeOff".
 */
export class TimeTypeNld<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeNldType<T>
{
  /**
   * Technical entity name for TimeTypeNld.
   */
  static _entityName = 'TimeTypeNLD';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeTypeNld entity
   */
  static _keys = ['TimeType_externalCode', 'externalCode'];
  /**
   * Time Type_External Code.
   * Maximum length: 128.
   */
  timeTypeExternalCode!: DeserializedType<T, 'Edm.String'>;
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
   * externalCode.
   * Maximum length: 38.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Illness Recovery Tracking.
   * Maximum length: 128.
   * @nullable
   */
  illnessRecoveryTracking?: DeserializedType<T, 'Edm.String'> | null;
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

  constructor(readonly _entityApi: TimeTypeNldApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeNldType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  illnessRecoveryTracking?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { TimeManagementAlertApi } from './TimeManagementAlertApi';
import {
  TimeManagementAlertMessage,
  TimeManagementAlertMessageType
} from './TimeManagementAlertMessage';

/**
 * This class represents the entity "TimeManagementAlert" of service "ECTimeOff".
 */
export class TimeManagementAlert<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeManagementAlertType<T>
{
  /**
   * Technical entity name for TimeManagementAlert.
   */
  static _entityName = 'TimeManagementAlert';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementAlert entity
   */
  static _keys = ['externalCode'];
  /**
   * adminAlertStatus.
   * Maximum length: 128.
   * @nullable
   */
  adminAlertStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * assigneeUserId.
   * Maximum length: 100.
   * @nullable
   */
  assigneeUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * Maximum length: 255.
   * @nullable
   */
  category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message.
   * Maximum length: 255.
   * @nullable
   */
  concatenatedMessage?: DeserializedType<T, 'Edm.String'> | null;
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
   * Date.
   * @nullable
   */
  date?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * encodedUserId.
   * Maximum length: 255.
   * @nullable
   */
  encodedUserId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Severity.
   * Maximum length: 255.
   * @nullable
   */
  severity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Severity.
   * Maximum length: 255.
   * @nullable
   */
  severityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person ID.
   * Maximum length: 100.
   * @nullable
   */
  targetId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target Type.
   * Maximum length: 255.
   * @nullable
   */
  targetType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TimeManagementAlertMessage} entity.
   */
  timeManagementAlertMessage!: TimeManagementAlertMessage<T>[];

  constructor(readonly _entityApi: TimeManagementAlertApi<T>) {
    super(_entityApi);
  }
}

export interface TimeManagementAlertType<
  T extends DeSerializers = DefaultDeSerializers
> {
  adminAlertStatus?: DeserializedType<T, 'Edm.String'> | null;
  assigneeUserId?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  concatenatedMessage?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  date?: DeserializedType<T, 'Edm.DateTime'> | null;
  encodedUserId?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  severity?: DeserializedType<T, 'Edm.String'> | null;
  severityName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  targetId?: DeserializedType<T, 'Edm.String'> | null;
  targetType?: DeserializedType<T, 'Edm.String'> | null;
  timeManagementAlertMessage: TimeManagementAlertMessageType<T>[];
}

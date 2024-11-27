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
import type { TimeManagementAlertMessageApi } from './TimeManagementAlertMessageApi';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { TimeAccount, TimeAccountType } from './TimeAccount';

/**
 * This class represents the entity "TimeManagementAlertMessage" of service "ECTimeOff".
 */
export class TimeManagementAlertMessage<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeManagementAlertMessageType<T>
{
  /**
   * Technical entity name for TimeManagementAlertMessage.
   */
  static _entityName = 'TimeManagementAlertMessage';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementAlertMessage entity
   */
  static _keys = ['TimeManagementAlert_externalCode', 'externalCode'];
  /**
   * Time Management Alert_External Code.
   * Maximum length: 128.
   */
  timeManagementAlertExternalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Default Message Text.
   * Maximum length: 255.
   * @nullable
   */
  defaultMessageText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Time.
   * Maximum length: 128.
   * @nullable
   */
  employeeTime?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Time Sheet.
   * Maximum length: 128.
   * @nullable
   */
  employeeTimeSheet?: DeserializedType<T, 'Edm.String'> | null;
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
   * Message Key.
   * Maximum length: 255.
   * @nullable
   */
  messageKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Parameter 1.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Parameter 2.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Parameter 3.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Parameter 4.
   * Maximum length: 255.
   * @nullable
   */
  messageParameter4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account.
   * Maximum length: 128.
   * @nullable
   */
  timeAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account Type Accrual Transfer.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeAccrualTransfer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTime} entity.
   */
  employeeTimeNav?: EmployeeTime<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccount} entity.
   */
  timeAccountNav?: TimeAccount<T> | null;

  constructor(readonly _entityApi: TimeManagementAlertMessageApi<T>) {
    super(_entityApi);
  }
}

export interface TimeManagementAlertMessageType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeManagementAlertExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  date?: DeserializedType<T, 'Edm.DateTime'> | null;
  defaultMessageText?: DeserializedType<T, 'Edm.String'> | null;
  employeeTime?: DeserializedType<T, 'Edm.String'> | null;
  employeeTimeSheet?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  messageKey?: DeserializedType<T, 'Edm.String'> | null;
  messageParameter1?: DeserializedType<T, 'Edm.String'> | null;
  messageParameter2?: DeserializedType<T, 'Edm.String'> | null;
  messageParameter3?: DeserializedType<T, 'Edm.String'> | null;
  messageParameter4?: DeserializedType<T, 'Edm.String'> | null;
  timeAccount?: DeserializedType<T, 'Edm.String'> | null;
  timeAccountTypeAccrualTransfer?: DeserializedType<T, 'Edm.String'> | null;
  employeeTimeNav?: EmployeeTimeType<T> | null;
  timeAccountNav?: TimeAccountType<T> | null;
}

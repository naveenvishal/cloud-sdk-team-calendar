/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';

/**
 * This class represents the entity "EmployeeTimeMEX" of service "ECTimeOff".
 */
export class EmployeeTimeMex<T extends DeSerializers = DefaultDeSerializers> extends Entity implements EmployeeTimeMexType<T> {
  /**
   * Technical entity name for EmployeeTimeMex.
   */
  static _entityName = 'EmployeeTimeMEX';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimeMex entity
   */
  static _keys = ['EmployeeTime_externalCode', 'externalCode'];
  /**
   * Employee Time_External Code.
   * Maximum length: 128.
   */
  employeeTimeExternalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Days Already Cumulated For Same Sickness.
   * @nullable
   */
  daysAlreadyCumulatedForSameSickness?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * externalCode.
   */
  externalCode!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Identical Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Number.
   * Maximum length: 8.
   * @nullable
   */
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  identicalSicknessGroupNav?: EmployeeTimeGroup<T> | null;
}

export interface EmployeeTimeMexType<T extends DeSerializers = DefaultDeSerializers> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  daysAlreadyCumulatedForSameSickness?: DeserializedType<T, 'Edm.Decimal'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  identicalSicknessGroupNav?: EmployeeTimeGroupType<T> | null;
}

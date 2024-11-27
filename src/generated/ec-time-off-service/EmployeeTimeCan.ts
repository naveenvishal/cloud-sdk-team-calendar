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
import type { EmployeeTimeCanApi } from './EmployeeTimeCanApi';

/**
 * This class represents the entity "EmployeeTimeCAN" of service "ECTimeOff".
 */
export class EmployeeTimeCan<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeTimeCanType<T>
{
  /**
   * Technical entity name for EmployeeTimeCan.
   */
  static _entityName = 'EmployeeTimeCAN';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimeCan entity
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
   * Disability Period One End Date.
   * @nullable
   */
  disabilityPeriodOneEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Disability Period Three End Date.
   * @nullable
   */
  disabilityPeriodThreeEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Disability Period Two End Date.
   * @nullable
   */
  disabilityPeriodTwoEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalCode.
   */
  externalCode!: DeserializedType<T, 'Edm.Int64'>;
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
   * Policy Deviation.
   * Maximum length: 128.
   * @nullable
   */
  policyDeviation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference for Disability Period One End Date.
   * @nullable
   */
  refDisabilityPeriodOneEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reference for Disability Period Three End Date.
   * @nullable
   */
  refDisabilityPeriodThreeEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reference for Disability Period Two End Date.
   * @nullable
   */
  refDisabilityPeriodTwoEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(readonly _entityApi: EmployeeTimeCanApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeTimeCanType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  disabilityPeriodOneEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  disabilityPeriodThreeEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  disabilityPeriodTwoEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  policyDeviation?: DeserializedType<T, 'Edm.String'> | null;
  refDisabilityPeriodOneEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  refDisabilityPeriodThreeEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  refDisabilityPeriodTwoEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}

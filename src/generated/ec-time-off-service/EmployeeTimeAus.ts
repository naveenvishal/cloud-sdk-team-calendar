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
import type { EmployeeTimeAusApi } from './EmployeeTimeAusApi';

/**
 * This class represents the entity "EmployeeTimeAUS" of service "ECTimeOff".
 */
export class EmployeeTimeAus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeTimeAusType<T>
{
  /**
   * Technical entity name for EmployeeTimeAus.
   */
  static _entityName = 'EmployeeTimeAUS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimeAus entity
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
   * WorkflowField1.
   * Maximum length: 255.
   * @nullable
   */
  custWorkflowField1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * WorkflowField2.
   * Maximum length: 255.
   * @nullable
   */
  custWorkflowField2?: DeserializedType<T, 'Edm.String'> | null;
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
   * Request Advance Pay.
   * @nullable
   */
  requestAdvanceLeavePayment?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Split Pay Across Financial Year.
   * @nullable
   */
  splitPaymentAcrossFinancialYear?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(readonly _entityApi: EmployeeTimeAusApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeTimeAusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custWorkflowField1?: DeserializedType<T, 'Edm.String'> | null;
  custWorkflowField2?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  requestAdvanceLeavePayment?: DeserializedType<T, 'Edm.Boolean'> | null;
  splitPaymentAcrossFinancialYear?: DeserializedType<T, 'Edm.Boolean'> | null;
}

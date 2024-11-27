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
import type { TimeAccountTypeAusApi } from './TimeAccountTypeAusApi';

/**
 * This class represents the entity "TimeAccountTypeAUS" of service "ECTimeOff".
 */
export class TimeAccountTypeAus<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeAccountTypeAusType<T>
{
  /**
   * Technical entity name for TimeAccountTypeAus.
   */
  static _entityName = 'TimeAccountTypeAUS';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountTypeAus entity
   */
  static _keys = ['TimeAccountType_externalCode', 'externalCode'];
  /**
   * Time Account Type_External Code.
   * Maximum length: 128.
   */
  timeAccountTypeExternalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Include In Leave Loading Calculations.
   * @nullable
   */
  includeInLeaveLoadingCalculations?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Prior Service Account Distinction.
   * Maximum length: 128.
   * @nullable
   */
  priorServiceAccountDistinction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prior Service Use Case.
   * Maximum length: 128.
   * @nullable
   */
  priorServiceUseCase?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: TimeAccountTypeAusApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAccountTypeAusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeAccountTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  includeInLeaveLoadingCalculations?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  priorServiceAccountDistinction?: DeserializedType<T, 'Edm.String'> | null;
  priorServiceUseCase?: DeserializedType<T, 'Edm.String'> | null;
}

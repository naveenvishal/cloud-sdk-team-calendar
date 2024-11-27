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
import type { TimeTypeDeuApi } from './TimeTypeDeuApi';

/**
 * This class represents the entity "TimeTypeDEU" of service "ECTimeOff".
 */
export class TimeTypeDeu<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeDeuType<T>
{
  /**
   * Technical entity name for TimeTypeDeu.
   */
  static _entityName = 'TimeTypeDEU';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeTypeDeu entity
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
   * eAU Exclusion Reason Allowed.
   * @nullable
   */
  electronicSicknessCertificateExclusionReasonAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
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
   * Without Sick Pay Dates.
   * @nullable
   */
  withoutSickPayDates?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(readonly _entityApi: TimeTypeDeuApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeDeuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  electronicSicknessCertificateExclusionReasonAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  withoutSickPayDates?: DeserializedType<T, 'Edm.Boolean'> | null;
}

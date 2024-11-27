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
import type { TimeTypeUsaApi } from './TimeTypeUsaApi';

/**
 * This class represents the entity "TimeTypeUSA" of service "ECTimeOff".
 */
export class TimeTypeUsa<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeUsaType<T>
{
  /**
   * Technical entity name for TimeTypeUsa.
   */
  static _entityName = 'TimeTypeUSA';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeTypeUsa entity
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
   * Duration of Disability Period One (in days).
   * @nullable
   */
  durationOfDisabilityPeriodOne?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Duration of Disability Period Three (in days).
   * @nullable
   */
  durationOfDisabilityPeriodThree?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Duration of Disability Period Two (in days).
   * @nullable
   */
  durationOfDisabilityPeriodTwo?: DeserializedType<T, 'Edm.Int64'> | null;
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
   * Sickness Variant.
   * Maximum length: 128.
   * @nullable
   */
  sicknessVariant?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: TimeTypeUsaApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeUsaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  durationOfDisabilityPeriodOne?: DeserializedType<T, 'Edm.Int64'> | null;
  durationOfDisabilityPeriodThree?: DeserializedType<T, 'Edm.Int64'> | null;
  durationOfDisabilityPeriodTwo?: DeserializedType<T, 'Edm.Int64'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  sicknessVariant?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { RecalculationBasedFieldApi } from './RecalculationBasedFieldApi';

/**
 * This class represents the entity "RecalculationBasedField" of service "ECTimeOff".
 */
export class RecalculationBasedField<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RecalculationBasedFieldType<T>
{
  /**
   * Technical entity name for RecalculationBasedField.
   */
  static _entityName = 'RecalculationBasedField';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the RecalculationBasedField entity
   */
  static _keys = ['TimeAccountType_externalCode', 'recalcField'];
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
   * testRecalculationBasedField.
   * @nullable
   */
  custTestRecalculationBasedField?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
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
   * Recalculation Field.
   * Maximum length: 128.
   */
  recalcField!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: RecalculationBasedFieldApi<T>) {
    super(_entityApi);
  }
}

export interface RecalculationBasedFieldType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeAccountTypeExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custTestRecalculationBasedField?: DeserializedType<T, 'Edm.DateTime'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  recalcField: DeserializedType<T, 'Edm.String'>;
}

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
import type { AccrualCalculationBaseApi } from './AccrualCalculationBaseApi';

/**
 * This class represents the entity "AccrualCalculationBase" of service "ECTimeOff".
 */
export class AccrualCalculationBase<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccrualCalculationBaseType<T>
{
  /**
   * Technical entity name for AccrualCalculationBase.
   */
  static _entityName = 'AccrualCalculationBase';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the AccrualCalculationBase entity
   */
  static _keys = ['externalCode'];
  /**
   * Actual Quantity.
   * @nullable
   */
  actualQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
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
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity ID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Type.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record ID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Sequence Number.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Version ID.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Quantity 1.
   * @nullable
   */
  quantity1?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity 2.
   * @nullable
   */
  quantity2?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity 3.
   * @nullable
   */
  quantity3?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity 4.
   * @nullable
   */
  quantity4?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Quantity 5.
   * @nullable
   */
  quantity5?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: AccrualCalculationBaseApi<T>) {
    super(_entityApi);
  }
}

export interface AccrualCalculationBaseType<
  T extends DeSerializers = DefaultDeSerializers
> {
  actualQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  date?: DeserializedType<T, 'Edm.DateTime'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  quantity1?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantity2?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantity3?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantity4?: DeserializedType<T, 'Edm.Decimal'> | null;
  quantity5?: DeserializedType<T, 'Edm.Decimal'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
}

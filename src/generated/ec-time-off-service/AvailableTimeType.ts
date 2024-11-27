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
import type { AvailableTimeTypeApi } from './AvailableTimeTypeApi';
import { TimeType, TimeTypeType } from './TimeType';

/**
 * This class represents the entity "AvailableTimeType" of service "ECTimeOff".
 */
export class AvailableTimeType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AvailableTimeTypeType<T>
{
  /**
   * Technical entity name for AvailableTimeType.
   */
  static _entityName = 'AvailableTimeType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the AvailableTimeType entity
   */
  static _keys = [
    'TimeTypeProfile_externalCode',
    'TimeTypeProfile_mdfSystemEffectiveStartDate',
    'externalCode'
  ];
  /**
   * Time Profile_External Code.
   * Maximum length: 128.
   */
  timeTypeProfileExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Profile_Effective Start Date.
   */
  timeTypeProfileMdfSystemEffectiveStartDate!: DeserializedType<
    T,
    'Edm.DateTime'
  >;
  /**
   * Is Copyable in Time Sheet UI.
   * @nullable
   */
  copyableInTimesheet?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Enabled in employee self-service scenario.
   * @nullable
   */
  enabledInEssScenario?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Favorite Time Type.
   * @nullable
   */
  favoriteTimeType?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Hide Account Balance.
   * @nullable
   */
  hideAccountBalance?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
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
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Type Filter Rule.
   * Maximum length: 128.
   * @nullable
   */
  timeTypeFilterRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  timeTypeNav?: TimeType<T> | null;

  constructor(readonly _entityApi: AvailableTimeTypeApi<T>) {
    super(_entityApi);
  }
}

export interface AvailableTimeTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeTypeProfileExternalCode: DeserializedType<T, 'Edm.String'>;
  timeTypeProfileMdfSystemEffectiveStartDate: DeserializedType<
    T,
    'Edm.DateTime'
  >;
  copyableInTimesheet?: DeserializedType<T, 'Edm.Boolean'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  enabledInEssScenario?: DeserializedType<T, 'Edm.Boolean'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  favoriteTimeType?: DeserializedType<T, 'Edm.Boolean'> | null;
  hideAccountBalance?: DeserializedType<T, 'Edm.Boolean'> | null;
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
  timeType?: DeserializedType<T, 'Edm.String'> | null;
  timeTypeFilterRule?: DeserializedType<T, 'Edm.String'> | null;
  timeTypeNav?: TimeTypeType<T> | null;
}

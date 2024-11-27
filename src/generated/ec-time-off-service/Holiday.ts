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
import type { HolidayApi } from './HolidayApi';

/**
 * This class represents the entity "Holiday" of service "ECTimeOff".
 */
export class Holiday<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HolidayType<T>
{
  /**
   * Technical entity name for Holiday.
   */
  static _entityName = 'Holiday';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the Holiday entity
   */
  static _keys = ['holidayCode'];
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
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
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holiday Code.
   * Maximum length: 128.
   */
  holidayCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * lastModifiedBy.
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
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * oldName.
   * Maximum length: 255.
   * @nullable
   */
  oldName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: HolidayApi<T>) {
    super(_entityApi);
  }
}

export interface HolidayType<T extends DeSerializers = DefaultDeSerializers> {
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  holidayCode: DeserializedType<T, 'Edm.String'>;
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
  nameArSa?: DeserializedType<T, 'Edm.String'> | null;
  nameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  nameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  nameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  nameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  nameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  nameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  nameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  nameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  nameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  nameThTh?: DeserializedType<T, 'Edm.String'> | null;
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  oldName?: DeserializedType<T, 'Edm.String'> | null;
}

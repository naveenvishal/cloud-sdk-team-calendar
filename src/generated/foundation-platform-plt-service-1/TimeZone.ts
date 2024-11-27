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
import type { TimeZoneApi } from './TimeZoneApi';
import { Country, CountryType } from './Country';

/**
 * This class represents the entity "TimeZone" of service "FoundationPlatformPLT".
 */
export class TimeZone<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeZoneType<T>
{
  /**
   * Technical entity name for TimeZone.
   */
  static _entityName = 'TimeZone';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the TimeZone entity
   */
  static _keys = ['effectiveStartDate', 'externalCode'];
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemCreatedBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemCreatedDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Effective as of.
   */
  effectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * mdfSystemLastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * mdfSystemCreatedBy.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemCreatedDate.
   * @nullable
   */
  mdfSystemCreatedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemLastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  mdfSystemLastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  mdfSystemLastModifiedDateWithTz?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone is supported.
   * @nullable
   */
  supported?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * DST offset to UTC.
   * Maximum length: 255.
   * @nullable
   */
  utcDstOffset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset to UTC.
   * Maximum length: 255.
   * @nullable
   */
  utcOffset?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Country} entity.
   */
  countryNav?: Country<T> | null;

  constructor(readonly _entityApi: TimeZoneApi<T>) {
    super(_entityApi);
  }
}

export interface TimeZoneType<T extends DeSerializers = DefaultDeSerializers> {
  comment?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemCreatedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemLastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemLastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemLastModifiedDateWithTz?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  nameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  nameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  nameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  nameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  nameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  nameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  nameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  nameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  nameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  nameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  namePtBr?: DeserializedType<T, 'Edm.String'> | null;
  namePtPt?: DeserializedType<T, 'Edm.String'> | null;
  nameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  nameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  nameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  supported?: DeserializedType<T, 'Edm.Boolean'> | null;
  utcDstOffset?: DeserializedType<T, 'Edm.String'> | null;
  utcOffset?: DeserializedType<T, 'Edm.String'> | null;
  countryNav?: CountryType<T> | null;
}

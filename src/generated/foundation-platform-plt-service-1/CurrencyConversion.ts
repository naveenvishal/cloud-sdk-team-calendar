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
import type { CurrencyConversionApi } from './CurrencyConversionApi';
import { Currency, CurrencyType } from './Currency';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

/**
 * This class represents the entity "CurrencyConversion" of service "FoundationPlatformPLT".
 */
export class CurrencyConversion<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyConversionType<T>
{
  /**
   * Technical entity name for CurrencyConversion.
   */
  static _entityName = 'CurrencyConversion';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the CurrencyConversion entity
   */
  static _keys = ['code', 'effectiveStartDate'];
  /**
   * baseCurrency.
   * Maximum length: 128.
   * @nullable
   */
  baseCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * code.
   * Maximum length: 128.
   */
  code!: DeserializedType<T, 'Edm.String'>;
  /**
   * conversionRate.
   * @nullable
   */
  conversionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
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
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * effectiveStartDate.
   */
  effectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * effectiveStatus.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * exchangeRateType.
   * Maximum length: 128.
   * @nullable
   */
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalName.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
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
   * toCurrency.
   * Maximum length: 128.
   * @nullable
   */
  toCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Currency} entity.
   */
  baseCurrencyNav?: Currency<T> | null;
  /**
   * One-to-one navigation property to the {@link PickListValueV2} entity.
   */
  exchangeRateTypeNav?: PickListValueV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Currency} entity.
   */
  toCurrencyNav?: Currency<T> | null;

  constructor(readonly _entityApi: CurrencyConversionApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyConversionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  baseCurrency?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  conversionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhTw?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemCreatedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
  toCurrency?: DeserializedType<T, 'Edm.String'> | null;
  baseCurrencyNav?: CurrencyType<T> | null;
  exchangeRateTypeNav?: PickListValueV2Type<T> | null;
  toCurrencyNav?: CurrencyType<T> | null;
}

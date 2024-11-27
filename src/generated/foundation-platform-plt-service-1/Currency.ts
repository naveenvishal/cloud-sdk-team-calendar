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
import type { CurrencyApi } from './CurrencyApi';

/**
 * This class represents the entity "Currency" of service "FoundationPlatformPLT".
 */
export class Currency<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyType<T>
{
  /**
   * Technical entity name for Currency.
   */
  static _entityName = 'Currency';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Currency entity
   */
  static _keys = ['code', 'effectiveStartDate'];
  /**
   * Currency Code.
   * Maximum length: 128.
   */
  code!: DeserializedType<T, 'Edm.String'>;
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
   * Default Decimals.
   * @nullable
   */
  defaultDecimals?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionPtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionZhTw?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective as of.
   */
  effectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
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
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Symbol.
   * Maximum length: 255.
   * @nullable
   */
  symbol?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CurrencyApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyType<T extends DeSerializers = DefaultDeSerializers> {
  code: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  defaultDecimals?: DeserializedType<T, 'Edm.Int64'> | null;
  descriptionDeDe?: DeserializedType<T, 'Edm.String'> | null;
  descriptionDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnGb?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnUs?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEsEs?: DeserializedType<T, 'Edm.String'> | null;
  descriptionFrFr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionJaJp?: DeserializedType<T, 'Edm.String'> | null;
  descriptionKoKr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionLocalized?: DeserializedType<T, 'Edm.String'> | null;
  descriptionNlNl?: DeserializedType<T, 'Edm.String'> | null;
  descriptionPtBr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionPtPt?: DeserializedType<T, 'Edm.String'> | null;
  descriptionRuRu?: DeserializedType<T, 'Edm.String'> | null;
  descriptionZhCn?: DeserializedType<T, 'Edm.String'> | null;
  descriptionZhTw?: DeserializedType<T, 'Edm.String'> | null;
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
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
  status?: DeserializedType<T, 'Edm.String'> | null;
  symbol?: DeserializedType<T, 'Edm.String'> | null;
}

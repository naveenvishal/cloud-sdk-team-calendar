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
import type { VendorInfoApi } from './VendorInfoApi';

/**
 * This class represents the entity "VendorInfo" of service "FoundationPlatformPLT".
 */
export class VendorInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorInfoType<T>
{
  /**
   * Technical entity name for VendorInfo.
   */
  static _entityName = 'VendorInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the VendorInfo entity
   */
  static _keys = ['effectiveStartDate', 'vendorCode'];
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
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionPtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionZhTw?: DeserializedType<T, 'Edm.String'> | null;
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
   * vendorCode.
   * Maximum length: 128.
   */
  vendorCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * vendorName.
   * Maximum length: 128.
   * @nullable
   */
  vendorName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: VendorInfoApi<T>) {
    super(_entityApi);
  }
}

export interface VendorInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
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
  vendorCode: DeserializedType<T, 'Edm.String'>;
  vendorName?: DeserializedType<T, 'Edm.String'> | null;
}

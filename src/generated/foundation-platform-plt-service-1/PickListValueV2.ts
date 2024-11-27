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
import type { PickListValueV2Api } from './PickListValueV2Api';

/**
 * This class represents the entity "PickListValueV2" of service "FoundationPlatformPLT".
 */
export class PickListValueV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PickListValueV2Type<T>
{
  /**
   * Technical entity name for PickListValueV2.
   */
  static _entityName = 'PickListValueV2';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the PickListValueV2 entity
   */
  static _keys = [
    'PickListV2_effectiveStartDate',
    'PickListV2_id',
    'externalCode'
  ];
  /**
   * Picklist_Effective Start Date.
   */
  pickListV2EffectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Picklist_Code.
   * Maximum length: 128.
   */
  pickListV2Id!: DeserializedType<T, 'Edm.String'>;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * lValue.
   * @nullable
   */
  lValue?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelPtPt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelRuRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Label.
   * Maximum length: 255.
   * @nullable
   */
  labelZhTw?: DeserializedType<T, 'Edm.String'> | null;
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
   * Status(legacy).
   * @nullable
   */
  legacyStatus?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Max value.
   * @nullable
   */
  maxVal?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEntityId.
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
   * mdfSystemRecordId.
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
   * Min value.
   * @nullable
   */
  minVal?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Non-unique External Code.
   * Maximum length: 255.
   * @nullable
   */
  nonUniqueExternalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value.
   * @nullable
   */
  optValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * optionId.
   * @nullable
   */
  optionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Parent Picklist Value.
   * Maximum length: 128.
   * @nullable
   */
  parentPickListValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * rValue.
   * @nullable
   */
  rValue?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PickListValueV2} entity.
   */
  parentPickListValueNav!: PickListValueV2<T>[];

  constructor(readonly _entityApi: PickListValueV2Api<T>) {
    super(_entityApi);
  }
}

export interface PickListValueV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  pickListV2EffectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  pickListV2Id: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lValue?: DeserializedType<T, 'Edm.Int64'> | null;
  labelDeDe?: DeserializedType<T, 'Edm.String'> | null;
  labelDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  labelEnGb?: DeserializedType<T, 'Edm.String'> | null;
  labelEnUs?: DeserializedType<T, 'Edm.String'> | null;
  labelEsEs?: DeserializedType<T, 'Edm.String'> | null;
  labelFrFr?: DeserializedType<T, 'Edm.String'> | null;
  labelJaJp?: DeserializedType<T, 'Edm.String'> | null;
  labelKoKr?: DeserializedType<T, 'Edm.String'> | null;
  labelLocalized?: DeserializedType<T, 'Edm.String'> | null;
  labelNlNl?: DeserializedType<T, 'Edm.String'> | null;
  labelPtBr?: DeserializedType<T, 'Edm.String'> | null;
  labelPtPt?: DeserializedType<T, 'Edm.String'> | null;
  labelRuRu?: DeserializedType<T, 'Edm.String'> | null;
  labelZhCn?: DeserializedType<T, 'Edm.String'> | null;
  labelZhTw?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  legacyStatus?: DeserializedType<T, 'Edm.Int64'> | null;
  maxVal?: DeserializedType<T, 'Edm.Decimal'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  minVal?: DeserializedType<T, 'Edm.Decimal'> | null;
  nonUniqueExternalCode?: DeserializedType<T, 'Edm.String'> | null;
  optValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  optionId?: DeserializedType<T, 'Edm.Int64'> | null;
  parentPickListValue?: DeserializedType<T, 'Edm.String'> | null;
  rValue?: DeserializedType<T, 'Edm.Int64'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  parentPickListValueNav: PickListValueV2Type<T>[];
}

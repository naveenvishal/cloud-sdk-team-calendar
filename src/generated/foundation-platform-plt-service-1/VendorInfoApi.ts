/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInfo } from './VendorInfo';
import { VendorInfoRequestBuilder } from './VendorInfoRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class VendorInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VendorInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VendorInfo;

  requestBuilder(): VendorInfoRequestBuilder<DeSerializersT> {
    return new VendorInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VendorInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VendorInfo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VendorInfo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VendorInfo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VendorInfo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DESCRIPTION_DE_DE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_DEFAULT_VALUE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_GB: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_US: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ES_ES: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_FR_FR: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_JA_JP: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_KO_KR: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_LOCALIZED: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_NL_NL: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_PT_BR: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_PT_PT: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_RU_RU: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ZH_CN: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ZH_TW: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_START_DATE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    EFFECTIVE_STATUS: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_BY: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_DATE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_BY: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    VENDOR_CODE: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      VendorInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VendorInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link descriptionDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_DE_DE: fieldBuilder.buildEdmTypeField(
          'description_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'description_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_GB: fieldBuilder.buildEdmTypeField(
          'description_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_US: fieldBuilder.buildEdmTypeField(
          'description_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_ES_ES: fieldBuilder.buildEdmTypeField(
          'description_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_FR_FR: fieldBuilder.buildEdmTypeField(
          'description_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_JA_JP: fieldBuilder.buildEdmTypeField(
          'description_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_KO_KR: fieldBuilder.buildEdmTypeField(
          'description_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'description_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_NL_NL: fieldBuilder.buildEdmTypeField(
          'description_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionPtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_PT_BR: fieldBuilder.buildEdmTypeField(
          'description_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionPtPt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_PT_PT: fieldBuilder.buildEdmTypeField(
          'description_pt_PT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionRuRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_RU_RU: fieldBuilder.buildEdmTypeField(
          'description_ru_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_ZH_CN: fieldBuilder.buildEdmTypeField(
          'description_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionZhTw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_ZH_TW: fieldBuilder.buildEdmTypeField(
          'description_zh_TW',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveStartDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link effectiveStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_STATUS: fieldBuilder.buildEdmTypeField(
          'effectiveStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'mdfSystemCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemCreatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_CREATED_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemCreatedDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemEffectiveEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemLastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'mdfSystemLastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemLastModifiedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemLastModifiedDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemLastModifiedDateWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'mdfSystemLastModifiedDateWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemObjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'mdfSystemObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemTransactionSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_TRANSACTION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'mdfSystemTransactionSequence',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemVersionId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link vendorCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_CODE: fieldBuilder.buildEdmTypeField(
          'vendorCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'vendorName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VendorInfo)
      };
    }

    return this._schema;
  }
}

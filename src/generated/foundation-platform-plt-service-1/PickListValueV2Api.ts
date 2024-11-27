/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickListValueV2 } from './PickListValueV2';
import { PickListValueV2RequestBuilder } from './PickListValueV2RequestBuilder';
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
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class PickListValueV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PickListValueV2<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link parentPickListValueNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PICK_LIST_VALUE_NAV: Link<
      PickListValueV2<DeSerializersT>,
      DeSerializersT,
      PickListValueV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PickListValueV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PARENT_PICK_LIST_VALUE_NAV: new Link(
        'parentPickListValueNav',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PickListValueV2;

  requestBuilder(): PickListValueV2RequestBuilder<DeSerializersT> {
    return new PickListValueV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PickListValueV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PickListValueV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PickListValueV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PickListValueV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PICK_LIST_V_2_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    PICK_LIST_V_2_ID: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    L_VALUE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LABEL_DE_DE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_DEFAULT_VALUE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_EN_GB: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_EN_US: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_ES_ES: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_FR_FR: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_JA_JP: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_KO_KR: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_LOCALIZED: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_NL_NL: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_PT_BR: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_PT_PT: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_RU_RU: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_ZH_CN: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_ZH_TW: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LEGACY_STATUS: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MAX_VAL: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MIN_VAL: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NON_UNIQUE_EXTERNAL_CODE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPT_VALUE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    OPTION_ID: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PARENT_PICK_LIST_VALUE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    R_VALUE: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      PickListValueV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link parentPickListValueNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PICK_LIST_VALUE_NAV: Link<
      PickListValueV2<DeSerializersT>,
      DeSerializersT,
      PickListValueV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PickListValueV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link pickListV2EffectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_LIST_V_2_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'PickListV2_effectiveStartDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link pickListV2Id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICK_LIST_V_2_ID: fieldBuilder.buildEdmTypeField(
          'PickListV2_id',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link createdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE: fieldBuilder.buildEdmTypeField(
          'createdDate',
          'Edm.DateTime',
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
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        L_VALUE: fieldBuilder.buildEdmTypeField('lValue', 'Edm.Int64', true),
        /**
         * Static representation of the {@link labelDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_DE_DE: fieldBuilder.buildEdmTypeField(
          'label_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'label_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_EN_GB: fieldBuilder.buildEdmTypeField(
          'label_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_EN_US: fieldBuilder.buildEdmTypeField(
          'label_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_ES_ES: fieldBuilder.buildEdmTypeField(
          'label_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_FR_FR: fieldBuilder.buildEdmTypeField(
          'label_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_JA_JP: fieldBuilder.buildEdmTypeField(
          'label_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_KO_KR: fieldBuilder.buildEdmTypeField(
          'label_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'label_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_NL_NL: fieldBuilder.buildEdmTypeField(
          'label_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelPtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_PT_BR: fieldBuilder.buildEdmTypeField(
          'label_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelPtPt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_PT_PT: fieldBuilder.buildEdmTypeField(
          'label_pt_PT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelRuRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_RU_RU: fieldBuilder.buildEdmTypeField(
          'label_ru_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_ZH_CN: fieldBuilder.buildEdmTypeField(
          'label_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelZhTw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_ZH_TW: fieldBuilder.buildEdmTypeField(
          'label_zh_TW',
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
         * Static representation of the {@link lastModifiedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField(
          'lastModifiedDate',
          'Edm.DateTime',
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
         * Static representation of the {@link lastModifiedDateWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link legacyStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGACY_STATUS: fieldBuilder.buildEdmTypeField(
          'legacyStatus',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link maxVal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_VAL: fieldBuilder.buildEdmTypeField('maxVal', 'Edm.Decimal', true),
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
         * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemEffectiveStartDate',
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
         * Static representation of the {@link minVal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_VAL: fieldBuilder.buildEdmTypeField('minVal', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link nonUniqueExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_UNIQUE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'nonUniqueExternalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link optValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPT_VALUE: fieldBuilder.buildEdmTypeField(
          'optValue',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link optionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTION_ID: fieldBuilder.buildEdmTypeField(
          'optionId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link parentPickListValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PICK_LIST_VALUE: fieldBuilder.buildEdmTypeField(
          'parentPickListValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        R_VALUE: fieldBuilder.buildEdmTypeField('rValue', 'Edm.Int64', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PickListValueV2)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelVariantIdentifier } from './WorkScheduleDayModelVariantIdentifier';
import { WorkScheduleDayModelVariantIdentifierRequestBuilder } from './WorkScheduleDayModelVariantIdentifierRequestBuilder';
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
export class WorkScheduleDayModelVariantIdentifierApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
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

  entityConstructor = WorkScheduleDayModelVariantIdentifier;

  requestBuilder(): WorkScheduleDayModelVariantIdentifierRequestBuilder<DeSerializersT> {
    return new WorkScheduleDayModelVariantIdentifierRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof WorkScheduleDayModelVariantIdentifier,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkScheduleDayModelVariantIdentifier,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      WorkScheduleDayModelVariantIdentifier<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<WorkScheduleDayModelVariantIdentifier<DeSerializers>>;
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_UUID: fieldBuilder.buildEdmTypeField(
          'entityUUID',
          'Edm.String',
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
         * Static representation of the {@link externalNameArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_AR_SA: fieldBuilder.buildEdmTypeField(
          'externalName_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_CY_GB: fieldBuilder.buildEdmTypeField(
          'externalName_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField(
          'externalName_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'externalName_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField(
          'externalName_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField(
          'externalName_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField(
          'externalName_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_MX: fieldBuilder.buildEdmTypeField(
          'externalName_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_CA: fieldBuilder.buildEdmTypeField(
          'externalName_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField(
          'externalName_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_HI_IN: fieldBuilder.buildEdmTypeField(
          'externalName_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_IW_IL: fieldBuilder.buildEdmTypeField(
          'externalName_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField(
          'externalName_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField(
          'externalName_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'externalName_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField(
          'externalName_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNamePtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField(
          'externalName_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_TH_TH: fieldBuilder.buildEdmTypeField(
          'externalName_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField(
          'externalName_zh_CN',
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
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkScheduleDayModelVariantIdentifier)
      };
    }

    return this._schema;
  }
}

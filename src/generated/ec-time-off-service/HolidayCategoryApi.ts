/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HolidayCategory } from './HolidayCategory';
import { HolidayCategoryRequestBuilder } from './HolidayCategoryRequestBuilder';
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
export class HolidayCategoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<HolidayCategory<DeSerializersT>, DeSerializersT>
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

  entityConstructor = HolidayCategory;

  requestBuilder(): HolidayCategoryRequestBuilder<DeSerializersT> {
    return new HolidayCategoryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HolidayCategory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<HolidayCategory<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof HolidayCategory, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HolidayCategory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DESCRIPTION_AR_SA: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_CY_GB: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_DE_DE: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_DEFAULT_VALUE: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_DEBUG: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_DEBUG_APOS: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_GB: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_RTL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_EN_US: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ES_ES: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ES_MX: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_FR_CA: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_FR_FR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_HI_IN: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_IW_IL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_JA_JP: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_KO_KR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_LOCALIZED: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_NL_NL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_PT_BR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_TH_TH: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_ZH_CN: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      HolidayCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<HolidayCategory<DeSerializers>>;
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
         * Static representation of the {@link descriptionArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_AR_SA: fieldBuilder.buildEdmTypeField(
          'description_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_CY_GB: fieldBuilder.buildEdmTypeField(
          'description_cy_GB',
          'Edm.String',
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
         * Static representation of the {@link descriptionEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'description_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'description_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'description_en_DEBUG_APOS_RTL',
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
         * Static representation of the {@link descriptionEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_EN_RTL: fieldBuilder.buildEdmTypeField(
          'description_en_RTL',
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
         * Static representation of the {@link descriptionEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_ES_MX: fieldBuilder.buildEdmTypeField(
          'description_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_FR_CA: fieldBuilder.buildEdmTypeField(
          'description_fr_CA',
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
         * Static representation of the {@link descriptionHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_HI_IN: fieldBuilder.buildEdmTypeField(
          'description_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_IW_IL: fieldBuilder.buildEdmTypeField(
          'description_iw_IL',
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
         * Static representation of the {@link descriptionThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_TH_TH: fieldBuilder.buildEdmTypeField(
          'description_th_TH',
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
        ALL_FIELDS: new AllFields('*', HolidayCategory)
      };
    }

    return this._schema;
  }
}

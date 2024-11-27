/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Country } from './Country';
import { CountryRequestBuilder } from './CountryRequestBuilder';
import { CurrencyApi } from './CurrencyApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class CountryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Country<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currencyNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NAV: OneToOneLink<
      Country<DeSerializersT>,
      DeSerializersT,
      CurrencyApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CurrencyApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CURRENCY_NAV: new OneToOneLink('currencyNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Country;

  requestBuilder(): CountryRequestBuilder<DeSerializersT> {
    return new CountryRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Country<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Country<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Country<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Country, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Country, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CODE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_END_DATE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EFFECTIVE_START_DATE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_PT: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_RU_RU: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_TW: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DRM_ENABLED: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_SET_BY_MIGRATE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_BY: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_DATE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_BY: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    NUMERIC_COUNTRY_CODE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERRITORY_ID: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    TWO_CHAR_COUNTRY_CODE: OrderableEdmTypeField<
      Country<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NAV: OneToOneLink<
      Country<DeSerializersT>,
      DeSerializersT,
      CurrencyApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Country<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('code', 'Edm.String', false),
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveEndDate',
          'Edm.DateTime',
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
         * Static representation of the {@link externalNameEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField(
          'externalName_en_GB',
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
         * Static representation of the {@link externalNameFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField(
          'externalName_fr_FR',
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
         * Static representation of the {@link externalNamePtPt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_PT_PT: fieldBuilder.buildEdmTypeField(
          'externalName_pt_PT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameRuRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_RU_RU: fieldBuilder.buildEdmTypeField(
          'externalName_ru_RU',
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
         * Static representation of the {@link externalNameZhTw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ZH_TW: fieldBuilder.buildEdmTypeField(
          'externalName_zh_TW',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDrmEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DRM_ENABLED: fieldBuilder.buildEdmTypeField(
          'isDRMEnabled',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isSetByMigrate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SET_BY_MIGRATE: fieldBuilder.buildEdmTypeField(
          'isSetByMigrate',
          'Edm.Boolean',
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
         * Static representation of the {@link numericCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMERIC_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'numericCountryCode',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        /**
         * Static representation of the {@link territoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERRITORY_ID: fieldBuilder.buildEdmTypeField(
          'territoryId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link twoCharCountryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TWO_CHAR_COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'twoCharCountryCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Country)
      };
    }

    return this._schema;
  }
}

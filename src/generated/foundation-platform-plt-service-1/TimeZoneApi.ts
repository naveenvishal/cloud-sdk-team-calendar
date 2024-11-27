/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeZone } from './TimeZone';
import { TimeZoneRequestBuilder } from './TimeZoneRequestBuilder';
import { CountryApi } from './CountryApi';
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
export class TimeZoneApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeZone<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link countryNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_NAV: OneToOneLink<
      TimeZone<DeSerializersT>,
      DeSerializersT,
      CountryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CountryApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      COUNTRY_NAV: new OneToOneLink('countryNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = TimeZone;

  requestBuilder(): TimeZoneRequestBuilder<DeSerializersT> {
    return new TimeZoneRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<TimeZone<DeSerializersT>, DeSerializersT> {
    return entityBuilder<TimeZone<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimeZone<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeZone, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TimeZone, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMMENT: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EFFECTIVE_START_DATE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    EFFECTIVE_STATUS: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_BY: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_CREATED_DATE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    NAME_DE_DE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_EN_GB: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_EN_US: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ES_ES: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_FR_FR: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_JA_JP: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_KO_KR: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_LOCALIZED: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_NL_NL: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_PT_BR: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_PT_PT: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_RU_RU: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ZH_CN: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_ZH_TW: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPORTED: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UTC_DST_OFFSET: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UTC_OFFSET: OrderableEdmTypeField<
      TimeZone<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_NAV: OneToOneLink<
      TimeZone<DeSerializersT>,
      DeSerializersT,
      CountryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeZone<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
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
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          false
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
         * Static representation of the {@link nameDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_DE_DE: fieldBuilder.buildEdmTypeField(
          'name_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'name_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_EN_GB: fieldBuilder.buildEdmTypeField(
          'name_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_EN_US: fieldBuilder.buildEdmTypeField(
          'name_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ES_ES: fieldBuilder.buildEdmTypeField(
          'name_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_FR_FR: fieldBuilder.buildEdmTypeField(
          'name_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_JA_JP: fieldBuilder.buildEdmTypeField(
          'name_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_KO_KR: fieldBuilder.buildEdmTypeField(
          'name_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'name_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_NL_NL: fieldBuilder.buildEdmTypeField(
          'name_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link namePtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_PT_BR: fieldBuilder.buildEdmTypeField(
          'name_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link namePtPt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_PT_PT: fieldBuilder.buildEdmTypeField(
          'name_pt_PT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameRuRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_RU_RU: fieldBuilder.buildEdmTypeField(
          'name_ru_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ZH_CN: fieldBuilder.buildEdmTypeField(
          'name_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nameZhTw} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_ZH_TW: fieldBuilder.buildEdmTypeField(
          'name_zh_TW',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supported} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPORTED: fieldBuilder.buildEdmTypeField(
          'supported',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link utcDstOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UTC_DST_OFFSET: fieldBuilder.buildEdmTypeField(
          'utcDstOffset',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link utcOffset} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UTC_OFFSET: fieldBuilder.buildEdmTypeField(
          'utcOffset',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeZone)
      };
    }

    return this._schema;
  }
}

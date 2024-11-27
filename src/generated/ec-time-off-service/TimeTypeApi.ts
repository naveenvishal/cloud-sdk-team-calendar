/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeType } from './TimeType';
import { TimeTypeRequestBuilder } from './TimeTypeRequestBuilder';
import { AbsenceCountingMethodApi } from './AbsenceCountingMethodApi';
import { TimeTypeAusApi } from './TimeTypeAusApi';
import { TimeTypeCanApi } from './TimeTypeCanApi';
import { TimeTypeDeuApi } from './TimeTypeDeuApi';
import { TimeTypeNldApi } from './TimeTypeNldApi';
import { TimeTypeUsaApi } from './TimeTypeUsaApi';
import { TimeAccountPostingRuleApi } from './TimeAccountPostingRuleApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class TimeTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeType<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link countingMethodNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTING_METHOD_NAV: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      AbsenceCountingMethodApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionAus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_AUS: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeAusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_CAN: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeCanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionDeu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_DEU: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeDeuApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionNld} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_NLD: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeNldApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionUsa} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_USA: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeUsaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAccountPostingRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_POSTING_RULES: Link<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeAccountPostingRuleApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AbsenceCountingMethodApi<DeSerializersT>,
      TimeTypeAusApi<DeSerializersT>,
      TimeTypeCanApi<DeSerializersT>,
      TimeTypeDeuApi<DeSerializersT>,
      TimeTypeNldApi<DeSerializersT>,
      TimeTypeUsaApi<DeSerializersT>,
      TimeAccountPostingRuleApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COUNTING_METHOD_NAV: new OneToOneLink(
        'countingMethodNav',
        this,
        linkedApis[0]
      ),
      COUNTRY_EXTENSION_AUS: new OneToOneLink(
        'countryExtensionAUS',
        this,
        linkedApis[1]
      ),
      COUNTRY_EXTENSION_CAN: new OneToOneLink(
        'countryExtensionCAN',
        this,
        linkedApis[2]
      ),
      COUNTRY_EXTENSION_DEU: new OneToOneLink(
        'countryExtensionDEU',
        this,
        linkedApis[3]
      ),
      COUNTRY_EXTENSION_NLD: new OneToOneLink(
        'countryExtensionNLD',
        this,
        linkedApis[4]
      ),
      COUNTRY_EXTENSION_USA: new OneToOneLink(
        'countryExtensionUSA',
        this,
        linkedApis[5]
      ),
      TIME_ACCOUNT_POSTING_RULES: new Link(
        'timeAccountPostingRules',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = TimeType;

  requestBuilder(): TimeTypeRequestBuilder<DeSerializersT> {
    return new TimeTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<TimeType<DeSerializersT>, DeSerializersT> {
    return entityBuilder<TimeType<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimeType<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeType, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TimeType, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSENCE_CLASS: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSENCE_COUNTING_CONFIGURATION: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ABSENCE_REQUESTING_WITHIN_FLEXTIME_BANDWIDTH_ALLOWED: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ABSENCE_RETENTION_GROUP: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_RECALCULATION_RELEVANCE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATE_CANCELLATION_WORKFLOW: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ADMIN_WORKFLOW: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOCATION_STRATEGY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_FRACTIONS_UNIT_DAY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_FRACTIONS_UNIT_HOUR: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOWED_REQUESTING_INCREMENT: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    BALANCE_CALCULATION_SETTING: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_METHOD: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COLLISION_GROUPING: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTING_METHOD: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENABLE_EMPLOYEE_TIME_CALENDAR_CREATION: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLEXIBLE_REQUESTING_ALLOWED: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOA_END_EVENT_REASON: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOA_START_EVENT_REASON: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_DURATION_IN_MONTHS: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_STATUS: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    NOT_TO_COUNT_AS_TIME_IN_SERVICE: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    POSTING_ORDER: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTING_PRIORITY: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTING_ON_NON_WORKING_DAYS_ALLOWED: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UNDETERMINED_END_DATE_ALLOWED: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    UNIT: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_CONFIGURATION: OrderableEdmTypeField<
      TimeType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countingMethodNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTING_METHOD_NAV: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      AbsenceCountingMethodApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionAus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_AUS: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeAusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_CAN: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeCanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionDeu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_DEU: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeDeuApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionNld} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_NLD: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeNldApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionUsa} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_USA: OneToOneLink<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeTypeUsaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeAccountPostingRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_POSTING_RULES: Link<
      TimeType<DeSerializersT>,
      DeSerializersT,
      TimeAccountPostingRuleApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeType<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absenceClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_CLASS: fieldBuilder.buildEdmTypeField(
          'absenceClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link absenceCountingConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_COUNTING_CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'absenceCountingConfiguration',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link absenceRequestingWithinFlextimeBandwidthAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_REQUESTING_WITHIN_FLEXTIME_BANDWIDTH_ALLOWED:
          fieldBuilder.buildEdmTypeField(
            'absenceRequestingWithinFlextimeBandwidthAllowed',
            'Edm.Boolean',
            true
          ),
        /**
         * Static representation of the {@link absenceRetentionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_RETENTION_GROUP: fieldBuilder.buildEdmTypeField(
          'absenceRetentionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualRecalculationRelevance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_RECALCULATION_RELEVANCE: fieldBuilder.buildEdmTypeField(
          'accrualRecalculationRelevance',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activateCancellationWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATE_CANCELLATION_WORKFLOW: fieldBuilder.buildEdmTypeField(
          'activateCancellationWorkflow',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link adminWorkflow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMIN_WORKFLOW: fieldBuilder.buildEdmTypeField(
          'adminWorkflow',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allocationStrategy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOCATION_STRATEGY: fieldBuilder.buildEdmTypeField(
          'allocationStrategy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowedFractionsUnitDay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_FRACTIONS_UNIT_DAY: fieldBuilder.buildEdmTypeField(
          'allowedFractionsUnitDay',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowedFractionsUnitHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_FRACTIONS_UNIT_HOUR: fieldBuilder.buildEdmTypeField(
          'allowedFractionsUnitHour',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowedRequestingIncrement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOWED_REQUESTING_INCREMENT: fieldBuilder.buildEdmTypeField(
          'allowedRequestingIncrement',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link balanceCalculationSetting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BALANCE_CALCULATION_SETTING: fieldBuilder.buildEdmTypeField(
          'balanceCalculationSetting',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_METHOD: fieldBuilder.buildEdmTypeField(
          'calculationMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link collisionGrouping} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COLLISION_GROUPING: fieldBuilder.buildEdmTypeField(
          'collisionGrouping',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTING_METHOD: fieldBuilder.buildEdmTypeField(
          'countingMethod',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link enableEmployeeTimeCalendarCreation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_EMPLOYEE_TIME_CALENDAR_CREATION: fieldBuilder.buildEdmTypeField(
          'enableEmployeeTimeCalendarCreation',
          'Edm.Boolean',
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
         * Static representation of the {@link flexibleRequestingAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEXIBLE_REQUESTING_ALLOWED: fieldBuilder.buildEdmTypeField(
          'flexibleRequestingAllowed',
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
         * Static representation of the {@link loaEndEventReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_END_EVENT_REASON: fieldBuilder.buildEdmTypeField(
          'loaEndEventReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loaStartEventReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_START_EVENT_REASON: fieldBuilder.buildEdmTypeField(
          'loaStartEventReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumDurationInMonths} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DURATION_IN_MONTHS: fieldBuilder.buildEdmTypeField(
          'maximumDurationInMonths',
          'Edm.Int64',
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
         * Static representation of the {@link mdfSystemStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemStatus',
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
         * Static representation of the {@link notToCountAsTimeInService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOT_TO_COUNT_AS_TIME_IN_SERVICE: fieldBuilder.buildEdmTypeField(
          'notToCountAsTimeInService',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link postingOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_ORDER: fieldBuilder.buildEdmTypeField(
          'postingOrder',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link postingPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'postingPriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestingOnNonWorkingDaysAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTING_ON_NON_WORKING_DAYS_ALLOWED: fieldBuilder.buildEdmTypeField(
          'requestingOnNonWorkingDaysAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link undeterminedEndDateAllowed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDETERMINED_END_DATE_ALLOWED: fieldBuilder.buildEdmTypeField(
          'undeterminedEndDateAllowed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link unit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT: fieldBuilder.buildEdmTypeField('unit', 'Edm.String', true),
        /**
         * Static representation of the {@link workflowConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'workflowConfiguration',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeType)
      };
    }

    return this._schema;
  }
}

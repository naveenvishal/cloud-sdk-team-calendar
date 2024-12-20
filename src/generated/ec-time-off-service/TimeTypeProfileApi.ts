/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeProfile } from './TimeTypeProfile';
import { TimeTypeProfileRequestBuilder } from './TimeTypeProfileRequestBuilder';
import { AvailableTimeTypeApi } from './AvailableTimeTypeApi';
import { TimeTypeApi } from './TimeTypeApi';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class TimeTypeProfileApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeTypeProfile<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link availableTimeTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AVAILABLE_TIME_TYPES: Link<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      AvailableTimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultImportAttendanceTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAttendanceTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainBreakTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_BREAK_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainEssTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ESS_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeForTimeOffInLieuNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeForWorkingTimeAccountNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AvailableTimeTypeApi<DeSerializersT>,
      TimeTypeApi<DeSerializersT>,
      TimeTypeApi<DeSerializersT>,
      TimeTypeApi<DeSerializersT>,
      TimeTypeApi<DeSerializersT>,
      TimeAccountType_1Api<DeSerializersT>,
      TimeAccountType_1Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      AVAILABLE_TIME_TYPES: new Link('availableTimeTypes', this, linkedApis[0]),
      DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: new OneToOneLink(
        'defaultImportAttendanceTimeTypeNav',
        this,
        linkedApis[1]
      ),
      MAIN_ATTENDANCE_TIME_TYPE_NAV: new OneToOneLink(
        'mainAttendanceTimeTypeNav',
        this,
        linkedApis[2]
      ),
      MAIN_BREAK_TIME_TYPE_NAV: new OneToOneLink(
        'mainBreakTimeTypeNav',
        this,
        linkedApis[3]
      ),
      MAIN_ESS_TIME_TYPE_NAV: new OneToOneLink(
        'mainESSTimeTypeNav',
        this,
        linkedApis[4]
      ),
      TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: new OneToOneLink(
        'timeAccountTypeForTimeOffInLieuNav',
        this,
        linkedApis[5]
      ),
      TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: new OneToOneLink(
        'timeAccountTypeForWorkingTimeAccountNav',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = TimeTypeProfile;

  requestBuilder(): TimeTypeProfileRequestBuilder<DeSerializersT> {
    return new TimeTypeProfileRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeTypeProfile<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimeTypeProfile<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeTypeProfile, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeTypeProfile,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MAIN_ATTENDANCE_TIME_TYPE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_BREAK_TIME_TYPE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ESS_TIME_TYPE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_STATUS: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_AR_SA: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_CY_GB: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DE_DE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_GB: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_RTL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_US: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_ES: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_MX: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_CA: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_FR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_HI_IN: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_IW_IL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_JA_JP: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_KO_KR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_LOCALIZED: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_NL_NL: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_PT_BR: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_TH_TH: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ZH_CN: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_RECORDING_VARIANT: OrderableEdmTypeField<
      TimeTypeProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link availableTimeTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AVAILABLE_TIME_TYPES: Link<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      AvailableTimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultImportAttendanceTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainAttendanceTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ATTENDANCE_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainBreakTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_BREAK_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mainEssTimeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAIN_ESS_TIME_TYPE_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeForTimeOffInLieuNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeForWorkingTimeAccountNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT_NAV: OneToOneLink<
      TimeTypeProfile<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeTypeProfile<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bookTimeOffInLieuOnTimeSheetApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_TIME_OFF_IN_LIEU_ON_TIME_SHEET_APPROVAL:
          fieldBuilder.buildEdmTypeField(
            'bookTimeOffInLieuOnTimeSheetApproval',
            'Edm.Boolean',
            true
          ),
        /**
         * Static representation of the {@link bookWorkingTimeOnTimeSheetApproval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOOK_WORKING_TIME_ON_TIME_SHEET_APPROVAL:
          fieldBuilder.buildEdmTypeField(
            'bookWorkingTimeOnTimeSheetApproval',
            'Edm.Boolean',
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
         * Static representation of the {@link defaultImportAttendanceTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_IMPORT_ATTENDANCE_TIME_TYPE: fieldBuilder.buildEdmTypeField(
          'defaultImportAttendanceTimeType',
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
         * Static representation of the {@link mainAttendanceTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ATTENDANCE_TIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mainAttendanceTimeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainBreakTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_BREAK_TIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mainBreakTimeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mainEssTimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ESS_TIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mainESSTimeType',
          'Edm.String',
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
          false
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
         * Static representation of the {@link timeAccountTypeForTimeOffInLieu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ACCOUNT_TYPE_FOR_TIME_OFF_IN_LIEU: fieldBuilder.buildEdmTypeField(
          'timeAccountTypeForTimeOffInLieu',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAccountTypeForWorkingTimeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ACCOUNT_TYPE_FOR_WORKING_TIME_ACCOUNT:
          fieldBuilder.buildEdmTypeField(
            'timeAccountTypeForWorkingTimeAccount',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_AR_SA: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_CY_GB: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DE_DE: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_DEFAULT_VALUE:
          fieldBuilder.buildEdmTypeField(
            'timeOffEssInstructionalText_defaultValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG:
          fieldBuilder.buildEdmTypeField(
            'timeOffEssInstructionalText_en_DEBUG',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS:
          fieldBuilder.buildEdmTypeField(
            'timeOffEssInstructionalText_en_DEBUG_APOS',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_DEBUG_APOS_RTL:
          fieldBuilder.buildEdmTypeField(
            'timeOffEssInstructionalText_en_DEBUG_APOS_RTL',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_GB: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_RTL: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_EN_US: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_ES: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ES_MX: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_CA: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_FR_FR: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_HI_IN: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_IW_IL: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_JA_JP: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_KO_KR: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_LOCALIZED:
          fieldBuilder.buildEdmTypeField(
            'timeOffEssInstructionalText_localized',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_NL_NL: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextPtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_PT_BR: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_TH_TH: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeOffEssInstructionalTextZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_OFF_ESS_INSTRUCTIONAL_TEXT_ZH_CN: fieldBuilder.buildEdmTypeField(
          'timeOffEssInstructionalText_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeRecordingVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORDING_VARIANT: fieldBuilder.buildEdmTypeField(
          'timeRecordingVariant',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeTypeProfile)
      };
    }

    return this._schema;
  }
}

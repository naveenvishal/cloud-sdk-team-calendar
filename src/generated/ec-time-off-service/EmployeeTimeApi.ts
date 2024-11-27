/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTime } from './EmployeeTime';
import { EmployeeTimeRequestBuilder } from './EmployeeTimeRequestBuilder';
import { EmployeeTimeAusApi } from './EmployeeTimeAusApi';
import { EmployeeTimeCanApi } from './EmployeeTimeCanApi';
import { EmployeeTimeColApi } from './EmployeeTimeColApi';
import { EmployeeTimeDeuApi } from './EmployeeTimeDeuApi';
import { EmployeeTimeEspApi } from './EmployeeTimeEspApi';
import { EmployeeTimeMexApi } from './EmployeeTimeMexApi';
import { EmployeeTimeNldApi } from './EmployeeTimeNldApi';
import { EmployeeTimePolApi } from './EmployeeTimePolApi';
import { EmployeeTimeUsaApi } from './EmployeeTimeUsaApi';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { EmployeeTimeCalendarApi } from './EmployeeTimeCalendarApi';
import { TimeTypeApi } from './TimeTypeApi';
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
  Time,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class EmployeeTimeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmployeeTime<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionAus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_AUS: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeAusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_CAN: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeCanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCol} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_COL: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeColApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionDeu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_DEU: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeDeuApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionEsp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_ESP: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeEspApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionMex} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_MEX: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeMexApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionNld} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_NLD: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeNldApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionPol} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_POL: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimePolApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionUsa} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_USA: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeUsaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recurrenceGroupNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECURRENCE_GROUP_NAV: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_CALENDAR: Link<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeCalendarApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_TYPE_NAV: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmployeeTimeAusApi<DeSerializersT>,
      EmployeeTimeCanApi<DeSerializersT>,
      EmployeeTimeColApi<DeSerializersT>,
      EmployeeTimeDeuApi<DeSerializersT>,
      EmployeeTimeEspApi<DeSerializersT>,
      EmployeeTimeMexApi<DeSerializersT>,
      EmployeeTimeNldApi<DeSerializersT>,
      EmployeeTimePolApi<DeSerializersT>,
      EmployeeTimeUsaApi<DeSerializersT>,
      EmployeeTimeGroupApi<DeSerializersT>,
      EmployeeTimeCalendarApi<DeSerializersT>,
      TimeTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COUNTRY_EXTENSION_AUS: new OneToOneLink(
        'countryExtensionAUS',
        this,
        linkedApis[0]
      ),
      COUNTRY_EXTENSION_CAN: new OneToOneLink(
        'countryExtensionCAN',
        this,
        linkedApis[1]
      ),
      COUNTRY_EXTENSION_COL: new OneToOneLink(
        'countryExtensionCOL',
        this,
        linkedApis[2]
      ),
      COUNTRY_EXTENSION_DEU: new OneToOneLink(
        'countryExtensionDEU',
        this,
        linkedApis[3]
      ),
      COUNTRY_EXTENSION_ESP: new OneToOneLink(
        'countryExtensionESP',
        this,
        linkedApis[4]
      ),
      COUNTRY_EXTENSION_MEX: new OneToOneLink(
        'countryExtensionMEX',
        this,
        linkedApis[5]
      ),
      COUNTRY_EXTENSION_NLD: new OneToOneLink(
        'countryExtensionNLD',
        this,
        linkedApis[6]
      ),
      COUNTRY_EXTENSION_POL: new OneToOneLink(
        'countryExtensionPOL',
        this,
        linkedApis[7]
      ),
      COUNTRY_EXTENSION_USA: new OneToOneLink(
        'countryExtensionUSA',
        this,
        linkedApis[8]
      ),
      RECURRENCE_GROUP_NAV: new OneToOneLink(
        'recurrenceGroupNav',
        this,
        linkedApis[9]
      ),
      TIME_CALENDAR: new Link('timeCalendar', this, linkedApis[10]),
      TIME_TYPE_NAV: new OneToOneLink('timeTypeNav', this, linkedApis[11])
    };
    return this;
  }

  entityConstructor = EmployeeTime;

  requestBuilder(): EmployeeTimeRequestBuilder<DeSerializersT> {
    return new EmployeeTimeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmployeeTime<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmployeeTime<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof EmployeeTime, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(EmployeeTime, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ABSENCE_DURATION_CATEGORY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVAL_STATUS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CANCELLATION_WORKFLOW_REQUEST_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DEDUCTION_QUANTITY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DISPLAY_QUANTITY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    EDITABLE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    END_TIME: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FLEXIBLE_REQUESTING: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    FRACTION_QUANTITY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOA_ACTUAL_RETURN_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOA_END_JOB_INFO_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LOA_EXPECTED_RETURN_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LOA_START_JOB_INFO_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_STATUS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ORIGINAL_QUANTITY_IN_DAYS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PHYSICAL_END_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PHYSICAL_START_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    QUANTITY_IN_DAYS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    QUANTITY_IN_HOURS: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    RECURRENCE_GROUP: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    START_TIME: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Time',
      true,
      true
    >;
    TIME_RECORD_ORIGIN: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_TYPE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDETERMINED_END_DATE: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_INITIATED_BY_ADMIN: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    WORKFLOW_REQUEST_ID: OrderableEdmTypeField<
      EmployeeTime<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionAus} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_AUS: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeAusApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_CAN: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeCanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionCol} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_COL: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeColApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionDeu} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_DEU: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeDeuApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionEsp} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_ESP: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeEspApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionMex} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_MEX: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeMexApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionNld} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_NLD: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeNldApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionPol} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_POL: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimePolApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link countryExtensionUsa} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_EXTENSION_USA: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeUsaApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link recurrenceGroupNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RECURRENCE_GROUP_NAV: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_CALENDAR: Link<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeCalendarApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_TYPE_NAV: OneToOneLink<
      EmployeeTime<DeSerializersT>,
      DeSerializersT,
      TimeTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmployeeTime<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link absenceDurationCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ABSENCE_DURATION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'absenceDurationCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link approvalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVAL_STATUS: fieldBuilder.buildEdmTypeField(
          'approvalStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cancellationWorkflowRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CANCELLATION_WORKFLOW_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'cancellationWorkflowRequestId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('comment', 'Edm.String', true),
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
         * Static representation of the {@link deductionQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEDUCTION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'deductionQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link displayQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'displayQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link editable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDITABLE: fieldBuilder.buildEdmTypeField(
          'editable',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'endDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link endTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_TIME: fieldBuilder.buildEdmTypeField('endTime', 'Edm.Time', true),
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
         * Static representation of the {@link flexibleRequesting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLEXIBLE_REQUESTING: fieldBuilder.buildEdmTypeField(
          'flexibleRequesting',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link fractionQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRACTION_QUANTITY: fieldBuilder.buildEdmTypeField(
          'fractionQuantity',
          'Edm.Decimal',
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
         * Static representation of the {@link loaActualReturnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_ACTUAL_RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'loaActualReturnDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link loaEndJobInfoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_END_JOB_INFO_ID: fieldBuilder.buildEdmTypeField(
          'loaEndJobInfoId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link loaExpectedReturnDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_EXPECTED_RETURN_DATE: fieldBuilder.buildEdmTypeField(
          'loaExpectedReturnDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link loaStartJobInfoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOA_START_JOB_INFO_ID: fieldBuilder.buildEdmTypeField(
          'loaStartJobInfoId',
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
         * Static representation of the {@link originalQuantityInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_QUANTITY_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'originalQuantityInDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link physicalEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'physicalEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link physicalStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'physicalStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link quantityInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'quantityInDays',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link quantityInHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_IN_HOURS: fieldBuilder.buildEdmTypeField(
          'quantityInHours',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link recurrenceGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_GROUP: fieldBuilder.buildEdmTypeField(
          'recurrenceGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'startDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link startTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_TIME: fieldBuilder.buildEdmTypeField(
          'startTime',
          'Edm.Time',
          true
        ),
        /**
         * Static representation of the {@link timeRecordOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RECORD_ORIGIN: fieldBuilder.buildEdmTypeField(
          'timeRecordOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_TYPE: fieldBuilder.buildEdmTypeField(
          'timeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link undeterminedEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDETERMINED_END_DATE: fieldBuilder.buildEdmTypeField(
          'undeterminedEndDate',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
        /**
         * Static representation of the {@link workflowInitiatedByAdmin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_INITIATED_BY_ADMIN: fieldBuilder.buildEdmTypeField(
          'workflowInitiatedByAdmin',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link workflowRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'workflowRequestId',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmployeeTime)
      };
    }

    return this._schema;
  }
}

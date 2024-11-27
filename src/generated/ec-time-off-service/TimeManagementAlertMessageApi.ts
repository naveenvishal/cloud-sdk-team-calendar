/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementAlertMessage } from './TimeManagementAlertMessage';
import { TimeManagementAlertMessageRequestBuilder } from './TimeManagementAlertMessageRequestBuilder';
import { EmployeeTimeApi } from './EmployeeTimeApi';
import { TimeAccountApi } from './TimeAccountApi';
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
export class TimeManagementAlertMessageApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TimeManagementAlertMessage<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employeeTimeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_TIME_NAV: OneToOneLink<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_NAV: OneToOneLink<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT,
      TimeAccountApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmployeeTimeApi<DeSerializersT>,
      TimeAccountApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYEE_TIME_NAV: new OneToOneLink(
        'employeeTimeNav',
        this,
        linkedApis[0]
      ),
      TIME_ACCOUNT_NAV: new OneToOneLink('timeAccountNav', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TimeManagementAlertMessage;

  requestBuilder(): TimeManagementAlertMessageRequestBuilder<DeSerializersT> {
    return new TimeManagementAlertMessageRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeManagementAlertMessage<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeManagementAlertMessage<DeSerializersT>,
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
    typeof TimeManagementAlertMessage,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeManagementAlertMessage,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_MANAGEMENT_ALERT_EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DEFAULT_MESSAGE_TEXT: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_TIME: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_TIME_SHEET: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_KEY: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_PARAMETER_1: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_PARAMETER_2: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_PARAMETER_3: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_PARAMETER_4: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ACCOUNT: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ACCOUNT_TYPE_ACCRUAL_TRANSFER: OrderableEdmTypeField<
      TimeManagementAlertMessage<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeTimeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_TIME_NAV: OneToOneLink<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT,
      EmployeeTimeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_NAV: OneToOneLink<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT,
      TimeAccountApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeManagementAlertMessage<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link timeManagementAlertExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_MANAGEMENT_ALERT_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'TimeManagementAlert_externalCode',
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
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField('date', 'Edm.DateTime', true),
        /**
         * Static representation of the {@link defaultMessageText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_MESSAGE_TEXT: fieldBuilder.buildEdmTypeField(
          'defaultMessageText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_TIME: fieldBuilder.buildEdmTypeField(
          'employeeTime',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeTimeSheet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_TIME_SHEET: fieldBuilder.buildEdmTypeField(
          'employeeTimeSheet',
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
        /**
         * Static representation of the {@link messageKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_KEY: fieldBuilder.buildEdmTypeField(
          'messageKey',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageParameter1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_PARAMETER_1: fieldBuilder.buildEdmTypeField(
          'messageParameter1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageParameter2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_PARAMETER_2: fieldBuilder.buildEdmTypeField(
          'messageParameter2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageParameter3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_PARAMETER_3: fieldBuilder.buildEdmTypeField(
          'messageParameter3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageParameter4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_PARAMETER_4: fieldBuilder.buildEdmTypeField(
          'messageParameter4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'timeAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeAccountTypeAccrualTransfer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ACCOUNT_TYPE_ACCRUAL_TRANSFER: fieldBuilder.buildEdmTypeField(
          'timeAccountTypeAccrualTransfer',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeManagementAlertMessage)
      };
    }

    return this._schema;
  }
}

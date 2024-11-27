/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementAlert } from './TimeManagementAlert';
import { TimeManagementAlertRequestBuilder } from './TimeManagementAlertRequestBuilder';
import { TimeManagementAlertMessageApi } from './TimeManagementAlertMessageApi';
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
export class TimeManagementAlertApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeManagementAlert<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link timeManagementAlertMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_MANAGEMENT_ALERT_MESSAGE: Link<
      TimeManagementAlert<DeSerializersT>,
      DeSerializersT,
      TimeManagementAlertMessageApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TimeManagementAlertMessageApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TIME_MANAGEMENT_ALERT_MESSAGE: new Link(
        'timeManagementAlertMessage',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TimeManagementAlert;

  requestBuilder(): TimeManagementAlertRequestBuilder<DeSerializersT> {
    return new TimeManagementAlertRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeManagementAlert<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeManagementAlert<DeSerializersT>,
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
    typeof TimeManagementAlert,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeManagementAlert,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADMIN_ALERT_STATUS: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ASSIGNEE_USER_ID: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONCATENATED_MESSAGE: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ENCODED_USER_ID: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEVERITY: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEVERITY_NAME: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_ID: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_TYPE: OrderableEdmTypeField<
      TimeManagementAlert<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link timeManagementAlertMessage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_MANAGEMENT_ALERT_MESSAGE: Link<
      TimeManagementAlert<DeSerializersT>,
      DeSerializersT,
      TimeManagementAlertMessageApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeManagementAlert<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link adminAlertStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADMIN_ALERT_STATUS: fieldBuilder.buildEdmTypeField(
          'adminAlertStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link assigneeUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIGNEE_USER_ID: fieldBuilder.buildEdmTypeField(
          'assigneeUserId',
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
         * Static representation of the {@link concatenatedMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONCATENATED_MESSAGE: fieldBuilder.buildEdmTypeField(
          'concatenatedMessage',
          'Edm.String',
          true
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
         * Static representation of the {@link encodedUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENCODED_USER_ID: fieldBuilder.buildEdmTypeField(
          'encodedUserId',
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
         * Static representation of the {@link severity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY: fieldBuilder.buildEdmTypeField(
          'severity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link severityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEVERITY_NAME: fieldBuilder.buildEdmTypeField(
          'severityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        /**
         * Static representation of the {@link targetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_ID: fieldBuilder.buildEdmTypeField(
          'targetId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_TYPE: fieldBuilder.buildEdmTypeField(
          'targetType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeManagementAlert)
      };
    }

    return this._schema;
  }
}

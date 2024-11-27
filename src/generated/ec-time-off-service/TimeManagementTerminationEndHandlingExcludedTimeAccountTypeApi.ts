/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementTerminationEndHandlingExcludedTimeAccountType } from './TimeManagementTerminationEndHandlingExcludedTimeAccountType';
import { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_NAV: OneToOneLink<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [TimeAccountType_1Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TIME_ACCOUNT_TYPE_NAV: new OneToOneLink(
        'timeAccountTypeNav',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor =
    TimeManagementTerminationEndHandlingExcludedTimeAccountType;

  requestBuilder(): TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder<DeSerializersT> {
    return new TimeManagementTerminationEndHandlingExcludedTimeAccountTypeRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
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
    typeof TimeManagementTerminationEndHandlingExcludedTimeAccountType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeManagementTerminationEndHandlingExcludedTimeAccountType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_MANAGEMENT_TERMINATION_END_HANDLING_EXCLUSION_EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ACCOUNT_TYPE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link timeAccountTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TIME_ACCOUNT_TYPE_NAV: OneToOneLink<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT,
      TimeAccountType_1Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link timeManagementTerminationEndHandlingExclusionExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_MANAGEMENT_TERMINATION_END_HANDLING_EXCLUSION_EXTERNAL_CODE:
          fieldBuilder.buildEdmTypeField(
            'TimeManagementTerminationEndHandlingExclusion_externalCode',
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
         * Static representation of the {@link timeAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ACCOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'timeAccountType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TimeManagementTerminationEndHandlingExcludedTimeAccountType
        )
      };
    }

    return this._schema;
  }
}

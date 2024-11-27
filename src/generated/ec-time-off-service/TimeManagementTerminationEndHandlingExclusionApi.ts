/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementTerminationEndHandlingExclusion } from './TimeManagementTerminationEndHandlingExclusion';
import { TimeManagementTerminationEndHandlingExclusionRequestBuilder } from './TimeManagementTerminationEndHandlingExclusionRequestBuilder';
import { TimeManagementTerminationEndHandlingExcludedEventReasonApi } from './TimeManagementTerminationEndHandlingExcludedEventReasonApi';
import { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi';
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
export class TimeManagementTerminationEndHandlingExclusionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link excludedEventReasons} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_EVENT_REASONS: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link excludedTimeAccountTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_TIME_ACCOUNT_TYPES: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>,
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXCLUDED_EVENT_REASONS: new Link(
        'excludedEventReasons',
        this,
        linkedApis[0]
      ),
      EXCLUDED_TIME_ACCOUNT_TYPES: new Link(
        'excludedTimeAccountTypes',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TimeManagementTerminationEndHandlingExclusion;

  requestBuilder(): TimeManagementTerminationEndHandlingExclusionRequestBuilder<DeSerializersT> {
    return new TimeManagementTerminationEndHandlingExclusionRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
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
    typeof TimeManagementTerminationEndHandlingExclusion,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeManagementTerminationEndHandlingExclusion,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link excludedEventReasons} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_EVENT_REASONS: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link excludedTimeAccountTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDED_TIME_ACCOUNT_TYPES: Link<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeManagementTerminationEndHandlingExclusion<DeSerializers>
    >;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TimeManagementTerminationEndHandlingExclusion
        )
      };
    }

    return this._schema;
  }
}

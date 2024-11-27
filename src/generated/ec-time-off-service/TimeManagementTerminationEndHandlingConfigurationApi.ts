/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeManagementTerminationEndHandlingConfiguration } from './TimeManagementTerminationEndHandlingConfiguration';
import { TimeManagementTerminationEndHandlingConfigurationRequestBuilder } from './TimeManagementTerminationEndHandlingConfigurationRequestBuilder';
import { TimeManagementTerminationEndHandlingLegalEntityConfigurationApi } from './TimeManagementTerminationEndHandlingLegalEntityConfigurationApi';
import { TimeManagementTerminationEndHandlingExclusionApi } from './TimeManagementTerminationEndHandlingExclusionApi';
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
export class TimeManagementTerminationEndHandlingConfigurationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link countryConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_CONFIGURATION: Link<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link excludesNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDES_NAV: OneToOneLink<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>,
      TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COUNTRY_CONFIGURATION: new Link(
        'countryConfiguration',
        this,
        linkedApis[0]
      ),
      EXCLUDES_NAV: new OneToOneLink('excludesNav', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = TimeManagementTerminationEndHandlingConfiguration;

  requestBuilder(): TimeManagementTerminationEndHandlingConfigurationRequestBuilder<DeSerializersT> {
    return new TimeManagementTerminationEndHandlingConfigurationRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
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
    typeof TimeManagementTerminationEndHandlingConfiguration,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeManagementTerminationEndHandlingConfiguration,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACTIVATION_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTOMATION_LEVEL_OF_EMPLOYEE_TIME_PROCESSING: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTOMATION_LEVEL_OF_TIME_ACCOUNT_CLOSING: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUDES: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFSET_IN_DAYS: OrderableEdmTypeField<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link countryConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY_CONFIGURATION: Link<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link excludesNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXCLUDES_NAV: OneToOneLink<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT,
      TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link activationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATION_STATUS: fieldBuilder.buildEdmTypeField(
          'activationStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link automationLevelOfEmployeeTimeProcessing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_LEVEL_OF_EMPLOYEE_TIME_PROCESSING:
          fieldBuilder.buildEdmTypeField(
            'automationLevelOfEmployeeTimeProcessing',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link automationLevelOfTimeAccountClosing} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATION_LEVEL_OF_TIME_ACCOUNT_CLOSING:
          fieldBuilder.buildEdmTypeField(
            'automationLevelOfTimeAccountClosing',
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
         * Static representation of the {@link entityUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_UUID: fieldBuilder.buildEdmTypeField(
          'entityUUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link excludes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUDES: fieldBuilder.buildEdmTypeField(
          'excludes',
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
         * Static representation of the {@link offsetInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFSET_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'offsetInDays',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          TimeManagementTerminationEndHandlingConfiguration
        )
      };
    }

    return this._schema;
  }
}

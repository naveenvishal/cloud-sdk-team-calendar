/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeTypeUsa } from './TimeTypeUsa';
import { TimeTypeUsaRequestBuilder } from './TimeTypeUsaRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class TimeTypeUsaApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeTypeUsa<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TimeTypeUsa;

  requestBuilder(): TimeTypeUsaRequestBuilder<DeSerializersT> {
    return new TimeTypeUsaRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeTypeUsa<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimeTypeUsa<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeTypeUsa, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TimeTypeUsa, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TIME_TYPE_EXTERNAL_CODE: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    DURATION_OF_DISABILITY_PERIOD_ONE: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DURATION_OF_DISABILITY_PERIOD_THREE: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    DURATION_OF_DISABILITY_PERIOD_TWO: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SICKNESS_VARIANT: OrderableEdmTypeField<
      TimeTypeUsa<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TimeTypeUsa<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link timeTypeExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_TYPE_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'TimeType_externalCode',
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
         * Static representation of the {@link durationOfDisabilityPeriodOne} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_OF_DISABILITY_PERIOD_ONE: fieldBuilder.buildEdmTypeField(
          'durationOfDisabilityPeriodOne',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link durationOfDisabilityPeriodThree} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_OF_DISABILITY_PERIOD_THREE: fieldBuilder.buildEdmTypeField(
          'durationOfDisabilityPeriodThree',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link durationOfDisabilityPeriodTwo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_OF_DISABILITY_PERIOD_TWO: fieldBuilder.buildEdmTypeField(
          'durationOfDisabilityPeriodTwo',
          'Edm.Int64',
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
         * Static representation of the {@link sicknessVariant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SICKNESS_VARIANT: fieldBuilder.buildEdmTypeField(
          'sicknessVariant',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeTypeUsa)
      };
    }

    return this._schema;
  }
}

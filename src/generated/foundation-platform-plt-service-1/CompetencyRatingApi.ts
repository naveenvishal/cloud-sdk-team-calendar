/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompetencyRating } from './CompetencyRating';
import { CompetencyRatingRequestBuilder } from './CompetencyRatingRequestBuilder';
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
export class CompetencyRatingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompetencyRating<DeSerializersT>, DeSerializersT>
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

  entityConstructor = CompetencyRating;

  requestBuilder(): CompetencyRatingRequestBuilder<DeSerializersT> {
    return new CompetencyRatingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompetencyRating<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CompetencyRating<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CompetencyRating, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompetencyRating,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FORM_CONTENT_ID: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    FORM_DATA_ID: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    GUID: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LAST_MODIFIED: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_WITH_TZ: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODULE: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RATER: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATER_CATEGORY: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SCALE_MAX: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    SCALE_MIN: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    SOURCE: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    STATUS: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      CompetencyRating<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CompetencyRating<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link formContentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_CONTENT_ID: fieldBuilder.buildEdmTypeField(
          'formContentId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link formDataId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORM_DATA_ID: fieldBuilder.buildEdmTypeField(
          'formDataId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link guid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GUID: fieldBuilder.buildEdmTypeField('guid', 'Edm.String', false),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
        /**
         * Static representation of the {@link lastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'lastModified',
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
         * Static representation of the {@link lastModifiedWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEdmTypeField('module', 'Edm.Int32', false),
        /**
         * Static representation of the {@link rater} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATER: fieldBuilder.buildEdmTypeField('rater', 'Edm.String', true),
        /**
         * Static representation of the {@link raterCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATER_CATEGORY: fieldBuilder.buildEdmTypeField(
          'raterCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('rating', 'Edm.Double', true),
        /**
         * Static representation of the {@link scaleMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_MAX: fieldBuilder.buildEdmTypeField(
          'scaleMax',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link scaleMin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCALE_MIN: fieldBuilder.buildEdmTypeField(
          'scaleMin',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link source} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE: fieldBuilder.buildEdmTypeField('source', 'Edm.Int32', false),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.Int64', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.Int32', false),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'validTo',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompetencyRating)
      };
    }

    return this._schema;
  }
}

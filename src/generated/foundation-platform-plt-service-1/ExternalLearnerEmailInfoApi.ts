/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerEmailInfo } from './ExternalLearnerEmailInfo';
import { ExternalLearnerEmailInfoRequestBuilder } from './ExternalLearnerEmailInfoRequestBuilder';
import { PicklistOptionApi } from './PicklistOptionApi';
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
export class ExternalLearnerEmailInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExternalLearnerEmailInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link emailTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_TYPE_NAV: OneToOneLink<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EMAIL_TYPE_NAV: new OneToOneLink('emailTypeNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExternalLearnerEmailInfo;

  requestBuilder(): ExternalLearnerEmailInfoRequestBuilder<DeSerializersT> {
    return new ExternalLearnerEmailInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLearnerEmailInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalLearnerEmailInfo<DeSerializersT>,
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
    typeof ExternalLearnerEmailInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalLearnerEmailInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMAIL_ADDRESS: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_TYPE: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearnerEmailInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link emailTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_TYPE_NAV: OneToOneLink<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalLearnerEmailInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'emailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_TYPE: fieldBuilder.buildEdmTypeField(
          'emailType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEdmTypeField(
          'isPrimary',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETED: fieldBuilder.buildEdmTypeField(
          'is_deleted',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemId', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalLearnerEmailInfo)
      };
    }

    return this._schema;
  }
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistLabel } from './PicklistLabel';
import { PicklistLabelRequestBuilder } from './PicklistLabelRequestBuilder';
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
export class PicklistLabelApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PicklistLabel<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link picklistOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_OPTION: OneToOneLink<
      PicklistLabel<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PICKLIST_OPTION: new OneToOneLink('picklistOption', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PicklistLabel;

  requestBuilder(): PicklistLabelRequestBuilder<DeSerializersT> {
    return new PicklistLabelRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PicklistLabel<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PicklistLabel<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PicklistLabel, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PicklistLabel, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      PicklistLabel<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LABEL: OrderableEdmTypeField<
      PicklistLabel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALE: OrderableEdmTypeField<
      PicklistLabel<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPTION_ID: OrderableEdmTypeField<
      PicklistLabel<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link picklistOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_OPTION: OneToOneLink<
      PicklistLabel<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PicklistLabel<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', true),
        /**
         * Static representation of the {@link label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL: fieldBuilder.buildEdmTypeField('label', 'Edm.String', true),
        /**
         * Static representation of the {@link locale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
        /**
         * Static representation of the {@link optionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTION_ID: fieldBuilder.buildEdmTypeField(
          'optionId',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PicklistLabel)
      };
    }

    return this._schema;
  }
}

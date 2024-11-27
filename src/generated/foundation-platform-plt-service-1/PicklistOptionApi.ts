/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistOption } from './PicklistOption';
import { PicklistOptionRequestBuilder } from './PicklistOptionRequestBuilder';
import { PicklistApi } from './PicklistApi';
import { PicklistLabelApi } from './PicklistLabelApi';
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
export class PicklistOptionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PicklistOption<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link childPicklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PICKLIST_OPTIONS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPicklistOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PICKLIST_OPTION: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link picklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link picklistLabels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_LABELS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistLabelApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PicklistOptionApi<DeSerializersT>,
      PicklistOptionApi<DeSerializersT>,
      PicklistApi<DeSerializersT>,
      PicklistLabelApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHILD_PICKLIST_OPTIONS: new Link(
        'childPicklistOptions',
        this,
        linkedApis[0]
      ),
      PARENT_PICKLIST_OPTION: new OneToOneLink(
        'parentPicklistOption',
        this,
        linkedApis[1]
      ),
      PICKLIST: new OneToOneLink('picklist', this, linkedApis[2]),
      PICKLIST_LABELS: new Link('picklistLabels', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = PicklistOption;

  requestBuilder(): PicklistOptionRequestBuilder<DeSerializersT> {
    return new PicklistOptionRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PicklistOption<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PicklistOption<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PicklistOption<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PicklistOption, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PicklistOption, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EXTERNAL_CODE: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MAX_VALUE: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MIN_VALUE: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    OPTION_VALUE: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SORT_ORDER: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      PicklistOption<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childPicklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PICKLIST_OPTIONS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentPicklistOption} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PICKLIST_OPTION: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link picklist} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST: OneToOneLink<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link picklistLabels} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_LABELS: Link<
      PicklistOption<DeSerializersT>,
      DeSerializersT,
      PicklistLabelApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PicklistOption<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
        /**
         * Static representation of the {@link maxValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_VALUE: fieldBuilder.buildEdmTypeField(
          'maxValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link minValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_VALUE: fieldBuilder.buildEdmTypeField(
          'minValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link optionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPTION_VALUE: fieldBuilder.buildEdmTypeField(
          'optionValue',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link sortOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_ORDER: fieldBuilder.buildEdmTypeField(
          'sortOrder',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PicklistOption)
      };
    }

    return this._schema;
  }
}

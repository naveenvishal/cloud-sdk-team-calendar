/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Picklist } from './Picklist';
import { PicklistRequestBuilder } from './PicklistRequestBuilder';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class PicklistApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Picklist<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link picklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_OPTIONS: Link<
      Picklist<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PICKLIST_OPTIONS: new Link('picklistOptions', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Picklist;

  requestBuilder(): PicklistRequestBuilder<DeSerializersT> {
    return new PicklistRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Picklist<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Picklist<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Picklist<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Picklist, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Picklist, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PICKLIST_ID: OrderableEdmTypeField<
      Picklist<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link picklistOptions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PICKLIST_OPTIONS: Link<
      Picklist<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Picklist<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link picklistId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKLIST_ID: fieldBuilder.buildEdmTypeField(
          'picklistId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Picklist)
      };
    }

    return this._schema;
  }
}

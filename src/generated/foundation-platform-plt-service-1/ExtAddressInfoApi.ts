/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtAddressInfo } from './ExtAddressInfo';
import { ExtAddressInfoRequestBuilder } from './ExtAddressInfoRequestBuilder';
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
export class ExtAddressInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExtAddressInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link addressTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_TYPE_NAV: OneToOneLink<
      ExtAddressInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ADDRESS_TYPE_NAV: new OneToOneLink('addressTypeNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExtAddressInfo;

  requestBuilder(): ExtAddressInfoRequestBuilder<DeSerializersT> {
    return new ExtAddressInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExtAddressInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExtAddressInfo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExtAddressInfo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExtAddressInfo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_1: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_2: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_ID: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PROVINCE: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      ExtAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_TYPE_NAV: OneToOneLink<
      ExtAddressInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExtAddressInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link address1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_1: fieldBuilder.buildEdmTypeField(
          'address1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_2: fieldBuilder.buildEdmTypeField(
          'address2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'addressId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'addressType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('city', 'Edm.String', true),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
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
         * Static representation of the {@link province} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVINCE: fieldBuilder.buildEdmTypeField(
          'province',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('zipCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExtAddressInfo)
      };
    }

    return this._schema;
  }
}

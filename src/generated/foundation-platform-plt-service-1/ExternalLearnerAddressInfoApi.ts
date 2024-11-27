/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerAddressInfo } from './ExternalLearnerAddressInfo';
import { ExternalLearnerAddressInfoRequestBuilder } from './ExternalLearnerAddressInfoRequestBuilder';
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
export class ExternalLearnerAddressInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExternalLearnerAddressInfo<DeSerializersT>, DeSerializersT>
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
      ExternalLearnerAddressInfo<DeSerializersT>,
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

  entityConstructor = ExternalLearnerAddressInfo;

  requestBuilder(): ExternalLearnerAddressInfoRequestBuilder<DeSerializersT> {
    return new ExternalLearnerAddressInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLearnerAddressInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalLearnerAddressInfo<DeSerializersT>,
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
    typeof ExternalLearnerAddressInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalLearnerAddressInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_10_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_10_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_11_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_11_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_12_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_12_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_13_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_13_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_14_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_14_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_15_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_15_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_16_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_16_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_17_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_17_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_18_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_18_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_19_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_19_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_1_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_1_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_20_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_20_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_2_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_2_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_3_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_3_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_4_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_4_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_5_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_5_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_6_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_6_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_7_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_7_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_8_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_8_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_9_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_9_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_TYPE: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTY_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_DATE_1_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CUSTOM_DATE_1_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CUSTOM_DOUBLE_1_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_DOUBLE_1_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_LONG_1_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOM_LONG_1_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOM_STRING_1_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_STRING_1_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMP_USERS_SYS_ID: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PROVINCE_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVINCE_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRIPT: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRIPT_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRIPT_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ALT_1: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE_ALT_2: OrderableEdmTypeField<
      ExternalLearnerAddressInfo<DeSerializers>,
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
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalLearnerAddressInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link address10Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_10_ALT_1: fieldBuilder.buildEdmTypeField(
          'address10Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address10Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_10_ALT_2: fieldBuilder.buildEdmTypeField(
          'address10Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address11Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_11_ALT_1: fieldBuilder.buildEdmTypeField(
          'address11Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address11Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_11_ALT_2: fieldBuilder.buildEdmTypeField(
          'address11Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address12Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_12_ALT_1: fieldBuilder.buildEdmTypeField(
          'address12Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address12Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_12_ALT_2: fieldBuilder.buildEdmTypeField(
          'address12Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address13Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_13_ALT_1: fieldBuilder.buildEdmTypeField(
          'address13Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address13Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_13_ALT_2: fieldBuilder.buildEdmTypeField(
          'address13Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address14Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_14_ALT_1: fieldBuilder.buildEdmTypeField(
          'address14Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address14Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_14_ALT_2: fieldBuilder.buildEdmTypeField(
          'address14Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address15Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_15_ALT_1: fieldBuilder.buildEdmTypeField(
          'address15Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address15Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_15_ALT_2: fieldBuilder.buildEdmTypeField(
          'address15Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address16Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_16_ALT_1: fieldBuilder.buildEdmTypeField(
          'address16Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address16Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_16_ALT_2: fieldBuilder.buildEdmTypeField(
          'address16Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address17Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_17_ALT_1: fieldBuilder.buildEdmTypeField(
          'address17Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address17Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_17_ALT_2: fieldBuilder.buildEdmTypeField(
          'address17Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address18Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_18_ALT_1: fieldBuilder.buildEdmTypeField(
          'address18Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address18Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_18_ALT_2: fieldBuilder.buildEdmTypeField(
          'address18Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address19Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_19_ALT_1: fieldBuilder.buildEdmTypeField(
          'address19Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address19Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_19_ALT_2: fieldBuilder.buildEdmTypeField(
          'address19Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address1Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_1_ALT_1: fieldBuilder.buildEdmTypeField(
          'address1Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address1Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_1_ALT_2: fieldBuilder.buildEdmTypeField(
          'address1Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address20Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_20_ALT_1: fieldBuilder.buildEdmTypeField(
          'address20Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address20Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_20_ALT_2: fieldBuilder.buildEdmTypeField(
          'address20Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address2Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_2_ALT_1: fieldBuilder.buildEdmTypeField(
          'address2Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address2Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_2_ALT_2: fieldBuilder.buildEdmTypeField(
          'address2Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address3Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_3_ALT_1: fieldBuilder.buildEdmTypeField(
          'address3Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address3Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_3_ALT_2: fieldBuilder.buildEdmTypeField(
          'address3Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address4Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_4_ALT_1: fieldBuilder.buildEdmTypeField(
          'address4Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address4Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_4_ALT_2: fieldBuilder.buildEdmTypeField(
          'address4Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address5Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_5_ALT_1: fieldBuilder.buildEdmTypeField(
          'address5Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address5Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_5_ALT_2: fieldBuilder.buildEdmTypeField(
          'address5Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address6Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_6_ALT_1: fieldBuilder.buildEdmTypeField(
          'address6Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address6Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_6_ALT_2: fieldBuilder.buildEdmTypeField(
          'address6Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address7Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_7_ALT_1: fieldBuilder.buildEdmTypeField(
          'address7Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address7Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_7_ALT_2: fieldBuilder.buildEdmTypeField(
          'address7Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address8Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_8_ALT_1: fieldBuilder.buildEdmTypeField(
          'address8Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address8Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_8_ALT_2: fieldBuilder.buildEdmTypeField(
          'address8Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address9Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_9_ALT_1: fieldBuilder.buildEdmTypeField(
          'address9Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link address9Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_9_ALT_2: fieldBuilder.buildEdmTypeField(
          'address9Alt2',
          'Edm.String',
          true
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
         * Static representation of the {@link cityAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ALT_1: fieldBuilder.buildEdmTypeField(
          'cityAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cityAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_ALT_2: fieldBuilder.buildEdmTypeField(
          'cityAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ALT_1: fieldBuilder.buildEdmTypeField(
          'countyAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countyAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY_ALT_2: fieldBuilder.buildEdmTypeField(
          'countyAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customDate1Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DATE_1_ALT_1: fieldBuilder.buildEdmTypeField(
          'customDate1Alt1',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link customDate1Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DATE_1_ALT_2: fieldBuilder.buildEdmTypeField(
          'customDate1Alt2',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link customDouble1Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DOUBLE_1_ALT_1: fieldBuilder.buildEdmTypeField(
          'customDouble1Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customDouble1Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_DOUBLE_1_ALT_2: fieldBuilder.buildEdmTypeField(
          'customDouble1Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customLong1Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_LONG_1_ALT_1: fieldBuilder.buildEdmTypeField(
          'customLong1Alt1',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link customLong1Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_LONG_1_ALT_2: fieldBuilder.buildEdmTypeField(
          'customLong1Alt2',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link customString1Alt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_1_ALT_1: fieldBuilder.buildEdmTypeField(
          'customString1Alt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customString1Alt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_STRING_1_ALT_2: fieldBuilder.buildEdmTypeField(
          'customString1Alt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link empUsersSysId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMP_USERS_SYS_ID: fieldBuilder.buildEdmTypeField(
          'empUsersSysId',
          'Edm.String',
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
        /**
         * Static representation of the {@link provinceAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVINCE_ALT_1: fieldBuilder.buildEdmTypeField(
          'provinceAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link provinceAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVINCE_ALT_2: fieldBuilder.buildEdmTypeField(
          'provinceAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link script} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT: fieldBuilder.buildEdmTypeField('script', 'Edm.String', true),
        /**
         * Static representation of the {@link scriptAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_ALT_1: fieldBuilder.buildEdmTypeField(
          'scriptAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scriptAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_ALT_2: fieldBuilder.buildEdmTypeField(
          'scriptAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ALT_1: fieldBuilder.buildEdmTypeField(
          'stateAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stateAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_ALT_2: fieldBuilder.buildEdmTypeField(
          'stateAlt2',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalLearnerAddressInfo)
      };
    }

    return this._schema;
  }
}

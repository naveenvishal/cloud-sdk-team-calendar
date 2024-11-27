/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerPhoneInfo } from './ExternalLearnerPhoneInfo';
import { ExternalLearnerPhoneInfoRequestBuilder } from './ExternalLearnerPhoneInfoRequestBuilder';
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
export class ExternalLearnerPhoneInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExternalLearnerPhoneInfo<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link phoneTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHONE_TYPE_NAV: OneToOneLink<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PicklistOptionApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PHONE_TYPE_NAV: new OneToOneLink('phoneTypeNav', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ExternalLearnerPhoneInfo;

  requestBuilder(): ExternalLearnerPhoneInfoRequestBuilder<DeSerializersT> {
    return new ExternalLearnerPhoneInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLearnerPhoneInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalLearnerPhoneInfo<DeSerializersT>,
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
    typeof ExternalLearnerPhoneInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalLearnerPhoneInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    AREA_CODE: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PHONE_NUMBER: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHONE_TYPE: OrderableEdmTypeField<
      ExternalLearnerPhoneInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link phoneTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHONE_TYPE_NAV: OneToOneLink<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalLearnerPhoneInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link areaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA_CODE: fieldBuilder.buildEdmTypeField(
          'areaCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'countryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'extension',
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
        /**
         * Static representation of the {@link phoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'phoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link phoneType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_TYPE: fieldBuilder.buildEdmTypeField(
          'phoneType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalLearnerPhoneInfo)
      };
    }

    return this._schema;
  }
}

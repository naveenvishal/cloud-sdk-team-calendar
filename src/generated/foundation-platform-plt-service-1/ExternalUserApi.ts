/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalUser } from './ExternalUser';
import { ExternalUserRequestBuilder } from './ExternalUserRequestBuilder';
import { ExtAddressInfoApi } from './ExtAddressInfoApi';
import { ExtEmailInfoApi } from './ExtEmailInfoApi';
import { ExtPersonalInfoApi } from './ExtPersonalInfoApi';
import { ExtPhoneInfoApi } from './ExtPhoneInfoApi';
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
export class ExternalUserApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalUser<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link extAddressInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_ADDRESS_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extEmailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_EMAIL_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link extPersonalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PERSONAL_INFO: OneToOneLink<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extPhoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PHONE_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPhoneInfoApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExtAddressInfoApi<DeSerializersT>,
      ExtEmailInfoApi<DeSerializersT>,
      ExtPersonalInfoApi<DeSerializersT>,
      ExtPhoneInfoApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EXT_ADDRESS_INFO: new Link('extAddressInfo', this, linkedApis[0]),
      EXT_EMAIL_INFO: new Link('extEmailInfo', this, linkedApis[1]),
      EXT_PERSONAL_INFO: new OneToOneLink(
        'extPersonalInfo',
        this,
        linkedApis[2]
      ),
      EXT_PHONE_INFO: new Link('extPhoneInfo', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ExternalUser;

  requestBuilder(): ExternalUserRequestBuilder<DeSerializersT> {
    return new ExternalUserRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalUser<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExternalUser<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExternalUser<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExternalUser, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ExternalUser, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEFAULT_LOCALE: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOGIN_METHOD: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GUID: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PERSON_ID_EXTERNAL: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ExternalUser<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extAddressInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_ADDRESS_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extEmailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_EMAIL_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link extPersonalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PERSONAL_INFO: OneToOneLink<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link extPhoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXT_PHONE_INFO: Link<
      ExternalUser<DeSerializersT>,
      DeSerializersT,
      ExtPhoneInfoApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalUser<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link defaultLocale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LOCALE: fieldBuilder.buildEdmTypeField(
          'defaultLocale',
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
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link loginMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGIN_METHOD: fieldBuilder.buildEdmTypeField(
          'loginMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_GUID: fieldBuilder.buildEdmTypeField(
          'personGUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'personId',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link personIdExternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID_EXTERNAL: fieldBuilder.buildEdmTypeField(
          'personIdExternal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'productName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEdmTypeField(
          'timeZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'userName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalUser)
      };
    }

    return this._schema;
  }
}

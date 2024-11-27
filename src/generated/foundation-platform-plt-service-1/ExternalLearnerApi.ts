/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearner } from './ExternalLearner';
import { ExternalLearnerRequestBuilder } from './ExternalLearnerRequestBuilder';
import { ExternalLearnerEmailInfoApi } from './ExternalLearnerEmailInfoApi';
import { ExternalLearnerAddressInfoApi } from './ExternalLearnerAddressInfoApi';
import { ExternalLearnerPersonalInfoApi } from './ExternalLearnerPersonalInfoApi';
import { ExternalLearnerPhoneInfoApi } from './ExternalLearnerPhoneInfoApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ExternalLearnerApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalLearner<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link emailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link homeAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOME_ADDRESS: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_INFO: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link phoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHONE_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPhoneInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceChannelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_CHANNEL_NAV: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ExternalLearnerEmailInfoApi<DeSerializersT>,
      ExternalLearnerAddressInfoApi<DeSerializersT>,
      ExternalLearnerPersonalInfoApi<DeSerializersT>,
      ExternalLearnerPhoneInfoApi<DeSerializersT>,
      PicklistOptionApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMAIL_INFO: new Link('emailInfo', this, linkedApis[0]),
      HOME_ADDRESS: new Link('homeAddress', this, linkedApis[1]),
      PERSONAL_INFO: new OneToOneLink('personalInfo', this, linkedApis[2]),
      PHONE_INFO: new Link('phoneInfo', this, linkedApis[3]),
      SOURCE_CHANNEL_NAV: new OneToOneLink(
        'sourceChannelNav',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = ExternalLearner;

  requestBuilder(): ExternalLearnerRequestBuilder<DeSerializersT> {
    return new ExternalLearnerRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLearner<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExternalLearner<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExternalLearner, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalLearner,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEFAULT_LOCALE: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LOGIN_METHOD: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_GUID: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PERSON_ID_EXTERNAL: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_CHANNEL: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIME_ZONE: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ExternalLearner<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link emailInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMAIL_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerEmailInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link homeAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HOME_ADDRESS: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerAddressInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personalInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSONAL_INFO: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPersonalInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link phoneInfo} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PHONE_INFO: Link<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      ExternalLearnerPhoneInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sourceChannelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_CHANNEL_NAV: OneToOneLink<
      ExternalLearner<DeSerializersT>,
      DeSerializersT,
      PicklistOptionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalLearner<DeSerializers>>;
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
         * Static representation of the {@link sourceChannel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_CHANNEL: fieldBuilder.buildEdmTypeField(
          'sourceChannel',
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
        ALL_FIELDS: new AllFields('*', ExternalLearner)
      };
    }

    return this._schema;
  }
}

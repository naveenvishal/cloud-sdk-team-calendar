/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalLearnerPersonalInfo } from './ExternalLearnerPersonalInfo';
import { ExternalLearnerPersonalInfoRequestBuilder } from './ExternalLearnerPersonalInfoRequestBuilder';
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
export class ExternalLearnerPersonalInfoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExternalLearnerPersonalInfo<DeSerializersT>, DeSerializersT>
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

  entityConstructor = ExternalLearnerPersonalInfo;

  requestBuilder(): ExternalLearnerPersonalInfoRequestBuilder<DeSerializersT> {
    return new ExternalLearnerPersonalInfoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalLearnerPersonalInfo<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalLearnerPersonalInfo<DeSerializersT>,
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
    typeof ExternalLearnerPersonalInfo,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalLearnerPersonalInfo,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ATTACHMENT_ID: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_FIRST_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_LAST_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE_END_DATE: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CERTIFICATE_START_DATE: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CHALLENGE_STATUS: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COUNTRY_OF_BIRTH: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DATE_OF_DEATH: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DISPLAY_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_NAME_ALT_1: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISPLAY_NAME_ALT_2: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME_ALT_1: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME_ALT_2: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAL_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAL_NAME_ALT_1: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAL_NAME_ALT_2: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GENDER: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OVERRIDDEN: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_DELETED: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_ALT_1: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME_ALT_2: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARITAL_STATUS: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME_ALT_1: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME_ALT_2: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME_PREFIX: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NATIVE_PREFERRED_LANG: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFERRED_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALUTATION: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRIPT: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_LAST_NAME: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_NATIONALITY: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_TITLE: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SINCE: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    SUFFIX: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THIRD_NATIONALITY: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ExternalLearnerPersonalInfo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExternalLearnerPersonalInfo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link attachmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ID: fieldBuilder.buildEdmTypeField(
          'attachmentId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_NAME: fieldBuilder.buildEdmTypeField(
          'birthName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'businessFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'businessLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificateEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_END_DATE: fieldBuilder.buildEdmTypeField(
          'certificateEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link certificateStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_START_DATE: fieldBuilder.buildEdmTypeField(
          'certificateStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link challengeStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHALLENGE_STATUS: fieldBuilder.buildEdmTypeField(
          'challengeStatus',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link countryOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'countryOfBirth',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'dateOfBirth',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link dateOfDeath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_DEATH: fieldBuilder.buildEdmTypeField(
          'dateOfDeath',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link displayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME: fieldBuilder.buildEdmTypeField(
          'displayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayNameAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME_ALT_1: fieldBuilder.buildEdmTypeField(
          'displayNameAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link displayNameAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME_ALT_2: fieldBuilder.buildEdmTypeField(
          'displayNameAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'firstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstNameAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME_ALT_1: fieldBuilder.buildEdmTypeField(
          'firstNameAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstNameAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME_ALT_2: fieldBuilder.buildEdmTypeField(
          'firstNameAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAL_NAME: fieldBuilder.buildEdmTypeField(
          'formalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formalNameAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAL_NAME_ALT_1: fieldBuilder.buildEdmTypeField(
          'formalNameAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formalNameAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAL_NAME_ALT_2: fieldBuilder.buildEdmTypeField(
          'formalNameAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEdmTypeField('gender', 'Edm.String', true),
        /**
         * Static representation of the {@link initials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALS: fieldBuilder.buildEdmTypeField(
          'initials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVERRIDDEN: fieldBuilder.buildEdmTypeField(
          'isOverridden',
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
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'lastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNameAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_ALT_1: fieldBuilder.buildEdmTypeField(
          'lastNameAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastNameAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME_ALT_2: fieldBuilder.buildEdmTypeField(
          'lastNameAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maritalStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARITAL_STATUS: fieldBuilder.buildEdmTypeField(
          'maritalStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'middleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleNameAlt1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME_ALT_1: fieldBuilder.buildEdmTypeField(
          'middleNameAlt1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link middleNameAlt2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME_ALT_2: fieldBuilder.buildEdmTypeField(
          'middleNameAlt2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link namePrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_PREFIX: fieldBuilder.buildEdmTypeField(
          'namePrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'nationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nativePreferredLang} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIVE_PREFERRED_LANG: fieldBuilder.buildEdmTypeField(
          'nativePreferredLang',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link preferredName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED_NAME: fieldBuilder.buildEdmTypeField(
          'preferredName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salutation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALUTATION: fieldBuilder.buildEdmTypeField(
          'salutation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link script} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT: fieldBuilder.buildEdmTypeField('script', 'Edm.String', true),
        /**
         * Static representation of the {@link secondLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'secondLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondNationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_NATIONALITY: fieldBuilder.buildEdmTypeField(
          'secondNationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_TITLE: fieldBuilder.buildEdmTypeField(
          'secondTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link since} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINCE: fieldBuilder.buildEdmTypeField('since', 'Edm.DateTime', true),
        /**
         * Static representation of the {@link suffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX: fieldBuilder.buildEdmTypeField('suffix', 'Edm.String', true),
        /**
         * Static representation of the {@link thirdNationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_NATIONALITY: fieldBuilder.buildEdmTypeField(
          'thirdNationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalLearnerPersonalInfo)
      };
    }

    return this._schema;
  }
}

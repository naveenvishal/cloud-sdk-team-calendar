/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InitiativeAlignmentBean } from './InitiativeAlignmentBean';
import { InitiativeAlignmentBeanRequestBuilder } from './InitiativeAlignmentBeanRequestBuilder';
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
export class InitiativeAlignmentBeanApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InitiativeAlignmentBean<DeSerializersT>, DeSerializersT>
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

  entityConstructor = InitiativeAlignmentBean;

  requestBuilder(): InitiativeAlignmentBeanRequestBuilder<DeSerializersT> {
    return new InitiativeAlignmentBeanRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InitiativeAlignmentBean<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InitiativeAlignmentBean<DeSerializersT>,
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
    typeof InitiativeAlignmentBean,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InitiativeAlignmentBean,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_BY: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GOAL_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    GOAL_NAME: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GOAL_TYPE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIATIVE_GROUP_BEAN_ROW_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    INITIATIVE_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    INITIATIVE_NAME: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_END_DATE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_EFFECTIVE_START_DATE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_STATUS: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      InitiativeAlignmentBean<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ALL_FIELDS: AllFields<InitiativeAlignmentBean<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE: fieldBuilder.buildEdmTypeField(
          'createdDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link goalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_ID: fieldBuilder.buildEdmTypeField('goalId', 'Edm.Int64', true),
        /**
         * Static representation of the {@link goalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_NAME: fieldBuilder.buildEdmTypeField(
          'goalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link goalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GOAL_TYPE: fieldBuilder.buildEdmTypeField(
          'goalType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initiativeGroupBeanRowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIATIVE_GROUP_BEAN_ROW_ID: fieldBuilder.buildEdmTypeField(
          'initiativeGroupBeanRowId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link initiativeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIATIVE_ID: fieldBuilder.buildEdmTypeField(
          'initiativeId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link initiativeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIATIVE_NAME: fieldBuilder.buildEdmTypeField(
          'initiativeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE: fieldBuilder.buildEdmTypeField(
          'lastModifiedDate',
          'Edm.DateTime',
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
         * Static representation of the {@link lastModifiedDateWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemEffectiveEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemEffectiveEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemEffectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'mdfSystemEffectiveStartDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemObjectType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_OBJECT_TYPE: fieldBuilder.buildEdmTypeField(
          'mdfSystemObjectType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemRecordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemTransactionSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_TRANSACTION_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'mdfSystemTransactionSequence',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link mdfSystemVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'mdfSystemVersionId',
          'Edm.Int64',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InitiativeAlignmentBean)
      };
    }

    return this._schema;
  }
}

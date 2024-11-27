/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkScheduleDayModelVariantAssignment } from './WorkScheduleDayModelVariantAssignment';
import { WorkScheduleDayModelVariantAssignmentRequestBuilder } from './WorkScheduleDayModelVariantAssignmentRequestBuilder';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { WorkScheduleDayModelVariantIdentifierApi } from './WorkScheduleDayModelVariantIdentifierApi';
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
export class WorkScheduleDayModelVariantAssignmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link variantDayModelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_DAY_MODEL_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variantIdentifierNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_IDENTIFIER_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkScheduleDayModelApi<DeSerializersT>,
      WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VARIANT_DAY_MODEL_NAV: new OneToOneLink(
        'variantDayModelNav',
        this,
        linkedApis[0]
      ),
      VARIANT_IDENTIFIER_NAV: new OneToOneLink(
        'variantIdentifierNav',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = WorkScheduleDayModelVariantAssignment;

  requestBuilder(): WorkScheduleDayModelVariantAssignmentRequestBuilder<DeSerializersT> {
    return new WorkScheduleDayModelVariantAssignmentRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WorkScheduleDayModelVariantAssignment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WorkScheduleDayModelVariantAssignment<DeSerializersT>,
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
    typeof WorkScheduleDayModelVariantAssignment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WorkScheduleDayModelVariantAssignment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_DAY_MODEL: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VARIANT_IDENTIFIER: OrderableEdmTypeField<
      WorkScheduleDayModelVariantAssignment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variantDayModelNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_DAY_MODEL_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variantIdentifierNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIANT_IDENTIFIER_NAV: OneToOneLink<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT,
      WorkScheduleDayModelVariantIdentifierApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkScheduleDayModelVariantAssignment<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link workScheduleDayModelExternalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_SCHEDULE_DAY_MODEL_EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'WorkScheduleDayModel_externalCode',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link entityUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_UUID: fieldBuilder.buildEdmTypeField(
          'entityUUID',
          'Edm.String',
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
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
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
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantDayModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_DAY_MODEL: fieldBuilder.buildEdmTypeField(
          'variantDayModel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link variantIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIANT_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'variantIdentifier',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkScheduleDayModelVariantAssignment)
      };
    }

    return this._schema;
  }
}

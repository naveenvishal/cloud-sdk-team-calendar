/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkOrder } from './WorkOrder';
import { WorkOrderRequestBuilder } from './WorkOrderRequestBuilder';
import { CurrencyApi } from './CurrencyApi';
import { VendorInfoApi } from './VendorInfoApi';
import { PickListValueV2Api } from './PickListValueV2Api';
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
export class WorkOrderApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WorkOrder<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currencyNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      CurrencyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      VendorInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TYPE_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      PickListValueV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrencyApi<DeSerializersT>,
      VendorInfoApi<DeSerializersT>,
      PickListValueV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY_NAV: new OneToOneLink('currencyNav', this, linkedApis[0]),
      VENDOR_NAV: new OneToOneLink('vendorNav', this, linkedApis[1]),
      WORKER_TYPE_NAV: new OneToOneLink('workerTypeNav', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = WorkOrder;

  requestBuilder(): WorkOrderRequestBuilder<DeSerializersT> {
    return new WorkOrderRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WorkOrder<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WorkOrder<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WorkOrder<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WorkOrder, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(WorkOrder, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BILLING_AMOUNT: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BILLING_RATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_END_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    EFFECTIVE_START_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    EFFECTIVE_STATUS: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_WITH_TZ: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_ENTITY_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_OBJECT_TYPE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MDF_SYSTEM_TRANSACTION_SEQUENCE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    MDF_SYSTEM_VERSION_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    USER_SYS_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VENDOR: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_NAME: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_OWNER_ID: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_TYPE: OrderableEdmTypeField<
      WorkOrder<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currencyNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      CurrencyApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      VendorInfoApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workerTypeNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_TYPE_NAV: OneToOneLink<
      WorkOrder<DeSerializersT>,
      DeSerializersT,
      PickListValueV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WorkOrder<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link billingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'billingAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link billingRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_RATE: fieldBuilder.buildEdmTypeField(
          'billingRate',
          'Edm.String',
          true
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
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link effectiveEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_END_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveEndDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link effectiveStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_START_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveStartDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link effectiveStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_STATUS: fieldBuilder.buildEdmTypeField(
          'effectiveStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'endDate',
          'Edm.DateTime',
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
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'startDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link userSysId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SYS_ID: fieldBuilder.buildEdmTypeField(
          'userSysId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vendor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR: fieldBuilder.buildEdmTypeField('vendor', 'Edm.String', true),
        /**
         * Static representation of the {@link workOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'workOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'workOrderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'workOrderOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_TYPE: fieldBuilder.buildEdmTypeField(
          'workerType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WorkOrder)
      };
    }

    return this._schema;
  }
}

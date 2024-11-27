/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { WorkOrderApi } from './WorkOrderApi';
import { Currency, CurrencyType } from './Currency';
import { VendorInfo, VendorInfoType } from './VendorInfo';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

/**
 * This class represents the entity "WorkOrder" of service "FoundationPlatformPLT".
 */
export class WorkOrder<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WorkOrderType<T>
{
  /**
   * Technical entity name for WorkOrder.
   */
  static _entityName = 'WorkOrder';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the WorkOrder entity
   */
  static _keys = ['effectiveStartDate', 'userSysId'];
  /**
   * Billing Amount.
   * @nullable
   */
  billingAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Billing Rate.
   * Maximum length: 32.
   * @nullable
   */
  billingRate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Effective Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End Date.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemObjectType.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemRecordStatus.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Start Date.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userSysId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor.
   * Maximum length: 128.
   * @nullable
   */
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order ID.
   * Maximum length: 128.
   * @nullable
   */
  workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Name.
   * Maximum length: 255.
   * @nullable
   */
  workOrderName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Work Order Owner.
   * Maximum length: 100.
   * @nullable
   */
  workOrderOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Worker Type.
   * Maximum length: 128.
   * @nullable
   */
  workerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Currency} entity.
   */
  currencyNav?: Currency<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorInfo} entity.
   */
  vendorNav?: VendorInfo<T> | null;
  /**
   * One-to-one navigation property to the {@link PickListValueV2} entity.
   */
  workerTypeNav?: PickListValueV2<T> | null;

  constructor(readonly _entityApi: WorkOrderApi<T>) {
    super(_entityApi);
  }
}

export interface WorkOrderType<T extends DeSerializers = DefaultDeSerializers> {
  billingAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  billingRate?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  effectiveStatus?: DeserializedType<T, 'Edm.String'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  userSysId: DeserializedType<T, 'Edm.String'>;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  workOrderId?: DeserializedType<T, 'Edm.String'> | null;
  workOrderName?: DeserializedType<T, 'Edm.String'> | null;
  workOrderOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  workerType?: DeserializedType<T, 'Edm.String'> | null;
  currencyNav?: CurrencyType<T> | null;
  vendorNav?: VendorInfoType<T> | null;
  workerTypeNav?: PickListValueV2Type<T> | null;
}

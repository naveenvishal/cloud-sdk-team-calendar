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
import type { PickListV2Api } from './PickListV2Api';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';

/**
 * This class represents the entity "PickListV2" of service "FoundationPlatformPLT".
 */
export class PickListV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PickListV2Type<T>
{
  /**
   * Technical entity name for PickListV2.
   */
  static _entityName = 'PickListV2';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the PickListV2 entity
   */
  static _keys = ['effectiveStartDate', 'id'];
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
   * Display Order.
   * Maximum length: 255.
   * @nullable
   */
  displayOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective End Date.
   * @nullable
   */
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Code.
   * Maximum length: 128.
   */
  id!: DeserializedType<T, 'Edm.String'>;
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
   * legacyPickListId.
   * Maximum length: 255.
   * @nullable
   */
  legacyPickListId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * immutableEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Type.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * immutableRecordId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Record Status.
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
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Picklist.
   * Maximum length: 128.
   * @nullable
   */
  parentPickList?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * picklistCreationSource.
   * Maximum length: 255.
   * @nullable
   */
  picklistCreationSource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PickListV2} entity.
   */
  parentPickListNav?: PickListV2<T> | null;
  /**
   * One-to-many navigation property to the {@link PickListValueV2} entity.
   */
  values!: PickListValueV2<T>[];

  constructor(readonly _entityApi: PickListV2Api<T>) {
    super(_entityApi);
  }
}

export interface PickListV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  displayOrder?: DeserializedType<T, 'Edm.String'> | null;
  effectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  id: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  legacyPickListId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  parentPickList?: DeserializedType<T, 'Edm.String'> | null;
  picklistCreationSource?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  parentPickListNav?: PickListV2Type<T> | null;
  values: PickListValueV2Type<T>[];
}

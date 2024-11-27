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
import type { TimeAccountApi } from './TimeAccountApi';
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';
import { TimeAccountDetail, TimeAccountDetailType } from './TimeAccountDetail';

/**
 * This class represents the entity "TimeAccount" of service "ECTimeOff".
 */
export class TimeAccount<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeAccountType<T>
{
  /**
   * Technical entity name for TimeAccount.
   */
  static _entityName = 'TimeAccount';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccount entity
   */
  static _keys = ['externalCode'];
  /**
   * accountClosed.
   * @nullable
   */
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * accountType.
   * Maximum length: 128.
   * @nullable
   */
  accountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * bookingEndDate.
   * @nullable
   */
  bookingEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * bookingStartDate.
   * @nullable
   */
  bookingStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * Cust_Denmark_value.
   * @nullable
   */
  custCustDenmarkValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * test.
   * @nullable
   */
  custTest?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * endDate.
   * @nullable
   */
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
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
   * mdfSystemEffectiveEndDate.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemEffectiveStartDate.
   * @nullable
   */
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entity ID.
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
   * Record ID.
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
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemTransactionSequence.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Version ID.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * startDate.
   * @nullable
   */
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * userId.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccountType_1} entity.
   */
  accountTypeNav?: TimeAccountType_1<T> | null;
  /**
   * One-to-many navigation property to the {@link TimeAccountDetail} entity.
   */
  timeAccountDetails!: TimeAccountDetail<T>[];

  constructor(readonly _entityApi: TimeAccountApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAccountType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  accountType?: DeserializedType<T, 'Edm.String'> | null;
  bookingEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bookingStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custCustDenmarkValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  custTest?: DeserializedType<T, 'Edm.Decimal'> | null;
  endDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  startDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  accountTypeNav?: TimeAccountType_1Type<T> | null;
  timeAccountDetails: TimeAccountDetailType<T>[];
}

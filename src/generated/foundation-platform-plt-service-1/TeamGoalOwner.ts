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
import type { TeamGoalOwnerApi } from './TeamGoalOwnerApi';

/**
 * This class represents the entity "TeamGoalOwner" of service "FoundationPlatformPLT".
 */
export class TeamGoalOwner<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TeamGoalOwnerType<T>
{
  /**
   * Technical entity name for TeamGoalOwner.
   */
  static _entityName = 'TeamGoalOwner';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the TeamGoalOwner entity
   */
  static _keys = ['externalCode'];
  /**
   * mdfSystemCreatedBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemCreatedDate.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * mdfSystemLastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * mdfSystemCreatedBy.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemCreatedDate.
   * @nullable
   */
  mdfSystemCreatedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * mdfSystemEntityId.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemLastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  mdfSystemLastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * mdfSystemLastModifiedDate.
   * @nullable
   */
  mdfSystemLastModifiedDateWithTz?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
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
   * mdfSystemStatus.
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
   * mdfSystemVersionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * objId.
   * @nullable
   */
  objId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * ownerType.
   * @nullable
   */
  ownerType?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * userId.
   * Maximum length: 255.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: TeamGoalOwnerApi<T>) {
    super(_entityApi);
  }
}

export interface TeamGoalOwnerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemCreatedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemLastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemLastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemLastModifiedDateWithTz?: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  > | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  objId?: DeserializedType<T, 'Edm.Int64'> | null;
  ownerType?: DeserializedType<T, 'Edm.Int64'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
}

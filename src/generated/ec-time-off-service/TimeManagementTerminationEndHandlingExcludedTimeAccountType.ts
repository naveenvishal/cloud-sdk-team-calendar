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
import type { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi';
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

/**
 * This class represents the entity "TimeManagementTerminationEndHandlingExcludedTimeAccountType" of service "ECTimeOff".
 */
export class TimeManagementTerminationEndHandlingExcludedTimeAccountType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeManagementTerminationEndHandlingExcludedTimeAccountTypeType<T>
{
  /**
   * Technical entity name for TimeManagementTerminationEndHandlingExcludedTimeAccountType.
   */
  static _entityName =
    'TimeManagementTerminationEndHandlingExcludedTimeAccountType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeManagementTerminationEndHandlingExcludedTimeAccountType entity
   */
  static _keys = [
    'TimeManagementTerminationEndHandlingExclusion_externalCode',
    'externalCode'
  ];
  /**
   * Time Management Termination End Handling Exclusion_External Code.
   * Maximum length: 128.
   */
  timeManagementTerminationEndHandlingExclusionExternalCode!: DeserializedType<
    T,
    'Edm.String'
  >;
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
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
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
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccountType_1} entity.
   */
  timeAccountTypeNav?: TimeAccountType_1<T> | null;

  constructor(
    readonly _entityApi: TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TimeManagementTerminationEndHandlingExcludedTimeAccountTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  timeManagementTerminationEndHandlingExclusionExternalCode: DeserializedType<
    T,
    'Edm.String'
  >;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  timeAccountType?: DeserializedType<T, 'Edm.String'> | null;
  timeAccountTypeNav?: TimeAccountType_1Type<T> | null;
}

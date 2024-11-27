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
import type { WorkScheduleDayModelAssignmentSegmentApi } from './WorkScheduleDayModelAssignmentSegmentApi';

/**
 * This class represents the entity "WorkScheduleDayModelAssignmentSegment" of service "ECTimeOff".
 */
export class WorkScheduleDayModelAssignmentSegment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkScheduleDayModelAssignmentSegmentType<T>
{
  /**
   * Technical entity name for WorkScheduleDayModelAssignmentSegment.
   */
  static _entityName = 'WorkScheduleDayModelAssignmentSegment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the WorkScheduleDayModelAssignmentSegment entity
   */
  static _keys = [
    'WorkScheduleDayModelAssignment_day',
    'WorkSchedule_externalCode',
    'externalCode'
  ];
  /**
   * Work Schedule Day Model Assignment_Day.
   */
  workScheduleDayModelAssignmentDay!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Work Schedule_External Code.
   * Maximum length: 128.
   */
  workScheduleExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Category.
   * Maximum length: 255.
   * @nullable
   */
  category?: DeserializedType<T, 'Edm.String'> | null;
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
   * Duration.
   * @nullable
   */
  duration?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * End Time.
   * @nullable
   */
  endTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
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
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
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
   * Transaction Sequence Number.
   * @nullable
   */
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Version ID.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Start Time.
   * @nullable
   */
  startTime?: DeserializedType<T, 'Edm.Time'> | null;

  constructor(
    readonly _entityApi: WorkScheduleDayModelAssignmentSegmentApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WorkScheduleDayModelAssignmentSegmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workScheduleDayModelAssignmentDay: DeserializedType<T, 'Edm.Int64'>;
  workScheduleExternalCode: DeserializedType<T, 'Edm.String'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  duration?: DeserializedType<T, 'Edm.Int64'> | null;
  endTime?: DeserializedType<T, 'Edm.Time'> | null;
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
  startTime?: DeserializedType<T, 'Edm.Time'> | null;
}

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
import type { WorkScheduleDayModelAssignmentApi } from './WorkScheduleDayModelAssignmentApi';
import {
  WorkScheduleDayModel,
  WorkScheduleDayModelType
} from './WorkScheduleDayModel';
import {
  WorkScheduleDayModelAssignmentSegment,
  WorkScheduleDayModelAssignmentSegmentType
} from './WorkScheduleDayModelAssignmentSegment';

/**
 * This class represents the entity "WorkScheduleDayModelAssignment" of service "ECTimeOff".
 */
export class WorkScheduleDayModelAssignment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkScheduleDayModelAssignmentType<T>
{
  /**
   * Technical entity name for WorkScheduleDayModelAssignment.
   */
  static _entityName = 'WorkScheduleDayModelAssignment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the WorkScheduleDayModelAssignment entity
   */
  static _keys = ['WorkSchedule_externalCode', 'day'];
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
   * Day.
   */
  day!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Day Model.
   * Maximum length: 128.
   * @nullable
   */
  dayModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Hours (Decimal).
   * @nullable
   */
  dayWorkingHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Hours And Minutes (hh:mm).
   * Maximum length: 255.
   * @nullable
   */
  hoursAndMinutes?: DeserializedType<T, 'Edm.String'> | null;
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
   * Rounding.
   * Maximum length: 128.
   * @nullable
   */
  roundingBasedOnWorkScheduleInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link WorkScheduleDayModel} entity.
   */
  dayModelNav?: WorkScheduleDayModel<T> | null;
  /**
   * One-to-many navigation property to the {@link WorkScheduleDayModelAssignmentSegment} entity.
   */
  segments!: WorkScheduleDayModelAssignmentSegment<T>[];

  constructor(readonly _entityApi: WorkScheduleDayModelAssignmentApi<T>) {
    super(_entityApi);
  }
}

export interface WorkScheduleDayModelAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workScheduleExternalCode: DeserializedType<T, 'Edm.String'>;
  category?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  day: DeserializedType<T, 'Edm.Int64'>;
  dayModel?: DeserializedType<T, 'Edm.String'> | null;
  dayWorkingHours?: DeserializedType<T, 'Edm.Decimal'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  hoursAndMinutes?: DeserializedType<T, 'Edm.String'> | null;
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
  roundingBasedOnWorkScheduleInformation?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dayModelNav?: WorkScheduleDayModelType<T> | null;
  segments: WorkScheduleDayModelAssignmentSegmentType<T>[];
}

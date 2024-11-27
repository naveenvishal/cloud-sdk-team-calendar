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
import type { HolidayAssignmentApi } from './HolidayAssignmentApi';
import { HolidayCategory, HolidayCategoryType } from './HolidayCategory';
import { Holiday, HolidayType } from './Holiday';

/**
 * This class represents the entity "HolidayAssignment" of service "ECTimeOff".
 */
export class HolidayAssignment<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HolidayAssignmentType<T>
{
  /**
   * Technical entity name for HolidayAssignment.
   */
  static _entityName = 'HolidayAssignment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the HolidayAssignment entity
   */
  static _keys = ['HolidayCalendar_externalCode', 'date'];
  /**
   * HolidayCalendar_External Code.
   * Maximum length: 128.
   */
  holidayCalendarExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * testHolidayAssignment.
   * @nullable
   */
  custTestHolidayAssignment?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Holiday.
   */
  date!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holiday.
   * Maximum length: 128.
   * @nullable
   */
  holiday?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holiday Category.
   * Maximum length: 128.
   * @nullable
   */
  holidayCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Holiday Class.
   * Maximum length: 255.
   * @nullable
   */
  holidayClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Modified On.
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
   * One-to-one navigation property to the {@link HolidayCategory} entity.
   */
  holidayCategoryNav?: HolidayCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link Holiday} entity.
   */
  holidayNav?: Holiday<T> | null;

  constructor(readonly _entityApi: HolidayAssignmentApi<T>) {
    super(_entityApi);
  }
}

export interface HolidayAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  holidayCalendarExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custTestHolidayAssignment?: DeserializedType<T, 'Edm.DateTime'> | null;
  date: DeserializedType<T, 'Edm.DateTime'>;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  holiday?: DeserializedType<T, 'Edm.String'> | null;
  holidayCategory?: DeserializedType<T, 'Edm.String'> | null;
  holidayClass?: DeserializedType<T, 'Edm.String'> | null;
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
  holidayCategoryNav?: HolidayCategoryType<T> | null;
  holidayNav?: HolidayType<T> | null;
}

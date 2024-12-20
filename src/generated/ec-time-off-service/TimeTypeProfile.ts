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
import type { TimeTypeProfileApi } from './TimeTypeProfileApi';
import { AvailableTimeType, AvailableTimeTypeType } from './AvailableTimeType';
import { TimeType, TimeTypeType } from './TimeType';
import { TimeAccountType_1, TimeAccountType_1Type } from './TimeAccountType_1';

/**
 * This class represents the entity "TimeTypeProfile" of service "ECTimeOff".
 */
export class TimeTypeProfile<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeProfileType<T>
{
  /**
   * Technical entity name for TimeTypeProfile.
   */
  static _entityName = 'TimeTypeProfile';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeTypeProfile entity
   */
  static _keys = ['externalCode', 'mdfSystemEffectiveStartDate'];
  /**
   * Update TOiL Account Only When Changes Approved.
   * @nullable
   */
  bookTimeOffInLieuOnTimeSheetApproval?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Update Working Time Account Only When Changes Approved.
   * @nullable
   */
  bookWorkingTimeOnTimeSheetApproval?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
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
   * Default Import Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  defaultImportAttendanceTimeType?: DeserializedType<T, 'Edm.String'> | null;
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
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
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
   * Main Attendance Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainAttendanceTimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Break Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainBreakTimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Main Absence Time Type.
   * Maximum length: 128.
   * @nullable
   */
  mainEssTimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Effective Start Date.
   */
  mdfSystemEffectiveStartDate!: DeserializedType<T, 'Edm.DateTime'>;
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
   * Time Account Type for Time Off in Lieu.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForTimeOffInLieu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Account Type for Working Time Account.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountTypeForWorkingTimeAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextDefaultValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnDebugApos?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnDebugAposRtl?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextLocalized?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text For Time Off Employee Self-Service.
   * Maximum length: 4000.
   * @nullable
   */
  timeOffEssInstructionalTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Recording Variant.
   * Maximum length: 255.
   * @nullable
   */
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link AvailableTimeType} entity.
   */
  availableTimeTypes!: AvailableTimeType<T>[];
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  defaultImportAttendanceTimeTypeNav?: TimeType<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  mainAttendanceTimeTypeNav?: TimeType<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  mainBreakTimeTypeNav?: TimeType<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeType} entity.
   */
  mainEssTimeTypeNav?: TimeType<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccountType_1} entity.
   */
  timeAccountTypeForTimeOffInLieuNav?: TimeAccountType_1<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeAccountType_1} entity.
   */
  timeAccountTypeForWorkingTimeAccountNav?: TimeAccountType_1<T> | null;

  constructor(readonly _entityApi: TimeTypeProfileApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeProfileType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bookTimeOffInLieuOnTimeSheetApproval?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  bookWorkingTimeOnTimeSheetApproval?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  defaultImportAttendanceTimeType?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mainAttendanceTimeType?: DeserializedType<T, 'Edm.String'> | null;
  mainBreakTimeType?: DeserializedType<T, 'Edm.String'> | null;
  mainEssTimeType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate: DeserializedType<T, 'Edm.DateTime'>;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  timeAccountTypeForTimeOffInLieu?: DeserializedType<T, 'Edm.String'> | null;
  timeAccountTypeForWorkingTimeAccount?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeOffEssInstructionalTextArSa?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextCyGb?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextDefaultValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeOffEssInstructionalTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextEnDebugApos?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeOffEssInstructionalTextEnDebugAposRtl?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeOffEssInstructionalTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextEsMx?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextFrCa?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextHiIn?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextIwIl?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextLocalized?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  timeOffEssInstructionalTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextThTh?: DeserializedType<T, 'Edm.String'> | null;
  timeOffEssInstructionalTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
  timeRecordingVariant?: DeserializedType<T, 'Edm.String'> | null;
  availableTimeTypes: AvailableTimeTypeType<T>[];
  defaultImportAttendanceTimeTypeNav?: TimeTypeType<T> | null;
  mainAttendanceTimeTypeNav?: TimeTypeType<T> | null;
  mainBreakTimeTypeNav?: TimeTypeType<T> | null;
  mainEssTimeTypeNav?: TimeTypeType<T> | null;
  timeAccountTypeForTimeOffInLieuNav?: TimeAccountType_1Type<T> | null;
  timeAccountTypeForWorkingTimeAccountNav?: TimeAccountType_1Type<T> | null;
}

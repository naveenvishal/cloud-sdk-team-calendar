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
import type { TimeTypeApi } from './TimeTypeApi';
import {
  AbsenceCountingMethod,
  AbsenceCountingMethodType
} from './AbsenceCountingMethod';
import { TimeTypeAus, TimeTypeAusType } from './TimeTypeAus';
import { TimeTypeCan, TimeTypeCanType } from './TimeTypeCan';
import { TimeTypeDeu, TimeTypeDeuType } from './TimeTypeDeu';
import { TimeTypeNld, TimeTypeNldType } from './TimeTypeNld';
import { TimeTypeUsa, TimeTypeUsaType } from './TimeTypeUsa';
import {
  TimeAccountPostingRule,
  TimeAccountPostingRuleType
} from './TimeAccountPostingRule';

/**
 * This class represents the entity "TimeType" of service "ECTimeOff".
 */
export class TimeType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeTypeType<T>
{
  /**
   * Technical entity name for TimeType.
   */
  static _entityName = 'TimeType';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeType entity
   */
  static _keys = ['externalCode'];
  /**
   * Absence Class.
   * Maximum length: 255.
   * @nullable
   */
  absenceClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Absence Counting Configuration.
   * Maximum length: 128.
   * @nullable
   */
  absenceCountingConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Absence Requesting Within Flextime Bandwidth.
   * @nullable
   */
  absenceRequestingWithinFlextimeBandwidthAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Absence Retention Group.
   * Maximum length: 128.
   * @nullable
   */
  absenceRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accrual Recalculation Relevance.
   * Maximum length: 255.
   * @nullable
   */
  accrualRecalculationRelevance?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activate Cancellation Workflow.
   * @nullable
   */
  activateCancellationWorkflow?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Admin Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  adminWorkflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allocation Strategy.
   * Maximum length: 255.
   * @nullable
   */
  allocationStrategy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Permitted Fractions For Unit Day.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitDay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Permitted Fractions For Unit Hour.
   * Maximum length: 255.
   * @nullable
   */
  allowedFractionsUnitHour?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Requests In Increments Of [Minutes].
   * @nullable
   */
  allowedRequestingIncrement?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Balance Calculation Setting.
   * Maximum length: 255.
   * @nullable
   */
  balanceCalculationSetting?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duration Display According To.
   * Maximum length: 255.
   * @nullable
   */
  calculationMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Classification.
   * Maximum length: 255.
   * @nullable
   */
  category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Collision Grouping.
   * Maximum length: 128.
   * @nullable
   */
  collisionGrouping?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Counting Method.
   * Maximum length: 128.
   * @nullable
   */
  countingMethod?: DeserializedType<T, 'Edm.String'> | null;
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
   * Enable Employee Time Calendar Creation.
   * @nullable
   */
  enableEmployeeTimeCalendarCreation?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
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
   * Flexible Requesting Allowed.
   * @nullable
   */
  flexibleRequestingAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Leave of Absence Event Reason (Return To Work).
   * Maximum length: 32.
   * @nullable
   */
  loaEndEventReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leave of Absence Event Reason (Plan).
   * Maximum length: 32.
   * @nullable
   */
  loaStartEventReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Duration in Months.
   * @nullable
   */
  maximumDurationInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
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
   * versionId.
   * @nullable
   */
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Not to Count as Time in Service.
   * @nullable
   */
  notToCountAsTimeInService?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Posting Order.
   * Maximum length: 128.
   * @nullable
   */
  postingOrder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Priority.
   * Maximum length: 128.
   * @nullable
   */
  postingPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requesting on Non-Working Days Allowed.
   * @nullable
   */
  requestingOnNonWorkingDaysAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Undetermined End Date Allowed.
   * @nullable
   */
  undeterminedEndDateAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Unit.
   * Maximum length: 255.
   * @nullable
   */
  unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AbsenceCountingMethod} entity.
   */
  countingMethodNav?: AbsenceCountingMethod<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeTypeAus} entity.
   */
  countryExtensionAus?: TimeTypeAus<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeTypeCan} entity.
   */
  countryExtensionCan?: TimeTypeCan<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeTypeDeu} entity.
   */
  countryExtensionDeu?: TimeTypeDeu<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeTypeNld} entity.
   */
  countryExtensionNld?: TimeTypeNld<T> | null;
  /**
   * One-to-one navigation property to the {@link TimeTypeUsa} entity.
   */
  countryExtensionUsa?: TimeTypeUsa<T> | null;
  /**
   * One-to-many navigation property to the {@link TimeAccountPostingRule} entity.
   */
  timeAccountPostingRules!: TimeAccountPostingRule<T>[];

  constructor(readonly _entityApi: TimeTypeApi<T>) {
    super(_entityApi);
  }
}

export interface TimeTypeType<T extends DeSerializers = DefaultDeSerializers> {
  absenceClass?: DeserializedType<T, 'Edm.String'> | null;
  absenceCountingConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  absenceRequestingWithinFlextimeBandwidthAllowed?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  absenceRetentionGroup?: DeserializedType<T, 'Edm.String'> | null;
  accrualRecalculationRelevance?: DeserializedType<T, 'Edm.String'> | null;
  activateCancellationWorkflow?: DeserializedType<T, 'Edm.Boolean'> | null;
  adminWorkflow?: DeserializedType<T, 'Edm.String'> | null;
  allocationStrategy?: DeserializedType<T, 'Edm.String'> | null;
  allowedFractionsUnitDay?: DeserializedType<T, 'Edm.String'> | null;
  allowedFractionsUnitHour?: DeserializedType<T, 'Edm.String'> | null;
  allowedRequestingIncrement?: DeserializedType<T, 'Edm.Int64'> | null;
  balanceCalculationSetting?: DeserializedType<T, 'Edm.String'> | null;
  calculationMethod?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  collisionGrouping?: DeserializedType<T, 'Edm.String'> | null;
  countingMethod?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  enableEmployeeTimeCalendarCreation?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
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
  flexibleRequestingAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  loaEndEventReason?: DeserializedType<T, 'Edm.String'> | null;
  loaStartEventReason?: DeserializedType<T, 'Edm.String'> | null;
  maximumDurationInMonths?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEntityId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  notToCountAsTimeInService?: DeserializedType<T, 'Edm.Boolean'> | null;
  postingOrder?: DeserializedType<T, 'Edm.String'> | null;
  postingPriority?: DeserializedType<T, 'Edm.String'> | null;
  requestingOnNonWorkingDaysAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  undeterminedEndDateAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  countingMethodNav?: AbsenceCountingMethodType<T> | null;
  countryExtensionAus?: TimeTypeAusType<T> | null;
  countryExtensionCan?: TimeTypeCanType<T> | null;
  countryExtensionDeu?: TimeTypeDeuType<T> | null;
  countryExtensionNld?: TimeTypeNldType<T> | null;
  countryExtensionUsa?: TimeTypeUsaType<T> | null;
  timeAccountPostingRules: TimeAccountPostingRuleType<T>[];
}

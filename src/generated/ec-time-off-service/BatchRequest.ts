/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  TimeAccountPostingRule,
  WorkScheduleDayModelVariantAssignment,
  HolidayAssignment,
  TimeAccountPurchaseProfile,
  TimeTypeCan,
  WorkScheduleDayModelVariantIdentifier,
  TimeManagementTerminationEndHandlingExcludedEventReason,
  TimeAccountPurchaseProfilePayComponentAssignment,
  EmployeeTimeGroupItem,
  WorkScheduleDayModelAssignment,
  TimeAccountDetail,
  TimeTypeNld,
  AbsenceCountingMethod,
  ShiftClassification,
  WorkScheduleDay,
  HolidayCalendar,
  TimeManagementTerminationEndHandlingExcludedTimeAccountType,
  EmployeeTimeDeu,
  TimeAccount,
  WorkScheduleDayModelAssignmentSegment,
  EmployeeTimeCol,
  EmployeeTimeEsp,
  TimeManagementTerminationEndHandlingConfiguration,
  HolidayCategory,
  ElectronicSicknessCertificateExclusionReasonDeu,
  EmployeeTimeGroup,
  TimeAccountType_1,
  AccrualCalculationBase,
  EmployeeTimeUsa,
  TimeTypeUsa,
  TemporaryTimeInformation,
  TimeTypeProfile,
  TimeManagementAlert,
  TimeTypeDeu,
  TimeType,
  TimeManagementTerminationEndHandlingExclusion,
  EmployeeTimeMex,
  WorkScheduleDayModel,
  TimeAccountSnapshot,
  EmpTimeAccountBalance,
  TimeManagementAlertMessage,
  EmployeeTimeNld,
  EmployeeTimeCan,
  TimeManagementTerminationEndHandlingLegalEntityConfiguration,
  EmployeeTimePol,
  TimeAccountPayoutProfile,
  TimeAccountTypeAus,
  PeriodicTimeAccountUpdateProfile,
  AvailableTimeType,
  WorkSchedule,
  EmployeeTimeAus,
  WorkScheduleDayModelSegment,
  RecalculationBasedField,
  Holiday,
  EmployeeTimeCalendar,
  TimeTypeAus,
  EmployeeTime
} from './index';

/**
 * Batch builder for operations supported on the Ec Time Off Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadEcTimeOffServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadEcTimeOffServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadEcTimeOffServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadEcTimeOffServiceRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadEcTimeOffServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultEcTimeOffServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Ec Time Off Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteEcTimeOffServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteEcTimeOffServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteEcTimeOffServiceRequestBuilder<DeSerializersT>
    | Array<WriteEcTimeOffServiceRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteEcTimeOffServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultEcTimeOffServicePath = '/odata/v2';
export type ReadEcTimeOffServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<TimeAccountPostingRule<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<HolidayAssignment<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TimeTypeCan<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      TimeAccountPurchaseProfilePayComponentAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeGroupItem<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TimeAccountDetail<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeTypeNld<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AbsenceCountingMethod<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ShiftClassification<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WorkScheduleDay<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<HolidayCalendar<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeDeu<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeAccount<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkScheduleDayModelAssignmentSegment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeCol<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTimeEsp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeGroup<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeAccountType_1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AccrualCalculationBase<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTimeUsa<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TemporaryTimeInformation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeTypeDeu<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeMex<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WorkScheduleDayModel<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeAccountSnapshot<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmpTimeAccountBalance<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimeNld<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTimeCan<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<EmployeeTimePol<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TimeAccountTypeAus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PeriodicTimeAccountUpdateProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AvailableTimeType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WorkSchedule<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WorkScheduleDayModelSegment<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      RecalculationBasedField<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Holiday<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTimeCalendar<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeTypeAus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeAccountPostingRule<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<HolidayAssignment<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TimeTypeCan<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      TimeAccountPurchaseProfilePayComponentAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      EmployeeTimeGroupItem<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TimeAccountDetail<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeTypeNld<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AbsenceCountingMethod<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ShiftClassification<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WorkScheduleDay<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<HolidayCalendar<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeDeu<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeAccount<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WorkScheduleDayModelAssignmentSegment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeCol<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTimeEsp<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeGroup<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeAccountType_1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AccrualCalculationBase<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeUsa<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TemporaryTimeInformation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeTypeDeu<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeMex<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WorkScheduleDayModel<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeAccountSnapshot<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      EmpTimeAccountBalance<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimeNld<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTimeCan<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeeTimePol<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TimeAccountTypeAus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PeriodicTimeAccountUpdateProfile<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AvailableTimeType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WorkSchedule<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WorkScheduleDayModelSegment<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      RecalculationBasedField<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Holiday<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTimeCalendar<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeTypeAus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>;
export type WriteEcTimeOffServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<TimeAccountPostingRule<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccountPostingRule<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccountPostingRule<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkScheduleDayModelVariantAssignment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<HolidayAssignment<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<HolidayAssignment<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<HolidayAssignment<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeAccountPurchaseProfile<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TimeTypeCan<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeCan<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeCan<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkScheduleDayModelVariantIdentifier<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedEventReason<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      TimeAccountPurchaseProfilePayComponentAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeAccountPurchaseProfilePayComponentAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeAccountPurchaseProfilePayComponentAssignment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeGroupItem<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeGroupItem<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeGroupItem<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkScheduleDayModelAssignment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TimeAccountDetail<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccountDetail<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccountDetail<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeTypeNld<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeNld<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeNld<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AbsenceCountingMethod<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AbsenceCountingMethod<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AbsenceCountingMethod<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ShiftClassification<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ShiftClassification<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ShiftClassification<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WorkScheduleDay<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WorkScheduleDay<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WorkScheduleDay<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<HolidayCalendar<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<HolidayCalendar<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<HolidayCalendar<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementTerminationEndHandlingExcludedTimeAccountType<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeDeu<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeDeu<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeDeu<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeAccount<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccount<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccount<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkScheduleDayModelAssignmentSegment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkScheduleDayModelAssignmentSegment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkScheduleDayModelAssignmentSegment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeCol<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeCol<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeCol<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTimeEsp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeEsp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeEsp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementTerminationEndHandlingConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<HolidayCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeGroup<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeGroup<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeGroup<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeAccountType_1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccountType_1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccountType_1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AccrualCalculationBase<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AccrualCalculationBase<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AccrualCalculationBase<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTimeUsa<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeUsa<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeUsa<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeUsa<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TemporaryTimeInformation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TemporaryTimeInformation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TemporaryTimeInformation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeProfile<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeManagementAlert<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeTypeDeu<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeDeu<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeDeu<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementTerminationEndHandlingExclusion<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeMex<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeMex<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeMex<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WorkScheduleDayModel<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WorkScheduleDayModel<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WorkScheduleDayModel<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeAccountSnapshot<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccountSnapshot<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccountSnapshot<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmpTimeAccountBalance<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmpTimeAccountBalance<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmpTimeAccountBalance<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementAlertMessage<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimeNld<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeNld<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeNld<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTimeCan<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeCan<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeCan<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeManagementTerminationEndHandlingLegalEntityConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<EmployeeTimePol<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimePol<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimePol<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TimeAccountTypeAus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeAccountTypeAus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeAccountTypeAus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PeriodicTimeAccountUpdateProfile<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PeriodicTimeAccountUpdateProfile<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PeriodicTimeAccountUpdateProfile<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AvailableTimeType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AvailableTimeType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AvailableTimeType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WorkSchedule<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WorkSchedule<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WorkSchedule<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeAus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WorkScheduleDayModelSegment<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WorkScheduleDayModelSegment<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WorkScheduleDayModelSegment<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      RecalculationBasedField<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      RecalculationBasedField<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      RecalculationBasedField<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Holiday<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Holiday<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Holiday<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTimeCalendar<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTimeCalendar<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTimeCalendar<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeTypeAus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeTypeAus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeTypeAus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTime<DeSerializersT>, DeSerializersT>;

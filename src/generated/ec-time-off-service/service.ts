/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPostingRuleApi } from './TimeAccountPostingRuleApi';
import { WorkScheduleDayModelVariantAssignmentApi } from './WorkScheduleDayModelVariantAssignmentApi';
import { HolidayAssignmentApi } from './HolidayAssignmentApi';
import { TimeAccountPurchaseProfileApi } from './TimeAccountPurchaseProfileApi';
import { TimeTypeCanApi } from './TimeTypeCanApi';
import { WorkScheduleDayModelVariantIdentifierApi } from './WorkScheduleDayModelVariantIdentifierApi';
import { TimeManagementTerminationEndHandlingExcludedEventReasonApi } from './TimeManagementTerminationEndHandlingExcludedEventReasonApi';
import { TimeAccountPurchaseProfilePayComponentAssignmentApi } from './TimeAccountPurchaseProfilePayComponentAssignmentApi';
import { EmployeeTimeGroupItemApi } from './EmployeeTimeGroupItemApi';
import { WorkScheduleDayModelAssignmentApi } from './WorkScheduleDayModelAssignmentApi';
import { TimeAccountDetailApi } from './TimeAccountDetailApi';
import { TimeTypeNldApi } from './TimeTypeNldApi';
import { AbsenceCountingMethodApi } from './AbsenceCountingMethodApi';
import { ShiftClassificationApi } from './ShiftClassificationApi';
import { WorkScheduleDayApi } from './WorkScheduleDayApi';
import { HolidayCalendarApi } from './HolidayCalendarApi';
import { TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi } from './TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi';
import { EmployeeTimeDeuApi } from './EmployeeTimeDeuApi';
import { TimeAccountApi } from './TimeAccountApi';
import { WorkScheduleDayModelAssignmentSegmentApi } from './WorkScheduleDayModelAssignmentSegmentApi';
import { EmployeeTimeColApi } from './EmployeeTimeColApi';
import { EmployeeTimeEspApi } from './EmployeeTimeEspApi';
import { TimeManagementTerminationEndHandlingConfigurationApi } from './TimeManagementTerminationEndHandlingConfigurationApi';
import { HolidayCategoryApi } from './HolidayCategoryApi';
import { ElectronicSicknessCertificateExclusionReasonDeuApi } from './ElectronicSicknessCertificateExclusionReasonDeuApi';
import { EmployeeTimeGroupApi } from './EmployeeTimeGroupApi';
import { TimeAccountType_1Api } from './TimeAccountType_1Api';
import { AccrualCalculationBaseApi } from './AccrualCalculationBaseApi';
import { EmployeeTimeUsaApi } from './EmployeeTimeUsaApi';
import { TimeTypeUsaApi } from './TimeTypeUsaApi';
import { TemporaryTimeInformationApi } from './TemporaryTimeInformationApi';
import { TimeTypeProfileApi } from './TimeTypeProfileApi';
import { TimeManagementAlertApi } from './TimeManagementAlertApi';
import { TimeTypeDeuApi } from './TimeTypeDeuApi';
import { TimeTypeApi } from './TimeTypeApi';
import { TimeManagementTerminationEndHandlingExclusionApi } from './TimeManagementTerminationEndHandlingExclusionApi';
import { EmployeeTimeMexApi } from './EmployeeTimeMexApi';
import { WorkScheduleDayModelApi } from './WorkScheduleDayModelApi';
import { TimeAccountSnapshotApi } from './TimeAccountSnapshotApi';
import { EmpTimeAccountBalanceApi } from './EmpTimeAccountBalanceApi';
import { TimeManagementAlertMessageApi } from './TimeManagementAlertMessageApi';
import { EmployeeTimeNldApi } from './EmployeeTimeNldApi';
import { EmployeeTimeCanApi } from './EmployeeTimeCanApi';
import { TimeManagementTerminationEndHandlingLegalEntityConfigurationApi } from './TimeManagementTerminationEndHandlingLegalEntityConfigurationApi';
import { EmployeeTimePolApi } from './EmployeeTimePolApi';
import { TimeAccountPayoutProfileApi } from './TimeAccountPayoutProfileApi';
import { TimeAccountTypeAusApi } from './TimeAccountTypeAusApi';
import { PeriodicTimeAccountUpdateProfileApi } from './PeriodicTimeAccountUpdateProfileApi';
import { AvailableTimeTypeApi } from './AvailableTimeTypeApi';
import { WorkScheduleApi } from './WorkScheduleApi';
import { EmployeeTimeAusApi } from './EmployeeTimeAusApi';
import { WorkScheduleDayModelSegmentApi } from './WorkScheduleDayModelSegmentApi';
import { RecalculationBasedFieldApi } from './RecalculationBasedFieldApi';
import { HolidayApi } from './HolidayApi';
import { EmployeeTimeCalendarApi } from './EmployeeTimeCalendarApi';
import { TimeTypeAusApi } from './TimeTypeAusApi';
import { EmployeeTimeApi } from './EmployeeTimeApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function ecTimeOffService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): EcTimeOffService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new EcTimeOffService(mergeDefaultDeSerializersWith(deSerializers));
}
class EcTimeOffService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, ctor: new (...args: any[]) => any): any {
    if (!this.apis[key]) {
      this.apis[key] = new ctor(this.deSerializers);
    }
    return this.apis[key];
  }

  get timeAccountPostingRuleApi(): TimeAccountPostingRuleApi<DeSerializersT> {
    const api = this.initApi(
      'timeAccountPostingRuleApi',
      TimeAccountPostingRuleApi
    );
    const linkedApis = [
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workScheduleDayModelVariantAssignmentApi(): WorkScheduleDayModelVariantAssignmentApi<DeSerializersT> {
    const api = this.initApi(
      'workScheduleDayModelVariantAssignmentApi',
      WorkScheduleDayModelVariantAssignmentApi
    );
    const linkedApis = [
      this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi),
      this.initApi(
        'workScheduleDayModelVariantIdentifierApi',
        WorkScheduleDayModelVariantIdentifierApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get holidayAssignmentApi(): HolidayAssignmentApi<DeSerializersT> {
    const api = this.initApi('holidayAssignmentApi', HolidayAssignmentApi);
    const linkedApis = [
      this.initApi('holidayCategoryApi', HolidayCategoryApi),
      this.initApi('holidayApi', HolidayApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeAccountPurchaseProfileApi(): TimeAccountPurchaseProfileApi<DeSerializersT> {
    const api = this.initApi(
      'timeAccountPurchaseProfileApi',
      TimeAccountPurchaseProfileApi
    );
    const linkedApis = [
      this.initApi(
        'timeAccountPurchaseProfilePayComponentAssignmentApi',
        TimeAccountPurchaseProfilePayComponentAssignmentApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeTypeCanApi(): TimeTypeCanApi<DeSerializersT> {
    return this.initApi('timeTypeCanApi', TimeTypeCanApi);
  }

  get workScheduleDayModelVariantIdentifierApi(): WorkScheduleDayModelVariantIdentifierApi<DeSerializersT> {
    return this.initApi(
      'workScheduleDayModelVariantIdentifierApi',
      WorkScheduleDayModelVariantIdentifierApi
    );
  }

  get timeManagementTerminationEndHandlingExcludedEventReasonApi(): TimeManagementTerminationEndHandlingExcludedEventReasonApi<DeSerializersT> {
    return this.initApi(
      'timeManagementTerminationEndHandlingExcludedEventReasonApi',
      TimeManagementTerminationEndHandlingExcludedEventReasonApi
    );
  }

  get timeAccountPurchaseProfilePayComponentAssignmentApi(): TimeAccountPurchaseProfilePayComponentAssignmentApi<DeSerializersT> {
    return this.initApi(
      'timeAccountPurchaseProfilePayComponentAssignmentApi',
      TimeAccountPurchaseProfilePayComponentAssignmentApi
    );
  }

  get employeeTimeGroupItemApi(): EmployeeTimeGroupItemApi<DeSerializersT> {
    const api = this.initApi(
      'employeeTimeGroupItemApi',
      EmployeeTimeGroupItemApi
    );
    const linkedApis = [this.initApi('employeeTimeApi', EmployeeTimeApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workScheduleDayModelAssignmentApi(): WorkScheduleDayModelAssignmentApi<DeSerializersT> {
    const api = this.initApi(
      'workScheduleDayModelAssignmentApi',
      WorkScheduleDayModelAssignmentApi
    );
    const linkedApis = [
      this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi),
      this.initApi(
        'workScheduleDayModelAssignmentSegmentApi',
        WorkScheduleDayModelAssignmentSegmentApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeAccountDetailApi(): TimeAccountDetailApi<DeSerializersT> {
    const api = this.initApi('timeAccountDetailApi', TimeAccountDetailApi);
    const linkedApis = [
      this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi),
      this.initApi('employeeTimeApi', EmployeeTimeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeTypeNldApi(): TimeTypeNldApi<DeSerializersT> {
    return this.initApi('timeTypeNldApi', TimeTypeNldApi);
  }

  get absenceCountingMethodApi(): AbsenceCountingMethodApi<DeSerializersT> {
    return this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi);
  }

  get shiftClassificationApi(): ShiftClassificationApi<DeSerializersT> {
    return this.initApi('shiftClassificationApi', ShiftClassificationApi);
  }

  get workScheduleDayApi(): WorkScheduleDayApi<DeSerializersT> {
    return this.initApi('workScheduleDayApi', WorkScheduleDayApi);
  }

  get holidayCalendarApi(): HolidayCalendarApi<DeSerializersT> {
    const api = this.initApi('holidayCalendarApi', HolidayCalendarApi);
    const linkedApis = [
      this.initApi('holidayAssignmentApi', HolidayAssignmentApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi(): TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi<DeSerializersT> {
    const api = this.initApi(
      'timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi',
      TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi
    );
    const linkedApis = [
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimeDeuApi(): EmployeeTimeDeuApi<DeSerializersT> {
    const api = this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi);
    const linkedApis = [
      this.initApi(
        'electronicSicknessCertificateExclusionReasonDeuApi',
        ElectronicSicknessCertificateExclusionReasonDeuApi
      ),
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi),
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeAccountApi(): TimeAccountApi<DeSerializersT> {
    const api = this.initApi('timeAccountApi', TimeAccountApi);
    const linkedApis = [
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api),
      this.initApi('timeAccountDetailApi', TimeAccountDetailApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workScheduleDayModelAssignmentSegmentApi(): WorkScheduleDayModelAssignmentSegmentApi<DeSerializersT> {
    return this.initApi(
      'workScheduleDayModelAssignmentSegmentApi',
      WorkScheduleDayModelAssignmentSegmentApi
    );
  }

  get employeeTimeColApi(): EmployeeTimeColApi<DeSerializersT> {
    const api = this.initApi('employeeTimeColApi', EmployeeTimeColApi);
    const linkedApis = [
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimeEspApi(): EmployeeTimeEspApi<DeSerializersT> {
    const api = this.initApi('employeeTimeEspApi', EmployeeTimeEspApi);
    const linkedApis = [
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeManagementTerminationEndHandlingConfigurationApi(): TimeManagementTerminationEndHandlingConfigurationApi<DeSerializersT> {
    const api = this.initApi(
      'timeManagementTerminationEndHandlingConfigurationApi',
      TimeManagementTerminationEndHandlingConfigurationApi
    );
    const linkedApis = [
      this.initApi(
        'timeManagementTerminationEndHandlingLegalEntityConfigurationApi',
        TimeManagementTerminationEndHandlingLegalEntityConfigurationApi
      ),
      this.initApi(
        'timeManagementTerminationEndHandlingExclusionApi',
        TimeManagementTerminationEndHandlingExclusionApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get holidayCategoryApi(): HolidayCategoryApi<DeSerializersT> {
    return this.initApi('holidayCategoryApi', HolidayCategoryApi);
  }

  get electronicSicknessCertificateExclusionReasonDeuApi(): ElectronicSicknessCertificateExclusionReasonDeuApi<DeSerializersT> {
    return this.initApi(
      'electronicSicknessCertificateExclusionReasonDeuApi',
      ElectronicSicknessCertificateExclusionReasonDeuApi
    );
  }

  get employeeTimeGroupApi(): EmployeeTimeGroupApi<DeSerializersT> {
    const api = this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi);
    const linkedApis = [
      this.initApi('employeeTimeGroupItemApi', EmployeeTimeGroupItemApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeAccountType_1Api(): TimeAccountType_1Api<DeSerializersT> {
    const api = this.initApi('timeAccountType_1Api', TimeAccountType_1Api);
    const linkedApis = [
      this.initApi('timeAccountTypeAusApi', TimeAccountTypeAusApi),
      this.initApi(
        'periodicTimeAccountUpdateProfileApi',
        PeriodicTimeAccountUpdateProfileApi
      ),
      this.initApi('recalculationBasedFieldApi', RecalculationBasedFieldApi),
      this.initApi('timeAccountPayoutProfileApi', TimeAccountPayoutProfileApi),
      this.initApi(
        'timeAccountPurchaseProfileApi',
        TimeAccountPurchaseProfileApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get accrualCalculationBaseApi(): AccrualCalculationBaseApi<DeSerializersT> {
    return this.initApi('accrualCalculationBaseApi', AccrualCalculationBaseApi);
  }

  get employeeTimeUsaApi(): EmployeeTimeUsaApi<DeSerializersT> {
    return this.initApi('employeeTimeUsaApi', EmployeeTimeUsaApi);
  }

  get timeTypeUsaApi(): TimeTypeUsaApi<DeSerializersT> {
    return this.initApi('timeTypeUsaApi', TimeTypeUsaApi);
  }

  get temporaryTimeInformationApi(): TemporaryTimeInformationApi<DeSerializersT> {
    const api = this.initApi(
      'temporaryTimeInformationApi',
      TemporaryTimeInformationApi
    );
    const linkedApis = [
      this.initApi('workScheduleDayModelApi', WorkScheduleDayModelApi),
      this.initApi('workScheduleApi', WorkScheduleApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeTypeProfileApi(): TimeTypeProfileApi<DeSerializersT> {
    const api = this.initApi('timeTypeProfileApi', TimeTypeProfileApi);
    const linkedApis = [
      this.initApi('availableTimeTypeApi', AvailableTimeTypeApi),
      this.initApi('timeTypeApi', TimeTypeApi),
      this.initApi('timeTypeApi', TimeTypeApi),
      this.initApi('timeTypeApi', TimeTypeApi),
      this.initApi('timeTypeApi', TimeTypeApi),
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api),
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeManagementAlertApi(): TimeManagementAlertApi<DeSerializersT> {
    const api = this.initApi('timeManagementAlertApi', TimeManagementAlertApi);
    const linkedApis = [
      this.initApi(
        'timeManagementAlertMessageApi',
        TimeManagementAlertMessageApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeTypeDeuApi(): TimeTypeDeuApi<DeSerializersT> {
    return this.initApi('timeTypeDeuApi', TimeTypeDeuApi);
  }

  get timeTypeApi(): TimeTypeApi<DeSerializersT> {
    const api = this.initApi('timeTypeApi', TimeTypeApi);
    const linkedApis = [
      this.initApi('absenceCountingMethodApi', AbsenceCountingMethodApi),
      this.initApi('timeTypeAusApi', TimeTypeAusApi),
      this.initApi('timeTypeCanApi', TimeTypeCanApi),
      this.initApi('timeTypeDeuApi', TimeTypeDeuApi),
      this.initApi('timeTypeNldApi', TimeTypeNldApi),
      this.initApi('timeTypeUsaApi', TimeTypeUsaApi),
      this.initApi('timeAccountPostingRuleApi', TimeAccountPostingRuleApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeManagementTerminationEndHandlingExclusionApi(): TimeManagementTerminationEndHandlingExclusionApi<DeSerializersT> {
    const api = this.initApi(
      'timeManagementTerminationEndHandlingExclusionApi',
      TimeManagementTerminationEndHandlingExclusionApi
    );
    const linkedApis = [
      this.initApi(
        'timeManagementTerminationEndHandlingExcludedEventReasonApi',
        TimeManagementTerminationEndHandlingExcludedEventReasonApi
      ),
      this.initApi(
        'timeManagementTerminationEndHandlingExcludedTimeAccountTypeApi',
        TimeManagementTerminationEndHandlingExcludedTimeAccountTypeApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimeMexApi(): EmployeeTimeMexApi<DeSerializersT> {
    const api = this.initApi('employeeTimeMexApi', EmployeeTimeMexApi);
    const linkedApis = [
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workScheduleDayModelApi(): WorkScheduleDayModelApi<DeSerializersT> {
    const api = this.initApi(
      'workScheduleDayModelApi',
      WorkScheduleDayModelApi
    );
    const linkedApis = [
      this.initApi(
        'workScheduleDayModelSegmentApi',
        WorkScheduleDayModelSegmentApi
      ),
      this.initApi('shiftClassificationApi', ShiftClassificationApi),
      this.initApi(
        'workScheduleDayModelVariantAssignmentApi',
        WorkScheduleDayModelVariantAssignmentApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeAccountSnapshotApi(): TimeAccountSnapshotApi<DeSerializersT> {
    const api = this.initApi('timeAccountSnapshotApi', TimeAccountSnapshotApi);
    const linkedApis = [
      this.initApi('timeAccountType_1Api', TimeAccountType_1Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get empTimeAccountBalanceApi(): EmpTimeAccountBalanceApi<DeSerializersT> {
    return this.initApi('empTimeAccountBalanceApi', EmpTimeAccountBalanceApi);
  }

  get timeManagementAlertMessageApi(): TimeManagementAlertMessageApi<DeSerializersT> {
    const api = this.initApi(
      'timeManagementAlertMessageApi',
      TimeManagementAlertMessageApi
    );
    const linkedApis = [
      this.initApi('employeeTimeApi', EmployeeTimeApi),
      this.initApi('timeAccountApi', TimeAccountApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimeNldApi(): EmployeeTimeNldApi<DeSerializersT> {
    return this.initApi('employeeTimeNldApi', EmployeeTimeNldApi);
  }

  get employeeTimeCanApi(): EmployeeTimeCanApi<DeSerializersT> {
    return this.initApi('employeeTimeCanApi', EmployeeTimeCanApi);
  }

  get timeManagementTerminationEndHandlingLegalEntityConfigurationApi(): TimeManagementTerminationEndHandlingLegalEntityConfigurationApi<DeSerializersT> {
    const api = this.initApi(
      'timeManagementTerminationEndHandlingLegalEntityConfigurationApi',
      TimeManagementTerminationEndHandlingLegalEntityConfigurationApi
    );
    const linkedApis = [
      this.initApi(
        'timeManagementTerminationEndHandlingExclusionApi',
        TimeManagementTerminationEndHandlingExclusionApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimePolApi(): EmployeeTimePolApi<DeSerializersT> {
    return this.initApi('employeeTimePolApi', EmployeeTimePolApi);
  }

  get timeAccountPayoutProfileApi(): TimeAccountPayoutProfileApi<DeSerializersT> {
    return this.initApi(
      'timeAccountPayoutProfileApi',
      TimeAccountPayoutProfileApi
    );
  }

  get timeAccountTypeAusApi(): TimeAccountTypeAusApi<DeSerializersT> {
    return this.initApi('timeAccountTypeAusApi', TimeAccountTypeAusApi);
  }

  get periodicTimeAccountUpdateProfileApi(): PeriodicTimeAccountUpdateProfileApi<DeSerializersT> {
    return this.initApi(
      'periodicTimeAccountUpdateProfileApi',
      PeriodicTimeAccountUpdateProfileApi
    );
  }

  get availableTimeTypeApi(): AvailableTimeTypeApi<DeSerializersT> {
    const api = this.initApi('availableTimeTypeApi', AvailableTimeTypeApi);
    const linkedApis = [this.initApi('timeTypeApi', TimeTypeApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get workScheduleApi(): WorkScheduleApi<DeSerializersT> {
    const api = this.initApi('workScheduleApi', WorkScheduleApi);
    const linkedApis = [
      this.initApi('workScheduleApi', WorkScheduleApi),
      this.initApi('shiftClassificationApi', ShiftClassificationApi),
      this.initApi(
        'workScheduleDayModelAssignmentApi',
        WorkScheduleDayModelAssignmentApi
      ),
      this.initApi('workScheduleDayApi', WorkScheduleDayApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get employeeTimeAusApi(): EmployeeTimeAusApi<DeSerializersT> {
    return this.initApi('employeeTimeAusApi', EmployeeTimeAusApi);
  }

  get workScheduleDayModelSegmentApi(): WorkScheduleDayModelSegmentApi<DeSerializersT> {
    return this.initApi(
      'workScheduleDayModelSegmentApi',
      WorkScheduleDayModelSegmentApi
    );
  }

  get recalculationBasedFieldApi(): RecalculationBasedFieldApi<DeSerializersT> {
    return this.initApi(
      'recalculationBasedFieldApi',
      RecalculationBasedFieldApi
    );
  }

  get holidayApi(): HolidayApi<DeSerializersT> {
    return this.initApi('holidayApi', HolidayApi);
  }

  get employeeTimeCalendarApi(): EmployeeTimeCalendarApi<DeSerializersT> {
    const api = this.initApi(
      'employeeTimeCalendarApi',
      EmployeeTimeCalendarApi
    );
    const linkedApis = [
      this.initApi('timeAccountDetailApi', TimeAccountDetailApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeTypeAusApi(): TimeTypeAusApi<DeSerializersT> {
    return this.initApi('timeTypeAusApi', TimeTypeAusApi);
  }

  get employeeTimeApi(): EmployeeTimeApi<DeSerializersT> {
    const api = this.initApi('employeeTimeApi', EmployeeTimeApi);
    const linkedApis = [
      this.initApi('employeeTimeAusApi', EmployeeTimeAusApi),
      this.initApi('employeeTimeCanApi', EmployeeTimeCanApi),
      this.initApi('employeeTimeColApi', EmployeeTimeColApi),
      this.initApi('employeeTimeDeuApi', EmployeeTimeDeuApi),
      this.initApi('employeeTimeEspApi', EmployeeTimeEspApi),
      this.initApi('employeeTimeMexApi', EmployeeTimeMexApi),
      this.initApi('employeeTimeNldApi', EmployeeTimeNldApi),
      this.initApi('employeeTimePolApi', EmployeeTimePolApi),
      this.initApi('employeeTimeUsaApi', EmployeeTimeUsaApi),
      this.initApi('employeeTimeGroupApi', EmployeeTimeGroupApi),
      this.initApi('employeeTimeCalendarApi', EmployeeTimeCalendarApi),
      this.initApi('timeTypeApi', TimeTypeApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}

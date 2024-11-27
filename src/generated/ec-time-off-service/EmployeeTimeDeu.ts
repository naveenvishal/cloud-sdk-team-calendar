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
import type { EmployeeTimeDeuApi } from './EmployeeTimeDeuApi';
import {
  ElectronicSicknessCertificateExclusionReasonDeu,
  ElectronicSicknessCertificateExclusionReasonDeuType
} from './ElectronicSicknessCertificateExclusionReasonDeu';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';

/**
 * This class represents the entity "EmployeeTimeDEU" of service "ECTimeOff".
 */
export class EmployeeTimeDeu<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmployeeTimeDeuType<T>
{
  /**
   * Technical entity name for EmployeeTimeDeu.
   */
  static _entityName = 'EmployeeTimeDEU';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the EmployeeTimeDeu entity
   */
  static _keys = ['EmployeeTime_externalCode', 'externalCode'];
  /**
   * Employee Time_External Code.
   * Maximum length: 128.
   */
  employeeTimeExternalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Days Credited for Continued Pay.
   * @nullable
   */
  continuedPayCreditedDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * End of Continued Pay.
   * @nullable
   */
  continuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * mandat_test_string.
   * Maximum length: 255.
   * @nullable
   */
  custMandatTestString?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deviation from Reference Sick Pay Periods.
   * Maximum length: 128.
   * @nullable
   */
  deviationFromSickPayPeriods?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * eAU Exclusion Reason.
   * Maximum length: 128.
   * @nullable
   */
  electronicSicknessCertificateExclusionReason?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalCode.
   */
  externalCode!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Identical Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
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
   * Overlapping Sicknesses.
   * Maximum length: 128.
   * @nullable
   */
  overlappingSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * End of Sick Pay Supplement.
   * @nullable
   */
  paySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Start Date of Sick Pay Supplement.
   * @nullable
   */
  paySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reference Date for End of Continued Pay.
   * @nullable
   */
  refContinuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reference Date for End Date of Sick Pay Supplement.
   * @nullable
   */
  refPaySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reference Date for Start Date of Sick Pay Supplement.
   * @nullable
   */
  refPaySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Certified Start Date of Sickness.
   * @nullable
   */
  sicknessCertificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link ElectronicSicknessCertificateExclusionReasonDeu} entity.
   */
  electronicSicknessCertificateExclusionReasonNav?: ElectronicSicknessCertificateExclusionReasonDeu<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  identicalSicknessGroupNav?: EmployeeTimeGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link EmployeeTimeGroup} entity.
   */
  overlappingSicknessGroupNav?: EmployeeTimeGroup<T> | null;

  constructor(readonly _entityApi: EmployeeTimeDeuApi<T>) {
    super(_entityApi);
  }
}

export interface EmployeeTimeDeuType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>;
  continuedPayCreditedDays?: DeserializedType<T, 'Edm.Decimal'> | null;
  continuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  custMandatTestString?: DeserializedType<T, 'Edm.String'> | null;
  deviationFromSickPayPeriods?: DeserializedType<T, 'Edm.String'> | null;
  electronicSicknessCertificateExclusionReason?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.Int64'>;
  identicalSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemEffectiveEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemEffectiveStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  mdfSystemObjectType?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordId?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemStatus?: DeserializedType<T, 'Edm.String'> | null;
  mdfSystemTransactionSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  mdfSystemVersionId?: DeserializedType<T, 'Edm.Int64'> | null;
  overlappingSicknessGroup?: DeserializedType<T, 'Edm.String'> | null;
  paySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  paySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  refContinuedPayEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  refPaySupplementEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  refPaySupplementStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  sicknessCertificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  electronicSicknessCertificateExclusionReasonNav?: ElectronicSicknessCertificateExclusionReasonDeuType<T> | null;
  identicalSicknessGroupNav?: EmployeeTimeGroupType<T> | null;
  overlappingSicknessGroupNav?: EmployeeTimeGroupType<T> | null;
}

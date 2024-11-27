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
import type { UserPermissionsApi } from './UserPermissionsApi';

/**
 * This class represents the entity "UserPermissions" of service "PLTUserManagement".
 */
export class UserPermissions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserPermissionsType<T>
{
  /**
   * Technical entity name for UserPermissions.
   */
  static _entityName = 'UserPermissions';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the UserPermissions entity
   */
  static _keys = ['userId'];
  /**
   * addressLine1.
   * @nullable
   */
  addressLine1?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * addressLine2.
   * @nullable
   */
  addressLine2?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * addressLine3.
   * @nullable
   */
  addressLine3?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * benchStrength.
   * @nullable
   */
  benchStrength?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * benchStrengthNav.
   * @nullable
   */
  benchStrengthNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * bonusBudgetAmount.
   * @nullable
   */
  bonusBudgetAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * bonusTarget.
   * @nullable
   */
  bonusTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * businessPhone.
   * @nullable
   */
  businessPhone?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * businessSegment.
   * @nullable
   */
  businessSegment?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * cellPhone.
   * @nullable
   */
  cellPhone?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * citizenship.
   * @nullable
   */
  citizenship?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * city.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationBonusEligible.
   * @nullable
   */
  compensationBonusEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationEligible.
   * @nullable
   */
  compensationEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationReadOnly.
   * @nullable
   */
  compensationReadOnly?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationSalaryEligible.
   * @nullable
   */
  compensationSalaryEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationSalaryRateType.
   * @nullable
   */
  compensationSalaryRateType?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationSalaryRateUnits.
   * @nullable
   */
  compensationSalaryRateUnits?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * compensationStockEligible.
   * @nullable
   */
  compensationStockEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * competency.
   * @nullable
   */
  competency?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * competencyRatingNav.
   * @nullable
   */
  competencyRatingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * criticalTalentComments.
   * @nullable
   */
  criticalTalentComments?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom01.
   * @nullable
   */
  custom01?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom02.
   * @nullable
   */
  custom02?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom03.
   * @nullable
   */
  custom03?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom04.
   * @nullable
   */
  custom04?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom05.
   * @nullable
   */
  custom05?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom06.
   * @nullable
   */
  custom06?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom07.
   * @nullable
   */
  custom07?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom08.
   * @nullable
   */
  custom08?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom09.
   * @nullable
   */
  custom09?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom10.
   * @nullable
   */
  custom10?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom11.
   * @nullable
   */
  custom11?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom12.
   * @nullable
   */
  custom12?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom13.
   * @nullable
   */
  custom13?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom14.
   * @nullable
   */
  custom14?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * custom15.
   * @nullable
   */
  custom15?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * customManager.
   * @nullable
   */
  customManager?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * customReports.
   * @nullable
   */
  customReports?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * dateOfBirth.
   * @nullable
   */
  dateOfBirth?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * dateOfCurrentPosition.
   * @nullable
   */
  dateOfCurrentPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * dateOfPosition.
   * @nullable
   */
  dateOfPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * defaultFullName.
   * @nullable
   */
  defaultFullName?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * defaultLocale.
   * @nullable
   */
  defaultLocale?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * department.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * directReports.
   * @nullable
   */
  directReports?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * division.
   * @nullable
   */
  division?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * dummyNominationNav.
   * @nullable
   */
  dummyNominationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * email.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * empId.
   * @nullable
   */
  empId?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * empInfo.
   * @nullable
   */
  empInfo?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * employeeClass.
   * @nullable
   */
  employeeClass?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * ethnicity.
   * @nullable
   */
  ethnicity?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * ethnicityNav.
   * @nullable
   */
  ethnicityNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * fax.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * finalJobCode.
   * @nullable
   */
  finalJobCode?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * finalJobFamily.
   * @nullable
   */
  finalJobFamily?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * finalJobRole.
   * @nullable
   */
  finalJobRole?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * firstName.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * futureLeader.
   * @nullable
   */
  futureLeader?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * gender.
   * @nullable
   */
  gender?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * hireDate.
   * @nullable
   */
  hireDate?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * homePhone.
   * @nullable
   */
  homePhone?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * hr.
   * @nullable
   */
  hr?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * hrReports.
   * @nullable
   */
  hrReports?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * impactOfLoss.
   * @nullable
   */
  impactOfLoss?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * impactOfLossComments.
   * @nullable
   */
  impactOfLossComments?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * impactOfLossNav.
   * @nullable
   */
  impactOfLossNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * issueComments.
   * @nullable
   */
  issueComments?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * jobCode.
   * @nullable
   */
  jobCode?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * jobFamily.
   * @nullable
   */
  jobFamily?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * jobLevel.
   * @nullable
   */
  jobLevel?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * jobRole.
   * @nullable
   */
  jobRole?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * jobTitle.
   * @nullable
   */
  jobTitle?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * keyPosition.
   * @nullable
   */
  keyPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lastName.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lastReviewDate.
   * @nullable
   */
  lastReviewDate?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * level.
   * @nullable
   */
  level?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * localCurrencyCode.
   * @nullable
   */
  localCurrencyCode?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * location.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lumpsum2Target.
   * @nullable
   */
  lumpsum2Target?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * lumpsumTarget.
   * @nullable
   */
  lumpsumTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * manager.
   * @nullable
   */
  manager?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * married.
   * @nullable
   */
  married?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * matrix1Label.
   * @nullable
   */
  matrix1Label?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * matrix2Label.
   * @nullable
   */
  matrix2Label?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * matrixManaged.
   * @nullable
   */
  matrixManaged?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * matrixManager.
   * @nullable
   */
  matrixManager?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * matrixReports.
   * @nullable
   */
  matrixReports?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * meritEffectiveDate.
   * @nullable
   */
  meritEffectiveDate?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * meritTarget.
   * @nullable
   */
  meritTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * mi.
   * @nullable
   */
  mi?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * minority.
   * @nullable
   */
  minority?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * nationality.
   * @nullable
   */
  nationality?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * newToPosition.
   * @nullable
   */
  newToPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * nickname.
   * @nullable
   */
  nickname?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * nominationNav.
   * @nullable
   */
  nominationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * objective.
   * @nullable
   */
  objective?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * onboardingId.
   * @nullable
   */
  onboardingId?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * origHireDate.
   * @nullable
   */
  origHireDate?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * password.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * payGrade.
   * @nullable
   */
  payGrade?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * performance.
   * @nullable
   */
  performance?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * potential.
   * @nullable
   */
  potential?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * promotionAmount.
   * @nullable
   */
  promotionAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * proxy.
   * @nullable
   */
  proxy?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * raiseProrating.
   * @nullable
   */
  raiseProrating?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reasonForLeaving.
   * @nullable
   */
  reasonForLeaving?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reasonForLeavingNav.
   * @nullable
   */
  reasonForLeavingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reloComments.
   * @nullable
   */
  reloComments?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reloLocation.
   * @nullable
   */
  reloLocation?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reloWilling.
   * @nullable
   */
  reloWilling?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reloWillingNav.
   * @nullable
   */
  reloWillingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * reviewFreq.
   * @nullable
   */
  reviewFreq?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * riskOfLoss.
   * @nullable
   */
  riskOfLoss?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * riskOfLossNav.
   * @nullable
   */
  riskOfLossNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salary.
   * @nullable
   */
  salary?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetExtra2Percentage.
   * @nullable
   */
  salaryBudgetExtra2Percentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetExtraPercentage.
   * @nullable
   */
  salaryBudgetExtraPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetFinalSalaryPercentage.
   * @nullable
   */
  salaryBudgetFinalSalaryPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetLumpsumPercentage.
   * @nullable
   */
  salaryBudgetLumpsumPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetMeritPercentage.
   * @nullable
   */
  salaryBudgetMeritPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetPromotionPercentage.
   * @nullable
   */
  salaryBudgetPromotionPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryBudgetTotalRaisePercentage.
   * @nullable
   */
  salaryBudgetTotalRaisePercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryLocal.
   * @nullable
   */
  salaryLocal?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salaryProrating.
   * @nullable
   */
  salaryProrating?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salutation.
   * @nullable
   */
  salutation?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * salutationNav.
   * @nullable
   */
  salutationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * sciLastModified.
   * @nullable
   */
  sciLastModified?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * seatingChart.
   * @nullable
   */
  seatingChart?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * secondManager.
   * @nullable
   */
  secondManager?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * secondReports.
   * @nullable
   */
  secondReports?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * serviceDate.
   * @nullable
   */
  serviceDate?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * ssn.
   * @nullable
   */
  ssn?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * state.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetOptionAmount.
   * @nullable
   */
  stockBudgetOptionAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetOther1Amount.
   * @nullable
   */
  stockBudgetOther1Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetOther2Amount.
   * @nullable
   */
  stockBudgetOther2Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetOther3Amount.
   * @nullable
   */
  stockBudgetOther3Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetStockAmount.
   * @nullable
   */
  stockBudgetStockAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * stockBudgetUnitAmount.
   * @nullable
   */
  stockBudgetUnitAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * suffix.
   * @nullable
   */
  suffix?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * sysCostOfSource.
   * @nullable
   */
  sysCostOfSource?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * sysSource.
   * @nullable
   */
  sysSource?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * sysSourceNav.
   * @nullable
   */
  sysSourceNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * sysStartingSalary.
   * @nullable
   */
  sysStartingSalary?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * timeZone.
   * @nullable
   */
  timeZone?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * title.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * totalTeamSize.
   * @nullable
   */
  totalTeamSize?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * userId.
   */
  userId!: DeserializedType<T, 'Edm.Byte'>;
  /**
   * userPermissionsNav.
   * @nullable
   */
  userPermissionsNav?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * username.
   * @nullable
   */
  username?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * veteranDisabled.
   * @nullable
   */
  veteranDisabled?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * veteranMedal.
   * @nullable
   */
  veteranMedal?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * veteranProtected.
   * @nullable
   */
  veteranProtected?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * veteranSeparated.
   * @nullable
   */
  veteranSeparated?: DeserializedType<T, 'Edm.Byte'> | null;
  /**
   * zipCode.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.Byte'> | null;

  constructor(readonly _entityApi: UserPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface UserPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressLine1?: DeserializedType<T, 'Edm.Byte'> | null;
  addressLine2?: DeserializedType<T, 'Edm.Byte'> | null;
  addressLine3?: DeserializedType<T, 'Edm.Byte'> | null;
  benchStrength?: DeserializedType<T, 'Edm.Byte'> | null;
  benchStrengthNav?: DeserializedType<T, 'Edm.Byte'> | null;
  bonusBudgetAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  bonusTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  businessPhone?: DeserializedType<T, 'Edm.Byte'> | null;
  businessSegment?: DeserializedType<T, 'Edm.Byte'> | null;
  cellPhone?: DeserializedType<T, 'Edm.Byte'> | null;
  citizenship?: DeserializedType<T, 'Edm.Byte'> | null;
  city?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationBonusEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationReadOnly?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationSalaryEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationSalaryRateType?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationSalaryRateUnits?: DeserializedType<T, 'Edm.Byte'> | null;
  compensationStockEligible?: DeserializedType<T, 'Edm.Byte'> | null;
  competency?: DeserializedType<T, 'Edm.Byte'> | null;
  competencyRatingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  country?: DeserializedType<T, 'Edm.Byte'> | null;
  criticalTalentComments?: DeserializedType<T, 'Edm.Byte'> | null;
  custom01?: DeserializedType<T, 'Edm.Byte'> | null;
  custom02?: DeserializedType<T, 'Edm.Byte'> | null;
  custom03?: DeserializedType<T, 'Edm.Byte'> | null;
  custom04?: DeserializedType<T, 'Edm.Byte'> | null;
  custom05?: DeserializedType<T, 'Edm.Byte'> | null;
  custom06?: DeserializedType<T, 'Edm.Byte'> | null;
  custom07?: DeserializedType<T, 'Edm.Byte'> | null;
  custom08?: DeserializedType<T, 'Edm.Byte'> | null;
  custom09?: DeserializedType<T, 'Edm.Byte'> | null;
  custom10?: DeserializedType<T, 'Edm.Byte'> | null;
  custom11?: DeserializedType<T, 'Edm.Byte'> | null;
  custom12?: DeserializedType<T, 'Edm.Byte'> | null;
  custom13?: DeserializedType<T, 'Edm.Byte'> | null;
  custom14?: DeserializedType<T, 'Edm.Byte'> | null;
  custom15?: DeserializedType<T, 'Edm.Byte'> | null;
  customManager?: DeserializedType<T, 'Edm.Byte'> | null;
  customReports?: DeserializedType<T, 'Edm.Byte'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.Byte'> | null;
  dateOfCurrentPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  dateOfPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  defaultFullName?: DeserializedType<T, 'Edm.Byte'> | null;
  defaultLocale?: DeserializedType<T, 'Edm.Byte'> | null;
  department?: DeserializedType<T, 'Edm.Byte'> | null;
  directReports?: DeserializedType<T, 'Edm.Byte'> | null;
  division?: DeserializedType<T, 'Edm.Byte'> | null;
  dummyNominationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  email?: DeserializedType<T, 'Edm.Byte'> | null;
  empId?: DeserializedType<T, 'Edm.Byte'> | null;
  empInfo?: DeserializedType<T, 'Edm.Byte'> | null;
  employeeClass?: DeserializedType<T, 'Edm.Byte'> | null;
  ethnicity?: DeserializedType<T, 'Edm.Byte'> | null;
  ethnicityNav?: DeserializedType<T, 'Edm.Byte'> | null;
  fax?: DeserializedType<T, 'Edm.Byte'> | null;
  finalJobCode?: DeserializedType<T, 'Edm.Byte'> | null;
  finalJobFamily?: DeserializedType<T, 'Edm.Byte'> | null;
  finalJobRole?: DeserializedType<T, 'Edm.Byte'> | null;
  firstName?: DeserializedType<T, 'Edm.Byte'> | null;
  futureLeader?: DeserializedType<T, 'Edm.Byte'> | null;
  gender?: DeserializedType<T, 'Edm.Byte'> | null;
  hireDate?: DeserializedType<T, 'Edm.Byte'> | null;
  homePhone?: DeserializedType<T, 'Edm.Byte'> | null;
  hr?: DeserializedType<T, 'Edm.Byte'> | null;
  hrReports?: DeserializedType<T, 'Edm.Byte'> | null;
  impactOfLoss?: DeserializedType<T, 'Edm.Byte'> | null;
  impactOfLossComments?: DeserializedType<T, 'Edm.Byte'> | null;
  impactOfLossNav?: DeserializedType<T, 'Edm.Byte'> | null;
  issueComments?: DeserializedType<T, 'Edm.Byte'> | null;
  jobCode?: DeserializedType<T, 'Edm.Byte'> | null;
  jobFamily?: DeserializedType<T, 'Edm.Byte'> | null;
  jobLevel?: DeserializedType<T, 'Edm.Byte'> | null;
  jobRole?: DeserializedType<T, 'Edm.Byte'> | null;
  jobTitle?: DeserializedType<T, 'Edm.Byte'> | null;
  keyPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  lastModified?: DeserializedType<T, 'Edm.Byte'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.Byte'> | null;
  lastModifiedWithTz?: DeserializedType<T, 'Edm.Byte'> | null;
  lastName?: DeserializedType<T, 'Edm.Byte'> | null;
  lastReviewDate?: DeserializedType<T, 'Edm.Byte'> | null;
  level?: DeserializedType<T, 'Edm.Byte'> | null;
  localCurrencyCode?: DeserializedType<T, 'Edm.Byte'> | null;
  location?: DeserializedType<T, 'Edm.Byte'> | null;
  lumpsum2Target?: DeserializedType<T, 'Edm.Byte'> | null;
  lumpsumTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  manager?: DeserializedType<T, 'Edm.Byte'> | null;
  married?: DeserializedType<T, 'Edm.Byte'> | null;
  matrix1Label?: DeserializedType<T, 'Edm.Byte'> | null;
  matrix2Label?: DeserializedType<T, 'Edm.Byte'> | null;
  matrixManaged?: DeserializedType<T, 'Edm.Byte'> | null;
  matrixManager?: DeserializedType<T, 'Edm.Byte'> | null;
  matrixReports?: DeserializedType<T, 'Edm.Byte'> | null;
  meritEffectiveDate?: DeserializedType<T, 'Edm.Byte'> | null;
  meritTarget?: DeserializedType<T, 'Edm.Byte'> | null;
  mi?: DeserializedType<T, 'Edm.Byte'> | null;
  minority?: DeserializedType<T, 'Edm.Byte'> | null;
  nationality?: DeserializedType<T, 'Edm.Byte'> | null;
  newToPosition?: DeserializedType<T, 'Edm.Byte'> | null;
  nickname?: DeserializedType<T, 'Edm.Byte'> | null;
  nominationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  objective?: DeserializedType<T, 'Edm.Byte'> | null;
  onboardingId?: DeserializedType<T, 'Edm.Byte'> | null;
  origHireDate?: DeserializedType<T, 'Edm.Byte'> | null;
  password?: DeserializedType<T, 'Edm.Byte'> | null;
  payGrade?: DeserializedType<T, 'Edm.Byte'> | null;
  performance?: DeserializedType<T, 'Edm.Byte'> | null;
  potential?: DeserializedType<T, 'Edm.Byte'> | null;
  promotionAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  proxy?: DeserializedType<T, 'Edm.Byte'> | null;
  raiseProrating?: DeserializedType<T, 'Edm.Byte'> | null;
  reasonForLeaving?: DeserializedType<T, 'Edm.Byte'> | null;
  reasonForLeavingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  reloComments?: DeserializedType<T, 'Edm.Byte'> | null;
  reloLocation?: DeserializedType<T, 'Edm.Byte'> | null;
  reloWilling?: DeserializedType<T, 'Edm.Byte'> | null;
  reloWillingNav?: DeserializedType<T, 'Edm.Byte'> | null;
  reviewFreq?: DeserializedType<T, 'Edm.Byte'> | null;
  riskOfLoss?: DeserializedType<T, 'Edm.Byte'> | null;
  riskOfLossNav?: DeserializedType<T, 'Edm.Byte'> | null;
  salary?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetExtra2Percentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetExtraPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetFinalSalaryPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetLumpsumPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetMeritPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetPromotionPercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryBudgetTotalRaisePercentage?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryLocal?: DeserializedType<T, 'Edm.Byte'> | null;
  salaryProrating?: DeserializedType<T, 'Edm.Byte'> | null;
  salutation?: DeserializedType<T, 'Edm.Byte'> | null;
  salutationNav?: DeserializedType<T, 'Edm.Byte'> | null;
  sciLastModified?: DeserializedType<T, 'Edm.Byte'> | null;
  seatingChart?: DeserializedType<T, 'Edm.Byte'> | null;
  secondManager?: DeserializedType<T, 'Edm.Byte'> | null;
  secondReports?: DeserializedType<T, 'Edm.Byte'> | null;
  serviceDate?: DeserializedType<T, 'Edm.Byte'> | null;
  ssn?: DeserializedType<T, 'Edm.Byte'> | null;
  state?: DeserializedType<T, 'Edm.Byte'> | null;
  status?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetOptionAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetOther1Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetOther2Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetOther3Amount?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetStockAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  stockBudgetUnitAmount?: DeserializedType<T, 'Edm.Byte'> | null;
  suffix?: DeserializedType<T, 'Edm.Byte'> | null;
  sysCostOfSource?: DeserializedType<T, 'Edm.Byte'> | null;
  sysSource?: DeserializedType<T, 'Edm.Byte'> | null;
  sysSourceNav?: DeserializedType<T, 'Edm.Byte'> | null;
  sysStartingSalary?: DeserializedType<T, 'Edm.Byte'> | null;
  timeZone?: DeserializedType<T, 'Edm.Byte'> | null;
  title?: DeserializedType<T, 'Edm.Byte'> | null;
  totalTeamSize?: DeserializedType<T, 'Edm.Byte'> | null;
  userId: DeserializedType<T, 'Edm.Byte'>;
  userPermissionsNav?: DeserializedType<T, 'Edm.Byte'> | null;
  username?: DeserializedType<T, 'Edm.Byte'> | null;
  veteranDisabled?: DeserializedType<T, 'Edm.Byte'> | null;
  veteranMedal?: DeserializedType<T, 'Edm.Byte'> | null;
  veteranProtected?: DeserializedType<T, 'Edm.Byte'> | null;
  veteranSeparated?: DeserializedType<T, 'Edm.Byte'> | null;
  zipCode?: DeserializedType<T, 'Edm.Byte'> | null;
}

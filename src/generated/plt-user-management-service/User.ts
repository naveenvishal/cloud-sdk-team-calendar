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
import type { UserApi } from './UserApi';
import { UserPermissions, UserPermissionsType } from './UserPermissions';

/**
 * This class represents the entity "User" of service "PLTUserManagement".
 */
export class User<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserType<T>
{
  /**
   * Technical entity name for User.
   */
  static _entityName = 'User';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the User entity
   */
  static _keys = ['userId'];
  /**
   * Address Line 1.
   * Maximum length: 255.
   * @nullable
   */
  addressLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Line 2.
   * Maximum length: 255.
   * @nullable
   */
  addressLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Line 3.
   * @nullable
   */
  addressLine3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bench Strength.
   * @nullable
   */
  benchStrength?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * bonusBudgetAmount.
   * @nullable
   */
  bonusBudgetAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Target.
   * @nullable
   */
  bonusTarget?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Business Phone.
   * Maximum length: 20.
   * @nullable
   */
  businessPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Segment.
   * @nullable
   */
  businessSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cell Phone.
   * @nullable
   */
  cellPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Citizenship.
   * @nullable
   */
  citizenship?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * Maximum length: 255.
   * @nullable
   */
  city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * compensationBonusEligible.
   * @nullable
   */
  compensationBonusEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * compensationEligible.
   * @nullable
   */
  compensationEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * compensationReadOnly.
   * @nullable
   */
  compensationReadOnly?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * compensationSalaryEligible.
   * @nullable
   */
  compensationSalaryEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Salary Type.
   * @nullable
   */
  compensationSalaryRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Units per Year.
   * @nullable
   */
  compensationSalaryRateUnits?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * compensationStockEligible.
   * @nullable
   */
  compensationStockEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Competency.
   * @nullable
   */
  competency?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * Country.
   * Maximum length: 255.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Critical Talent Comments.
   * @nullable
   */
  criticalTalentComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 1.
   * Maximum length: 255.
   * @nullable
   */
  custom01?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 2.
   * Maximum length: 255.
   * @nullable
   */
  custom02?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 3.
   * Maximum length: 255.
   * @nullable
   */
  custom03?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 4.
   * Maximum length: 255.
   * @nullable
   */
  custom04?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 5.
   * Maximum length: 255.
   * @nullable
   */
  custom05?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 6.
   * Maximum length: 255.
   * @nullable
   */
  custom06?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 7.
   * Maximum length: 255.
   * @nullable
   */
  custom07?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 8.
   * Maximum length: 255.
   * @nullable
   */
  custom08?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 9.
   * Maximum length: 255.
   * @nullable
   */
  custom09?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 10.
   * Maximum length: 255.
   * @nullable
   */
  custom10?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 11.
   * Maximum length: 255.
   * @nullable
   */
  custom11?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 12.
   * Maximum length: 255.
   * @nullable
   */
  custom12?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 13.
   * Maximum length: 255.
   * @nullable
   */
  custom13?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 14.
   * Maximum length: 255.
   * @nullable
   */
  custom14?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customizable Field 15.
   * Maximum length: 255.
   * @nullable
   */
  custom15?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Current Position.
   * @nullable
   */
  dateOfCurrentPosition?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Position.
   * @nullable
   */
  dateOfPosition?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * defaultFullName.
   * @nullable
   */
  defaultFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Locale.
   * Maximum length: 100.
   * @nullable
   */
  defaultLocale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Department.
   * Maximum length: 128.
   * @nullable
   */
  department?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Division.
   * Maximum length: 128.
   * @nullable
   */
  division?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee Id.
   * Maximum length: 255.
   * @nullable
   */
  empId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nature of Contract.
   * @nullable
   */
  employeeClass?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ethnicity.
   * @nullable
   */
  ethnicity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Fax.
   * Maximum length: 20.
   * @nullable
   */
  fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Final Job Code.
   * @nullable
   */
  finalJobCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Final Job Family.
   * @nullable
   */
  finalJobFamily?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Final Job Role.
   * @nullable
   */
  finalJobRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Future Leader.
   * @nullable
   */
  futureLeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Gender.
   * Maximum length: 2.
   */
  gender!: DeserializedType<T, 'Edm.String'>;
  /**
   * Hire Date.
   * @nullable
   */
  hireDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Home Phone.
   * @nullable
   */
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impact of Loss.
   * @nullable
   */
  impactOfLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impact of Loss Comments.
   * @nullable
   */
  impactOfLossComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Comments.
   * @nullable
   */
  issueComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Code.
   * Maximum length: 128.
   * @nullable
   */
  jobCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Family.
   * @nullable
   */
  jobFamily?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Level.
   * @nullable
   */
  jobLevel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Job Role.
   * @nullable
   */
  jobRole?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * @nullable
   */
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Position.
   * @nullable
   */
  keyPosition?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Review Date.
   * @nullable
   */
  lastReviewDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Level.
   * @nullable
   */
  level?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Local Currency Code.
   * @nullable
   */
  localCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location.
   * Maximum length: 128.
   * @nullable
   */
  location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lump Sum 2 Target.
   * @nullable
   */
  lumpsum2Target?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Lump Sum Target.
   * @nullable
   */
  lumpsumTarget?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Married.
   * @nullable
   */
  married?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * matrix1Label.
   * @nullable
   */
  matrix1Label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * matrix2Label.
   * @nullable
   */
  matrix2Label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matrix Managed.
   * @nullable
   */
  matrixManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Merit Raise Effective Date.
   * @nullable
   */
  meritEffectiveDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Merit Target.
   * @nullable
   */
  meritTarget?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  mi?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Diversity Candidate.
   * @nullable
   */
  minority?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Nationality.
   * @nullable
   */
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New to Position.
   * @nullable
   */
  newToPosition?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Nickname.
   * Maximum length: 128.
   * @nullable
   */
  nickname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Objective.
   * @nullable
   */
  objective?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * onboardingId.
   * @nullable
   */
  onboardingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * HireDate.
   * @nullable
   */
  origHireDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * password.
   * Maximum length: 128.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pay Grade.
   * @nullable
   */
  payGrade?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Performance.
   * @nullable
   */
  performance?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * Potential.
   * @nullable
   */
  potential?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * Promotion.
   * @nullable
   */
  promotionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Raise Prorating.
   * @nullable
   */
  raiseProrating?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Reason for Leaving.
   * @nullable
   */
  reasonForLeaving?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  reloComments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferences.
   * @nullable
   */
  reloLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Willing to Relocate.
   * @nullable
   */
  reloWilling?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Review Frequency.
   * Maximum length: 200000000.
   * @nullable
   */
  reviewFreq?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Risk of Loss.
   * @nullable
   */
  riskOfLoss?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Salary.
   * @nullable
   */
  salary?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetExtra2Percentage.
   * @nullable
   */
  salaryBudgetExtra2Percentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetExtraPercentage.
   * @nullable
   */
  salaryBudgetExtraPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetFinalSalaryPercentage.
   * @nullable
   */
  salaryBudgetFinalSalaryPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetLumpsumPercentage.
   * @nullable
   */
  salaryBudgetLumpsumPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetMeritPercentage.
   * @nullable
   */
  salaryBudgetMeritPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetPromotionPercentage.
   * @nullable
   */
  salaryBudgetPromotionPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryBudgetTotalRaisePercentage.
   * @nullable
   */
  salaryBudgetTotalRaisePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * salaryLocal.
   * @nullable
   */
  salaryLocal?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Salary Prorating.
   * @nullable
   */
  salaryProrating?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Salutation.
   * Maximum length: 128.
   * @nullable
   */
  salutation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * sciLastModified.
   * @nullable
   */
  sciLastModified?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * seatingChart.
   * @nullable
   */
  seatingChart?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Date.
   * @nullable
   */
  serviceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Social Security Number.
   * Maximum length: 128.
   * @nullable
   */
  ssn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * Maximum length: 20.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * Maximum length: 17.
   */
  status!: DeserializedType<T, 'Edm.String'>;
  /**
   * stockBudgetOptionAmount.
   * @nullable
   */
  stockBudgetOptionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * stockBudgetOther1Amount.
   * @nullable
   */
  stockBudgetOther1Amount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * stockBudgetOther2Amount.
   * @nullable
   */
  stockBudgetOther2Amount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * stockBudgetOther3Amount.
   * @nullable
   */
  stockBudgetOther3Amount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * stockBudgetStockAmount.
   * @nullable
   */
  stockBudgetStockAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * stockBudgetUnitAmount.
   * @nullable
   */
  stockBudgetUnitAmount?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * Suffix.
   * Maximum length: 128.
   * @nullable
   */
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Paid to Recruiting Source.
   * @nullable
   */
  sysCostOfSource?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * Recruiting Source.
   * @nullable
   */
  sysSource?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Starting Salary.
   * @nullable
   */
  sysStartingSalary?: DeserializedType<T, 'Edm.Single'> | null;
  /**
   * Time Zone.
   * Maximum length: 16.
   * @nullable
   */
  timeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * Maximum length: 255.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * totalTeamSize.
   * @nullable
   */
  totalTeamSize?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Username.
   * Maximum length: 100.
   * @nullable
   */
  username?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vet Disabled.
   * @nullable
   */
  veteranDisabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Vet Medal.
   * @nullable
   */
  veteranMedal?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Protected Vet.
   * @nullable
   */
  veteranProtected?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Vet Separated.
   * @nullable
   */
  veteranSeparated?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ZIP.
   * Maximum length: 10.
   * @nullable
   */
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  customManager!: User<T>[];
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  customReports!: User<T>[];
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  directReports!: User<T>[];
  /**
   * One-to-one navigation property to the {@link User} entity.
   */
  hr?: User<T> | null;
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  hrReports!: User<T>[];
  /**
   * One-to-one navigation property to the {@link User} entity.
   */
  manager?: User<T> | null;
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  matrixManager!: User<T>[];
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  matrixReports!: User<T>[];
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  proxy!: User<T>[];
  /**
   * One-to-one navigation property to the {@link User} entity.
   */
  secondManager?: User<T> | null;
  /**
   * One-to-many navigation property to the {@link User} entity.
   */
  secondReports!: User<T>[];
  /**
   * One-to-one navigation property to the {@link UserPermissions} entity.
   */
  userPermissionsNav?: UserPermissions<T> | null;

  constructor(readonly _entityApi: UserApi<T>) {
    super(_entityApi);
  }
}

export interface UserType<T extends DeSerializers = DefaultDeSerializers> {
  addressLine1?: DeserializedType<T, 'Edm.String'> | null;
  addressLine2?: DeserializedType<T, 'Edm.String'> | null;
  addressLine3?: DeserializedType<T, 'Edm.String'> | null;
  benchStrength?: DeserializedType<T, 'Edm.String'> | null;
  bonusBudgetAmount?: DeserializedType<T, 'Edm.Double'> | null;
  bonusTarget?: DeserializedType<T, 'Edm.Double'> | null;
  businessPhone?: DeserializedType<T, 'Edm.String'> | null;
  businessSegment?: DeserializedType<T, 'Edm.String'> | null;
  cellPhone?: DeserializedType<T, 'Edm.String'> | null;
  citizenship?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  compensationBonusEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  compensationEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  compensationReadOnly?: DeserializedType<T, 'Edm.Boolean'> | null;
  compensationSalaryEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  compensationSalaryRateType?: DeserializedType<T, 'Edm.String'> | null;
  compensationSalaryRateUnits?: DeserializedType<T, 'Edm.Int64'> | null;
  compensationStockEligible?: DeserializedType<T, 'Edm.Boolean'> | null;
  competency?: DeserializedType<T, 'Edm.Single'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  criticalTalentComments?: DeserializedType<T, 'Edm.String'> | null;
  custom01?: DeserializedType<T, 'Edm.String'> | null;
  custom02?: DeserializedType<T, 'Edm.String'> | null;
  custom03?: DeserializedType<T, 'Edm.String'> | null;
  custom04?: DeserializedType<T, 'Edm.String'> | null;
  custom05?: DeserializedType<T, 'Edm.String'> | null;
  custom06?: DeserializedType<T, 'Edm.String'> | null;
  custom07?: DeserializedType<T, 'Edm.String'> | null;
  custom08?: DeserializedType<T, 'Edm.String'> | null;
  custom09?: DeserializedType<T, 'Edm.String'> | null;
  custom10?: DeserializedType<T, 'Edm.String'> | null;
  custom11?: DeserializedType<T, 'Edm.String'> | null;
  custom12?: DeserializedType<T, 'Edm.String'> | null;
  custom13?: DeserializedType<T, 'Edm.String'> | null;
  custom14?: DeserializedType<T, 'Edm.String'> | null;
  custom15?: DeserializedType<T, 'Edm.String'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  dateOfCurrentPosition?: DeserializedType<T, 'Edm.DateTime'> | null;
  dateOfPosition?: DeserializedType<T, 'Edm.DateTime'> | null;
  defaultFullName?: DeserializedType<T, 'Edm.String'> | null;
  defaultLocale?: DeserializedType<T, 'Edm.String'> | null;
  department?: DeserializedType<T, 'Edm.String'> | null;
  division?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  empId?: DeserializedType<T, 'Edm.String'> | null;
  employeeClass?: DeserializedType<T, 'Edm.String'> | null;
  ethnicity?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  finalJobCode?: DeserializedType<T, 'Edm.String'> | null;
  finalJobFamily?: DeserializedType<T, 'Edm.String'> | null;
  finalJobRole?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  futureLeader?: DeserializedType<T, 'Edm.Boolean'> | null;
  gender: DeserializedType<T, 'Edm.String'>;
  hireDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  homePhone?: DeserializedType<T, 'Edm.String'> | null;
  impactOfLoss?: DeserializedType<T, 'Edm.String'> | null;
  impactOfLossComments?: DeserializedType<T, 'Edm.String'> | null;
  issueComments?: DeserializedType<T, 'Edm.String'> | null;
  jobCode?: DeserializedType<T, 'Edm.String'> | null;
  jobFamily?: DeserializedType<T, 'Edm.String'> | null;
  jobLevel?: DeserializedType<T, 'Edm.String'> | null;
  jobRole?: DeserializedType<T, 'Edm.String'> | null;
  jobTitle?: DeserializedType<T, 'Edm.String'> | null;
  keyPosition?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModified?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  lastReviewDate?: DeserializedType<T, 'Edm.String'> | null;
  level?: DeserializedType<T, 'Edm.String'> | null;
  localCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  lumpsum2Target?: DeserializedType<T, 'Edm.Double'> | null;
  lumpsumTarget?: DeserializedType<T, 'Edm.Double'> | null;
  married?: DeserializedType<T, 'Edm.Boolean'> | null;
  matrix1Label?: DeserializedType<T, 'Edm.String'> | null;
  matrix2Label?: DeserializedType<T, 'Edm.String'> | null;
  matrixManaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  meritEffectiveDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  meritTarget?: DeserializedType<T, 'Edm.DateTime'> | null;
  mi?: DeserializedType<T, 'Edm.String'> | null;
  minority?: DeserializedType<T, 'Edm.Boolean'> | null;
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  newToPosition?: DeserializedType<T, 'Edm.Boolean'> | null;
  nickname?: DeserializedType<T, 'Edm.String'> | null;
  objective?: DeserializedType<T, 'Edm.Single'> | null;
  onboardingId?: DeserializedType<T, 'Edm.String'> | null;
  origHireDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  payGrade?: DeserializedType<T, 'Edm.String'> | null;
  performance?: DeserializedType<T, 'Edm.Single'> | null;
  potential?: DeserializedType<T, 'Edm.Single'> | null;
  promotionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  raiseProrating?: DeserializedType<T, 'Edm.Double'> | null;
  reasonForLeaving?: DeserializedType<T, 'Edm.String'> | null;
  reloComments?: DeserializedType<T, 'Edm.String'> | null;
  reloLocation?: DeserializedType<T, 'Edm.String'> | null;
  reloWilling?: DeserializedType<T, 'Edm.String'> | null;
  reviewFreq?: DeserializedType<T, 'Edm.String'> | null;
  riskOfLoss?: DeserializedType<T, 'Edm.String'> | null;
  salary?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetExtra2Percentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetExtraPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetFinalSalaryPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetLumpsumPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetMeritPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetPromotionPercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryBudgetTotalRaisePercentage?: DeserializedType<T, 'Edm.Double'> | null;
  salaryLocal?: DeserializedType<T, 'Edm.Double'> | null;
  salaryProrating?: DeserializedType<T, 'Edm.Double'> | null;
  salutation?: DeserializedType<T, 'Edm.String'> | null;
  sciLastModified?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  seatingChart?: DeserializedType<T, 'Edm.String'> | null;
  serviceDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  ssn?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  status: DeserializedType<T, 'Edm.String'>;
  stockBudgetOptionAmount?: DeserializedType<T, 'Edm.Double'> | null;
  stockBudgetOther1Amount?: DeserializedType<T, 'Edm.Double'> | null;
  stockBudgetOther2Amount?: DeserializedType<T, 'Edm.Double'> | null;
  stockBudgetOther3Amount?: DeserializedType<T, 'Edm.Double'> | null;
  stockBudgetStockAmount?: DeserializedType<T, 'Edm.Double'> | null;
  stockBudgetUnitAmount?: DeserializedType<T, 'Edm.Double'> | null;
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  sysCostOfSource?: DeserializedType<T, 'Edm.Single'> | null;
  sysSource?: DeserializedType<T, 'Edm.Int32'> | null;
  sysStartingSalary?: DeserializedType<T, 'Edm.Single'> | null;
  timeZone?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  totalTeamSize?: DeserializedType<T, 'Edm.Int64'> | null;
  userId: DeserializedType<T, 'Edm.String'>;
  username?: DeserializedType<T, 'Edm.String'> | null;
  veteranDisabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  veteranMedal?: DeserializedType<T, 'Edm.Boolean'> | null;
  veteranProtected?: DeserializedType<T, 'Edm.Boolean'> | null;
  veteranSeparated?: DeserializedType<T, 'Edm.Boolean'> | null;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  customManager: UserType<T>[];
  customReports: UserType<T>[];
  directReports: UserType<T>[];
  hr?: UserType<T> | null;
  hrReports: UserType<T>[];
  manager?: UserType<T> | null;
  matrixManager: UserType<T>[];
  matrixReports: UserType<T>[];
  proxy: UserType<T>[];
  secondManager?: UserType<T> | null;
  secondReports: UserType<T>[];
  userPermissionsNav?: UserPermissionsType<T> | null;
}

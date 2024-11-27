/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserPermissions } from './UserPermissions';
import { UserPermissionsRequestBuilder } from './UserPermissionsRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class UserPermissionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserPermissions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserPermissions;

  requestBuilder(): UserPermissionsRequestBuilder<DeSerializersT> {
    return new UserPermissionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserPermissions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserPermissions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserPermissions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserPermissions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserPermissions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_LINE_1: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ADDRESS_LINE_2: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ADDRESS_LINE_3: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BENCH_STRENGTH: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BENCH_STRENGTH_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BONUS_BUDGET_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BONUS_TARGET: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BUSINESS_PHONE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    BUSINESS_SEGMENT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CELL_PHONE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CITIZENSHIP: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_BONUS_ELIGIBLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_ELIGIBLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_READ_ONLY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_SALARY_ELIGIBLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_SALARY_RATE_TYPE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_SALARY_RATE_UNITS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPENSATION_STOCK_ELIGIBLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPETENCY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COMPETENCY_RATING_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CRITICAL_TALENT_COMMENTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_01: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_02: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_03: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_04: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_05: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_06: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_07: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_08: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_09: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_10: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_11: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_12: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_13: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_14: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_15: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_MANAGER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    CUSTOM_REPORTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DATE_OF_CURRENT_POSITION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DATE_OF_POSITION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DEFAULT_FULL_NAME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DEFAULT_LOCALE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DIRECT_REPORTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    DUMMY_NOMINATION_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    EMP_ID: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    EMP_INFO: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    EMPLOYEE_CLASS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ETHNICITY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ETHNICITY_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FINAL_JOB_CODE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FINAL_JOB_FAMILY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FINAL_JOB_ROLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    FUTURE_LEADER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    GENDER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    HIRE_DATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    HOME_PHONE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    HR: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    HR_REPORTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    IMPACT_OF_LOSS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    IMPACT_OF_LOSS_COMMENTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    IMPACT_OF_LOSS_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ISSUE_COMMENTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    JOB_CODE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    JOB_FAMILY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    JOB_LEVEL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    JOB_ROLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    KEY_POSITION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LAST_MODIFIED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LAST_MODIFIED_WITH_TZ: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LAST_REVIEW_DATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LOCAL_CURRENCY_CODE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LUMPSUM_2_TARGET: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    LUMPSUM_TARGET: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MANAGER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MARRIED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MATRIX_1_LABEL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MATRIX_2_LABEL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MATRIX_MANAGED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MATRIX_MANAGER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MATRIX_REPORTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MERIT_EFFECTIVE_DATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MERIT_TARGET: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MI: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    MINORITY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    NEW_TO_POSITION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    NICKNAME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    NOMINATION_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    OBJECTIVE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ONBOARDING_ID: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ORIG_HIRE_DATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    PAY_GRADE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    PERFORMANCE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    POTENTIAL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    PROMOTION_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    PROXY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RAISE_PRORATING: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    REASON_FOR_LEAVING: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    REASON_FOR_LEAVING_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RELO_COMMENTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RELO_LOCATION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RELO_WILLING: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RELO_WILLING_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    REVIEW_FREQ: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RISK_OF_LOSS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    RISK_OF_LOSS_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_EXTRA_2_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_EXTRA_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_FINAL_SALARY_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_LUMPSUM_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_MERIT_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_PROMOTION_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_BUDGET_TOTAL_RAISE_PERCENTAGE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_LOCAL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALARY_PRORATING: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALUTATION: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SALUTATION_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SCI_LAST_MODIFIED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SEATING_CHART: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SECOND_MANAGER: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SECOND_REPORTS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SERVICE_DATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SSN: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_OPTION_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_1_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_2_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_3_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_STOCK_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    STOCK_BUDGET_UNIT_AMOUNT: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SUFFIX: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SYS_COST_OF_SOURCE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SYS_SOURCE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SYS_SOURCE_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    SYS_STARTING_SALARY: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    TIME_ZONE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    TOTAL_TEAM_SIZE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    USER_PERMISSIONS_NAV: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    USERNAME: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    VETERAN_DISABLED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    VETERAN_MEDAL: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    VETERAN_PROTECTED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    VETERAN_SEPARATED: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      UserPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      true,
      true
    >;
    ALL_FIELDS: AllFields<UserPermissions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addressLine1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_1: fieldBuilder.buildEdmTypeField(
          'addressLine1',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link addressLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_2: fieldBuilder.buildEdmTypeField(
          'addressLine2',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link addressLine3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_3: fieldBuilder.buildEdmTypeField(
          'addressLine3',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link benchStrength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENCH_STRENGTH: fieldBuilder.buildEdmTypeField(
          'benchStrength',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link benchStrengthNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENCH_STRENGTH_NAV: fieldBuilder.buildEdmTypeField(
          'benchStrengthNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link bonusBudgetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BONUS_BUDGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'bonusBudgetAmount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link bonusTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BONUS_TARGET: fieldBuilder.buildEdmTypeField(
          'bonusTarget',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link businessPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PHONE: fieldBuilder.buildEdmTypeField(
          'businessPhone',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link businessSegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SEGMENT: fieldBuilder.buildEdmTypeField(
          'businessSegment',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link cellPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELL_PHONE: fieldBuilder.buildEdmTypeField(
          'cellPhone',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link citizenship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP: fieldBuilder.buildEdmTypeField(
          'citizenship',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('city', 'Edm.Byte', true),
        /**
         * Static representation of the {@link compensationBonusEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_BONUS_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationBonusEligible',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationEligible',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationReadOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_READ_ONLY: fieldBuilder.buildEdmTypeField(
          'compensationReadOnly',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationSalaryEligible',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'compensationSalaryRateType',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryRateUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_RATE_UNITS: fieldBuilder.buildEdmTypeField(
          'compensationSalaryRateUnits',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link compensationStockEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_STOCK_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationStockEligible',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link competency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPETENCY: fieldBuilder.buildEdmTypeField(
          'competency',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link competencyRatingNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPETENCY_RATING_NAV: fieldBuilder.buildEdmTypeField(
          'competencyRatingNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.Byte', true),
        /**
         * Static representation of the {@link criticalTalentComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITICAL_TALENT_COMMENTS: fieldBuilder.buildEdmTypeField(
          'criticalTalentComments',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link custom01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_01: fieldBuilder.buildEdmTypeField('custom01', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_02: fieldBuilder.buildEdmTypeField('custom02', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_03: fieldBuilder.buildEdmTypeField('custom03', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_04: fieldBuilder.buildEdmTypeField('custom04', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_05: fieldBuilder.buildEdmTypeField('custom05', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_06: fieldBuilder.buildEdmTypeField('custom06', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_07: fieldBuilder.buildEdmTypeField('custom07', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_08: fieldBuilder.buildEdmTypeField('custom08', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_09: fieldBuilder.buildEdmTypeField('custom09', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_10: fieldBuilder.buildEdmTypeField('custom10', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_11: fieldBuilder.buildEdmTypeField('custom11', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_12: fieldBuilder.buildEdmTypeField('custom12', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_13: fieldBuilder.buildEdmTypeField('custom13', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_14: fieldBuilder.buildEdmTypeField('custom14', 'Edm.Byte', true),
        /**
         * Static representation of the {@link custom15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_15: fieldBuilder.buildEdmTypeField('custom15', 'Edm.Byte', true),
        /**
         * Static representation of the {@link customManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_MANAGER: fieldBuilder.buildEdmTypeField(
          'customManager',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link customReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_REPORTS: fieldBuilder.buildEdmTypeField(
          'customReports',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'dateOfBirth',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link dateOfCurrentPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_CURRENT_POSITION: fieldBuilder.buildEdmTypeField(
          'dateOfCurrentPosition',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link dateOfPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_POSITION: fieldBuilder.buildEdmTypeField(
          'dateOfPosition',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link defaultFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'defaultFullName',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link defaultLocale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LOCALE: fieldBuilder.buildEdmTypeField(
          'defaultLocale',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'department',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link directReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIRECT_REPORTS: fieldBuilder.buildEdmTypeField(
          'directReports',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField('division', 'Edm.Byte', true),
        /**
         * Static representation of the {@link dummyNominationNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUMMY_NOMINATION_NAV: fieldBuilder.buildEdmTypeField(
          'dummyNominationNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('email', 'Edm.Byte', true),
        /**
         * Static representation of the {@link empId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMP_ID: fieldBuilder.buildEdmTypeField('empId', 'Edm.Byte', true),
        /**
         * Static representation of the {@link empInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMP_INFO: fieldBuilder.buildEdmTypeField('empInfo', 'Edm.Byte', true),
        /**
         * Static representation of the {@link employeeClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CLASS: fieldBuilder.buildEdmTypeField(
          'employeeClass',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link ethnicity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNICITY: fieldBuilder.buildEdmTypeField(
          'ethnicity',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link ethnicityNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNICITY_NAV: fieldBuilder.buildEdmTypeField(
          'ethnicityNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('fax', 'Edm.Byte', true),
        /**
         * Static representation of the {@link finalJobCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_CODE: fieldBuilder.buildEdmTypeField(
          'finalJobCode',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link finalJobFamily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_FAMILY: fieldBuilder.buildEdmTypeField(
          'finalJobFamily',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link finalJobRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_ROLE: fieldBuilder.buildEdmTypeField(
          'finalJobRole',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'firstName',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link futureLeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_LEADER: fieldBuilder.buildEdmTypeField(
          'futureLeader',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEdmTypeField('gender', 'Edm.Byte', true),
        /**
         * Static representation of the {@link hireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRE_DATE: fieldBuilder.buildEdmTypeField('hireDate', 'Edm.Byte', true),
        /**
         * Static representation of the {@link homePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_PHONE: fieldBuilder.buildEdmTypeField(
          'homePhone',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link hr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HR: fieldBuilder.buildEdmTypeField('hr', 'Edm.Byte', true),
        /**
         * Static representation of the {@link hrReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HR_REPORTS: fieldBuilder.buildEdmTypeField(
          'hrReports',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link impactOfLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_OF_LOSS: fieldBuilder.buildEdmTypeField(
          'impactOfLoss',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link impactOfLossComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_OF_LOSS_COMMENTS: fieldBuilder.buildEdmTypeField(
          'impactOfLossComments',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link impactOfLossNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_OF_LOSS_NAV: fieldBuilder.buildEdmTypeField(
          'impactOfLossNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link issueComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_COMMENTS: fieldBuilder.buildEdmTypeField(
          'issueComments',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link jobCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_CODE: fieldBuilder.buildEdmTypeField('jobCode', 'Edm.Byte', true),
        /**
         * Static representation of the {@link jobFamily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY: fieldBuilder.buildEdmTypeField(
          'jobFamily',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link jobLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_LEVEL: fieldBuilder.buildEdmTypeField('jobLevel', 'Edm.Byte', true),
        /**
         * Static representation of the {@link jobRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ROLE: fieldBuilder.buildEdmTypeField('jobRole', 'Edm.Byte', true),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField('jobTitle', 'Edm.Byte', true),
        /**
         * Static representation of the {@link keyPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_POSITION: fieldBuilder.buildEdmTypeField(
          'keyPosition',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link lastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'lastModified',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedWithTZ',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField('lastName', 'Edm.Byte', true),
        /**
         * Static representation of the {@link lastReviewDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_REVIEW_DATE: fieldBuilder.buildEdmTypeField(
          'lastReviewDate',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('level', 'Edm.Byte', true),
        /**
         * Static representation of the {@link localCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'localCurrencyCode',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField('location', 'Edm.Byte', true),
        /**
         * Static representation of the {@link lumpsum2Target} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMPSUM_2_TARGET: fieldBuilder.buildEdmTypeField(
          'lumpsum2Target',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link lumpsumTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMPSUM_TARGET: fieldBuilder.buildEdmTypeField(
          'lumpsumTarget',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link manager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER: fieldBuilder.buildEdmTypeField('manager', 'Edm.Byte', true),
        /**
         * Static representation of the {@link married} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARRIED: fieldBuilder.buildEdmTypeField('married', 'Edm.Byte', true),
        /**
         * Static representation of the {@link matrix1Label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_1_LABEL: fieldBuilder.buildEdmTypeField(
          'matrix1Label',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link matrix2Label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_2_LABEL: fieldBuilder.buildEdmTypeField(
          'matrix2Label',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link matrixManaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_MANAGED: fieldBuilder.buildEdmTypeField(
          'matrixManaged',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link matrixManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_MANAGER: fieldBuilder.buildEdmTypeField(
          'matrixManager',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link matrixReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_REPORTS: fieldBuilder.buildEdmTypeField(
          'matrixReports',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link meritEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERIT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'meritEffectiveDate',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link meritTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERIT_TARGET: fieldBuilder.buildEdmTypeField(
          'meritTarget',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link mi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MI: fieldBuilder.buildEdmTypeField('mi', 'Edm.Byte', true),
        /**
         * Static representation of the {@link minority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINORITY: fieldBuilder.buildEdmTypeField('minority', 'Edm.Byte', true),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'nationality',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link newToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'newToPosition',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link nickname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NICKNAME: fieldBuilder.buildEdmTypeField('nickname', 'Edm.Byte', true),
        /**
         * Static representation of the {@link nominationNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOMINATION_NAV: fieldBuilder.buildEdmTypeField(
          'nominationNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link objective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECTIVE: fieldBuilder.buildEdmTypeField(
          'objective',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link onboardingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONBOARDING_ID: fieldBuilder.buildEdmTypeField(
          'onboardingId',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link origHireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_HIRE_DATE: fieldBuilder.buildEdmTypeField(
          'origHireDate',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField('password', 'Edm.Byte', true),
        /**
         * Static representation of the {@link payGrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_GRADE: fieldBuilder.buildEdmTypeField('payGrade', 'Edm.Byte', true),
        /**
         * Static representation of the {@link performance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE: fieldBuilder.buildEdmTypeField(
          'performance',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link potential} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENTIAL: fieldBuilder.buildEdmTypeField(
          'potential',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link promotionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'promotionAmount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link proxy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY: fieldBuilder.buildEdmTypeField('proxy', 'Edm.Byte', true),
        /**
         * Static representation of the {@link raiseProrating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAISE_PRORATING: fieldBuilder.buildEdmTypeField(
          'raiseProrating',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reasonForLeaving} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_LEAVING: fieldBuilder.buildEdmTypeField(
          'reasonForLeaving',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reasonForLeavingNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_LEAVING_NAV: fieldBuilder.buildEdmTypeField(
          'reasonForLeavingNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reloComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_COMMENTS: fieldBuilder.buildEdmTypeField(
          'reloComments',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reloLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_LOCATION: fieldBuilder.buildEdmTypeField(
          'reloLocation',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reloWilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_WILLING: fieldBuilder.buildEdmTypeField(
          'reloWilling',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reloWillingNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_WILLING_NAV: fieldBuilder.buildEdmTypeField(
          'reloWillingNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link reviewFreq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_FREQ: fieldBuilder.buildEdmTypeField(
          'reviewFreq',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link riskOfLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_OF_LOSS: fieldBuilder.buildEdmTypeField(
          'riskOfLoss',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link riskOfLossNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_OF_LOSS_NAV: fieldBuilder.buildEdmTypeField(
          'riskOfLossNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY: fieldBuilder.buildEdmTypeField('salary', 'Edm.Byte', true),
        /**
         * Static representation of the {@link salaryBudgetExtra2Percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_EXTRA_2_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetExtra2Percentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetExtraPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_EXTRA_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetExtraPercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetFinalSalaryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_FINAL_SALARY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetFinalSalaryPercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetLumpsumPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_LUMPSUM_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetLumpsumPercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetMeritPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_MERIT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetMeritPercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetPromotionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_PROMOTION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetPromotionPercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetTotalRaisePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_TOTAL_RAISE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetTotalRaisePercentage',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_LOCAL: fieldBuilder.buildEdmTypeField(
          'salaryLocal',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salaryProrating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_PRORATING: fieldBuilder.buildEdmTypeField(
          'salaryProrating',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salutation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALUTATION: fieldBuilder.buildEdmTypeField(
          'salutation',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link salutationNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALUTATION_NAV: fieldBuilder.buildEdmTypeField(
          'salutationNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link sciLastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCI_LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'sciLastModified',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link seatingChart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEATING_CHART: fieldBuilder.buildEdmTypeField(
          'seatingChart',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link secondManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_MANAGER: fieldBuilder.buildEdmTypeField(
          'secondManager',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link secondReports} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_REPORTS: fieldBuilder.buildEdmTypeField(
          'secondReports',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link serviceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DATE: fieldBuilder.buildEdmTypeField(
          'serviceDate',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link ssn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSN: fieldBuilder.buildEdmTypeField('ssn', 'Edm.Byte', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.Byte', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.Byte', true),
        /**
         * Static representation of the {@link stockBudgetOptionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OPTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOptionAmount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther1Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_1_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther1Amount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther2Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_2_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther2Amount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther3Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_3_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther3Amount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetStockAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_STOCK_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetStockAmount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetUnitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_UNIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetUnitAmount',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link suffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX: fieldBuilder.buildEdmTypeField('suffix', 'Edm.Byte', true),
        /**
         * Static representation of the {@link sysCostOfSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_COST_OF_SOURCE: fieldBuilder.buildEdmTypeField(
          'sysCostOfSource',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link sysSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_SOURCE: fieldBuilder.buildEdmTypeField(
          'sysSource',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link sysSourceNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_SOURCE_NAV: fieldBuilder.buildEdmTypeField(
          'sysSourceNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link sysStartingSalary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_STARTING_SALARY: fieldBuilder.buildEdmTypeField(
          'sysStartingSalary',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEdmTypeField('timeZone', 'Edm.Byte', true),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.Byte', true),
        /**
         * Static representation of the {@link totalTeamSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TEAM_SIZE: fieldBuilder.buildEdmTypeField(
          'totalTeamSize',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.Byte', false),
        /**
         * Static representation of the {@link userPermissionsNav} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_PERMISSIONS_NAV: fieldBuilder.buildEdmTypeField(
          'userPermissionsNav',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link username} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERNAME: fieldBuilder.buildEdmTypeField('username', 'Edm.Byte', true),
        /**
         * Static representation of the {@link veteranDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_DISABLED: fieldBuilder.buildEdmTypeField(
          'veteranDisabled',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link veteranMedal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_MEDAL: fieldBuilder.buildEdmTypeField(
          'veteranMedal',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link veteranProtected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_PROTECTED: fieldBuilder.buildEdmTypeField(
          'veteranProtected',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link veteranSeparated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_SEPARATED: fieldBuilder.buildEdmTypeField(
          'veteranSeparated',
          'Edm.Byte',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('zipCode', 'Edm.Byte', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserPermissions)
      };
    }

    return this._schema;
  }
}

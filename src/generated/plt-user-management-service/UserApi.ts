/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { User } from './User';
import { UserRequestBuilder } from './UserRequestBuilder';
import { UserPermissionsApi } from './UserPermissionsApi';
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
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class UserApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<User<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link customManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_MANAGER: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link directReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIRECT_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hr} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HR: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link hrReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HR_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link manager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link matrixManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATRIX_MANAGER: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link matrixReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATRIX_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link proxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY: Link<User<DeSerializersT>, DeSerializersT, UserApi<DeSerializersT>>;
    /**
     * Static representation of the one-to-one navigation property {@link secondManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_MANAGER: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link secondReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userPermissionsNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_PERMISSIONS_NAV: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserPermissionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserApi<DeSerializersT>,
      UserPermissionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CUSTOM_MANAGER: new Link('customManager', this, linkedApis[0]),
      CUSTOM_REPORTS: new Link('customReports', this, linkedApis[1]),
      DIRECT_REPORTS: new Link('directReports', this, linkedApis[2]),
      HR: new OneToOneLink('hr', this, linkedApis[3]),
      HR_REPORTS: new Link('hrReports', this, linkedApis[4]),
      MANAGER: new OneToOneLink('manager', this, linkedApis[5]),
      MATRIX_MANAGER: new Link('matrixManager', this, linkedApis[6]),
      MATRIX_REPORTS: new Link('matrixReports', this, linkedApis[7]),
      PROXY: new Link('proxy', this, linkedApis[8]),
      SECOND_MANAGER: new OneToOneLink('secondManager', this, linkedApis[9]),
      SECOND_REPORTS: new Link('secondReports', this, linkedApis[10]),
      USER_PERMISSIONS_NAV: new OneToOneLink(
        'userPermissionsNav',
        this,
        linkedApis[11]
      )
    };
    return this;
  }

  entityConstructor = User;

  requestBuilder(): UserRequestBuilder<DeSerializersT> {
    return new UserRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<User<DeSerializersT>, DeSerializersT> {
    return entityBuilder<User<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<User<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof User, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(User, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_LINE_1: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LINE_2: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDRESS_LINE_3: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENCH_STRENGTH: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BONUS_BUDGET_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BONUS_TARGET: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    BUSINESS_PHONE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUSINESS_SEGMENT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CELL_PHONE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITIZENSHIP: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_BONUS_ELIGIBLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COMPENSATION_ELIGIBLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COMPENSATION_READ_ONLY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COMPENSATION_SALARY_ELIGIBLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COMPENSATION_SALARY_RATE_TYPE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPENSATION_SALARY_RATE_UNITS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    COMPENSATION_STOCK_ELIGIBLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    COMPETENCY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRITICAL_TALENT_COMMENTS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_01: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_02: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_03: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_04: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_05: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_06: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_07: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_08: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_09: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_10: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_11: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_12: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_13: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_14: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOM_15: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DATE_OF_CURRENT_POSITION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DATE_OF_POSITION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DEFAULT_FULL_NAME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_LOCALE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMP_ID: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_CLASS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ETHNICITY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINAL_JOB_CODE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINAL_JOB_FAMILY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FINAL_JOB_ROLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUTURE_LEADER: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    GENDER: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIRE_DATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    HOME_PHONE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_OF_LOSS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_OF_LOSS_COMMENTS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_COMMENTS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_CODE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_FAMILY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_LEVEL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ROLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEY_POSITION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_MODIFIED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_WITH_TZ: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_REVIEW_DATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEVEL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCAL_CURRENCY_CODE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LUMPSUM_2_TARGET: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    LUMPSUM_TARGET: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    MARRIED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MATRIX_1_LABEL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATRIX_2_LABEL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATRIX_MANAGED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MERIT_EFFECTIVE_DATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MERIT_TARGET: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    MI: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINORITY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    NATIONALITY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEW_TO_POSITION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    NICKNAME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECTIVE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    ONBOARDING_ID: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIG_HIRE_DATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_GRADE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERFORMANCE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    POTENTIAL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    PROMOTION_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    RAISE_PRORATING: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    REASON_FOR_LEAVING: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELO_COMMENTS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELO_LOCATION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELO_WILLING: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVIEW_FREQ: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RISK_OF_LOSS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALARY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_EXTRA_2_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_EXTRA_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_FINAL_SALARY_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_LUMPSUM_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_MERIT_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_PROMOTION_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_BUDGET_TOTAL_RAISE_PERCENTAGE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_LOCAL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALARY_PRORATING: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SALUTATION: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCI_LAST_MODIFIED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    SEATING_CHART: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_DATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    SSN: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STOCK_BUDGET_OPTION_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_1_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_2_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STOCK_BUDGET_OTHER_3_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STOCK_BUDGET_STOCK_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    STOCK_BUDGET_UNIT_AMOUNT: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    SUFFIX: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_COST_OF_SOURCE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    SYS_SOURCE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SYS_STARTING_SALARY: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Single',
      true,
      true
    >;
    TIME_ZONE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_TEAM_SIZE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USERNAME: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VETERAN_DISABLED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VETERAN_MEDAL: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VETERAN_PROTECTED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    VETERAN_SEPARATED: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      User<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_MANAGER: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOM_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link directReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIRECT_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hr} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HR: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link hrReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HR_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link manager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MANAGER: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link matrixManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATRIX_MANAGER: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link matrixReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MATRIX_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link proxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY: Link<User<DeSerializersT>, DeSerializersT, UserApi<DeSerializersT>>;
    /**
     * Static representation of the one-to-one navigation property {@link secondManager} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_MANAGER: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link secondReports} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_REPORTS: Link<
      User<DeSerializersT>,
      DeSerializersT,
      UserApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userPermissionsNav} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_PERMISSIONS_NAV: OneToOneLink<
      User<DeSerializersT>,
      DeSerializersT,
      UserPermissionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<User<DeSerializers>>;
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
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLine2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_2: fieldBuilder.buildEdmTypeField(
          'addressLine2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link addressLine3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_LINE_3: fieldBuilder.buildEdmTypeField(
          'addressLine3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benchStrength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENCH_STRENGTH: fieldBuilder.buildEdmTypeField(
          'benchStrength',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bonusBudgetAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BONUS_BUDGET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'bonusBudgetAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link bonusTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BONUS_TARGET: fieldBuilder.buildEdmTypeField(
          'bonusTarget',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link businessPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PHONE: fieldBuilder.buildEdmTypeField(
          'businessPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link businessSegment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_SEGMENT: fieldBuilder.buildEdmTypeField(
          'businessSegment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cellPhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CELL_PHONE: fieldBuilder.buildEdmTypeField(
          'cellPhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link citizenship} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITIZENSHIP: fieldBuilder.buildEdmTypeField(
          'citizenship',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('city', 'Edm.String', true),
        /**
         * Static representation of the {@link compensationBonusEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_BONUS_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationBonusEligible',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link compensationEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationEligible',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link compensationReadOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_READ_ONLY: fieldBuilder.buildEdmTypeField(
          'compensationReadOnly',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationSalaryEligible',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryRateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_RATE_TYPE: fieldBuilder.buildEdmTypeField(
          'compensationSalaryRateType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compensationSalaryRateUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_SALARY_RATE_UNITS: fieldBuilder.buildEdmTypeField(
          'compensationSalaryRateUnits',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link compensationStockEligible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_STOCK_ELIGIBLE: fieldBuilder.buildEdmTypeField(
          'compensationStockEligible',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link competency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPETENCY: fieldBuilder.buildEdmTypeField(
          'competency',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
        /**
         * Static representation of the {@link criticalTalentComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRITICAL_TALENT_COMMENTS: fieldBuilder.buildEdmTypeField(
          'criticalTalentComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom01} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_01: fieldBuilder.buildEdmTypeField(
          'custom01',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom02} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_02: fieldBuilder.buildEdmTypeField(
          'custom02',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom03} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_03: fieldBuilder.buildEdmTypeField(
          'custom03',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom04} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_04: fieldBuilder.buildEdmTypeField(
          'custom04',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom05} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_05: fieldBuilder.buildEdmTypeField(
          'custom05',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom06} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_06: fieldBuilder.buildEdmTypeField(
          'custom06',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom07} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_07: fieldBuilder.buildEdmTypeField(
          'custom07',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom08} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_08: fieldBuilder.buildEdmTypeField(
          'custom08',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom09} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_09: fieldBuilder.buildEdmTypeField(
          'custom09',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom10} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_10: fieldBuilder.buildEdmTypeField(
          'custom10',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom11} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_11: fieldBuilder.buildEdmTypeField(
          'custom11',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom12} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_12: fieldBuilder.buildEdmTypeField(
          'custom12',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom13} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_13: fieldBuilder.buildEdmTypeField(
          'custom13',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom14} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_14: fieldBuilder.buildEdmTypeField(
          'custom14',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link custom15} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_15: fieldBuilder.buildEdmTypeField(
          'custom15',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'dateOfBirth',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link dateOfCurrentPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_CURRENT_POSITION: fieldBuilder.buildEdmTypeField(
          'dateOfCurrentPosition',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link dateOfPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_POSITION: fieldBuilder.buildEdmTypeField(
          'dateOfPosition',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link defaultFullName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FULL_NAME: fieldBuilder.buildEdmTypeField(
          'defaultFullName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultLocale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LOCALE: fieldBuilder.buildEdmTypeField(
          'defaultLocale',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'department',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link division} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION: fieldBuilder.buildEdmTypeField(
          'division',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('email', 'Edm.String', true),
        /**
         * Static representation of the {@link empId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMP_ID: fieldBuilder.buildEdmTypeField('empId', 'Edm.String', true),
        /**
         * Static representation of the {@link employeeClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_CLASS: fieldBuilder.buildEdmTypeField(
          'employeeClass',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ethnicity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ETHNICITY: fieldBuilder.buildEdmTypeField(
          'ethnicity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX: fieldBuilder.buildEdmTypeField('fax', 'Edm.String', true),
        /**
         * Static representation of the {@link finalJobCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_CODE: fieldBuilder.buildEdmTypeField(
          'finalJobCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finalJobFamily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_FAMILY: fieldBuilder.buildEdmTypeField(
          'finalJobFamily',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link finalJobRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FINAL_JOB_ROLE: fieldBuilder.buildEdmTypeField(
          'finalJobRole',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'firstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link futureLeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUTURE_LEADER: fieldBuilder.buildEdmTypeField(
          'futureLeader',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEdmTypeField('gender', 'Edm.String', false),
        /**
         * Static representation of the {@link hireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRE_DATE: fieldBuilder.buildEdmTypeField(
          'hireDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link homePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOME_PHONE: fieldBuilder.buildEdmTypeField(
          'homePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impactOfLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_OF_LOSS: fieldBuilder.buildEdmTypeField(
          'impactOfLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impactOfLossComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_OF_LOSS_COMMENTS: fieldBuilder.buildEdmTypeField(
          'impactOfLossComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issueComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_COMMENTS: fieldBuilder.buildEdmTypeField(
          'issueComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_CODE: fieldBuilder.buildEdmTypeField('jobCode', 'Edm.String', true),
        /**
         * Static representation of the {@link jobFamily} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_FAMILY: fieldBuilder.buildEdmTypeField(
          'jobFamily',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_LEVEL: fieldBuilder.buildEdmTypeField(
          'jobLevel',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ROLE: fieldBuilder.buildEdmTypeField('jobRole', 'Edm.String', true),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'jobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keyPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEY_POSITION: fieldBuilder.buildEdmTypeField(
          'keyPosition',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'lastModified',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'lastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastReviewDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_REVIEW_DATE: fieldBuilder.buildEdmTypeField(
          'lastReviewDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link level} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL: fieldBuilder.buildEdmTypeField('level', 'Edm.String', true),
        /**
         * Static representation of the {@link localCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCAL_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'localCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link location} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION: fieldBuilder.buildEdmTypeField(
          'location',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lumpsum2Target} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMPSUM_2_TARGET: fieldBuilder.buildEdmTypeField(
          'lumpsum2Target',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link lumpsumTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LUMPSUM_TARGET: fieldBuilder.buildEdmTypeField(
          'lumpsumTarget',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link married} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARRIED: fieldBuilder.buildEdmTypeField('married', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link matrix1Label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_1_LABEL: fieldBuilder.buildEdmTypeField(
          'matrix1Label',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matrix2Label} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_2_LABEL: fieldBuilder.buildEdmTypeField(
          'matrix2Label',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matrixManaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATRIX_MANAGED: fieldBuilder.buildEdmTypeField(
          'matrixManaged',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link meritEffectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERIT_EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'meritEffectiveDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link meritTarget} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERIT_TARGET: fieldBuilder.buildEdmTypeField(
          'meritTarget',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link mi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MI: fieldBuilder.buildEdmTypeField('mi', 'Edm.String', true),
        /**
         * Static representation of the {@link minority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINORITY: fieldBuilder.buildEdmTypeField(
          'minority',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link nationality} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALITY: fieldBuilder.buildEdmTypeField(
          'nationality',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link newToPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_TO_POSITION: fieldBuilder.buildEdmTypeField(
          'newToPosition',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link nickname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NICKNAME: fieldBuilder.buildEdmTypeField(
          'nickname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link objective} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECTIVE: fieldBuilder.buildEdmTypeField(
          'objective',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link onboardingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONBOARDING_ID: fieldBuilder.buildEdmTypeField(
          'onboardingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origHireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIG_HIRE_DATE: fieldBuilder.buildEdmTypeField(
          'origHireDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payGrade} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_GRADE: fieldBuilder.buildEdmTypeField(
          'payGrade',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link performance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERFORMANCE: fieldBuilder.buildEdmTypeField(
          'performance',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link potential} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POTENTIAL: fieldBuilder.buildEdmTypeField(
          'potential',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link promotionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'promotionAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link raiseProrating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RAISE_PRORATING: fieldBuilder.buildEdmTypeField(
          'raiseProrating',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link reasonForLeaving} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_LEAVING: fieldBuilder.buildEdmTypeField(
          'reasonForLeaving',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reloComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_COMMENTS: fieldBuilder.buildEdmTypeField(
          'reloComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reloLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_LOCATION: fieldBuilder.buildEdmTypeField(
          'reloLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reloWilling} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELO_WILLING: fieldBuilder.buildEdmTypeField(
          'reloWilling',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reviewFreq} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_FREQ: fieldBuilder.buildEdmTypeField(
          'reviewFreq',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link riskOfLoss} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RISK_OF_LOSS: fieldBuilder.buildEdmTypeField(
          'riskOfLoss',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY: fieldBuilder.buildEdmTypeField('salary', 'Edm.Double', true),
        /**
         * Static representation of the {@link salaryBudgetExtra2Percentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_EXTRA_2_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetExtra2Percentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetExtraPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_EXTRA_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetExtraPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetFinalSalaryPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_FINAL_SALARY_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetFinalSalaryPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetLumpsumPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_LUMPSUM_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetLumpsumPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetMeritPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_MERIT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetMeritPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetPromotionPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_PROMOTION_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetPromotionPercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryBudgetTotalRaisePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_BUDGET_TOTAL_RAISE_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'salaryBudgetTotalRaisePercentage',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryLocal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_LOCAL: fieldBuilder.buildEdmTypeField(
          'salaryLocal',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salaryProrating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALARY_PRORATING: fieldBuilder.buildEdmTypeField(
          'salaryProrating',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link salutation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALUTATION: fieldBuilder.buildEdmTypeField(
          'salutation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sciLastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCI_LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'sciLastModified',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link seatingChart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEATING_CHART: fieldBuilder.buildEdmTypeField(
          'seatingChart',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DATE: fieldBuilder.buildEdmTypeField(
          'serviceDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link ssn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSN: fieldBuilder.buildEdmTypeField('ssn', 'Edm.String', true),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', false),
        /**
         * Static representation of the {@link stockBudgetOptionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OPTION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOptionAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther1Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_1_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther1Amount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther2Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_2_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther2Amount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetOther3Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_OTHER_3_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetOther3Amount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetStockAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_STOCK_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetStockAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link stockBudgetUnitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK_BUDGET_UNIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'stockBudgetUnitAmount',
          'Edm.Double',
          true
        ),
        /**
         * Static representation of the {@link suffix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUFFIX: fieldBuilder.buildEdmTypeField('suffix', 'Edm.String', true),
        /**
         * Static representation of the {@link sysCostOfSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_COST_OF_SOURCE: fieldBuilder.buildEdmTypeField(
          'sysCostOfSource',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link sysSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_SOURCE: fieldBuilder.buildEdmTypeField(
          'sysSource',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link sysStartingSalary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_STARTING_SALARY: fieldBuilder.buildEdmTypeField(
          'sysStartingSalary',
          'Edm.Single',
          true
        ),
        /**
         * Static representation of the {@link timeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_ZONE: fieldBuilder.buildEdmTypeField(
          'timeZone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link totalTeamSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_TEAM_SIZE: fieldBuilder.buildEdmTypeField(
          'totalTeamSize',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link username} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USERNAME: fieldBuilder.buildEdmTypeField(
          'username',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link veteranDisabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_DISABLED: fieldBuilder.buildEdmTypeField(
          'veteranDisabled',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link veteranMedal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_MEDAL: fieldBuilder.buildEdmTypeField(
          'veteranMedal',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link veteranProtected} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_PROTECTED: fieldBuilder.buildEdmTypeField(
          'veteranProtected',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link veteranSeparated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VETERAN_SEPARATED: fieldBuilder.buildEdmTypeField(
          'veteranSeparated',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('zipCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', User)
      };
    }

    return this._schema;
  }
}

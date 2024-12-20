/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPayoutProfile } from './TimeAccountPayoutProfile';
import { TimeAccountPayoutProfileRequestBuilder } from './TimeAccountPayoutProfileRequestBuilder';
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
export class TimeAccountPayoutProfileApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<TimeAccountPayoutProfile<DeSerializersT>, DeSerializersT>
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

  entityConstructor = TimeAccountPayoutProfile;

  requestBuilder(): TimeAccountPayoutProfileRequestBuilder<DeSerializersT> {
    return new TimeAccountPayoutProfileRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeAccountPayoutProfile<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TimeAccountPayoutProfile<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TimeAccountPayoutProfile<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof TimeAccountPayoutProfile,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeAccountPayoutProfile,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_DATE_TIME: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    ENTITY_UUID: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_CODE: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXTERNAL_NAME_AR_SA: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_CY_GB: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DE_DE: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_GB: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_RTL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_EN_US: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_ES: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ES_MX: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_CA: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_FR_FR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_HI_IN: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_IW_IL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_JA_JP: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_KO_KR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_LOCALIZED: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_NL_NL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_PT_BR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_TH_TH: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_NAME_ZH_CN: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_BY: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MDF_SYSTEM_RECORD_STATUS: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT_ACCRUAL_SEPARATED: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT_GROUP: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT_TERMINATION: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_AR_SA: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_CY_GB: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_DE_DE: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_DEBUG: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_DEBUG_APOS: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_DEBUG_APOS_RTL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_GB: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_RTL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_EN_US: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_ES_ES: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_ES_MX: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_FR_CA: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_FR_FR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_HI_IN: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_IW_IL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_JA_JP: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_KO_KR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_LOCALIZED: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_NL_NL: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_PT_BR: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_TH_TH: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYOUT_MESSAGE_TEXT_ZH_CN: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKFLOW_CONFIGURATION: OrderableEdmTypeField<
      TimeAccountPayoutProfile<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TimeAccountPayoutProfile<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'createdDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link entityUuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_UUID: fieldBuilder.buildEdmTypeField(
          'entityUUID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CODE: fieldBuilder.buildEdmTypeField(
          'externalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link externalNameArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_AR_SA: fieldBuilder.buildEdmTypeField(
          'externalName_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_CY_GB: fieldBuilder.buildEdmTypeField(
          'externalName_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DE_DE: fieldBuilder.buildEdmTypeField(
          'externalName_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'externalName_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_DEBUG_APOS_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_GB: fieldBuilder.buildEdmTypeField(
          'externalName_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_RTL: fieldBuilder.buildEdmTypeField(
          'externalName_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_EN_US: fieldBuilder.buildEdmTypeField(
          'externalName_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_ES: fieldBuilder.buildEdmTypeField(
          'externalName_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ES_MX: fieldBuilder.buildEdmTypeField(
          'externalName_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_CA: fieldBuilder.buildEdmTypeField(
          'externalName_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_FR_FR: fieldBuilder.buildEdmTypeField(
          'externalName_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_HI_IN: fieldBuilder.buildEdmTypeField(
          'externalName_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_IW_IL: fieldBuilder.buildEdmTypeField(
          'externalName_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_JA_JP: fieldBuilder.buildEdmTypeField(
          'externalName_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_KO_KR: fieldBuilder.buildEdmTypeField(
          'externalName_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'externalName_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_NL_NL: fieldBuilder.buildEdmTypeField(
          'externalName_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNamePtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_PT_BR: fieldBuilder.buildEdmTypeField(
          'externalName_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_TH_TH: fieldBuilder.buildEdmTypeField(
          'externalName_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalNameZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_NAME_ZH_CN: fieldBuilder.buildEdmTypeField(
          'externalName_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'lastModifiedBy',
          'Edm.String',
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
         * Static representation of the {@link mdfSystemRecordStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MDF_SYSTEM_RECORD_STATUS: fieldBuilder.buildEdmTypeField(
          'mdfSystemRecordStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT: fieldBuilder.buildEdmTypeField(
          'payComponent',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponentAccrualSeparated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT_ACCRUAL_SEPARATED: fieldBuilder.buildEdmTypeField(
          'payComponentAccrualSeparated',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT_GROUP: fieldBuilder.buildEdmTypeField(
          'payComponentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponentTermination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT_TERMINATION: fieldBuilder.buildEdmTypeField(
          'payComponentTermination',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payComponentTerminationAccrualSeparated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_COMPONENT_TERMINATION_ACCRUAL_SEPARATED:
          fieldBuilder.buildEdmTypeField(
            'payComponentTerminationAccrualSeparated',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link payoutMessageTextArSa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_AR_SA: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_ar_SA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextCyGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_CY_GB: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_cy_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextDeDe} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_DE_DE: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_de_DE',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextDefaultValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_DEFAULT_VALUE: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_defaultValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnDebug} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_DEBUG: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_DEBUG',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnDebugApos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_DEBUG_APOS: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_DEBUG_APOS',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnDebugAposRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_DEBUG_APOS_RTL: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_DEBUG_APOS_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnGb} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_GB: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_GB',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnRtl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_RTL: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_RTL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEnUs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_EN_US: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_en_US',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEsEs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_ES_ES: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_es_ES',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextEsMx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_ES_MX: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_es_MX',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextFrCa} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_FR_CA: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_fr_CA',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextFrFr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_FR_FR: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_fr_FR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextHiIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_HI_IN: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_hi_IN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextIwIl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_IW_IL: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_iw_IL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextJaJp} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_JA_JP: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_ja_JP',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextKoKr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_KO_KR: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_ko_KR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextLocalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_LOCALIZED: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_localized',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextNlNl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_NL_NL: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_nl_NL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextPtBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_PT_BR: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_pt_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextThTh} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_TH_TH: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_th_TH',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payoutMessageTextZhCn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYOUT_MESSAGE_TEXT_ZH_CN: fieldBuilder.buildEdmTypeField(
          'payoutMessageText_zh_CN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workflowConfiguration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKFLOW_CONFIGURATION: fieldBuilder.buildEdmTypeField(
          'workflowConfiguration',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeAccountPayoutProfile)
      };
    }

    return this._schema;
  }
}

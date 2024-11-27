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
import type { TimeAccountPurchaseProfileApi } from './TimeAccountPurchaseProfileApi';
import {
  TimeAccountPurchaseProfilePayComponentAssignment,
  TimeAccountPurchaseProfilePayComponentAssignmentType
} from './TimeAccountPurchaseProfilePayComponentAssignment';

/**
 * This class represents the entity "TimeAccountPurchaseProfile" of service "ECTimeOff".
 */
export class TimeAccountPurchaseProfile<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TimeAccountPurchaseProfileType<T>
{
  /**
   * Technical entity name for TimeAccountPurchaseProfile.
   */
  static _entityName = 'TimeAccountPurchaseProfile';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the TimeAccountPurchaseProfile entity
   */
  static _keys = ['externalCode'];
  /**
   * Allow user to select the Deduction Start Date.
   * @nullable
   */
  allowDeductionStartDateSelection?: DeserializedType<T, 'Edm.Boolean'> | null;
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
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deduction Schedule.
   * Maximum length: 128.
   * @nullable
   */
  deductionSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deduction Type.
   * Maximum length: 128.
   * @nullable
   */
  deductionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity UUID.
   * Maximum length: 255.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Equivalent Units.
   * Maximum length: 128.
   * @nullable
   */
  equivalentUnits?: DeserializedType<T, 'Edm.String'> | null;
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
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instructional Text.
   * Maximum length: 1000.
   * @nullable
   */
  helpTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
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
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Configuration.
   * Maximum length: 32.
   * @nullable
   */
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TimeAccountPurchaseProfilePayComponentAssignment} entity.
   */
  deductionPayComponents!: TimeAccountPurchaseProfilePayComponentAssignment<T>[];

  constructor(readonly _entityApi: TimeAccountPurchaseProfileApi<T>) {
    super(_entityApi);
  }
}

export interface TimeAccountPurchaseProfileType<
  T extends DeSerializers = DefaultDeSerializers
> {
  allowDeductionStartDateSelection?: DeserializedType<T, 'Edm.Boolean'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deductionSchedule?: DeserializedType<T, 'Edm.String'> | null;
  deductionType?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  equivalentUnits?: DeserializedType<T, 'Edm.String'> | null;
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
  helpTextArSa?: DeserializedType<T, 'Edm.String'> | null;
  helpTextCyGb?: DeserializedType<T, 'Edm.String'> | null;
  helpTextDeDe?: DeserializedType<T, 'Edm.String'> | null;
  helpTextDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnGb?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEnUs?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEsEs?: DeserializedType<T, 'Edm.String'> | null;
  helpTextEsMx?: DeserializedType<T, 'Edm.String'> | null;
  helpTextFrCa?: DeserializedType<T, 'Edm.String'> | null;
  helpTextFrFr?: DeserializedType<T, 'Edm.String'> | null;
  helpTextHiIn?: DeserializedType<T, 'Edm.String'> | null;
  helpTextIwIl?: DeserializedType<T, 'Edm.String'> | null;
  helpTextJaJp?: DeserializedType<T, 'Edm.String'> | null;
  helpTextKoKr?: DeserializedType<T, 'Edm.String'> | null;
  helpTextLocalized?: DeserializedType<T, 'Edm.String'> | null;
  helpTextNlNl?: DeserializedType<T, 'Edm.String'> | null;
  helpTextPtBr?: DeserializedType<T, 'Edm.String'> | null;
  helpTextThTh?: DeserializedType<T, 'Edm.String'> | null;
  helpTextZhCn?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  workflowConfiguration?: DeserializedType<T, 'Edm.String'> | null;
  deductionPayComponents: TimeAccountPurchaseProfilePayComponentAssignmentType<T>[];
}

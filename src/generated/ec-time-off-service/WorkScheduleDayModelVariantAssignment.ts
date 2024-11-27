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
import type { WorkScheduleDayModelVariantAssignmentApi } from './WorkScheduleDayModelVariantAssignmentApi';
import {
  WorkScheduleDayModel,
  WorkScheduleDayModelType
} from './WorkScheduleDayModel';
import {
  WorkScheduleDayModelVariantIdentifier,
  WorkScheduleDayModelVariantIdentifierType
} from './WorkScheduleDayModelVariantIdentifier';

/**
 * This class represents the entity "WorkScheduleDayModelVariantAssignment" of service "ECTimeOff".
 */
export class WorkScheduleDayModelVariantAssignment<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WorkScheduleDayModelVariantAssignmentType<T>
{
  /**
   * Technical entity name for WorkScheduleDayModelVariantAssignment.
   */
  static _entityName = 'WorkScheduleDayModelVariantAssignment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the WorkScheduleDayModelVariantAssignment entity
   */
  static _keys = ['WorkScheduleDayModel_externalCode', 'externalCode'];
  /**
   * Work Schedule Day Model_External Code.
   * Maximum length: 128.
   */
  workScheduleDayModelExternalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Entity UUID.
   * Maximum length: 32.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
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
   * Day Model Variant.
   * Maximum length: 128.
   * @nullable
   */
  variantDayModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Day Model Variant Identifier.
   * Maximum length: 128.
   * @nullable
   */
  variantIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link WorkScheduleDayModel} entity.
   */
  variantDayModelNav?: WorkScheduleDayModel<T> | null;
  /**
   * One-to-one navigation property to the {@link WorkScheduleDayModelVariantIdentifier} entity.
   */
  variantIdentifierNav?: WorkScheduleDayModelVariantIdentifier<T> | null;

  constructor(
    readonly _entityApi: WorkScheduleDayModelVariantAssignmentApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WorkScheduleDayModelVariantAssignmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workScheduleDayModelExternalCode: DeserializedType<T, 'Edm.String'>;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
  variantDayModel?: DeserializedType<T, 'Edm.String'> | null;
  variantIdentifier?: DeserializedType<T, 'Edm.String'> | null;
  variantDayModelNav?: WorkScheduleDayModelType<T> | null;
  variantIdentifierNav?: WorkScheduleDayModelVariantIdentifierType<T> | null;
}

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
import type { ExternalLearnerPhoneInfoApi } from './ExternalLearnerPhoneInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "ExternalLearnerPhoneInfo" of service "FoundationPlatformPLT".
 */
export class ExternalLearnerPhoneInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalLearnerPhoneInfoType<T>
{
  /**
   * Technical entity name for ExternalLearnerPhoneInfo.
   */
  static _entityName = 'ExternalLearnerPhoneInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExternalLearnerPhoneInfo entity
   */
  static _keys = ['itemId'];
  /**
   * Area Code.
   * Maximum length: 32.
   * @nullable
   */
  areaCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * Maximum length: 32.
   * @nullable
   */
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * Maximum length: 32.
   * @nullable
   */
  extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  isPrimary?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * itemId.
   */
  itemId!: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Phone Number.
   * Maximum length: 100.
   * @nullable
   */
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phone Type.
   * Maximum length: 100.
   * @nullable
   */
  phoneType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  phoneTypeNav?: PicklistOption<T> | null;

  constructor(readonly _entityApi: ExternalLearnerPhoneInfoApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLearnerPhoneInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  areaCode?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: DeserializedType<T, 'Edm.Boolean'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemId: DeserializedType<T, 'Edm.Decimal'>;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneType?: DeserializedType<T, 'Edm.String'> | null;
  phoneTypeNav?: PicklistOptionType<T> | null;
}

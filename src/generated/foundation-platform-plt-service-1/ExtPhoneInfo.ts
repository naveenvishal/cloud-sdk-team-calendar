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
import type { ExtPhoneInfoApi } from './ExtPhoneInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "ExtPhoneInfo" of service "FoundationPlatformPLT".
 */
export class ExtPhoneInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExtPhoneInfoType<T>
{
  /**
   * Technical entity name for ExtPhoneInfo.
   */
  static _entityName = 'ExtPhoneInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExtPhoneInfo entity
   */
  static _keys = ['phoneInfoId'];
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
   * Maximum length: 4.
   * @nullable
   */
  isPrimary?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * phoneInfoId.
   */
  phoneInfoId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Phone Number.
   * Maximum length: 600.
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

  constructor(readonly _entityApi: ExtPhoneInfoApi<T>) {
    super(_entityApi);
  }
}

export interface ExtPhoneInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  areaCode?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  phoneInfoId: DeserializedType<T, 'Edm.Int64'>;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  phoneType?: DeserializedType<T, 'Edm.String'> | null;
  phoneTypeNav?: PicklistOptionType<T> | null;
}

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
import type { ExtEmailInfoApi } from './ExtEmailInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "ExtEmailInfo" of service "FoundationPlatformPLT".
 */
export class ExtEmailInfo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExtEmailInfoType<T>
{
  /**
   * Technical entity name for ExtEmailInfo.
   */
  static _entityName = 'ExtEmailInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExtEmailInfo entity
   */
  static _keys = ['emailInfoId'];
  /**
   * Email Address.
   * Maximum length: 100.
   */
  emailAddress!: DeserializedType<T, 'Edm.String'>;
  /**
   * emailInfoId.
   */
  emailInfoId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Email Type.
   * Maximum length: 38.
   */
  emailType!: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  emailTypeNav?: PicklistOption<T> | null;

  constructor(readonly _entityApi: ExtEmailInfoApi<T>) {
    super(_entityApi);
  }
}

export interface ExtEmailInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  emailAddress: DeserializedType<T, 'Edm.String'>;
  emailInfoId: DeserializedType<T, 'Edm.Int64'>;
  emailType: DeserializedType<T, 'Edm.String'>;
  isPrimary?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  emailTypeNav?: PicklistOptionType<T> | null;
}

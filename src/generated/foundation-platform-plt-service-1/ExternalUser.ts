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
import type { ExternalUserApi } from './ExternalUserApi';
import { ExtAddressInfo, ExtAddressInfoType } from './ExtAddressInfo';
import { ExtEmailInfo, ExtEmailInfoType } from './ExtEmailInfo';
import { ExtPersonalInfo, ExtPersonalInfoType } from './ExtPersonalInfo';
import { ExtPhoneInfo, ExtPhoneInfoType } from './ExtPhoneInfo';

/**
 * This class represents the entity "ExternalUser" of service "FoundationPlatformPLT".
 */
export class ExternalUser<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExternalUserType<T>
{
  /**
   * Technical entity name for ExternalUser.
   */
  static _entityName = 'ExternalUser';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExternalUser entity
   */
  static _keys = ['userId'];
  /**
   * Default Locale.
   * Maximum length: 32.
   * @nullable
   */
  defaultLocale?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * is_deleted.
   * @nullable
   */
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * loginMethod.
   * Maximum length: 8.
   * @nullable
   */
  loginMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * password.
   * Maximum length: 128.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * personGUID.
   * Maximum length: 32.
   * @nullable
   */
  personGuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * personId.
   * @nullable
   */
  personId?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * personIdExternal.
   * Maximum length: 100.
   * @nullable
   */
  personIdExternal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * productName.
   * Maximum length: 32.
   * @nullable
   */
  productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * status.
   * Maximum length: 2.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Zone.
   * Maximum length: 64.
   * @nullable
   */
  timeZone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Username.
   * Maximum length: 100.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ExtAddressInfo} entity.
   */
  extAddressInfo!: ExtAddressInfo<T>[];
  /**
   * One-to-many navigation property to the {@link ExtEmailInfo} entity.
   */
  extEmailInfo!: ExtEmailInfo<T>[];
  /**
   * One-to-one navigation property to the {@link ExtPersonalInfo} entity.
   */
  extPersonalInfo?: ExtPersonalInfo<T> | null;
  /**
   * One-to-many navigation property to the {@link ExtPhoneInfo} entity.
   */
  extPhoneInfo!: ExtPhoneInfo<T>[];

  constructor(readonly _entityApi: ExternalUserApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalUserType<
  T extends DeSerializers = DefaultDeSerializers
> {
  defaultLocale?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  loginMethod?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  personGuid?: DeserializedType<T, 'Edm.String'> | null;
  personId?: DeserializedType<T, 'Edm.Decimal'> | null;
  personIdExternal?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: DeserializedType<T, 'Edm.String'> | null;
  userId: DeserializedType<T, 'Edm.String'>;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  extAddressInfo: ExtAddressInfoType<T>[];
  extEmailInfo: ExtEmailInfoType<T>[];
  extPersonalInfo?: ExtPersonalInfoType<T> | null;
  extPhoneInfo: ExtPhoneInfoType<T>[];
}

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
import type { ExternalLearnerApi } from './ExternalLearnerApi';
import {
  ExternalLearnerEmailInfo,
  ExternalLearnerEmailInfoType
} from './ExternalLearnerEmailInfo';
import {
  ExternalLearnerAddressInfo,
  ExternalLearnerAddressInfoType
} from './ExternalLearnerAddressInfo';
import {
  ExternalLearnerPersonalInfo,
  ExternalLearnerPersonalInfoType
} from './ExternalLearnerPersonalInfo';
import {
  ExternalLearnerPhoneInfo,
  ExternalLearnerPhoneInfoType
} from './ExternalLearnerPhoneInfo';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "ExternalLearner" of service "FoundationPlatformPLT".
 */
export class ExternalLearner<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ExternalLearnerType<T>
{
  /**
   * Technical entity name for ExternalLearner.
   */
  static _entityName = 'ExternalLearner';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExternalLearner entity
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
   * sourceChannel.
   * Maximum length: 90.
   * @nullable
   */
  sourceChannel?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ExternalLearnerEmailInfo} entity.
   */
  emailInfo!: ExternalLearnerEmailInfo<T>[];
  /**
   * One-to-many navigation property to the {@link ExternalLearnerAddressInfo} entity.
   */
  homeAddress!: ExternalLearnerAddressInfo<T>[];
  /**
   * One-to-one navigation property to the {@link ExternalLearnerPersonalInfo} entity.
   */
  personalInfo?: ExternalLearnerPersonalInfo<T> | null;
  /**
   * One-to-many navigation property to the {@link ExternalLearnerPhoneInfo} entity.
   */
  phoneInfo!: ExternalLearnerPhoneInfo<T>[];
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  sourceChannelNav?: PicklistOption<T> | null;

  constructor(readonly _entityApi: ExternalLearnerApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLearnerType<
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
  sourceChannel?: DeserializedType<T, 'Edm.String'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  timeZone?: DeserializedType<T, 'Edm.String'> | null;
  userId: DeserializedType<T, 'Edm.String'>;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  emailInfo: ExternalLearnerEmailInfoType<T>[];
  homeAddress: ExternalLearnerAddressInfoType<T>[];
  personalInfo?: ExternalLearnerPersonalInfoType<T> | null;
  phoneInfo: ExternalLearnerPhoneInfoType<T>[];
  sourceChannelNav?: PicklistOptionType<T> | null;
}

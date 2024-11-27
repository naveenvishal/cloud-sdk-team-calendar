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
import type { ExternalLearnerPersonalInfoApi } from './ExternalLearnerPersonalInfoApi';

/**
 * This class represents the entity "ExternalLearnerPersonalInfo" of service "FoundationPlatformPLT".
 */
export class ExternalLearnerPersonalInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalLearnerPersonalInfoType<T>
{
  /**
   * Technical entity name for ExternalLearnerPersonalInfo.
   */
  static _entityName = 'ExternalLearnerPersonalInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExternalLearnerPersonalInfo entity
   */
  static _keys = ['itemId'];
  /**
   * Attachment.
   * @nullable
   */
  attachmentId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Name.
   * Maximum length: 128.
   * @nullable
   */
  birthName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business First Name.
   * Maximum length: 128.
   * @nullable
   */
  businessFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Last Name.
   * Maximum length: 128.
   * @nullable
   */
  businessLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate End Date.
   * @nullable
   */
  certificateEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Certificate Start Date.
   * @nullable
   */
  certificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Challenge Status.
   * @nullable
   */
  challengeStatus?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Country Of Birth.
   * Maximum length: 256.
   * @nullable
   */
  countryOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date Of Death.
   * @nullable
   */
  dateOfDeath?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Display Name.
   * Maximum length: 128.
   * @nullable
   */
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  displayNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  displayNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formal Name.
   * Maximum length: 128.
   * @nullable
   */
  formalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formal Name Alt1.
   * Maximum length: 128.
   * @nullable
   */
  formalNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formal Name Alt2.
   * Maximum length: 128.
   * @nullable
   */
  formalNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gender.
   * Maximum length: 2.
   * @nullable
   */
  gender?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initials.
   * Maximum length: 128.
   * @nullable
   */
  initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customize Name Format.
   * @nullable
   */
  isOverridden?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status.
   * Maximum length: 50.
   * @nullable
   */
  maritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prefix.
   * Maximum length: 128.
   * @nullable
   */
  namePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nationality.
   * Maximum length: 128.
   * @nullable
   */
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Language.
   * Maximum length: 256.
   * @nullable
   */
  nativePreferredLang?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Preferred Name.
   * Maximum length: 128.
   * @nullable
   */
  preferredName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Salutation.
   * Maximum length: 128.
   * @nullable
   */
  salutation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Script.
   * Maximum length: 128.
   * @nullable
   */
  script?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Last Name.
   * Maximum length: 128.
   * @nullable
   */
  secondLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Nationality.
   * Maximum length: 128.
   * @nullable
   */
  secondNationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Title.
   * Maximum length: 128.
   * @nullable
   */
  secondTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Marital Status Since.
   * @nullable
   */
  since?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Suffix.
   * Maximum length: 128.
   * @nullable
   */
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Nationality.
   * Maximum length: 128.
   * @nullable
   */
  thirdNationality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * Maximum length: 128.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ExternalLearnerPersonalInfoApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLearnerPersonalInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attachmentId?: DeserializedType<T, 'Edm.String'> | null;
  birthName?: DeserializedType<T, 'Edm.String'> | null;
  businessFirstName?: DeserializedType<T, 'Edm.String'> | null;
  businessLastName?: DeserializedType<T, 'Edm.String'> | null;
  certificateEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  certificateStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  challengeStatus?: DeserializedType<T, 'Edm.Boolean'> | null;
  countryOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  dateOfDeath?: DeserializedType<T, 'Edm.DateTime'> | null;
  displayName?: DeserializedType<T, 'Edm.String'> | null;
  displayNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  displayNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  firstNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  firstNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  formalName?: DeserializedType<T, 'Edm.String'> | null;
  formalNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  formalNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  gender?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  isOverridden?: DeserializedType<T, 'Edm.Boolean'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemId: DeserializedType<T, 'Edm.Decimal'>;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  lastNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  lastNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  maritalStatus?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  middleNameAlt1?: DeserializedType<T, 'Edm.String'> | null;
  middleNameAlt2?: DeserializedType<T, 'Edm.String'> | null;
  namePrefix?: DeserializedType<T, 'Edm.String'> | null;
  nationality?: DeserializedType<T, 'Edm.String'> | null;
  nativePreferredLang?: DeserializedType<T, 'Edm.String'> | null;
  preferredName?: DeserializedType<T, 'Edm.String'> | null;
  salutation?: DeserializedType<T, 'Edm.String'> | null;
  script?: DeserializedType<T, 'Edm.String'> | null;
  secondLastName?: DeserializedType<T, 'Edm.String'> | null;
  secondNationality?: DeserializedType<T, 'Edm.String'> | null;
  secondTitle?: DeserializedType<T, 'Edm.String'> | null;
  since?: DeserializedType<T, 'Edm.DateTime'> | null;
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  thirdNationality?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
}

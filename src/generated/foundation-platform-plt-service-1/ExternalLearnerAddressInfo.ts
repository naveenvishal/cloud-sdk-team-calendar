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
import type { ExternalLearnerAddressInfoApi } from './ExternalLearnerAddressInfoApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "ExternalLearnerAddressInfo" of service "FoundationPlatformPLT".
 */
export class ExternalLearnerAddressInfo<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalLearnerAddressInfoType<T>
{
  /**
   * Technical entity name for ExternalLearnerAddressInfo.
   */
  static _entityName = 'ExternalLearnerAddressInfo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the ExternalLearnerAddressInfo entity
   */
  static _keys = ['itemId'];
  /**
   * Alt1 address10.
   * Maximum length: 256.
   * @nullable
   */
  address10Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address10.
   * Maximum length: 256.
   * @nullable
   */
  address10Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address11.
   * Maximum length: 256.
   * @nullable
   */
  address11Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address11.
   * Maximum length: 256.
   * @nullable
   */
  address11Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address12.
   * Maximum length: 256.
   * @nullable
   */
  address12Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address12.
   * Maximum length: 256.
   * @nullable
   */
  address12Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address13.
   * Maximum length: 256.
   * @nullable
   */
  address13Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address13.
   * Maximum length: 256.
   * @nullable
   */
  address13Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address14.
   * Maximum length: 256.
   * @nullable
   */
  address14Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address14.
   * Maximum length: 256.
   * @nullable
   */
  address14Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address15.
   * Maximum length: 256.
   * @nullable
   */
  address15Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address15.
   * Maximum length: 256.
   * @nullable
   */
  address15Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address16.
   * Maximum length: 256.
   * @nullable
   */
  address16Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address16.
   * Maximum length: 256.
   * @nullable
   */
  address16Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address17.
   * Maximum length: 256.
   * @nullable
   */
  address17Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address17.
   * Maximum length: 256.
   * @nullable
   */
  address17Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address18.
   * Maximum length: 256.
   * @nullable
   */
  address18Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address18.
   * Maximum length: 256.
   * @nullable
   */
  address18Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address19.
   * Maximum length: 256.
   * @nullable
   */
  address19Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address19.
   * Maximum length: 256.
   * @nullable
   */
  address19Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address1.
   * Maximum length: 256.
   * @nullable
   */
  address1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address1.
   * Maximum length: 256.
   * @nullable
   */
  address1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address20.
   * Maximum length: 256.
   * @nullable
   */
  address20Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address20.
   * Maximum length: 256.
   * @nullable
   */
  address20Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address2.
   * Maximum length: 256.
   * @nullable
   */
  address2Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address2.
   * Maximum length: 256.
   * @nullable
   */
  address2Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address3.
   * Maximum length: 256.
   * @nullable
   */
  address3Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address3.
   * Maximum length: 256.
   * @nullable
   */
  address3Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address4.
   * Maximum length: 256.
   * @nullable
   */
  address4Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address4.
   * Maximum length: 256.
   * @nullable
   */
  address4Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address5.
   * Maximum length: 256.
   * @nullable
   */
  address5Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address5.
   * Maximum length: 256.
   * @nullable
   */
  address5Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address6.
   * Maximum length: 256.
   * @nullable
   */
  address6Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address6.
   * Maximum length: 256.
   * @nullable
   */
  address6Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address7.
   * Maximum length: 256.
   * @nullable
   */
  address7Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address7.
   * Maximum length: 256.
   * @nullable
   */
  address7Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address8.
   * Maximum length: 256.
   * @nullable
   */
  address8Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address8.
   * Maximum length: 256.
   * @nullable
   */
  address8Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 address9.
   * Maximum length: 256.
   * @nullable
   */
  address9Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 address9.
   * Maximum length: 256.
   * @nullable
   */
  address9Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * addressType.
   * Maximum length: 30.
   * @nullable
   */
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 city.
   * Maximum length: 256.
   * @nullable
   */
  cityAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 city.
   * Maximum length: 256.
   * @nullable
   */
  cityAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 county.
   * Maximum length: 256.
   * @nullable
   */
  countyAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 county.
   * Maximum length: 256.
   * @nullable
   */
  countyAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Date 1 in Language 1.
   * @nullable
   */
  customDate1Alt1?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Custom Date 1 in Language 2.
   * @nullable
   */
  customDate1Alt2?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Custom Decimal 1 in Language 1.
   * @nullable
   */
  customDouble1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Decimal 1 in Language 2.
   * @nullable
   */
  customDouble1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom Number 1 in Language 1.
   * @nullable
   */
  customLong1Alt1?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Custom Number 1 in Language 2.
   * @nullable
   */
  customLong1Alt2?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Custom String 1 in Language 1.
   * Maximum length: 256.
   * @nullable
   */
  customString1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Custom String 1 in Language 2.
   * Maximum length: 256.
   * @nullable
   */
  customString1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Employee User Id Field.
   * Maximum length: 256.
   * @nullable
   */
  empUsersSysId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Alt1 province.
   * Maximum length: 256.
   * @nullable
   */
  provinceAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 province.
   * Maximum length: 256.
   * @nullable
   */
  provinceAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * script.
   * Maximum length: 128.
   * @nullable
   */
  script?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 script.
   * Maximum length: 128.
   * @nullable
   */
  scriptAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 script.
   * Maximum length: 128.
   * @nullable
   */
  scriptAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt1 state.
   * Maximum length: 256.
   * @nullable
   */
  stateAlt1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Alt2 state.
   * Maximum length: 256.
   * @nullable
   */
  stateAlt2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  addressTypeNav?: PicklistOption<T> | null;

  constructor(readonly _entityApi: ExternalLearnerAddressInfoApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalLearnerAddressInfoType<
  T extends DeSerializers = DefaultDeSerializers
> {
  address10Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address10Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address11Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address11Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address12Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address12Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address13Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address13Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address14Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address14Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address15Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address15Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address16Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address16Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address17Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address17Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address18Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address18Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address19Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address19Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address20Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address20Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address2Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address2Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address3Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address3Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address4Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address4Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address5Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address5Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address6Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address6Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address7Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address7Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address8Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address8Alt2?: DeserializedType<T, 'Edm.String'> | null;
  address9Alt1?: DeserializedType<T, 'Edm.String'> | null;
  address9Alt2?: DeserializedType<T, 'Edm.String'> | null;
  addressType?: DeserializedType<T, 'Edm.String'> | null;
  cityAlt1?: DeserializedType<T, 'Edm.String'> | null;
  cityAlt2?: DeserializedType<T, 'Edm.String'> | null;
  countyAlt1?: DeserializedType<T, 'Edm.String'> | null;
  countyAlt2?: DeserializedType<T, 'Edm.String'> | null;
  customDate1Alt1?: DeserializedType<T, 'Edm.DateTime'> | null;
  customDate1Alt2?: DeserializedType<T, 'Edm.DateTime'> | null;
  customDouble1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  customDouble1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  customLong1Alt1?: DeserializedType<T, 'Edm.Decimal'> | null;
  customLong1Alt2?: DeserializedType<T, 'Edm.Decimal'> | null;
  customString1Alt1?: DeserializedType<T, 'Edm.String'> | null;
  customString1Alt2?: DeserializedType<T, 'Edm.String'> | null;
  empUsersSysId?: DeserializedType<T, 'Edm.String'> | null;
  isDeleted?: DeserializedType<T, 'Edm.Boolean'> | null;
  itemId: DeserializedType<T, 'Edm.Decimal'>;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  provinceAlt1?: DeserializedType<T, 'Edm.String'> | null;
  provinceAlt2?: DeserializedType<T, 'Edm.String'> | null;
  script?: DeserializedType<T, 'Edm.String'> | null;
  scriptAlt1?: DeserializedType<T, 'Edm.String'> | null;
  scriptAlt2?: DeserializedType<T, 'Edm.String'> | null;
  stateAlt1?: DeserializedType<T, 'Edm.String'> | null;
  stateAlt2?: DeserializedType<T, 'Edm.String'> | null;
  addressTypeNav?: PicklistOptionType<T> | null;
}

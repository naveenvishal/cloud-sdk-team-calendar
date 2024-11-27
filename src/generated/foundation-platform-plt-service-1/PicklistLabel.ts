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
import type { PicklistLabelApi } from './PicklistLabelApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "PicklistLabel" of service "FoundationPlatformPLT".
 */
export class PicklistLabel<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PicklistLabelType<T>
{
  /**
   * Technical entity name for PicklistLabel.
   */
  static _entityName = 'PicklistLabel';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the PicklistLabel entity
   */
  static _keys = ['locale', 'optionId'];
  /**
   * id.
   * @nullable
   */
  id?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * label.
   * Maximum length: 255.
   * @nullable
   */
  label?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * locale.
   * Maximum length: 32.
   */
  locale!: DeserializedType<T, 'Edm.String'>;
  /**
   * optionId.
   */
  optionId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  picklistOption?: PicklistOption<T> | null;

  constructor(readonly _entityApi: PicklistLabelApi<T>) {
    super(_entityApi);
  }
}

export interface PicklistLabelType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id?: DeserializedType<T, 'Edm.Int64'> | null;
  label?: DeserializedType<T, 'Edm.String'> | null;
  locale: DeserializedType<T, 'Edm.String'>;
  optionId: DeserializedType<T, 'Edm.Int64'>;
  picklistOption?: PicklistOptionType<T> | null;
}

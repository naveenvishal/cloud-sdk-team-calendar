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
import type { PicklistOptionApi } from './PicklistOptionApi';
import { Picklist, PicklistType } from './Picklist';
import { PicklistLabel, PicklistLabelType } from './PicklistLabel';

/**
 * This class represents the entity "PicklistOption" of service "FoundationPlatformPLT".
 */
export class PicklistOption<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PicklistOptionType<T>
{
  /**
   * Technical entity name for PicklistOption.
   */
  static _entityName = 'PicklistOption';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the PicklistOption entity
   */
  static _keys = ['id'];
  /**
   * externalCode.
   * Maximum length: 256.
   * @nullable
   */
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * id.
   */
  id!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * maxValue.
   * @nullable
   */
  maxValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * minValue.
   * @nullable
   */
  minValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * optionValue.
   * @nullable
   */
  optionValue?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * sortOrder.
   * @nullable
   */
  sortOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * status.
   * Maximum length: 9.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PicklistOption} entity.
   */
  childPicklistOptions!: PicklistOption<T>[];
  /**
   * One-to-one navigation property to the {@link PicklistOption} entity.
   */
  parentPicklistOption?: PicklistOption<T> | null;
  /**
   * One-to-one navigation property to the {@link Picklist} entity.
   */
  picklist?: Picklist<T> | null;
  /**
   * One-to-many navigation property to the {@link PicklistLabel} entity.
   */
  picklistLabels!: PicklistLabel<T>[];

  constructor(readonly _entityApi: PicklistOptionApi<T>) {
    super(_entityApi);
  }
}

export interface PicklistOptionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int64'>;
  maxValue?: DeserializedType<T, 'Edm.Double'> | null;
  minValue?: DeserializedType<T, 'Edm.Double'> | null;
  optionValue?: DeserializedType<T, 'Edm.Double'> | null;
  sortOrder?: DeserializedType<T, 'Edm.Int32'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  childPicklistOptions: PicklistOptionType<T>[];
  parentPicklistOption?: PicklistOptionType<T> | null;
  picklist?: PicklistType<T> | null;
  picklistLabels: PicklistLabelType<T>[];
}

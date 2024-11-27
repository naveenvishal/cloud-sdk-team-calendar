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
import type { PicklistApi } from './PicklistApi';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

/**
 * This class represents the entity "Picklist" of service "FoundationPlatformPLT".
 */
export class Picklist<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PicklistType<T>
{
  /**
   * Technical entity name for Picklist.
   */
  static _entityName = 'Picklist';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Picklist entity
   */
  static _keys = ['picklistId'];
  /**
   * picklistId.
   * Maximum length: 64.
   */
  picklistId!: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link PicklistOption} entity.
   */
  picklistOptions!: PicklistOption<T>[];

  constructor(readonly _entityApi: PicklistApi<T>) {
    super(_entityApi);
  }
}

export interface PicklistType<T extends DeSerializers = DefaultDeSerializers> {
  picklistId: DeserializedType<T, 'Edm.String'>;
  picklistOptions: PicklistOptionType<T>[];
}

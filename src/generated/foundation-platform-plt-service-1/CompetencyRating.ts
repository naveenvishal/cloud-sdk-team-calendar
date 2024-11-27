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
import type { CompetencyRatingApi } from './CompetencyRatingApi';

/**
 * This class represents the entity "CompetencyRating" of service "FoundationPlatformPLT".
 */
export class CompetencyRating<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompetencyRatingType<T>
{
  /**
   * Technical entity name for CompetencyRating.
   */
  static _entityName = 'CompetencyRating';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the CompetencyRating entity
   */
  static _keys = ['id'];
  /**
   * formContentId.
   * @nullable
   */
  formContentId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * guid.
   * Maximum length: 128.
   */
  guid!: DeserializedType<T, 'Edm.String'>;
  /**
   * id.
   */
  id!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * module.
   */
  module!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * rater.
   * Maximum length: 100.
   * @nullable
   */
  rater?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * raterCategory.
   * Maximum length: 256.
   * @nullable
   */
  raterCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * rating.
   * @nullable
   */
  rating?: DeserializedType<T, 'Edm.Double'> | null;
  /**
   * scaleMax.
   * @nullable
   */
  scaleMax?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * scaleMin.
   * @nullable
   */
  scaleMin?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * source.
   */
  source!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * type.
   */
  type!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: DeserializedType<T, 'Edm.String'>;
  /**
   * validFrom.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * validTo.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(readonly _entityApi: CompetencyRatingApi<T>) {
    super(_entityApi);
  }
}

export interface CompetencyRatingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formContentId?: DeserializedType<T, 'Edm.Int64'> | null;
  formDataId?: DeserializedType<T, 'Edm.Int64'> | null;
  guid: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int64'>;
  lastModified?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  module: DeserializedType<T, 'Edm.Int32'>;
  rater?: DeserializedType<T, 'Edm.String'> | null;
  raterCategory?: DeserializedType<T, 'Edm.String'> | null;
  rating?: DeserializedType<T, 'Edm.Double'> | null;
  scaleMax?: DeserializedType<T, 'Edm.Int64'> | null;
  scaleMin?: DeserializedType<T, 'Edm.Int64'> | null;
  source: DeserializedType<T, 'Edm.Int32'>;
  status?: DeserializedType<T, 'Edm.Int64'> | null;
  type: DeserializedType<T, 'Edm.Int32'>;
  userId: DeserializedType<T, 'Edm.String'>;
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTime'> | null;
}

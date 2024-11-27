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
import type { PhotoApi } from './PhotoApi';

/**
 * This class represents the entity "Photo" of service "FoundationPlatformPLT".
 */
export class Photo<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PhotoType<T>
{
  /**
   * Technical entity name for Photo.
   */
  static _entityName = 'Photo';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Photo entity
   */
  static _keys = ['photoType', 'userId'];
  /**
   * height.
   */
  height!: DeserializedType<T, 'Edm.Int32'>;
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
   * mimeType.
   * Maximum length: 32.
   * @nullable
   */
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * photo.
   * @nullable
   */
  photo?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * photoId.
   */
  photoId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * photoName.
   * Maximum length: 128.
   * @nullable
   */
  photoName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * photoType.
   */
  photoType!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: DeserializedType<T, 'Edm.String'>;
  /**
   * width.
   */
  width!: DeserializedType<T, 'Edm.Int32'>;

  constructor(readonly _entityApi: PhotoApi<T>) {
    super(_entityApi);
  }
}

export interface PhotoType<T extends DeSerializers = DefaultDeSerializers> {
  height: DeserializedType<T, 'Edm.Int32'>;
  lastModified?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedWithTz?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  photo?: DeserializedType<T, 'Edm.Binary'> | null;
  photoId: DeserializedType<T, 'Edm.Int64'>;
  photoName?: DeserializedType<T, 'Edm.String'> | null;
  photoType: DeserializedType<T, 'Edm.Int32'>;
  userId: DeserializedType<T, 'Edm.String'>;
  width: DeserializedType<T, 'Edm.Int32'>;
}

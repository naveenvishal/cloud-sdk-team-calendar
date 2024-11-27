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
import type { AttachmentApi } from './AttachmentApi';

/**
 * This class represents the entity "Attachment" of service "FoundationPlatformPLT".
 */
export class Attachment<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AttachmentType<T>
{
  /**
   * Technical entity name for Attachment.
   */
  static _entityName = 'Attachment';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the Attachment entity
   */
  static _keys = ['attachmentId'];
  /**
   * attachmentId.
   */
  attachmentId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * createdDate.
   */
  createdDate!: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * deletable.
   */
  deletable!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * deprecable.
   */
  deprecable!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * description.
   * Maximum length: 4000.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * documentCategory.
   * Maximum length: 256.
   * @nullable
   */
  documentCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * documentEntityId.
   * Maximum length: 256.
   * @nullable
   */
  documentEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * documentEntityType.
   * Maximum length: 256.
   * @nullable
   */
  documentEntityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * documentType.
   * Maximum length: 256.
   * @nullable
   */
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * externalId.
   * @nullable
   */
  externalId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * fileContent.
   */
  fileContent!: DeserializedType<T, 'Edm.Binary'>;
  /**
   * fileExtension.
   * Maximum length: 5.
   */
  fileExtension!: DeserializedType<T, 'Edm.String'>;
  /**
   * fileName.
   * Maximum length: 256.
   */
  fileName!: DeserializedType<T, 'Edm.String'>;
  /**
   * fileSize.
   */
  fileSize!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * imageConvertInProgress.
   */
  imageConvertInProgress!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * lastAccessed.
   * @nullable
   */
  lastAccessed?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * lastModifiedDateTime.
   */
  lastModifiedDateTime!: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * mimeType.
   * Maximum length: 256.
   */
  mimeType!: DeserializedType<T, 'Edm.String'>;
  /**
   * module.
   * Maximum length: 100.
   */
  module!: DeserializedType<T, 'Edm.String'>;
  /**
   * moduleCategory.
   * Maximum length: 100.
   * @nullable
   */
  moduleCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ownerId.
   * Maximum length: 255.
   * @nullable
   */
  ownerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * ownerIdType.
   * Maximum length: 100.
   * @nullable
   */
  ownerIdType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * piiFlag.
   * @nullable
   */
  piiFlag?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * searchable.
   */
  searchable!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * softDelete.
   */
  softDelete!: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * userId.
   * Maximum length: 100.
   * @nullable
   */
  userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * viewable.
   */
  viewable!: DeserializedType<T, 'Edm.Boolean'>;

  constructor(readonly _entityApi: AttachmentApi<T>) {
    super(_entityApi);
  }
}

export interface AttachmentType<
  T extends DeSerializers = DefaultDeSerializers
> {
  attachmentId: DeserializedType<T, 'Edm.Int64'>;
  createdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deletable: DeserializedType<T, 'Edm.Boolean'>;
  deprecable: DeserializedType<T, 'Edm.Boolean'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  documentCategory?: DeserializedType<T, 'Edm.String'> | null;
  documentEntityId?: DeserializedType<T, 'Edm.String'> | null;
  documentEntityType?: DeserializedType<T, 'Edm.String'> | null;
  documentType?: DeserializedType<T, 'Edm.String'> | null;
  externalId?: DeserializedType<T, 'Edm.Int64'> | null;
  fileContent: DeserializedType<T, 'Edm.Binary'>;
  fileExtension: DeserializedType<T, 'Edm.String'>;
  fileName: DeserializedType<T, 'Edm.String'>;
  fileSize: DeserializedType<T, 'Edm.Int32'>;
  imageConvertInProgress: DeserializedType<T, 'Edm.Boolean'>;
  lastAccessed?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  lastModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  mimeType: DeserializedType<T, 'Edm.String'>;
  module: DeserializedType<T, 'Edm.String'>;
  moduleCategory?: DeserializedType<T, 'Edm.String'> | null;
  ownerId?: DeserializedType<T, 'Edm.String'> | null;
  ownerIdType?: DeserializedType<T, 'Edm.String'> | null;
  piiFlag?: DeserializedType<T, 'Edm.Int32'> | null;
  searchable: DeserializedType<T, 'Edm.Boolean'>;
  softDelete: DeserializedType<T, 'Edm.Boolean'>;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  viewable: DeserializedType<T, 'Edm.Boolean'>;
}

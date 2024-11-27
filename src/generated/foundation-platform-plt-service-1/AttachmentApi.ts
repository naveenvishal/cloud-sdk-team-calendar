/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Attachment } from './Attachment';
import { AttachmentRequestBuilder } from './AttachmentRequestBuilder';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class AttachmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Attachment<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Attachment;

  requestBuilder(): AttachmentRequestBuilder<DeSerializersT> {
    return new AttachmentRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Attachment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Attachment<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Attachment<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Attachment, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Attachment, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ATTACHMENT_ID: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CREATED_DATE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELETABLE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DEPRECABLE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_CATEGORY: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ENTITY_ID: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_ENTITY_TYPE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DOCUMENT_TYPE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ID: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    FILE_CONTENT: EdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      false,
      true
    >;
    FILE_EXTENSION: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILE_NAME: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FILE_SIZE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IMAGE_CONVERT_IN_PROGRESS: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    LAST_ACCESSED: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    MIME_TYPE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODULE_CATEGORY: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER_ID: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OWNER_ID_TYPE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PII_FLAG: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    SEARCHABLE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    SOFT_DELETE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIEWABLE: OrderableEdmTypeField<
      Attachment<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Attachment<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link attachmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ID: fieldBuilder.buildEdmTypeField(
          'attachmentId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link createdDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_DATE: fieldBuilder.buildEdmTypeField(
          'createdDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deletable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELETABLE: fieldBuilder.buildEdmTypeField(
          'deletable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link deprecable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECABLE: fieldBuilder.buildEdmTypeField(
          'deprecable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'documentCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'documentEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentEntityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_ENTITY_TYPE: fieldBuilder.buildEdmTypeField(
          'documentEntityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link documentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'documentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ID: fieldBuilder.buildEdmTypeField(
          'externalId',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link fileContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_CONTENT: fieldBuilder.buildEdmTypeField(
          'fileContent',
          'Edm.Binary',
          false
        ),
        /**
         * Static representation of the {@link fileExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_EXTENSION: fieldBuilder.buildEdmTypeField(
          'fileExtension',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fileName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_NAME: fieldBuilder.buildEdmTypeField(
          'fileName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fileSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILE_SIZE: fieldBuilder.buildEdmTypeField(
          'fileSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link imageConvertInProgress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE_CONVERT_IN_PROGRESS: fieldBuilder.buildEdmTypeField(
          'imageConvertInProgress',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link lastAccessed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_ACCESSED: fieldBuilder.buildEdmTypeField(
          'lastAccessed',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link mimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mimeType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEdmTypeField('module', 'Edm.String', false),
        /**
         * Static representation of the {@link moduleCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'moduleCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ownerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_ID: fieldBuilder.buildEdmTypeField('ownerId', 'Edm.String', true),
        /**
         * Static representation of the {@link ownerIdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_ID_TYPE: fieldBuilder.buildEdmTypeField(
          'ownerIdType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link piiFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PII_FLAG: fieldBuilder.buildEdmTypeField('piiFlag', 'Edm.Int32', true),
        /**
         * Static representation of the {@link searchable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEARCHABLE: fieldBuilder.buildEdmTypeField(
          'searchable',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link softDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOFT_DELETE: fieldBuilder.buildEdmTypeField(
          'softDelete',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', true),
        /**
         * Static representation of the {@link viewable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEWABLE: fieldBuilder.buildEdmTypeField(
          'viewable',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Attachment)
      };
    }

    return this._schema;
  }
}

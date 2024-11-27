/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Photo } from './Photo';
import { PhotoRequestBuilder } from './PhotoRequestBuilder';
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
export class PhotoApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Photo<DeSerializersT>, DeSerializersT>
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

  entityConstructor = Photo;

  requestBuilder(): PhotoRequestBuilder<DeSerializersT> {
    return new PhotoRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Photo<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Photo<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Photo<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Photo, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Photo, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HEIGHT: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_MODIFIED: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    LAST_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LAST_MODIFIED_WITH_TZ: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MIME_TYPE: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHOTO: EdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    PHOTO_ID: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PHOTO_NAME: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHOTO_TYPE: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    USER_ID: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      Photo<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Photo<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('height', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lastModified} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED: fieldBuilder.buildEdmTypeField(
          'lastModified',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'lastModifiedDateTime',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link lastModifiedWithTz} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_MODIFIED_WITH_TZ: fieldBuilder.buildEdmTypeField(
          'lastModifiedWithTZ',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link mimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mimeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link photo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHOTO: fieldBuilder.buildEdmTypeField('photo', 'Edm.Binary', true),
        /**
         * Static representation of the {@link photoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHOTO_ID: fieldBuilder.buildEdmTypeField('photoId', 'Edm.Int64', false),
        /**
         * Static representation of the {@link photoName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHOTO_NAME: fieldBuilder.buildEdmTypeField(
          'photoName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link photoType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHOTO_TYPE: fieldBuilder.buildEdmTypeField(
          'photoType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link userId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_ID: fieldBuilder.buildEdmTypeField('userId', 'Edm.String', false),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('width', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Photo)
      };
    }

    return this._schema;
  }
}

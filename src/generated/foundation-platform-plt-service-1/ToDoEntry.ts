/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * ToDoEntry
 */
export interface ToDoEntry<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: DeserializedType<DeSerializersT, 'Edm.Int64'>;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * statusLabel.
   * @nullable
   */
  statusLabel?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * subjectFullName.
   * @nullable
   */
  subjectFullName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * subjectId.
   * @nullable
   */
  subjectId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * url.
   * @nullable
   */
  url?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ToDoEntryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ToDoEntryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ToDoEntry,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ToDoEntry.completedDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  completedDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'completedDate',
    'Edm.DateTime',
    true
  );
  /**
   * Representation of the {@link ToDoEntry.formDataId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  formDataId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int64',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('formDataId', 'Edm.Int64', true);
  /**
   * Representation of the {@link ToDoEntry.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('status', 'Edm.Int32', true);
  /**
   * Representation of the {@link ToDoEntry.statusLabel} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusLabel: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('statusLabel', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoEntry.subjectFullName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectFullName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'subjectFullName',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link ToDoEntry.subjectId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  subjectId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('subjectId', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoEntry.url} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('url', 'Edm.String', true);

  /**
   * Creates an instance of ToDoEntryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ToDoEntry, fieldOptions);
  }
}

export namespace ToDoEntry {
  /**
   * Metadata information on all properties of the `ToDoEntry` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ToDoEntry>[] = [
    {
      originalName: 'completedDate',
      name: 'completedDate',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'formDataId',
      name: 'formDataId',
      type: 'Edm.Int64',
      isCollection: false
    },
    {
      originalName: 'status',
      name: 'status',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'statusLabel',
      name: 'statusLabel',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'subjectFullName',
      name: 'subjectFullName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'subjectId',
      name: 'subjectId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'url',
      name: 'url',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ToDoEntry, ToDoEntryField } from './ToDoEntry';
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
 * ToDoBean
 */
export interface ToDoBean<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * categoryId.
   * @nullable
   */
  categoryId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * completedDate.
   * @nullable
   */
  completedDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * dueDate.
   * @nullable
   */
  dueDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * dueDateOffSet.
   * @nullable
   */
  dueDateOffSet?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * entries.
   * @nullable
   */
  entries?: DeserializedType<DeSerializersT, 'SFOData.ToDoEntry'>;
  /**
   * entryId.
   */
  entryId: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
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
   * stepDescAlt.
   * @nullable
   */
  stepDescAlt?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * todoItemId.
   * @nullable
   */
  todoItemId?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * url.
   * @nullable
   */
  url?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ToDoBeanField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ToDoBeanField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ToDoBean,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ToDoBean.categoryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  categoryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('categoryId', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoBean.completedDate} property for query construction.
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
   * Representation of the {@link ToDoBean.dueDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('dueDate', 'Edm.DateTime', true);
  /**
   * Representation of the {@link ToDoBean.dueDateOffSet} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dueDateOffSet: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('dueDateOffSet', 'Edm.Int32', true);
  /**
   * Representation of the {@link ToDoBean.entries} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entries: ToDoEntryField<EntityT, DeSerializersT, true, false> =
    this._fieldBuilder.buildComplexTypeField('entries', ToDoEntryField, true);
  /**
   * Representation of the {@link ToDoBean.entryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  entryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('entryId', 'Edm.Int32', false);
  /**
   * Representation of the {@link ToDoBean.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('name', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoBean.status} property for query construction.
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
   * Representation of the {@link ToDoBean.statusLabel} property for query construction.
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
   * Representation of the {@link ToDoBean.stepDescAlt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stepDescAlt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('stepDescAlt', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoBean.todoItemId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  todoItemId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('todoItemId', 'Edm.String', true);
  /**
   * Representation of the {@link ToDoBean.url} property for query construction.
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
   * Creates an instance of ToDoBeanField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ToDoBean, fieldOptions);
  }
}

export namespace ToDoBean {
  /**
   * Metadata information on all properties of the `ToDoBean` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ToDoBean>[] = [
    {
      originalName: 'categoryId',
      name: 'categoryId',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'completedDate',
      name: 'completedDate',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'dueDate',
      name: 'dueDate',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'dueDateOffSet',
      name: 'dueDateOffSet',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'entries',
      name: 'entries',
      type: ToDoEntry,
      isCollection: false
    },
    {
      originalName: 'entryId',
      name: 'entryId',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'name',
      name: 'name',
      type: 'Edm.String',
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
      originalName: 'stepDescAlt',
      name: 'stepDescAlt',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'todoItemId',
      name: 'todoItemId',
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

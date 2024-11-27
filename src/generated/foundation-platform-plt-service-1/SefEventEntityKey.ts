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
 * SefEventEntityKey
 */
export interface SefEventEntityKey<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * description.
   */
  description: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * descriptionMessageKey.
   */
  descriptionMessageKey: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * name.
   */
  name: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * type.
   */
  type: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SefEventEntityKeyField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefEventEntityKeyField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SefEventEntityKey,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SefEventEntityKey.description} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  description: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('description', 'Edm.String', false);
  /**
   * Representation of the {@link SefEventEntityKey.descriptionMessageKey} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  descriptionMessageKey: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'descriptionMessageKey',
    'Edm.String',
    false
  );
  /**
   * Representation of the {@link SefEventEntityKey.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('name', 'Edm.String', false);
  /**
   * Representation of the {@link SefEventEntityKey.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('type', 'Edm.String', false);

  /**
   * Creates an instance of SefEventEntityKeyField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SefEventEntityKey, fieldOptions);
  }
}

export namespace SefEventEntityKey {
  /**
   * Metadata information on all properties of the `SefEventEntityKey` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SefEventEntityKey>[] = [
    {
      originalName: 'description',
      name: 'description',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'descriptionMessageKey',
      name: 'descriptionMessageKey',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'type',
      name: 'type',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}

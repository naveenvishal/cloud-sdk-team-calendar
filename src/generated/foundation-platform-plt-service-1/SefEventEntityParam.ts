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
 * SefEventEntityParam
 */
export interface SefEventEntityParam<
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
   * hasValueAlways.
   * @nullable
   */
  hasValueAlways?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
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
 * SefEventEntityParamField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefEventEntityParamField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SefEventEntityParam,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SefEventEntityParam.description} property for query construction.
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
   * Representation of the {@link SefEventEntityParam.descriptionMessageKey} property for query construction.
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
   * Representation of the {@link SefEventEntityParam.hasValueAlways} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  hasValueAlways: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'hasValueAlways',
    'Edm.Boolean',
    true
  );
  /**
   * Representation of the {@link SefEventEntityParam.name} property for query construction.
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
   * Representation of the {@link SefEventEntityParam.type} property for query construction.
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
   * Creates an instance of SefEventEntityParamField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, SefEventEntityParam, fieldOptions);
  }
}

export namespace SefEventEntityParam {
  /**
   * Metadata information on all properties of the `SefEventEntityParam` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SefEventEntityParam>[] = [
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
      originalName: 'hasValueAlways',
      name: 'hasValueAlways',
      type: 'Edm.Boolean',
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

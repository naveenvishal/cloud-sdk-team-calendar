/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  SefExtEventMetaData,
  SefExtEventMetaDataField
} from './SefExtEventMetaData';
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
 * SefExtEventMetaDataList
 */
export interface SefExtEventMetaDataList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * data.
   * @nullable
   */
  data?: DeserializedType<DeSerializersT, 'SFOData.SEFExtEventMetaData'>;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * statusMsg.
   * @nullable
   */
  statusMsg?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SefExtEventMetaDataListField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SefExtEventMetaDataListField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SefExtEventMetaDataList,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SefExtEventMetaDataList.data} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  data: SefExtEventMetaDataField<EntityT, DeSerializersT, true, false> =
    this._fieldBuilder.buildComplexTypeField(
      'data',
      SefExtEventMetaDataField,
      true
    );
  /**
   * Representation of the {@link SefExtEventMetaDataList.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('status', 'Edm.String', true);
  /**
   * Representation of the {@link SefExtEventMetaDataList.statusMsg} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  statusMsg: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('statusMsg', 'Edm.String', true);

  /**
   * Creates an instance of SefExtEventMetaDataListField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      SefExtEventMetaDataList,
      fieldOptions
    );
  }
}

export namespace SefExtEventMetaDataList {
  /**
   * Metadata information on all properties of the `SefExtEventMetaDataList` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SefExtEventMetaDataList>[] =
    [
      {
        originalName: 'data',
        name: 'data',
        type: SefExtEventMetaData,
        isCollection: false
      },
      {
        originalName: 'status',
        name: 'status',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'statusMsg',
        name: 'statusMsg',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}

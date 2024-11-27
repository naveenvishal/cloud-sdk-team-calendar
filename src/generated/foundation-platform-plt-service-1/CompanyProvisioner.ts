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
import type { CompanyProvisionerApi } from './CompanyProvisionerApi';

/**
 * This class represents the entity "CompanyProvisioner" of service "FoundationPlatformPLT".
 */
export class CompanyProvisioner<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CompanyProvisionerType<T>
{
  /**
   * Technical entity name for CompanyProvisioner.
   */
  static _entityName = 'CompanyProvisioner';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * All key fields of the CompanyProvisioner entity
   */
  static _keys = ['id'];
  /**
   * createdAdminAccountNumber.
   * @nullable
   */
  createdAdminAccountNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * email.
   * @nullable
   */
  email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * id.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * name.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * status.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CompanyProvisionerApi<T>) {
    super(_entityApi);
  }
}

export interface CompanyProvisionerType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdAdminAccountNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  status?: DeserializedType<T, 'Edm.String'> | null;
}

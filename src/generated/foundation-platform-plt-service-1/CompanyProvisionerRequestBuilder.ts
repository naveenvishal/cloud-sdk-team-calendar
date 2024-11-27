/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CompanyProvisioner } from './CompanyProvisioner';

/**
 * Request builder class for operations supported on the {@link CompanyProvisioner} entity.
 */
export class CompanyProvisionerRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompanyProvisioner<T>, T> {
  /**
   * Returns a request builder for retrieving one `CompanyProvisioner` entity based on its keys.
   * @param id Key property. See {@link CompanyProvisioner.id}.
   * @returns A request builder for creating requests to retrieve one `CompanyProvisioner` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompanyProvisioner<T>, T> {
    return new GetByKeyRequestBuilder<CompanyProvisioner<T>, T>(
      this.entityApi,
      { id: id }
    );
  }

  /**
   * Returns a request builder for querying all `CompanyProvisioner` entities.
   * @returns A request builder for creating requests to retrieve all `CompanyProvisioner` entities.
   */
  getAll(): GetAllRequestBuilder<CompanyProvisioner<T>, T> {
    return new GetAllRequestBuilder<CompanyProvisioner<T>, T>(this.entityApi);
  }
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Country } from './Country';

/**
 * Request builder class for operations supported on the {@link Country} entity.
 */
export class CountryRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Country<T>, T> {
  /**
   * Returns a request builder for retrieving one `Country` entity based on its keys.
   * @param code Key property. See {@link Country.code}.
   * @param effectiveStartDate Key property. See {@link Country.effectiveStartDate}.
   * @returns A request builder for creating requests to retrieve one `Country` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>,
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>
  ): GetByKeyRequestBuilder<Country<T>, T> {
    return new GetByKeyRequestBuilder<Country<T>, T>(this.entityApi, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `Country` entities.
   * @returns A request builder for creating requests to retrieve all `Country` entities.
   */
  getAll(): GetAllRequestBuilder<Country<T>, T> {
    return new GetAllRequestBuilder<Country<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Country` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Country`.
   */
  create(entity: Country<T>): CreateRequestBuilder<Country<T>, T> {
    return new CreateRequestBuilder<Country<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Country`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Country`.
   */
  update(entity: Country<T>): UpdateRequestBuilder<Country<T>, T> {
    return new UpdateRequestBuilder<Country<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Country`.
   * @param code Key property. See {@link Country.code}.
   * @param effectiveStartDate Key property. See {@link Country.effectiveStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `Country`.
   */
  delete(
    code: string,
    effectiveStartDate: Moment
  ): DeleteRequestBuilder<Country<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Country`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Country` by taking the entity as a parameter.
   */
  delete(entity: Country<T>): DeleteRequestBuilder<Country<T>, T>;
  delete(
    codeOrEntity: any,
    effectiveStartDate?: Moment
  ): DeleteRequestBuilder<Country<T>, T> {
    return new DeleteRequestBuilder<Country<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Country
        ? codeOrEntity
        : {
            code: codeOrEntity!,
            effectiveStartDate: effectiveStartDate!
          }
    );
  }
}

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
import { Currency } from './Currency';

/**
 * Request builder class for operations supported on the {@link Currency} entity.
 */
export class CurrencyRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Currency<T>, T> {
  /**
   * Returns a request builder for retrieving one `Currency` entity based on its keys.
   * @param code Key property. See {@link Currency.code}.
   * @param effectiveStartDate Key property. See {@link Currency.effectiveStartDate}.
   * @returns A request builder for creating requests to retrieve one `Currency` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>,
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>
  ): GetByKeyRequestBuilder<Currency<T>, T> {
    return new GetByKeyRequestBuilder<Currency<T>, T>(this.entityApi, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `Currency` entities.
   * @returns A request builder for creating requests to retrieve all `Currency` entities.
   */
  getAll(): GetAllRequestBuilder<Currency<T>, T> {
    return new GetAllRequestBuilder<Currency<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Currency` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Currency`.
   */
  create(entity: Currency<T>): CreateRequestBuilder<Currency<T>, T> {
    return new CreateRequestBuilder<Currency<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Currency`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Currency`.
   */
  update(entity: Currency<T>): UpdateRequestBuilder<Currency<T>, T> {
    return new UpdateRequestBuilder<Currency<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Currency`.
   * @param code Key property. See {@link Currency.code}.
   * @param effectiveStartDate Key property. See {@link Currency.effectiveStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `Currency`.
   */
  delete(
    code: string,
    effectiveStartDate: Moment
  ): DeleteRequestBuilder<Currency<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Currency`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Currency` by taking the entity as a parameter.
   */
  delete(entity: Currency<T>): DeleteRequestBuilder<Currency<T>, T>;
  delete(
    codeOrEntity: any,
    effectiveStartDate?: Moment
  ): DeleteRequestBuilder<Currency<T>, T> {
    return new DeleteRequestBuilder<Currency<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Currency
        ? codeOrEntity
        : {
            code: codeOrEntity!,
            effectiveStartDate: effectiveStartDate!
          }
    );
  }
}

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
import { CurrencyConversion } from './CurrencyConversion';

/**
 * Request builder class for operations supported on the {@link CurrencyConversion} entity.
 */
export class CurrencyConversionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CurrencyConversion<T>, T> {
  /**
   * Returns a request builder for retrieving one `CurrencyConversion` entity based on its keys.
   * @param code Key property. See {@link CurrencyConversion.code}.
   * @param effectiveStartDate Key property. See {@link CurrencyConversion.effectiveStartDate}.
   * @returns A request builder for creating requests to retrieve one `CurrencyConversion` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>,
    effectiveStartDate: DeserializedType<T, 'Edm.DateTime'>
  ): GetByKeyRequestBuilder<CurrencyConversion<T>, T> {
    return new GetByKeyRequestBuilder<CurrencyConversion<T>, T>(
      this.entityApi,
      {
        code: code,
        effectiveStartDate: effectiveStartDate
      }
    );
  }

  /**
   * Returns a request builder for querying all `CurrencyConversion` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyConversion` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyConversion<T>, T> {
    return new GetAllRequestBuilder<CurrencyConversion<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CurrencyConversion` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyConversion`.
   */
  create(
    entity: CurrencyConversion<T>
  ): CreateRequestBuilder<CurrencyConversion<T>, T> {
    return new CreateRequestBuilder<CurrencyConversion<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyConversion`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyConversion`.
   */
  update(
    entity: CurrencyConversion<T>
  ): UpdateRequestBuilder<CurrencyConversion<T>, T> {
    return new UpdateRequestBuilder<CurrencyConversion<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyConversion`.
   * @param code Key property. See {@link CurrencyConversion.code}.
   * @param effectiveStartDate Key property. See {@link CurrencyConversion.effectiveStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyConversion`.
   */
  delete(
    code: string,
    effectiveStartDate: Moment
  ): DeleteRequestBuilder<CurrencyConversion<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyConversion`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyConversion` by taking the entity as a parameter.
   */
  delete(
    entity: CurrencyConversion<T>
  ): DeleteRequestBuilder<CurrencyConversion<T>, T>;
  delete(
    codeOrEntity: any,
    effectiveStartDate?: Moment
  ): DeleteRequestBuilder<CurrencyConversion<T>, T> {
    return new DeleteRequestBuilder<CurrencyConversion<T>, T>(
      this.entityApi,
      codeOrEntity instanceof CurrencyConversion
        ? codeOrEntity
        : {
            code: codeOrEntity!,
            effectiveStartDate: effectiveStartDate!
          }
    );
  }
}

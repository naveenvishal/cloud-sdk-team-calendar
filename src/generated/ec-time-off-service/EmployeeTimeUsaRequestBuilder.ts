/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { EmployeeTimeUsa } from './EmployeeTimeUsa';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeUsa} entity.
 */
export class EmployeeTimeUsaRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeUsa<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeUsa` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeUsa.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeUsa.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeUsa` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeUsa<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeUsa` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeUsa` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeUsa<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeUsa` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeUsa`.
   */
  create(
    entity: EmployeeTimeUsa<T>
  ): CreateRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeUsa<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeUsa`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeUsa`.
   */
  update(
    entity: EmployeeTimeUsa<T>
  ): UpdateRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeUsa<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeUsa`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeUsa.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeUsa.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeUsa`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeUsa<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeUsa`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeUsa` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeUsa<T>
  ): DeleteRequestBuilder<EmployeeTimeUsa<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeUsa<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeUsa<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeUsa
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

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
import { EmployeeTimeMex } from './EmployeeTimeMex';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeMex} entity.
 */
export class EmployeeTimeMexRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeMex<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeMex` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeMex.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeMex.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeMex` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeMex<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeMex<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeMex` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeMex` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeMex<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeMex<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeMex` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeMex`.
   */
  create(
    entity: EmployeeTimeMex<T>
  ): CreateRequestBuilder<EmployeeTimeMex<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeMex<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeMex`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeMex`.
   */
  update(
    entity: EmployeeTimeMex<T>
  ): UpdateRequestBuilder<EmployeeTimeMex<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeMex<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeMex`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeMex.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeMex.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeMex`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeMex<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeMex`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeMex` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeMex<T>
  ): DeleteRequestBuilder<EmployeeTimeMex<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeMex<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeMex<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeMex
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

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
import { EmployeeTimePol } from './EmployeeTimePol';

/**
 * Request builder class for operations supported on the {@link EmployeeTimePol} entity.
 */
export class EmployeeTimePolRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimePol<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimePol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimePol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimePol.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimePol` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimePol<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimePol<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimePol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimePol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimePol<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimePol<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimePol` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimePol`.
   */
  create(
    entity: EmployeeTimePol<T>
  ): CreateRequestBuilder<EmployeeTimePol<T>, T> {
    return new CreateRequestBuilder<EmployeeTimePol<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimePol`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimePol`.
   */
  update(
    entity: EmployeeTimePol<T>
  ): UpdateRequestBuilder<EmployeeTimePol<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimePol<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimePol`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimePol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimePol.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimePol`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimePol<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimePol`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimePol` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimePol<T>
  ): DeleteRequestBuilder<EmployeeTimePol<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimePol<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimePol<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimePol
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

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
import { EmployeeTimeCan } from './EmployeeTimeCan';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeCan} entity.
 */
export class EmployeeTimeCanRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeCan<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCan` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCan.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCan.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCan` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeCan<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeCan<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCan` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCan` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCan<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeCan<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeCan` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeCan`.
   */
  create(
    entity: EmployeeTimeCan<T>
  ): CreateRequestBuilder<EmployeeTimeCan<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeCan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeCan`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeCan`.
   */
  update(
    entity: EmployeeTimeCan<T>
  ): UpdateRequestBuilder<EmployeeTimeCan<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeCan<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeCan`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCan.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCan.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeCan`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeCan<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeCan`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeCan` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeCan<T>
  ): DeleteRequestBuilder<EmployeeTimeCan<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeCan<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeCan<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeCan
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

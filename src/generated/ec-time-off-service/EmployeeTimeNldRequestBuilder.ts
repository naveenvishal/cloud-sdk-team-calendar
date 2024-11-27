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
import { EmployeeTimeNld } from './EmployeeTimeNld';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeNld} entity.
 */
export class EmployeeTimeNldRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeNld<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeNld` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeNld.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeNld.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeNld` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeNld<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeNld<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeNld` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeNld` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeNld<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeNld<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeNld` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeNld`.
   */
  create(
    entity: EmployeeTimeNld<T>
  ): CreateRequestBuilder<EmployeeTimeNld<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeNld<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeNld`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeNld`.
   */
  update(
    entity: EmployeeTimeNld<T>
  ): UpdateRequestBuilder<EmployeeTimeNld<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeNld<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeNld`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeNld.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeNld.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeNld`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeNld<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeNld`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeNld` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeNld<T>
  ): DeleteRequestBuilder<EmployeeTimeNld<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeNld<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeNld<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeNld
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

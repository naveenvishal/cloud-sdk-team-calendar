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
import { EmployeeTimeCol } from './EmployeeTimeCol';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeCol} entity.
 */
export class EmployeeTimeColRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeCol<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeCol` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCol.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeCol` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeCol<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeCol<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeCol` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeCol` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeCol<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeCol<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeCol` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeCol`.
   */
  create(
    entity: EmployeeTimeCol<T>
  ): CreateRequestBuilder<EmployeeTimeCol<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeCol<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeCol`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeCol`.
   */
  update(
    entity: EmployeeTimeCol<T>
  ): UpdateRequestBuilder<EmployeeTimeCol<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeCol<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeCol`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeCol.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeCol.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeCol`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeCol<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeCol`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeCol` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeCol<T>
  ): DeleteRequestBuilder<EmployeeTimeCol<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeCol<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeCol<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeCol
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

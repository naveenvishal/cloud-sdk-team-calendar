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
import { EmployeeTimeDeu } from './EmployeeTimeDeu';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeDeu} entity.
 */
export class EmployeeTimeDeuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeDeu<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeDeu` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeDeu.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeDeu.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeDeu` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeDeu<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeDeu` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeDeu` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeDeu<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeDeu` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeDeu`.
   */
  create(
    entity: EmployeeTimeDeu<T>
  ): CreateRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeDeu<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeDeu`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeDeu`.
   */
  update(
    entity: EmployeeTimeDeu<T>
  ): UpdateRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeDeu<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeDeu`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeDeu.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeDeu.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeDeu`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeDeu<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeDeu`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeDeu` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeDeu<T>
  ): DeleteRequestBuilder<EmployeeTimeDeu<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeDeu<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeDeu<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeDeu
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

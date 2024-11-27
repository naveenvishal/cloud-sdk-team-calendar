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
import { EmployeeTimeAus } from './EmployeeTimeAus';

/**
 * Request builder class for operations supported on the {@link EmployeeTimeAus} entity.
 */
export class EmployeeTimeAusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmployeeTimeAus<T>, T> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeAus` entity based on its keys.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeAus.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeAus.externalCode}.
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeAus` entity based on its keys.
   */
  getByKey(
    employeeTimeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<EmployeeTimeAus<T>, T> {
    return new GetByKeyRequestBuilder<EmployeeTimeAus<T>, T>(this.entityApi, {
      EmployeeTime_externalCode: employeeTimeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeAus` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeAus` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeAus<T>, T> {
    return new GetAllRequestBuilder<EmployeeTimeAus<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmployeeTimeAus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeTimeAus`.
   */
  create(
    entity: EmployeeTimeAus<T>
  ): CreateRequestBuilder<EmployeeTimeAus<T>, T> {
    return new CreateRequestBuilder<EmployeeTimeAus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeTimeAus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeTimeAus`.
   */
  update(
    entity: EmployeeTimeAus<T>
  ): UpdateRequestBuilder<EmployeeTimeAus<T>, T> {
    return new UpdateRequestBuilder<EmployeeTimeAus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeAus`.
   * @param employeeTimeExternalCode Key property. See {@link EmployeeTimeAus.employeeTimeExternalCode}.
   * @param externalCode Key property. See {@link EmployeeTimeAus.externalCode}.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeAus`.
   */
  delete(
    employeeTimeExternalCode: string,
    externalCode: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeAus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmployeeTimeAus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmployeeTimeAus` by taking the entity as a parameter.
   */
  delete(
    entity: EmployeeTimeAus<T>
  ): DeleteRequestBuilder<EmployeeTimeAus<T>, T>;
  delete(
    employeeTimeExternalCodeOrEntity: any,
    externalCode?: BigNumber
  ): DeleteRequestBuilder<EmployeeTimeAus<T>, T> {
    return new DeleteRequestBuilder<EmployeeTimeAus<T>, T>(
      this.entityApi,
      employeeTimeExternalCodeOrEntity instanceof EmployeeTimeAus
        ? employeeTimeExternalCodeOrEntity
        : {
            EmployeeTime_externalCode: employeeTimeExternalCodeOrEntity!,
            externalCode: externalCode!
          }
    );
  }
}

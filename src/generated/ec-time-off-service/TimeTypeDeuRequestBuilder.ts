/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { TimeTypeDeu } from './TimeTypeDeu';

/**
 * Request builder class for operations supported on the {@link TimeTypeDeu} entity.
 */
export class TimeTypeDeuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeTypeDeu<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeDeu` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeDeu.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeDeu.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeDeu` entity based on its keys.
   */
  getByKey(
    timeTypeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeTypeDeu<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeDeu<T>, T>(this.entityApi, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeDeu` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeDeu` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeDeu<T>, T> {
    return new GetAllRequestBuilder<TimeTypeDeu<T>, T>(this.entityApi);
  }
}

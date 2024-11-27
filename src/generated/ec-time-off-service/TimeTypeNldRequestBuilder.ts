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
import { TimeTypeNld } from './TimeTypeNld';

/**
 * Request builder class for operations supported on the {@link TimeTypeNld} entity.
 */
export class TimeTypeNldRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeTypeNld<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeTypeNld` entity based on its keys.
   * @param timeTypeExternalCode Key property. See {@link TimeTypeNld.timeTypeExternalCode}.
   * @param externalCode Key property. See {@link TimeTypeNld.externalCode}.
   * @returns A request builder for creating requests to retrieve one `TimeTypeNld` entity based on its keys.
   */
  getByKey(
    timeTypeExternalCode: DeserializedType<T, 'Edm.String'>,
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TimeTypeNld<T>, T> {
    return new GetByKeyRequestBuilder<TimeTypeNld<T>, T>(this.entityApi, {
      TimeType_externalCode: timeTypeExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `TimeTypeNld` entities.
   * @returns A request builder for creating requests to retrieve all `TimeTypeNld` entities.
   */
  getAll(): GetAllRequestBuilder<TimeTypeNld<T>, T> {
    return new GetAllRequestBuilder<TimeTypeNld<T>, T>(this.entityApi);
  }
}

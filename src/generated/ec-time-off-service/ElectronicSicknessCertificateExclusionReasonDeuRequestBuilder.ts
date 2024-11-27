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
import { ElectronicSicknessCertificateExclusionReasonDeu } from './ElectronicSicknessCertificateExclusionReasonDeu';

/**
 * Request builder class for operations supported on the {@link ElectronicSicknessCertificateExclusionReasonDeu} entity.
 */
export class ElectronicSicknessCertificateExclusionReasonDeuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ElectronicSicknessCertificateExclusionReasonDeu<T>,
  T
> {
  /**
   * Returns a request builder for retrieving one `ElectronicSicknessCertificateExclusionReasonDeu` entity based on its keys.
   * @param externalCode Key property. See {@link ElectronicSicknessCertificateExclusionReasonDeu.externalCode}.
   * @returns A request builder for creating requests to retrieve one `ElectronicSicknessCertificateExclusionReasonDeu` entity based on its keys.
   */
  getByKey(
    externalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ElectronicSicknessCertificateExclusionReasonDeu<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<T>,
      T
    >(this.entityApi, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `ElectronicSicknessCertificateExclusionReasonDeu` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicSicknessCertificateExclusionReasonDeu` entities.
   */
  getAll(): GetAllRequestBuilder<
    ElectronicSicknessCertificateExclusionReasonDeu<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ElectronicSicknessCertificateExclusionReasonDeu<T>,
      T
    >(this.entityApi);
  }
}

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
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Attachment } from './Attachment';

/**
 * Request builder class for operations supported on the {@link Attachment} entity.
 */
export class AttachmentRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Attachment<T>, T> {
  /**
   * Returns a request builder for retrieving one `Attachment` entity based on its keys.
   * @param attachmentId Key property. See {@link Attachment.attachmentId}.
   * @returns A request builder for creating requests to retrieve one `Attachment` entity based on its keys.
   */
  getByKey(
    attachmentId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<Attachment<T>, T> {
    return new GetByKeyRequestBuilder<Attachment<T>, T>(this.entityApi, {
      attachmentId: attachmentId
    });
  }

  /**
   * Returns a request builder for querying all `Attachment` entities.
   * @returns A request builder for creating requests to retrieve all `Attachment` entities.
   */
  getAll(): GetAllRequestBuilder<Attachment<T>, T> {
    return new GetAllRequestBuilder<Attachment<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Attachment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Attachment`.
   */
  create(entity: Attachment<T>): CreateRequestBuilder<Attachment<T>, T> {
    return new CreateRequestBuilder<Attachment<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Attachment`.
   * @param attachmentId Key property. See {@link Attachment.attachmentId}.
   * @returns A request builder for creating requests that delete an entity of type `Attachment`.
   */
  delete(attachmentId: BigNumber): DeleteRequestBuilder<Attachment<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Attachment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Attachment` by taking the entity as a parameter.
   */
  delete(entity: Attachment<T>): DeleteRequestBuilder<Attachment<T>, T>;
  delete(attachmentIdOrEntity: any): DeleteRequestBuilder<Attachment<T>, T> {
    return new DeleteRequestBuilder<Attachment<T>, T>(
      this.entityApi,
      attachmentIdOrEntity instanceof Attachment
        ? attachmentIdOrEntity
        : { attachmentId: attachmentIdOrEntity! }
    );
  }
}

/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  FunctionImportRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  User,
  UserPermissions,
  GetUserNameFormatParameters,
  GetPasswordPolicyParameters
} from './index';

/**
 * Batch builder for operations supported on the Plt User Management Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadPltUserManagementServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultPltUserManagementServicePath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Plt User Management Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WritePltUserManagementServiceRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WritePltUserManagementServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WritePltUserManagementServiceRequestBuilder<DeSerializersT>
    | Array<WritePltUserManagementServiceRequestBuilder<DeSerializersT>>,
  ...rest: Array<WritePltUserManagementServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultPltUserManagementServicePath = 'VALUE_IS_UNDEFINED';
export type ReadPltUserManagementServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetUserNameFormatParameters<DeSerializersT>,
      string
    >
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetPasswordPolicyParameters<DeSerializersT>,
      string
    >;
export type WritePltUserManagementServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<User<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserPermissions<DeSerializersT>, DeSerializersT>;

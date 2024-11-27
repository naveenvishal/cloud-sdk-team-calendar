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
  ExternalUser,
  PicklistOption,
  Attachment,
  PickListValueV2,
  ExternalLearnerPersonalInfo,
  PickListV2,
  CompanyProvisioner,
  ExtAddressInfo,
  CurrencyConversion,
  InitiativeAlignmentBean,
  PicklistLabel,
  Country,
  Photo,
  WorkOrder,
  CompetencyRating,
  ExtEmailInfo,
  VendorInfo,
  Picklist,
  ExtPersonalInfo,
  ExternalLearnerEmailInfo,
  ExternalLearnerAddressInfo,
  ExternalLearnerPhoneInfo,
  TimeZone,
  ExternalLearner,
  Currency,
  TeamGoalOwner,
  ExtPhoneInfo,
  GetExtEventMetaDataDefinitionParameters,
  SefExtEventMetaDataList
} from './index';

/**
 * Batch builder for operations supported on the Foundation Platform Plt Service 1.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadFoundationPlatformPltService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadFoundationPlatformPltService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadFoundationPlatformPltService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadFoundationPlatformPltService1RequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadFoundationPlatformPltService1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultFoundationPlatformPltService1Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Foundation Platform Plt Service 1.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteFoundationPlatformPltService1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteFoundationPlatformPltService1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteFoundationPlatformPltService1RequestBuilder<DeSerializersT>
    | Array<WriteFoundationPlatformPltService1RequestBuilder<DeSerializersT>>,
  ...rest: Array<
    WriteFoundationPlatformPltService1RequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultFoundationPlatformPltService1Path = 'VALUE_IS_UNDEFINED';
export type ReadFoundationPlatformPltService1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<ExternalUser<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PicklistOption<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Attachment<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PickListV2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CompanyProvisioner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CurrencyConversion<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Country<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Photo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WorkOrder<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<VendorInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Picklist<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExtPersonalInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<TimeZone<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Currency<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TeamGoalOwner<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExtPhoneInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExternalUser<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PicklistOption<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Attachment<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PickListV2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CompanyProvisioner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CurrencyConversion<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Country<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Photo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WorkOrder<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<VendorInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Picklist<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExtPersonalInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<TimeZone<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Currency<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TeamGoalOwner<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExtPhoneInfo<DeSerializersT>, DeSerializersT>
  | FunctionImportRequestBuilder<
      DeSerializersT,
      GetExtEventMetaDataDefinitionParameters<DeSerializersT>,
      SefExtEventMetaDataList
    >;
export type WriteFoundationPlatformPltService1RequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<ExternalUser<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExternalUser<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExternalUser<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PicklistOption<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PicklistOption<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PicklistOption<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Attachment<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Attachment<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Attachment<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PickListValueV2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalLearnerPersonalInfo<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PickListV2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PickListV2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PickListV2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CompanyProvisioner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CompanyProvisioner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CompanyProvisioner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExtAddressInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CurrencyConversion<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CurrencyConversion<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CurrencyConversion<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      InitiativeAlignmentBean<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PicklistLabel<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Country<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Country<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Country<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Photo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Photo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Photo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WorkOrder<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WorkOrder<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WorkOrder<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CompetencyRating<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExtEmailInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<VendorInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<VendorInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<VendorInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Picklist<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Picklist<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Picklist<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExtPersonalInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExtPersonalInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExtPersonalInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalLearnerEmailInfo<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalLearnerAddressInfo<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalLearnerPhoneInfo<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<TimeZone<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeZone<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeZone<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExternalLearner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Currency<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Currency<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Currency<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TeamGoalOwner<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TeamGoalOwner<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TeamGoalOwner<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExtPhoneInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExtPhoneInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExtPhoneInfo<DeSerializersT>, DeSerializersT>;

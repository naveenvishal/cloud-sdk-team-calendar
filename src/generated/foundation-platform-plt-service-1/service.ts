/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalUserApi } from './ExternalUserApi';
import { PicklistOptionApi } from './PicklistOptionApi';
import { AttachmentApi } from './AttachmentApi';
import { PickListValueV2Api } from './PickListValueV2Api';
import { ExternalLearnerPersonalInfoApi } from './ExternalLearnerPersonalInfoApi';
import { PickListV2Api } from './PickListV2Api';
import { CompanyProvisionerApi } from './CompanyProvisionerApi';
import { ExtAddressInfoApi } from './ExtAddressInfoApi';
import { CurrencyConversionApi } from './CurrencyConversionApi';
import { InitiativeAlignmentBeanApi } from './InitiativeAlignmentBeanApi';
import { PicklistLabelApi } from './PicklistLabelApi';
import { CountryApi } from './CountryApi';
import { PhotoApi } from './PhotoApi';
import { WorkOrderApi } from './WorkOrderApi';
import { CompetencyRatingApi } from './CompetencyRatingApi';
import { ExtEmailInfoApi } from './ExtEmailInfoApi';
import { VendorInfoApi } from './VendorInfoApi';
import { PicklistApi } from './PicklistApi';
import { ExtPersonalInfoApi } from './ExtPersonalInfoApi';
import { ExternalLearnerEmailInfoApi } from './ExternalLearnerEmailInfoApi';
import { ExternalLearnerAddressInfoApi } from './ExternalLearnerAddressInfoApi';
import { ExternalLearnerPhoneInfoApi } from './ExternalLearnerPhoneInfoApi';
import { TimeZoneApi } from './TimeZoneApi';
import { ExternalLearnerApi } from './ExternalLearnerApi';
import { CurrencyApi } from './CurrencyApi';
import { TeamGoalOwnerApi } from './TeamGoalOwnerApi';
import { ExtPhoneInfoApi } from './ExtPhoneInfoApi';
import {
  getExtEventMetaDataDefinition,
  GetExtEventMetaDataDefinitionParameters
} from './function-imports';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function foundationPlatformPltService1<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): FoundationPlatformPltService1<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new FoundationPlatformPltService1(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class FoundationPlatformPltService1<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, ctor: new (...args: any[]) => any): any {
    if (!this.apis[key]) {
      this.apis[key] = new ctor(this.deSerializers);
    }
    return this.apis[key];
  }

  get externalUserApi(): ExternalUserApi<DeSerializersT> {
    const api = this.initApi('externalUserApi', ExternalUserApi);
    const linkedApis = [
      this.initApi('extAddressInfoApi', ExtAddressInfoApi),
      this.initApi('extEmailInfoApi', ExtEmailInfoApi),
      this.initApi('extPersonalInfoApi', ExtPersonalInfoApi),
      this.initApi('extPhoneInfoApi', ExtPhoneInfoApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get picklistOptionApi(): PicklistOptionApi<DeSerializersT> {
    const api = this.initApi('picklistOptionApi', PicklistOptionApi);
    const linkedApis = [
      this.initApi('picklistOptionApi', PicklistOptionApi),
      this.initApi('picklistOptionApi', PicklistOptionApi),
      this.initApi('picklistApi', PicklistApi),
      this.initApi('picklistLabelApi', PicklistLabelApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get attachmentApi(): AttachmentApi<DeSerializersT> {
    return this.initApi('attachmentApi', AttachmentApi);
  }

  get pickListValueV2Api(): PickListValueV2Api<DeSerializersT> {
    const api = this.initApi('pickListValueV2Api', PickListValueV2Api);
    const linkedApis = [this.initApi('pickListValueV2Api', PickListValueV2Api)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalLearnerPersonalInfoApi(): ExternalLearnerPersonalInfoApi<DeSerializersT> {
    return this.initApi(
      'externalLearnerPersonalInfoApi',
      ExternalLearnerPersonalInfoApi
    );
  }

  get pickListV2Api(): PickListV2Api<DeSerializersT> {
    const api = this.initApi('pickListV2Api', PickListV2Api);
    const linkedApis = [
      this.initApi('pickListV2Api', PickListV2Api),
      this.initApi('pickListValueV2Api', PickListValueV2Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get companyProvisionerApi(): CompanyProvisionerApi<DeSerializersT> {
    return this.initApi('companyProvisionerApi', CompanyProvisionerApi);
  }

  get extAddressInfoApi(): ExtAddressInfoApi<DeSerializersT> {
    const api = this.initApi('extAddressInfoApi', ExtAddressInfoApi);
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get currencyConversionApi(): CurrencyConversionApi<DeSerializersT> {
    const api = this.initApi('currencyConversionApi', CurrencyConversionApi);
    const linkedApis = [
      this.initApi('currencyApi', CurrencyApi),
      this.initApi('pickListValueV2Api', PickListValueV2Api),
      this.initApi('currencyApi', CurrencyApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get initiativeAlignmentBeanApi(): InitiativeAlignmentBeanApi<DeSerializersT> {
    return this.initApi(
      'initiativeAlignmentBeanApi',
      InitiativeAlignmentBeanApi
    );
  }

  get picklistLabelApi(): PicklistLabelApi<DeSerializersT> {
    const api = this.initApi('picklistLabelApi', PicklistLabelApi);
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get countryApi(): CountryApi<DeSerializersT> {
    const api = this.initApi('countryApi', CountryApi);
    const linkedApis = [this.initApi('currencyApi', CurrencyApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get photoApi(): PhotoApi<DeSerializersT> {
    return this.initApi('photoApi', PhotoApi);
  }

  get workOrderApi(): WorkOrderApi<DeSerializersT> {
    const api = this.initApi('workOrderApi', WorkOrderApi);
    const linkedApis = [
      this.initApi('currencyApi', CurrencyApi),
      this.initApi('vendorInfoApi', VendorInfoApi),
      this.initApi('pickListValueV2Api', PickListValueV2Api)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get competencyRatingApi(): CompetencyRatingApi<DeSerializersT> {
    return this.initApi('competencyRatingApi', CompetencyRatingApi);
  }

  get extEmailInfoApi(): ExtEmailInfoApi<DeSerializersT> {
    const api = this.initApi('extEmailInfoApi', ExtEmailInfoApi);
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get vendorInfoApi(): VendorInfoApi<DeSerializersT> {
    return this.initApi('vendorInfoApi', VendorInfoApi);
  }

  get picklistApi(): PicklistApi<DeSerializersT> {
    const api = this.initApi('picklistApi', PicklistApi);
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get extPersonalInfoApi(): ExtPersonalInfoApi<DeSerializersT> {
    return this.initApi('extPersonalInfoApi', ExtPersonalInfoApi);
  }

  get externalLearnerEmailInfoApi(): ExternalLearnerEmailInfoApi<DeSerializersT> {
    const api = this.initApi(
      'externalLearnerEmailInfoApi',
      ExternalLearnerEmailInfoApi
    );
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalLearnerAddressInfoApi(): ExternalLearnerAddressInfoApi<DeSerializersT> {
    const api = this.initApi(
      'externalLearnerAddressInfoApi',
      ExternalLearnerAddressInfoApi
    );
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalLearnerPhoneInfoApi(): ExternalLearnerPhoneInfoApi<DeSerializersT> {
    const api = this.initApi(
      'externalLearnerPhoneInfoApi',
      ExternalLearnerPhoneInfoApi
    );
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeZoneApi(): TimeZoneApi<DeSerializersT> {
    const api = this.initApi('timeZoneApi', TimeZoneApi);
    const linkedApis = [this.initApi('countryApi', CountryApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalLearnerApi(): ExternalLearnerApi<DeSerializersT> {
    const api = this.initApi('externalLearnerApi', ExternalLearnerApi);
    const linkedApis = [
      this.initApi('externalLearnerEmailInfoApi', ExternalLearnerEmailInfoApi),
      this.initApi(
        'externalLearnerAddressInfoApi',
        ExternalLearnerAddressInfoApi
      ),
      this.initApi(
        'externalLearnerPersonalInfoApi',
        ExternalLearnerPersonalInfoApi
      ),
      this.initApi('externalLearnerPhoneInfoApi', ExternalLearnerPhoneInfoApi),
      this.initApi('picklistOptionApi', PicklistOptionApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get currencyApi(): CurrencyApi<DeSerializersT> {
    return this.initApi('currencyApi', CurrencyApi);
  }

  get teamGoalOwnerApi(): TeamGoalOwnerApi<DeSerializersT> {
    return this.initApi('teamGoalOwnerApi', TeamGoalOwnerApi);
  }

  get extPhoneInfoApi(): ExtPhoneInfoApi<DeSerializersT> {
    const api = this.initApi('extPhoneInfoApi', ExtPhoneInfoApi);
    const linkedApis = [this.initApi('picklistOptionApi', PicklistOptionApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports() {
    return {
      getExtEventMetaDataDefinition: (
        parameter: GetExtEventMetaDataDefinitionParameters<DeSerializersT>
      ) => getExtEventMetaDataDefinition(parameter, this.deSerializers)
    };
  }

  /**
   * Get unbound functions and actions.
   */
  get operations() {
    return { ...this.functionImports };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}

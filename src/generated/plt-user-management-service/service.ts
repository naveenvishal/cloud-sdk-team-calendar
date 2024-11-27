/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserApi } from './UserApi';
import { UserPermissionsApi } from './UserPermissionsApi';
import {
  getUserNameFormat,
  getPasswordPolicy,
  GetUserNameFormatParameters,
  GetPasswordPolicyParameters
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

export function pltUserManagementService<
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
): PltUserManagementService<
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
  return new PltUserManagementService(
    mergeDefaultDeSerializersWith(deSerializers)
  );
}
class PltUserManagementService<
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

  get userApi(): UserApi<DeSerializersT> {
    const api = this.initApi('userApi', UserApi);
    const linkedApis = [
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userApi', UserApi),
      this.initApi('userPermissionsApi', UserPermissionsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get userPermissionsApi(): UserPermissionsApi<DeSerializersT> {
    return this.initApi('userPermissionsApi', UserPermissionsApi);
  }

  /**
   * @deprecated Since v2.13.0. Use {@link operations} instead.
   */
  get functionImports() {
    return {
      getUserNameFormat: (
        parameter: GetUserNameFormatParameters<DeSerializersT>
      ) => getUserNameFormat(parameter, this.deSerializers),
      getPasswordPolicy: (
        parameter: GetPasswordPolicyParameters<DeSerializersT>
      ) => getPasswordPolicy(parameter, this.deSerializers)
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

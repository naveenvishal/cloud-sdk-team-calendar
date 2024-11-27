/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  transformReturnValueForEdmType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  FunctionImportParameter,
  FunctionImportRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { pltUserManagementService } from './service';

/**
 * Type of the parameters to be passed to {@link getUserNameFormat}.
 */
export interface GetUserNameFormatParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Locale.
   */
  locale?: string | null;
}

/**
 * Get User Name Format.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getUserNameFormat<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetUserNameFormatParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetUserNameFormatParameters<DeSerializersT>,
  string
> {
  const params = {
    locale: new FunctionImportParameter(
      'locale',
      'Edm.String',
      parameters.locale
    )
  };

  return new FunctionImportRequestBuilder(
    'get',
    'VALUE_IS_UNDEFINED',
    'getUserNameFormat',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.getUserNameFormat, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link getPasswordPolicy}.
 */
export interface GetPasswordPolicyParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Locale.
   */
  locale?: string | null;
}

/**
 * Get Password Policy.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function getPasswordPolicy<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GetPasswordPolicyParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): FunctionImportRequestBuilder<
  DeSerializersT,
  GetPasswordPolicyParameters<DeSerializersT>,
  string
> {
  const params = {
    locale: new FunctionImportParameter(
      'locale',
      'Edm.String',
      parameters.locale
    )
  };

  return new FunctionImportRequestBuilder(
    'get',
    'VALUE_IS_UNDEFINED',
    'getPasswordPolicy',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.getPasswordPolicy, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers
  );
}

/**
 * @deprecated Since v2.13.0. Use `operations` instead.
 */
export const functionImports = {
  getUserNameFormat,
  getPasswordPolicy
};

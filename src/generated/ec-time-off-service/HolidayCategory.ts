/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { HolidayCategoryApi } from './HolidayCategoryApi';

/**
 * This class represents the entity "HolidayCategory" of service "ECTimeOff".
 */
export class HolidayCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements HolidayCategoryType<T>
{
  /**
   * Technical entity name for HolidayCategory.
   */
  static _entityName = 'HolidayCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/odata/v2';
  /**
   * All key fields of the HolidayCategory entity
   */
  static _keys = ['externalCode'];
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionPtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity UUID.
   * Maximum length: 32.
   * @nullable
   */
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: HolidayCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface HolidayCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  descriptionArSa?: DeserializedType<T, 'Edm.String'> | null;
  descriptionCyGb?: DeserializedType<T, 'Edm.String'> | null;
  descriptionDeDe?: DeserializedType<T, 'Edm.String'> | null;
  descriptionDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnGb?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEnUs?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEsEs?: DeserializedType<T, 'Edm.String'> | null;
  descriptionEsMx?: DeserializedType<T, 'Edm.String'> | null;
  descriptionFrCa?: DeserializedType<T, 'Edm.String'> | null;
  descriptionFrFr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionHiIn?: DeserializedType<T, 'Edm.String'> | null;
  descriptionIwIl?: DeserializedType<T, 'Edm.String'> | null;
  descriptionJaJp?: DeserializedType<T, 'Edm.String'> | null;
  descriptionKoKr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionLocalized?: DeserializedType<T, 'Edm.String'> | null;
  descriptionNlNl?: DeserializedType<T, 'Edm.String'> | null;
  descriptionPtBr?: DeserializedType<T, 'Edm.String'> | null;
  descriptionThTh?: DeserializedType<T, 'Edm.String'> | null;
  descriptionZhCn?: DeserializedType<T, 'Edm.String'> | null;
  entityUuid?: DeserializedType<T, 'Edm.String'> | null;
  externalCode: DeserializedType<T, 'Edm.String'>;
  externalNameArSa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameCyGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDeDe?: DeserializedType<T, 'Edm.String'> | null;
  externalNameDefaultValue?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebug?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugApos?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnDebugAposRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnGb?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnRtl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEnUs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsEs?: DeserializedType<T, 'Edm.String'> | null;
  externalNameEsMx?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrCa?: DeserializedType<T, 'Edm.String'> | null;
  externalNameFrFr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameHiIn?: DeserializedType<T, 'Edm.String'> | null;
  externalNameIwIl?: DeserializedType<T, 'Edm.String'> | null;
  externalNameJaJp?: DeserializedType<T, 'Edm.String'> | null;
  externalNameKoKr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameLocalized?: DeserializedType<T, 'Edm.String'> | null;
  externalNameNlNl?: DeserializedType<T, 'Edm.String'> | null;
  externalNamePtBr?: DeserializedType<T, 'Edm.String'> | null;
  externalNameThTh?: DeserializedType<T, 'Edm.String'> | null;
  externalNameZhCn?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  mdfSystemRecordStatus?: DeserializedType<T, 'Edm.String'> | null;
}

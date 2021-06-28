/* tslint:disable */
/* eslint-disable */
/**
 * BackendFramework
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { MergeWords } from "../models";
// @ts-ignore
import { Word } from "../models";
/**
 * MergeApi - axios parameter creator
 * @export
 */
export const MergeApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} projectId
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blacklistAdd: async (
      projectId: string,
      requestBody: Array<string>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("blacklistAdd", "projectId", projectId);
      // verify required parameter 'requestBody' is not null or undefined
      assertParamExists("blacklistAdd", "requestBody", requestBody);
      const localVarPath = `/v1/projects/{projectId}/merge/blacklist/add`.replace(
        `{${"projectId"}}`,
        encodeURIComponent(String(projectId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        requestBody,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {number} maxInList
     * @param {number} maxLists
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPotentialDuplicates: async (
      projectId: string,
      maxInList: number,
      maxLists: number,
      userId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getPotentialDuplicates", "projectId", projectId);
      // verify required parameter 'maxInList' is not null or undefined
      assertParamExists("getPotentialDuplicates", "maxInList", maxInList);
      // verify required parameter 'maxLists' is not null or undefined
      assertParamExists("getPotentialDuplicates", "maxLists", maxLists);
      // verify required parameter 'userId' is not null or undefined
      assertParamExists("getPotentialDuplicates", "userId", userId);
      const localVarPath = `/v1/projects/{projectId}/merge/dups/{maxInList}/{maxLists}/{userId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"maxInList"}}`, encodeURIComponent(String(maxInList)))
        .replace(`{${"maxLists"}}`, encodeURIComponent(String(maxLists)))
        .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {string} projectId
     * @param {Array<MergeWords>} mergeWords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mergeWords: async (
      projectId: string,
      mergeWords: Array<MergeWords>,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("mergeWords", "projectId", projectId);
      // verify required parameter 'mergeWords' is not null or undefined
      assertParamExists("mergeWords", "mergeWords", mergeWords);
      const localVarPath = `/v1/projects/{projectId}/merge`.replace(
        `{${"projectId"}}`,
        encodeURIComponent(String(projectId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        mergeWords,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * MergeApi - functional programming interface
 * @export
 */
export const MergeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MergeApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async blacklistAdd(
      projectId: string,
      requestBody: Array<string>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.blacklistAdd(
        projectId,
        requestBody,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {number} maxInList
     * @param {number} maxLists
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPotentialDuplicates(
      projectId: string,
      maxInList: number,
      maxLists: number,
      userId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<Array<Word>>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPotentialDuplicates(
        projectId,
        maxInList,
        maxLists,
        userId,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {string} projectId
     * @param {Array<MergeWords>} mergeWords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async mergeWords(
      projectId: string,
      mergeWords: Array<MergeWords>,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<string>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.mergeWords(
        projectId,
        mergeWords,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * MergeApi - factory interface
 * @export
 */
export const MergeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MergeApiFp(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {Array<string>} requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blacklistAdd(
      projectId: string,
      requestBody: Array<string>,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .blacklistAdd(projectId, requestBody, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {number} maxInList
     * @param {number} maxLists
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPotentialDuplicates(
      projectId: string,
      maxInList: number,
      maxLists: number,
      userId: string,
      options?: any
    ): AxiosPromise<Array<Array<Word>>> {
      return localVarFp
        .getPotentialDuplicates(projectId, maxInList, maxLists, userId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {Array<MergeWords>} mergeWords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    mergeWords(
      projectId: string,
      mergeWords: Array<MergeWords>,
      options?: any
    ): AxiosPromise<Array<string>> {
      return localVarFp
        .mergeWords(projectId, mergeWords, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for blacklistAdd operation in MergeApi.
 * @export
 * @interface MergeApiBlacklistAddRequest
 */
export interface MergeApiBlacklistAddRequest {
  /**
   *
   * @type {string}
   * @memberof MergeApiBlacklistAdd
   */
  readonly projectId: string;

  /**
   *
   * @type {Array<string>}
   * @memberof MergeApiBlacklistAdd
   */
  readonly requestBody: Array<string>;
}

/**
 * Request parameters for getPotentialDuplicates operation in MergeApi.
 * @export
 * @interface MergeApiGetPotentialDuplicatesRequest
 */
export interface MergeApiGetPotentialDuplicatesRequest {
  /**
   *
   * @type {string}
   * @memberof MergeApiGetPotentialDuplicates
   */
  readonly projectId: string;

  /**
   *
   * @type {number}
   * @memberof MergeApiGetPotentialDuplicates
   */
  readonly maxInList: number;

  /**
   *
   * @type {number}
   * @memberof MergeApiGetPotentialDuplicates
   */
  readonly maxLists: number;

  /**
   *
   * @type {string}
   * @memberof MergeApiGetPotentialDuplicates
   */
  readonly userId: string;
}

/**
 * Request parameters for mergeWords operation in MergeApi.
 * @export
 * @interface MergeApiMergeWordsRequest
 */
export interface MergeApiMergeWordsRequest {
  /**
   *
   * @type {string}
   * @memberof MergeApiMergeWords
   */
  readonly projectId: string;

  /**
   *
   * @type {Array<MergeWords>}
   * @memberof MergeApiMergeWords
   */
  readonly mergeWords: Array<MergeWords>;
}

/**
 * MergeApi - object-oriented interface
 * @export
 * @class MergeApi
 * @extends {BaseAPI}
 */
export class MergeApi extends BaseAPI {
  /**
   *
   * @param {MergeApiBlacklistAddRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MergeApi
   */
  public blacklistAdd(
    requestParameters: MergeApiBlacklistAddRequest,
    options?: any
  ) {
    return MergeApiFp(this.configuration)
      .blacklistAdd(
        requestParameters.projectId,
        requestParameters.requestBody,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MergeApiGetPotentialDuplicatesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MergeApi
   */
  public getPotentialDuplicates(
    requestParameters: MergeApiGetPotentialDuplicatesRequest,
    options?: any
  ) {
    return MergeApiFp(this.configuration)
      .getPotentialDuplicates(
        requestParameters.projectId,
        requestParameters.maxInList,
        requestParameters.maxLists,
        requestParameters.userId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {MergeApiMergeWordsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof MergeApi
   */
  public mergeWords(
    requestParameters: MergeApiMergeWordsRequest,
    options?: any
  ) {
    return MergeApiFp(this.configuration)
      .mergeWords(
        requestParameters.projectId,
        requestParameters.mergeWords,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
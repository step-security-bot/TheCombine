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
import { Word } from "../models";
/**
 * WordApi - axios parameter creator
 * @export
 */
export const WordApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} projectId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWord: async (
      projectId: string,
      word: Word,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("createWord", "projectId", projectId);
      // verify required parameter 'word' is not null or undefined
      assertParamExists("createWord", "word", word);
      const localVarPath = `/v1/projects/{projectId}/words`.replace(
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
        method: "POST",
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
        word,
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFrontierWord: async (
      projectId: string,
      wordId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteFrontierWord", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("deleteFrontierWord", "wordId", wordId);
      const localVarPath = `/v1/projects/{projectId}/words/frontier/{wordId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
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
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDuplicateId: async (
      projectId: string,
      word: Word,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getDuplicateId", "projectId", projectId);
      // verify required parameter 'word' is not null or undefined
      assertParamExists("getDuplicateId", "word", word);
      const localVarPath =
        `/v1/projects/{projectId}/words/getduplicateid`.replace(
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
        method: "POST",
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
        word,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectFrontierWords: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getProjectFrontierWords", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/words/frontier`.replace(
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectWords: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getProjectWords", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/words`.replace(
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWord: async (
      projectId: string,
      wordId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getWord", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("getWord", "wordId", wordId);
      const localVarPath = `/v1/projects/{projectId}/words/{wordId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)));
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    isFrontierNonempty: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("isFrontierNonempty", "projectId", projectId);
      const localVarPath =
        `/v1/projects/{projectId}/words/isfrontiernonempty`.replace(
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    isInFrontier: async (
      projectId: string,
      wordId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("isInFrontier", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("isInFrontier", "wordId", wordId);
      const localVarPath =
        `/v1/projects/{projectId}/words/isinfrontier/{wordId}`
          .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
          .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)));
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
     * @param {string} dupId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDuplicate: async (
      projectId: string,
      dupId: string,
      word: Word,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("updateDuplicate", "projectId", projectId);
      // verify required parameter 'dupId' is not null or undefined
      assertParamExists("updateDuplicate", "dupId", dupId);
      // verify required parameter 'word' is not null or undefined
      assertParamExists("updateDuplicate", "word", word);
      const localVarPath = `/v1/projects/{projectId}/words/{dupId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"dupId"}}`, encodeURIComponent(String(dupId)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
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
        word,
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
     * @param {string} wordId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWord: async (
      projectId: string,
      wordId: string,
      word: Word,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("updateWord", "projectId", projectId);
      // verify required parameter 'wordId' is not null or undefined
      assertParamExists("updateWord", "wordId", wordId);
      // verify required parameter 'word' is not null or undefined
      assertParamExists("updateWord", "word", word);
      const localVarPath = `/v1/projects/{projectId}/words/{wordId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"wordId"}}`, encodeURIComponent(String(wordId)));
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
        word,
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
 * WordApi - functional programming interface
 * @export
 */
export const WordApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = WordApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createWord(
      projectId: string,
      word: Word,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createWord(
        projectId,
        word,
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteFrontierWord(
      projectId: string,
      wordId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteFrontierWord(
          projectId,
          wordId,
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
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getDuplicateId(
      projectId: string,
      word: Word,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getDuplicateId(
        projectId,
        word,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectFrontierWords(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Word>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getProjectFrontierWords(
          projectId,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getProjectWords(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Word>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProjectWords(
        projectId,
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getWord(
      projectId: string,
      wordId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Word>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getWord(
        projectId,
        wordId,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async isFrontierNonempty(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.isFrontierNonempty(projectId, options);
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
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async isInFrontier(
      projectId: string,
      wordId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.isInFrontier(
        projectId,
        wordId,
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
     * @param {string} dupId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateDuplicate(
      projectId: string,
      dupId: string,
      word: Word,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateDuplicate(
        projectId,
        dupId,
        word,
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
     * @param {string} wordId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateWord(
      projectId: string,
      wordId: string,
      word: Word,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateWord(
        projectId,
        wordId,
        word,
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
 * WordApi - factory interface
 * @export
 */
export const WordApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = WordApiFp(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createWord(
      projectId: string,
      word: Word,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .createWord(projectId, word, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteFrontierWord(
      projectId: string,
      wordId: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .deleteFrontierWord(projectId, wordId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getDuplicateId(
      projectId: string,
      word: Word,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .getDuplicateId(projectId, word, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectFrontierWords(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<Word>> {
      return localVarFp
        .getProjectFrontierWords(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectWords(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<Word>> {
      return localVarFp
        .getProjectWords(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWord(
      projectId: string,
      wordId: string,
      options?: any
    ): AxiosPromise<Word> {
      return localVarFp
        .getWord(projectId, wordId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    isFrontierNonempty(
      projectId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .isFrontierNonempty(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    isInFrontier(
      projectId: string,
      wordId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .isInFrontier(projectId, wordId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} dupId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateDuplicate(
      projectId: string,
      dupId: string,
      word: Word,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .updateDuplicate(projectId, dupId, word, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} wordId
     * @param {Word} word
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateWord(
      projectId: string,
      wordId: string,
      word: Word,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .updateWord(projectId, wordId, word, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createWord operation in WordApi.
 * @export
 * @interface WordApiCreateWordRequest
 */
export interface WordApiCreateWordRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiCreateWord
   */
  readonly projectId: string;

  /**
   *
   * @type {Word}
   * @memberof WordApiCreateWord
   */
  readonly word: Word;
}

/**
 * Request parameters for deleteFrontierWord operation in WordApi.
 * @export
 * @interface WordApiDeleteFrontierWordRequest
 */
export interface WordApiDeleteFrontierWordRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiDeleteFrontierWord
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof WordApiDeleteFrontierWord
   */
  readonly wordId: string;
}

/**
 * Request parameters for getDuplicateId operation in WordApi.
 * @export
 * @interface WordApiGetDuplicateIdRequest
 */
export interface WordApiGetDuplicateIdRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiGetDuplicateId
   */
  readonly projectId: string;

  /**
   *
   * @type {Word}
   * @memberof WordApiGetDuplicateId
   */
  readonly word: Word;
}

/**
 * Request parameters for getProjectFrontierWords operation in WordApi.
 * @export
 * @interface WordApiGetProjectFrontierWordsRequest
 */
export interface WordApiGetProjectFrontierWordsRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiGetProjectFrontierWords
   */
  readonly projectId: string;
}

/**
 * Request parameters for getProjectWords operation in WordApi.
 * @export
 * @interface WordApiGetProjectWordsRequest
 */
export interface WordApiGetProjectWordsRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiGetProjectWords
   */
  readonly projectId: string;
}

/**
 * Request parameters for getWord operation in WordApi.
 * @export
 * @interface WordApiGetWordRequest
 */
export interface WordApiGetWordRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiGetWord
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof WordApiGetWord
   */
  readonly wordId: string;
}

/**
 * Request parameters for isFrontierNonempty operation in WordApi.
 * @export
 * @interface WordApiIsFrontierNonemptyRequest
 */
export interface WordApiIsFrontierNonemptyRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiIsFrontierNonempty
   */
  readonly projectId: string;
}

/**
 * Request parameters for isInFrontier operation in WordApi.
 * @export
 * @interface WordApiIsInFrontierRequest
 */
export interface WordApiIsInFrontierRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiIsInFrontier
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof WordApiIsInFrontier
   */
  readonly wordId: string;
}

/**
 * Request parameters for updateDuplicate operation in WordApi.
 * @export
 * @interface WordApiUpdateDuplicateRequest
 */
export interface WordApiUpdateDuplicateRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiUpdateDuplicate
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof WordApiUpdateDuplicate
   */
  readonly dupId: string;

  /**
   *
   * @type {Word}
   * @memberof WordApiUpdateDuplicate
   */
  readonly word: Word;
}

/**
 * Request parameters for updateWord operation in WordApi.
 * @export
 * @interface WordApiUpdateWordRequest
 */
export interface WordApiUpdateWordRequest {
  /**
   *
   * @type {string}
   * @memberof WordApiUpdateWord
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof WordApiUpdateWord
   */
  readonly wordId: string;

  /**
   *
   * @type {Word}
   * @memberof WordApiUpdateWord
   */
  readonly word: Word;
}

/**
 * WordApi - object-oriented interface
 * @export
 * @class WordApi
 * @extends {BaseAPI}
 */
export class WordApi extends BaseAPI {
  /**
   *
   * @param {WordApiCreateWordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public createWord(
    requestParameters: WordApiCreateWordRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .createWord(requestParameters.projectId, requestParameters.word, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiDeleteFrontierWordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public deleteFrontierWord(
    requestParameters: WordApiDeleteFrontierWordRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .deleteFrontierWord(
        requestParameters.projectId,
        requestParameters.wordId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiGetDuplicateIdRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public getDuplicateId(
    requestParameters: WordApiGetDuplicateIdRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .getDuplicateId(
        requestParameters.projectId,
        requestParameters.word,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiGetProjectFrontierWordsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public getProjectFrontierWords(
    requestParameters: WordApiGetProjectFrontierWordsRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .getProjectFrontierWords(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiGetProjectWordsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public getProjectWords(
    requestParameters: WordApiGetProjectWordsRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .getProjectWords(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiGetWordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public getWord(requestParameters: WordApiGetWordRequest, options?: any) {
    return WordApiFp(this.configuration)
      .getWord(requestParameters.projectId, requestParameters.wordId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiIsFrontierNonemptyRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public isFrontierNonempty(
    requestParameters: WordApiIsFrontierNonemptyRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .isFrontierNonempty(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiIsInFrontierRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public isInFrontier(
    requestParameters: WordApiIsInFrontierRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .isInFrontier(
        requestParameters.projectId,
        requestParameters.wordId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiUpdateDuplicateRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public updateDuplicate(
    requestParameters: WordApiUpdateDuplicateRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .updateDuplicate(
        requestParameters.projectId,
        requestParameters.dupId,
        requestParameters.word,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {WordApiUpdateWordRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof WordApi
   */
  public updateWord(
    requestParameters: WordApiUpdateWordRequest,
    options?: any
  ) {
    return WordApiFp(this.configuration)
      .updateWord(
        requestParameters.projectId,
        requestParameters.wordId,
        requestParameters.word,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

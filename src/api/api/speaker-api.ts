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
import { Speaker } from "../models";
/**
 * SpeakerApi - axios parameter creator
 * @export
 */
export const SpeakerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpeaker: async (
      projectId: string,
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("createSpeaker", "projectId", projectId);
      // verify required parameter 'name' is not null or undefined
      assertParamExists("createSpeaker", "name", name);
      const localVarPath = `/v1/projects/{projectId}/speakers/create/{name}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
    deleteProjectSpeakers: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteProjectSpeakers", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/speakers`.replace(
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpeaker: async (
      projectId: string,
      speakerId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteSpeaker", "projectId", projectId);
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("deleteSpeaker", "speakerId", speakerId);
      const localVarPath = `/v1/projects/{projectId}/speakers/{speakerId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)));
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
     * @param {string} speakerId
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadConsent: async (
      speakerId: string,
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("downloadConsent", "speakerId", speakerId);
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("downloadConsent", "projectId", projectId);
      const localVarPath =
        `/v1/projects/{projectId}/speakers/consent/{speakerId}`
          .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)))
          .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)));
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
    getProjectSpeakers: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getProjectSpeakers", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/speakers`.replace(
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpeaker: async (
      projectId: string,
      speakerId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getSpeaker", "projectId", projectId);
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("getSpeaker", "speakerId", speakerId);
      const localVarPath = `/v1/projects/{projectId}/speakers/{speakerId}`
        .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
        .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)));
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeConsent: async (
      projectId: string,
      speakerId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("removeConsent", "projectId", projectId);
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("removeConsent", "speakerId", speakerId);
      const localVarPath =
        `/v1/projects/{projectId}/speakers/consent/{speakerId}`
          .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
          .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)));
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
     * @param {string} speakerId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpeakerName: async (
      projectId: string,
      speakerId: string,
      name: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("updateSpeakerName", "projectId", projectId);
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("updateSpeakerName", "speakerId", speakerId);
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updateSpeakerName", "name", name);
      const localVarPath =
        `/v1/projects/{projectId}/speakers/update/{speakerId}/{name}`
          .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
          .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)))
          .replace(`{${"name"}}`, encodeURIComponent(String(name)));
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
     * @param {string} speakerId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadConsent: async (
      projectId: string,
      speakerId: string,
      file: any,
      name: string,
      filePath: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("uploadConsent", "projectId", projectId);
      // verify required parameter 'speakerId' is not null or undefined
      assertParamExists("uploadConsent", "speakerId", speakerId);
      // verify required parameter 'file' is not null or undefined
      assertParamExists("uploadConsent", "file", file);
      // verify required parameter 'name' is not null or undefined
      assertParamExists("uploadConsent", "name", name);
      // verify required parameter 'filePath' is not null or undefined
      assertParamExists("uploadConsent", "filePath", filePath);
      const localVarPath =
        `/v1/projects/{projectId}/speakers/consent/{speakerId}`
          .replace(`{${"projectId"}}`, encodeURIComponent(String(projectId)))
          .replace(`{${"speakerId"}}`, encodeURIComponent(String(speakerId)));
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
      const localVarFormParams = new ((configuration &&
        configuration.formDataCtor) ||
        FormData)();

      if (file !== undefined) {
        localVarFormParams.append("File", file as any);
      }

      if (name !== undefined) {
        localVarFormParams.append("Name", name as any);
      }

      if (filePath !== undefined) {
        localVarFormParams.append("FilePath", filePath as any);
      }

      localVarHeaderParameter["Content-Type"] = "multipart/form-data";

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = localVarFormParams;

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * SpeakerApi - functional programming interface
 * @export
 */
export const SpeakerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SpeakerApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSpeaker(
      projectId: string,
      name: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createSpeaker(
        projectId,
        name,
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
    async deleteProjectSpeakers(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteProjectSpeakers(
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSpeaker(
      projectId: string,
      speakerId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteSpeaker(
        projectId,
        speakerId,
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
     * @param {string} speakerId
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async downloadConsent(
      speakerId: string,
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.downloadConsent(
        speakerId,
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
    async getProjectSpeakers(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Speaker>>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getProjectSpeakers(projectId, options);
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSpeaker(
      projectId: string,
      speakerId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Speaker>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSpeaker(
        projectId,
        speakerId,
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
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async removeConsent(
      projectId: string,
      speakerId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.removeConsent(
        projectId,
        speakerId,
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
     * @param {string} speakerId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSpeakerName(
      projectId: string,
      speakerId: string,
      name: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateSpeakerName(
          projectId,
          speakerId,
          name,
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
     * @param {string} speakerId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async uploadConsent(
      projectId: string,
      speakerId: string,
      file: any,
      name: string,
      filePath: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Speaker>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.uploadConsent(
        projectId,
        speakerId,
        file,
        name,
        filePath,
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
 * SpeakerApi - factory interface
 * @export
 */
export const SpeakerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SpeakerApiFp(configuration);
  return {
    /**
     *
     * @param {string} projectId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSpeaker(
      projectId: string,
      name: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .createSpeaker(projectId, name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProjectSpeakers(
      projectId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .deleteProjectSpeakers(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSpeaker(
      projectId: string,
      speakerId: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .deleteSpeaker(projectId, speakerId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} speakerId
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    downloadConsent(
      speakerId: string,
      projectId: string,
      options?: any
    ): AxiosPromise<any> {
      return localVarFp
        .downloadConsent(speakerId, projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectSpeakers(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<Speaker>> {
      return localVarFp
        .getProjectSpeakers(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSpeaker(
      projectId: string,
      speakerId: string,
      options?: any
    ): AxiosPromise<Speaker> {
      return localVarFp
        .getSpeaker(projectId, speakerId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} speakerId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeConsent(
      projectId: string,
      speakerId: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .removeConsent(projectId, speakerId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} speakerId
     * @param {string} name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSpeakerName(
      projectId: string,
      speakerId: string,
      name: string,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .updateSpeakerName(projectId, speakerId, name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {string} speakerId
     * @param {any} file
     * @param {string} name
     * @param {string} filePath
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadConsent(
      projectId: string,
      speakerId: string,
      file: any,
      name: string,
      filePath: string,
      options?: any
    ): AxiosPromise<Speaker> {
      return localVarFp
        .uploadConsent(projectId, speakerId, file, name, filePath, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createSpeaker operation in SpeakerApi.
 * @export
 * @interface SpeakerApiCreateSpeakerRequest
 */
export interface SpeakerApiCreateSpeakerRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiCreateSpeaker
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiCreateSpeaker
   */
  readonly name: string;
}

/**
 * Request parameters for deleteProjectSpeakers operation in SpeakerApi.
 * @export
 * @interface SpeakerApiDeleteProjectSpeakersRequest
 */
export interface SpeakerApiDeleteProjectSpeakersRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiDeleteProjectSpeakers
   */
  readonly projectId: string;
}

/**
 * Request parameters for deleteSpeaker operation in SpeakerApi.
 * @export
 * @interface SpeakerApiDeleteSpeakerRequest
 */
export interface SpeakerApiDeleteSpeakerRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiDeleteSpeaker
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiDeleteSpeaker
   */
  readonly speakerId: string;
}

/**
 * Request parameters for downloadConsent operation in SpeakerApi.
 * @export
 * @interface SpeakerApiDownloadConsentRequest
 */
export interface SpeakerApiDownloadConsentRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiDownloadConsent
   */
  readonly speakerId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiDownloadConsent
   */
  readonly projectId: string;
}

/**
 * Request parameters for getProjectSpeakers operation in SpeakerApi.
 * @export
 * @interface SpeakerApiGetProjectSpeakersRequest
 */
export interface SpeakerApiGetProjectSpeakersRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiGetProjectSpeakers
   */
  readonly projectId: string;
}

/**
 * Request parameters for getSpeaker operation in SpeakerApi.
 * @export
 * @interface SpeakerApiGetSpeakerRequest
 */
export interface SpeakerApiGetSpeakerRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiGetSpeaker
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiGetSpeaker
   */
  readonly speakerId: string;
}

/**
 * Request parameters for removeConsent operation in SpeakerApi.
 * @export
 * @interface SpeakerApiRemoveConsentRequest
 */
export interface SpeakerApiRemoveConsentRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiRemoveConsent
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiRemoveConsent
   */
  readonly speakerId: string;
}

/**
 * Request parameters for updateSpeakerName operation in SpeakerApi.
 * @export
 * @interface SpeakerApiUpdateSpeakerNameRequest
 */
export interface SpeakerApiUpdateSpeakerNameRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiUpdateSpeakerName
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiUpdateSpeakerName
   */
  readonly speakerId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiUpdateSpeakerName
   */
  readonly name: string;
}

/**
 * Request parameters for uploadConsent operation in SpeakerApi.
 * @export
 * @interface SpeakerApiUploadConsentRequest
 */
export interface SpeakerApiUploadConsentRequest {
  /**
   *
   * @type {string}
   * @memberof SpeakerApiUploadConsent
   */
  readonly projectId: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiUploadConsent
   */
  readonly speakerId: string;

  /**
   *
   * @type {any}
   * @memberof SpeakerApiUploadConsent
   */
  readonly file: any;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiUploadConsent
   */
  readonly name: string;

  /**
   *
   * @type {string}
   * @memberof SpeakerApiUploadConsent
   */
  readonly filePath: string;
}

/**
 * SpeakerApi - object-oriented interface
 * @export
 * @class SpeakerApi
 * @extends {BaseAPI}
 */
export class SpeakerApi extends BaseAPI {
  /**
   *
   * @param {SpeakerApiCreateSpeakerRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public createSpeaker(
    requestParameters: SpeakerApiCreateSpeakerRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .createSpeaker(
        requestParameters.projectId,
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiDeleteProjectSpeakersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public deleteProjectSpeakers(
    requestParameters: SpeakerApiDeleteProjectSpeakersRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .deleteProjectSpeakers(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiDeleteSpeakerRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public deleteSpeaker(
    requestParameters: SpeakerApiDeleteSpeakerRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .deleteSpeaker(
        requestParameters.projectId,
        requestParameters.speakerId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiDownloadConsentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public downloadConsent(
    requestParameters: SpeakerApiDownloadConsentRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .downloadConsent(
        requestParameters.speakerId,
        requestParameters.projectId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiGetProjectSpeakersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public getProjectSpeakers(
    requestParameters: SpeakerApiGetProjectSpeakersRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .getProjectSpeakers(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiGetSpeakerRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public getSpeaker(
    requestParameters: SpeakerApiGetSpeakerRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .getSpeaker(
        requestParameters.projectId,
        requestParameters.speakerId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiRemoveConsentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public removeConsent(
    requestParameters: SpeakerApiRemoveConsentRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .removeConsent(
        requestParameters.projectId,
        requestParameters.speakerId,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiUpdateSpeakerNameRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public updateSpeakerName(
    requestParameters: SpeakerApiUpdateSpeakerNameRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .updateSpeakerName(
        requestParameters.projectId,
        requestParameters.speakerId,
        requestParameters.name,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {SpeakerApiUploadConsentRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SpeakerApi
   */
  public uploadConsent(
    requestParameters: SpeakerApiUploadConsentRequest,
    options?: any
  ) {
    return SpeakerApiFp(this.configuration)
      .uploadConsent(
        requestParameters.projectId,
        requestParameters.speakerId,
        requestParameters.file,
        requestParameters.name,
        requestParameters.filePath,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

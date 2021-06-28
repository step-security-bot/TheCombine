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
import { Project } from "../models";
// @ts-ignore
import { SemanticDomainWithSubdomains } from "../models";
// @ts-ignore
import { User } from "../models";
// @ts-ignore
import { UserCreatedProject } from "../models";
/**
 * ProjectApi - axios parameter creator
 * @export
 */
export const ProjectApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProject: async (
      project: Project,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'project' is not null or undefined
      assertParamExists("createProject", "project", project);
      const localVarPath = `/v1/projects`;
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
        project,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAllProjects: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1/projects`;
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProject: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("deleteProject", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}`.replace(
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjectUsers: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getAllProjectUsers", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/users`.replace(
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjects: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/v1/projects`;
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
    getProject: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getProject", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}`.replace(
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
    getSemDoms: async (
      projectId: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("getSemDoms", "projectId", projectId);
      const localVarPath = `/v1/projects/{projectId}/semanticdomains`.replace(
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
     * @param {string} projectName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectDuplicateCheck: async (
      projectName: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectName' is not null or undefined
      assertParamExists("projectDuplicateCheck", "projectName", projectName);
      const localVarPath = `/v1/projects/duplicate/{projectName}`.replace(
        `{${"projectName"}}`,
        encodeURIComponent(String(projectName))
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
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putChars: async (
      projectId: string,
      project: Project,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("putChars", "projectId", projectId);
      // verify required parameter 'project' is not null or undefined
      assertParamExists("putChars", "project", project);
      const localVarPath = `/v1/projects/{projectId}/characters`.replace(
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
        project,
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
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProject: async (
      projectId: string,
      project: Project,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'projectId' is not null or undefined
      assertParamExists("updateProject", "projectId", projectId);
      // verify required parameter 'project' is not null or undefined
      assertParamExists("updateProject", "project", project);
      const localVarPath = `/v1/projects/{projectId}`.replace(
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
        project,
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
 * ProjectApi - functional programming interface
 * @export
 */
export const ProjectApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ProjectApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createProject(
      project: Project,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<UserCreatedProject>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createProject(
        project,
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteAllProjects(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAllProjects(
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
    async deleteProject(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteProject(
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
    async getAllProjectUsers(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProjectUsers(
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAllProjects(
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Project>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getAllProjects(
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
    async getProject(
      projectId: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getProject(
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
    async getSemDoms(
      projectId: string,
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<Array<SemanticDomainWithSubdomains>>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSemDoms(
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
     * @param {string} projectName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async projectDuplicateCheck(
      projectName: string,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<boolean>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.projectDuplicateCheck(
        projectName,
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
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putChars(
      projectId: string,
      project: Project,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.putChars(
        projectId,
        project,
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
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProject(
      projectId: string,
      project: Project,
      options?: any
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateProject(
        projectId,
        project,
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
 * ProjectApi - factory interface
 * @export
 */
export const ProjectApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = ProjectApiFp(configuration);
  return {
    /**
     *
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createProject(
      project: Project,
      options?: any
    ): AxiosPromise<UserCreatedProject> {
      return localVarFp
        .createProject(project, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAllProjects(options?: any): AxiosPromise<boolean> {
      return localVarFp
        .deleteAllProjects(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteProject(projectId: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .deleteProject(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjectUsers(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<User>> {
      return localVarFp
        .getAllProjectUsers(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjects(options?: any): AxiosPromise<Array<Project>> {
      return localVarFp
        .getAllProjects(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProject(projectId: string, options?: any): AxiosPromise<Project> {
      return localVarFp
        .getProject(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSemDoms(
      projectId: string,
      options?: any
    ): AxiosPromise<Array<SemanticDomainWithSubdomains>> {
      return localVarFp
        .getSemDoms(projectId, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectDuplicateCheck(
      projectName: string,
      options?: any
    ): AxiosPromise<boolean> {
      return localVarFp
        .projectDuplicateCheck(projectName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putChars(
      projectId: string,
      project: Project,
      options?: any
    ): AxiosPromise<Project> {
      return localVarFp
        .putChars(projectId, project, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {string} projectId
     * @param {Project} project
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProject(
      projectId: string,
      project: Project,
      options?: any
    ): AxiosPromise<string> {
      return localVarFp
        .updateProject(projectId, project, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createProject operation in ProjectApi.
 * @export
 * @interface ProjectApiCreateProjectRequest
 */
export interface ProjectApiCreateProjectRequest {
  /**
   *
   * @type {Project}
   * @memberof ProjectApiCreateProject
   */
  readonly project: Project;
}

/**
 * Request parameters for deleteProject operation in ProjectApi.
 * @export
 * @interface ProjectApiDeleteProjectRequest
 */
export interface ProjectApiDeleteProjectRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiDeleteProject
   */
  readonly projectId: string;
}

/**
 * Request parameters for getAllProjectUsers operation in ProjectApi.
 * @export
 * @interface ProjectApiGetAllProjectUsersRequest
 */
export interface ProjectApiGetAllProjectUsersRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiGetAllProjectUsers
   */
  readonly projectId: string;
}

/**
 * Request parameters for getProject operation in ProjectApi.
 * @export
 * @interface ProjectApiGetProjectRequest
 */
export interface ProjectApiGetProjectRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiGetProject
   */
  readonly projectId: string;
}

/**
 * Request parameters for getSemDoms operation in ProjectApi.
 * @export
 * @interface ProjectApiGetSemDomsRequest
 */
export interface ProjectApiGetSemDomsRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiGetSemDoms
   */
  readonly projectId: string;
}

/**
 * Request parameters for projectDuplicateCheck operation in ProjectApi.
 * @export
 * @interface ProjectApiProjectDuplicateCheckRequest
 */
export interface ProjectApiProjectDuplicateCheckRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiProjectDuplicateCheck
   */
  readonly projectName: string;
}

/**
 * Request parameters for putChars operation in ProjectApi.
 * @export
 * @interface ProjectApiPutCharsRequest
 */
export interface ProjectApiPutCharsRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiPutChars
   */
  readonly projectId: string;

  /**
   *
   * @type {Project}
   * @memberof ProjectApiPutChars
   */
  readonly project: Project;
}

/**
 * Request parameters for updateProject operation in ProjectApi.
 * @export
 * @interface ProjectApiUpdateProjectRequest
 */
export interface ProjectApiUpdateProjectRequest {
  /**
   *
   * @type {string}
   * @memberof ProjectApiUpdateProject
   */
  readonly projectId: string;

  /**
   *
   * @type {Project}
   * @memberof ProjectApiUpdateProject
   */
  readonly project: Project;
}

/**
 * ProjectApi - object-oriented interface
 * @export
 * @class ProjectApi
 * @extends {BaseAPI}
 */
export class ProjectApi extends BaseAPI {
  /**
   *
   * @param {ProjectApiCreateProjectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public createProject(
    requestParameters: ProjectApiCreateProjectRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .createProject(requestParameters.project, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public deleteAllProjects(options?: any) {
    return ProjectApiFp(this.configuration)
      .deleteAllProjects(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiDeleteProjectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public deleteProject(
    requestParameters: ProjectApiDeleteProjectRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .deleteProject(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiGetAllProjectUsersRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public getAllProjectUsers(
    requestParameters: ProjectApiGetAllProjectUsersRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .getAllProjectUsers(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public getAllProjects(options?: any) {
    return ProjectApiFp(this.configuration)
      .getAllProjects(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiGetProjectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public getProject(
    requestParameters: ProjectApiGetProjectRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .getProject(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiGetSemDomsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public getSemDoms(
    requestParameters: ProjectApiGetSemDomsRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .getSemDoms(requestParameters.projectId, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiProjectDuplicateCheckRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public projectDuplicateCheck(
    requestParameters: ProjectApiProjectDuplicateCheckRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .projectDuplicateCheck(requestParameters.projectName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiPutCharsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public putChars(requestParameters: ProjectApiPutCharsRequest, options?: any) {
    return ProjectApiFp(this.configuration)
      .putChars(requestParameters.projectId, requestParameters.project, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {ProjectApiUpdateProjectRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProjectApi
   */
  public updateProject(
    requestParameters: ProjectApiUpdateProjectRequest,
    options?: any
  ) {
    return ProjectApiFp(this.configuration)
      .updateProject(
        requestParameters.projectId,
        requestParameters.project,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}
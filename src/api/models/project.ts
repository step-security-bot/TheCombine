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

import { AutocompleteSetting } from "./autocomplete-setting";
import { CustomField } from "./custom-field";
import { EmailInvite } from "./email-invite";
import { SemanticDomain } from "./semantic-domain";
import { WritingSystem } from "./writing-system";

/**
 *
 * @export
 * @interface Project
 */
export interface Project {
  /**
   *
   * @type {string}
   * @memberof Project
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof Project
   */
  name: string;
  /**
   *
   * @type {boolean}
   * @memberof Project
   */
  isActive: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Project
   */
  liftImported: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Project
   */
  definitionsEnabled: boolean;
  /**
   *
   * @type {WritingSystem}
   * @memberof Project
   */
  semDomWritingSystem: WritingSystem;
  /**
   *
   * @type {AutocompleteSetting}
   * @memberof Project
   */
  autocompleteSetting: AutocompleteSetting;
  /**
   *
   * @type {WritingSystem}
   * @memberof Project
   */
  vernacularWritingSystem: WritingSystem;
  /**
   *
   * @type {Array<WritingSystem>}
   * @memberof Project
   */
  analysisWritingSystems: Array<WritingSystem>;
  /**
   *
   * @type {Array<SemanticDomain>}
   * @memberof Project
   */
  semanticDomains: Array<SemanticDomain>;
  /**
   *
   * @type {Array<string>}
   * @memberof Project
   */
  validCharacters: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof Project
   */
  rejectedCharacters: Array<string>;
  /**
   *
   * @type {Array<CustomField>}
   * @memberof Project
   */
  customFields?: Array<CustomField> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof Project
   */
  wordFields?: Array<string> | null;
  /**
   *
   * @type {Array<string>}
   * @memberof Project
   */
  partsOfSpeech?: Array<string> | null;
  /**
   *
   * @type {Array<EmailInvite>}
   * @memberof Project
   */
  inviteTokens: Array<EmailInvite>;
}

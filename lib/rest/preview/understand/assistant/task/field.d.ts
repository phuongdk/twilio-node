/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import Understand = require('../../../Understand');
import { SerializableClass } from '../../../../../interfaces';

/**
 * Initialize the FieldList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the parent Assistant.
 * @param taskSid - The unique ID of the Task associated with this Field.
 */
declare function FieldList(version: Understand, assistantSid: string, taskSid: string): FieldListInstance;

interface FieldListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FieldContext;
  /**
   * create a FieldInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: FieldListInstanceCreateOptions, callback?: (error: Error | null, item: FieldInstance) => any): Promise<FieldInstance>;
  /**
   * Streams FieldInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FieldInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FieldListInstanceEachOptions, callback?: (item: FieldInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a field
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string): FieldContext;
  /**
   * Retrieve a single target page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
  /**
   * Retrieve a single target page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
  /**
   * Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
  /**
   * Lists FieldInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FieldListInstanceOptions, callback?: (error: Error | null, items: FieldInstance[]) => any): Promise<FieldInstance[]>;
  /**
   * Retrieve a single page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
  /**
   * Retrieve a single page of FieldInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FieldListInstancePageOptions, callback?: (error: Error | null, items: FieldPage) => any): Promise<FieldPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property fieldType - The unique name or sid of the FieldType. It can be any Built-in Field Type or the unique_name or sid of a custom Field Type.
 * @property uniqueName - A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
 */
interface FieldListInstanceCreateOptions {
  fieldType: string;
  uniqueName: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FieldListInstanceEachOptions {
  callback?: (item: FieldInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FieldListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FieldListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FieldPayload extends FieldResource, Page.TwilioResponsePayload {
}

interface FieldResource {
  account_sid: string;
  assistant_sid: string;
  date_created: Date;
  date_updated: Date;
  field_type: string;
  sid: string;
  task_sid: string;
  unique_name: string;
  url: string;
}

interface FieldSolution {
  assistantSid?: string;
  taskSid?: string;
}


declare class FieldContext {
  /**
   * Initialize the FieldContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The unique ID of the Assistant.
   * @param taskSid - The unique ID of the Task associated with this Field.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, assistantSid: string, taskSid: string, sid: string);

  /**
   * fetch a FieldInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldInstance) => any): Promise<FieldInstance>;
  /**
   * remove a FieldInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class FieldInstance extends SerializableClass {
  /**
   * Initialize the FieldContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the parent Assistant.
   * @param taskSid - The unique ID of the Task associated with this Field.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Understand, payload: FieldPayload, assistantSid: string, taskSid: string, sid: string);

  private _proxy: FieldContext;
  accountSid: string;
  assistantSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a FieldInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FieldInstance) => any): Promise<FieldInstance>;
  fieldType: string;
  /**
   * remove a FieldInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FieldInstance) => any): Promise<boolean>;
  sid: string;
  taskSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  url: string;
}


declare class FieldPage extends Page<Understand, FieldPayload, FieldResource, FieldInstance> {
  /**
   * Initialize the FieldPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: FieldSolution);

  /**
   * Build an instance of FieldInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FieldPayload): FieldInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FieldContext, FieldInstance, FieldList, FieldListInstance, FieldListInstanceCreateOptions, FieldListInstanceEachOptions, FieldListInstanceOptions, FieldListInstancePageOptions, FieldPage, FieldPayload, FieldResource, FieldSolution }

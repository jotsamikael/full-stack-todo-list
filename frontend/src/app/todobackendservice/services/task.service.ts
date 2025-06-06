/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Task } from '../models/task';
import { taskCreatePost } from '../fn/task/task-create-post';
import { TaskCreatePost$Params } from '../fn/task/task-create-post';
import { taskDeleteIdDelete } from '../fn/task/task-delete-id-delete';
import { TaskDeleteIdDelete$Params } from '../fn/task/task-delete-id-delete';
import { taskGetAllGet } from '../fn/task/task-get-all-get';
import { TaskGetAllGet$Params } from '../fn/task/task-get-all-get';
import { taskUpdateIdPut } from '../fn/task/task-update-id-put';
import { TaskUpdateIdPut$Params } from '../fn/task/task-update-id-put';

@Injectable({ providedIn: 'root' })
export class TaskService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `taskCreatePost()` */
  static readonly TaskCreatePostPath = '/task/create';

  /**
   * Create a new task.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `taskCreatePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  taskCreatePost$Response(params: TaskCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return taskCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * Create a new task.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `taskCreatePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  taskCreatePost(params: TaskCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.taskCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `taskGetAllGet()` */
  static readonly TaskGetAllGetPath = '/task/get-all';

  /**
   * Get all tasks (paginated).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `taskGetAllGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  taskGetAllGet$Response(params?: TaskGetAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'count'?: number;
'rows'?: Array<Task>;
}>> {
    return taskGetAllGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all tasks (paginated).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `taskGetAllGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  taskGetAllGet(params?: TaskGetAllGet$Params, context?: HttpContext): Observable<{
'count'?: number;
'rows'?: Array<Task>;
}> {
    return this.taskGetAllGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
'count'?: number;
'rows'?: Array<Task>;
}>): {
'count'?: number;
'rows'?: Array<Task>;
} => r.body)
    );
  }

  /** Path part for operation `taskUpdateIdPut()` */
  static readonly TaskUpdateIdPutPath = '/task/update/{id}';

  /**
   * Update a task.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `taskUpdateIdPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  taskUpdateIdPut$Response(params: TaskUpdateIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return taskUpdateIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * Update a task.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `taskUpdateIdPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  taskUpdateIdPut(params: TaskUpdateIdPut$Params, context?: HttpContext): Observable<void> {
    return this.taskUpdateIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `taskDeleteIdDelete()` */
  static readonly TaskDeleteIdDeletePath = '/task/delete/{id}';

  /**
   * Deleted a task (soft delete).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `taskDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  taskDeleteIdDelete$Response(params: TaskDeleteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return taskDeleteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * Deleted a task (soft delete).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `taskDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  taskDeleteIdDelete(params: TaskDeleteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.taskDeleteIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

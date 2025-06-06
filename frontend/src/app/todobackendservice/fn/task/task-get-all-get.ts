/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Task } from '../../models/task';

export interface TaskGetAllGet$Params {
  page?: number;
  limit?: number;
}

export function taskGetAllGet(http: HttpClient, rootUrl: string, params?: TaskGetAllGet$Params, context?: HttpContext): Observable<StrictHttpResponse<{
'count'?: number;
'rows'?: Array<Task>;
}>> {
  const rb = new RequestBuilder(rootUrl, taskGetAllGet.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('limit', params.limit, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      'count'?: number;
      'rows'?: Array<Task>;
      }>;
    })
  );
}

taskGetAllGet.PATH = '/task/get-all';

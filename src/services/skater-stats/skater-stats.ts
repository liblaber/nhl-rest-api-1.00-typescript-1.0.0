// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse } from '../../http';
import { RequestConfig } from '../../http/types';
import { GetCurrentSkaterStatsLeadersParams, GetSkaterStatsLeadersParams } from './request-params';

export class SkaterStatsService extends BaseService {
  /**
   * Retrieve current skater stats leaders.
   * @param {string} [categories] - Categories to filter by
   * @param {number} [limit] - Limit results (Note: a limit of -1 will return all results)
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getCurrentSkaterStatsLeaders(
    params?: GetCurrentSkaterStatsLeadersParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const path = '/v1/skater-stats-leaders/current';
    const options: any = {
      responseSchema: z.any(),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };
    if (params?.categories) {
      options.queryParams['categories'] = params?.categories;
    }
    if (params?.limit) {
      options.queryParams['limit'] = params?.limit;
    }
    return this.client.get(path, options);
  }

  /**
   * Retrieve skater stats leaders for a specific season and game type.
   * @param {number} season - Season in YYYYYYYY format
   * @param {number} gameType - Game type (2 for regular season, 3 for playoffs)
   * @param {string} [categories] - Categories to filter by
   * @param {number} [limit] - Limit results (Note: a limit of -1 will return all results)
   * @returns {Promise<HttpResponse<any>>} Successful response
   */
  async getSkaterStatsLeaders(
    season: number,
    gameType: number,
    params?: GetSkaterStatsLeadersParams,
    requestConfig?: RequestConfig,
  ): Promise<HttpResponse<any>> {
    const path = this.client.buildPath('/v1/skater-stats-leaders/{season}/{game-type}', {
      season: season,
      'game-type': gameType,
    });
    const options: any = {
      responseSchema: z.any(),
      requestSchema: z.any(),
      queryParams: {},
      headers: {},
      requestContentType: ContentType.Json,
      responseContentType: ContentType.Json,
      retry: requestConfig?.retry,
    };
    if (params?.categories) {
      options.queryParams['categories'] = params?.categories;
    }
    if (params?.limit) {
      options.queryParams['limit'] = params?.limit;
    }
    return this.client.get(path, options);
  }
}

import LoginRequest from '../../models/requests/LoginRequest';
import RefreshTokenRequest from '../../models/requests/RefreshTokenRequest';

import ApiResult from '../../models/responses/ApiResult';
import TokenResponse from '../../models/responses/TokenResponse';

import { apiClient } from './BaseAPI';

export const signInAsync = async (request: LoginRequest) : Promise<ApiResult<TokenResponse>> => {    
    let result = new ApiResult<TokenResponse>();

    await apiClient
    .post('/auth/authenticate', request)
    .then((response) => {
        result.succeeded = true;
        result.data = response.data
    })
    .catch((error) => {
        result.succeeded = false;
    });   

    return result;
}   

export const refreshTokenAsync = async (request: RefreshTokenRequest) : Promise<ApiResult<TokenResponse>> => {
    let result = new ApiResult<TokenResponse>();

    await apiClient
    .post('/auth/refresh', request)
    .then((response) => {
        result.succeeded = true;
        result.data = response.data;
    })
    .catch((error) => {
        result.succeeded = false;
    });

    return result;
}
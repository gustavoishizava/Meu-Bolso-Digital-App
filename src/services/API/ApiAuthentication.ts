import LoginRequest from '../../models/requests/LoginRequest';
import TokenResponse from '../../models/responses/TokenResponse';

import { apiClient } from './BaseAPI';

export const signIn = async (request: LoginRequest) : Promise<TokenResponse | null> => {    
    await apiClient
    .post('/auth/authenticate', request)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return null;
    });   

    return null;
}   
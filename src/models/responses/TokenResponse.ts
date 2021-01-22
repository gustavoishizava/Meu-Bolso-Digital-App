export default class TokenResponse{
    id: string;
    name: string;
    email: string;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}
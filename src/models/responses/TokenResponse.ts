export default class TokenResponse{
    name: string;
    email: string;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
    createdAt: Date;
}
import AsyncStorage from "@react-native-community/async-storage";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import TokenResponse from "../models/responses/TokenResponse";

const TOKEN_KEY = "MBD_TOKEN";

export const setToken = async (token: TokenResponse) =>{
    await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token));
}

export const getToken = async () : Promise<TokenResponse | null> => {
    const tokenString = await AsyncStorage.getItem(TOKEN_KEY);
    if(!tokenString) return null;
    
    return plainToClass(TokenResponse, JSON.parse(tokenString));
}

export const clearToken = async () =>{
    await AsyncStorage.removeItem(TOKEN_KEY);
}

export const renew = async () : Promise<boolean> =>{
    const token = await getToken();
    if(token === null) return false;

    const dateNow = new Date();
    const tokenDate = new Date(token.createdAt);
    
    tokenDate.setSeconds(tokenDate.getSeconds() + token.expiresIn);

    return dateNow >= tokenDate;    
}
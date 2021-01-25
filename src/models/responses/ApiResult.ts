export default class ApiResult<T>{
    data: T;
    succeeded: boolean;
    message: string;
}
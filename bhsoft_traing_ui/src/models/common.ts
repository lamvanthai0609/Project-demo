export interface IRespon<T = any> {
     message?: string;
     results: T;
     pagination?: any;
}

export interface INotification {
     mess: string;
     type: string;
}

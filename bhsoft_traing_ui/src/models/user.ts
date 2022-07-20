export interface IUser {
     id: string;
     username: string;
     name: string;
     email: string;
     numberphone?: string;
     image?: string;
     address?: Array<string>;
}

export interface IToken {
     accessToken: string;
     expiresIn?: number;
}

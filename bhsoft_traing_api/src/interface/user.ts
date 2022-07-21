export interface Iuser {
     username: string;
     password: string;
     name: string;
     email: string;
     numberphone?: string;
     image?: string;
     address?: Array<string>;
     role: string;
     comparePassword?: Function;
}

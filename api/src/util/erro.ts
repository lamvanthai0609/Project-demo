export interface IErro {
     mess: string;
     number: number;
}

export const empty: IErro = {
     mess: 'Không được để trống',
     number: 401,
};

export const invalid: IErro = {
     mess: 'không hợp lệ',
     number: 401,
};

export const notExist: IErro = {
     mess: 'không tồn tại',
     number: 404,
};

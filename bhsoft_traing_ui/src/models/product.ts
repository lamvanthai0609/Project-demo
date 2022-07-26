export interface IProduct {
     id: string;
     name: string;
     thumbnails: string;
     description: string;
     price: number;
     amount: number;
     type: string;
}

export interface IPagination {
     _total: number;
     _limit: number;
     _page: number;
}

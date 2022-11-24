export interface IProduct {
     name: string;
     thumbnails: string;
     description: string;
     price: number;
     amount: number;
     type: string;
}

export interface IPagination {
     _limit: any;
     _page: any;
     _category?: any;
}

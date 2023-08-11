export enum CATEGORIES_ACTION_TYPES {
    FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
    FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_FAILED = 'catgories/FETCH_CATEGORIES_FAILED'
}


export type CategoryItem = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
}

export type Category = {
    title: string;
    items: CategoryItem[];
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}
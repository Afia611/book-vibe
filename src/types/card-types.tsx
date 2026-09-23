export interface IBook {
    bookId: string | number;
    bookName: string;
    author: string;
    image: string;
    category: string;
    rating: number;
    tags: string[];
    yearsOfPublishing: number;
};
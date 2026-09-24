export interface IBook {
    bookId: string | number;
    bookName: string;
    author: string;
    image: string;
    category: string;
    rating: number;
    tags: string[];
    yearOfPublishing: number;
    totalPages: number;
    publisher: string;
    
};
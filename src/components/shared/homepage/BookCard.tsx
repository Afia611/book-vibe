import { IBook } from "@/types/card-types";
import Link from "next/link";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  const {bookId, bookName, author, image, category, rating, tags,} 
  = book;

  return (
    <div className="card bg-base-100 border border-gray-200 p-5 h-full hover:shadow-lg transition">

      {/* Image */}
      <div className="bg-base-200 rounded-xl h-56 flex justify-center items-center p-6">
        <img
          src={image}
          alt={bookName}
          className="h-full max-w-full object-contain"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-5">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book name */}
      <h2 className="text-xl font-bold mt-4">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-sm mt-3">
        By : {author}
      </p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      {/* Category + Rating */}
      <div className="flex justify-between items-center">
        <p>{category}</p>

        <div className="flex items-center gap-2">
          <span>{rating}</span>
          <span className="text-xl">☆</span>
        </div>
      </div>

      {/* View Details */}
      <Link
        href={`/books/${book.bookId}`}
        className="btn btn-success text-white w-full mt-5"
      >
        View Details
      </Link>

    </div>
  );
};

export default BookCard;
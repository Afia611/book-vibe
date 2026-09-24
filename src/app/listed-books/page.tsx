"use client";

import BookCard from "@/components/shared/homepage/BookCard";
import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/card-types";
import { useContext, useState } from "react";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;

  const [sortBy, setSortBy] = useState<"rating" | "year"| "pages">("rating");

  // Sort function
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") { 
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages
);
    } else {
      sortedBooks.sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-20 px-4">

      <h1 className="my-2 bg-green-200 font-extrabold rounded-xl py-10 text-center text-3xl">
        Listed Books
      </h1>

      {/* Sort By */}
      <div className="text-center my-8">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "year")
          }
          className="select select-success"
        >
          <option value="rating">Rating</option>
          <option value="year">Publishing Year</option>
          <option value="pages">Total Pages</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border mt-8">

        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">

          {sortedReadBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {sortedReadBooks.map((book: IBook) => (
                <BookCard
                  key={book.bookId}
                  book={book}
                />
              ))}

            </div>
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found.
            </p>
          )}

        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">

          {sortedWishlist.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {sortedWishlist.map((book: IBook) => (
                <BookCard
                  key={book.bookId}
                  book={book}
                />
              ))}

            </div>
          ) : (
            <p className="text-center text-lg font-semibold">
              No books added to wishlist yet.
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default ListedBooks;
"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ListedBooks must be used inside BooksProvider");
  }

  const { readBooks, wishlist } = context;

  console.log("Read books:", readBooks);
  console.log("Wishlist:", wishlist);

  return (
    <div>
      <h1>Listed Books</h1>

      <p>Read Books: {readBooks.length}</p>
      <p>Wishlist: {wishlist.length}</p>
    </div>
  );
};

export default ListedBooks;
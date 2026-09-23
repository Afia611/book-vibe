"use client";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/card-types";
import { useContext } from "react";

const ReadBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadBtn must be used inside BooksProvider");
  }

  const { readBooks, setReadBooks } = context;

  const handleReadBook = () => {
    console.log("read book btn triggered", book);

    setReadBooks([...readBooks, book]);

    alert(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-outline"
      onClick={handleReadBook}
    >
      Read
    </button>
  );
};

export default ReadBtn;
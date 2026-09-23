"use client";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/card-types";
import { useContext } from "react";

const WishlistBtn = ({ book }: { book: IBook }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("WishlistBtn must be used inside BooksProvider");
  }

  const { wishlist, setWishlist } = context;

  const handleWishlist = () => {
    console.log("wishlist btn triggered", book);

    setWishlist([...wishlist, book]);

    alert(`You added "${book.bookName}" to your wishlist`);
  };

  return (
    <button
      className="btn btn-info text-white"
      onClick={handleWishlist}
    >
      Wishlist
    </button>
  );
};

export default WishlistBtn;
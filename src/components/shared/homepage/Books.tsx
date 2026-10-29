
import BookCard from "./BookCard";
import type { IBook } from "@/types/card-types";
import fs from "node:fs/promises";
import path from "node:path";

const getBooks = async (): Promise<IBook[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "booksData.json"
  );

  const fileContents = await fs.readFile(filePath, "utf8");
  const data: IBook[] = JSON.parse(fileContents);

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Explore all books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;

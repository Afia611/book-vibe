import { IBook } from "@/types/card-types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IBookDetailsPageProps{
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async (): Promise< IBook[]> => {
  const response = await fetch(
    "http://localhost:3000/booksData.json"
  );
  const data: IBook[] = await response.json();
  return data;
};

const BookDetailsPage = async ({params,}:IBookDetailsPageProps) =>{
    const { id } = await params;
    
    const booksData= await getBooks();
    
    const book = booksData.find(
      (book) => String(book.bookId) ===id
    );

    if (!book){
        notFound();
    }
return (
    <main className="container mx-auto px-4 py-12">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT SIDE - BOOK IMAGE */}
        <div className="bg-base-200 rounded-2xl p-10 flex items-center justify-center min-h-[500px]">

          <Image
            src={book.image}
            alt={book.bookName}
            width={350}
            height={500}
            className="max-h-450px w-auto object-contain"
          />

        </div>


        {/* RIGHT SIDE - BOOK INFORMATION */}
        <div>

          {/* Book Name */}
          <h1 className="text-4xl font-bold mb-4">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-600 mb-5">
            By : {book.author}
          </p>

          <hr className="border-gray-200" />


          {/* Category */}
          <p className="py-4 font-medium">
            {book.category}
          </p>
          
          <hr className="border-gray-200" />


          {/* Tags */}
          <div className="flex items-center flex-wrap gap-3 mb-6">

            <span className="font-bold">
              Tag
            </span>

            {book.tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}

          </div>

          <hr className="border-gray-200 mb-6" />


          {/* Book Information */}
          <div className="space-y-4 max-w-md">

            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Publisher:
              </span>

              <span className="font-semibold">
                {book.author}
              </span>
            </div>


            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Year of Publishing:
              </span>

              <span className="font-semibold">
                {book.yearsOfPublishing}
              </span>
            </div>


            <div className="grid grid-cols-2">
              <span className="text-gray-500">
                Rating:
              </span>

              <span className="font-semibold">
                {book.rating} ⭐
              </span>
            </div>

          </div>


          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="btn btn-outline">
              Read
            </button>

            <button className="btn btn-info text-white">
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </main>
  );
};

export default BookDetailsPage;
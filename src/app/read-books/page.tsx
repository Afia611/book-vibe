"use client";

import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  type BarShapeProps,
  type LabelProps,
} from "recharts";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/card-types";

const ReadBooks = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#FF69B4",
    "#82CA9D",
  ];

  // Get read books dynamically from Context
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadBooks must be used inside BooksProvider");
  }

  const { readBooks } = context;

  // Create chart data dynamically
  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    pages: Number(book.totalPages),
  }));

  // Custom bar shape
  const getPath = (
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    return `
      M${x},${y + height}
      C${x + width / 3},${y + height}
      ${x + width / 2},${y + height / 3}
      ${x + width / 2},${y}

      C${x + width / 2},${y + height / 3}
      ${x + (2 * width) / 3},${y + height}
      ${x + width},${y + height}

      Z
    `;
  };

  const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
      <path
        d={getPath(
          Number(x),
          Number(y),
          Number(width),
          Number(height)
        )}
        fill={color}
        stroke={color}
        strokeWidth={props.isActive ? 5 : 0}
      />
    );
  };

  // Dynamic label
  const CustomColorLabel = (props: LabelProps) => {
    const fill =
      colors[(props.index ?? 0) % colors.length];

    return (
      <Label
        {...props}
        fill={fill}
      />
    );
  };

  return (
    <main className="container mx-auto my-10 px-4">

      <h1 className="text-3xl font-bold text-center mb-10">
        Pages to Read
      </h1>

      {data.length > 0 ? (

        <div className="w-full max-w-5xl h-[500px] mx-auto">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={data}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 80,
              }}
            >

              <CartesianGrid strokeDasharray="3 3" />

              <Tooltip />

              <XAxis
                dataKey="name"
                interval={0}
                angle={-20}
                textAnchor="end"
                height={100}
              />

              <YAxis />

              <Bar
                dataKey="pages"
                shape={TriangleBar}
                activeBar
              >

                <LabelList
                  dataKey="pages"
                  content={CustomColorLabel}
                  position="top"
                />

              </Bar>

            </BarChart>

          </ResponsiveContainer>

        </div>

      ) : (

        <div className="text-center py-20">

          <h2 className="text-2xl font-bold mb-3">
            No Read Books Yet
          </h2>

          <p className="text-gray-500">
            Click the Read button on a book to see it here.
          </p>

        </div>

      )}

    </main>
  );
};

export default ReadBooks;
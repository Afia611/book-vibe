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
    "red",
    "pink",
    "black",
  ];

  // Get data from BooksContext
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("ReadBooks must be used inside BooksProvider");
  }

  const { readBooks } = context;

  // Convert readBooks into chart data
  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    pages: Number(book.totalPages),
  }));

  // Custom shape path
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

  // Custom bar shape
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

  // Custom label
  const CustomColorLabel = (props: LabelProps) => {
    const fill =
      colors[(props.index ?? 0) % colors.length];

    return <Label {...props} fill={fill} />;
  };

  return (
    <main className="container mx-auto my-10 px-4">

      <h1 className="text-3xl font-bold text-center mb-10">
        Pages to Read
      </h1>

      {data.length > 0 ? (

        <BarChart
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "500px",
            margin: "0 auto",
          }}
          responsive
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >

          <CartesianGrid strokeDasharray="3 3" />

          <Tooltip />

          <XAxis
            dataKey="name"
            interval={0}
          />

          <YAxis />

          <Bar
            dataKey="pages"
            shape={TriangleBar}
            activeBar
          >
            <LabelList
              content={CustomColorLabel}
              position="top"
            />
          </Bar>

        </BarChart>

      ) : (

        <p className="text-center text-lg font-semibold">
          No read books to display.
        </p>

      )}

    </main>
  );
};

export default ReadBooks;
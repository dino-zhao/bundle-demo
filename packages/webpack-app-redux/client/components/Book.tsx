import React, { useState } from "react";
import { bookAction, selectBookById } from "@redux/bookSlice";
import { useAppSelector, useAppDispatch } from "@redux/store";
const { bookAdded, booksLoading, booksReceived, bookUpdated } = bookAction;

function useSelect(id: string) {
  console.log("查询", id);
  return useAppSelector((state) => selectBookById(state, id));
}

export default function Book() {
  const dispatch = useAppDispatch();
  const [id, setId] = useState("a");
  const books = useSelect(id);
  console.log(books);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(bookAdded({ id: "a", title: "First" }));
          }}
        >
          添加
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(
              bookUpdated({ id: "a", changes: { title: "First (altered)" } })
            );
          }}
        >
          更新1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(booksLoading());
          }}
        >
          loading
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(
              booksReceived([
                { id: "b", title: "Book 3" },
                { id: "c", title: "Book 2" },
              ])
            );
          }}
        >
          添加两个
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setId("a");
          }}
        >
          查询a
        </button>
        <button
          onClick={() => {
            setId("b");
          }}
        >
          查询b
        </button>
        <button
          onClick={() => {
            setId("c");
          }}
        >
          查询c
        </button>
      </div>
    </div>
  );
}

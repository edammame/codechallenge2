"use client";
import React from "react";

function Card({ img }) {
  return (
    <>
      <main className="grid max-w-screen-2xl gap-4">
        <div className="flex-row max-w-[2000px] space-x-4 space-y-4">
          <div className="m-auto translate-y-5 w-[80%]">
            <img className="rounded-xl object-cover" src={img} />
          </div>
          <div className="flex flex-col p-6 h-[200px]">
            <h1 className="text-3xl font-medium">hello</h1>
            <p>product unavailable</p>
            <p className="text-xl mt-2">price</p>
            <button className="bg-gray-200 rounded-full p-3 mt-3" onClick={""}>
              add to cart
            </button>
          </div>
        </div>
      </main>

    </>
  );
}
export default Card;

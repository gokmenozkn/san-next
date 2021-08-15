import Link from "next/link";
import { AppContext } from "../contexts/AppContext";
import { useContext, useEffect } from "react";

function Item({ product, qty }) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          {/* <img className="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="" /> */}
          <img className="h-24" src={product.image} alt="" />
        </div>
        <div className="justify-between ml-4 flex-grow">
          <span className="font-bold text-sm block mb-10">{product.title}</span>
          <button 
            className="font-semibold hover:text-red-500 text-gray-600 text-sm m-0"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", product })}
          >Remove</button>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/5">
        <button 
          onClick={() => dispatch({ type: "DECREASE_QTY", product })}
          className="border px-1 py-0.5 rounded-none hover:bg-gray-200"
        >
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>

        <span className="mx-2 border text-center w-8" type="text">{qty}</span>

        <button 
          onClick={() => dispatch({ type: "INCREASE_QTY", product })}
          className="border px-1 py-0.5 rounded-none hover:bg-gray-200"
        >
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">${Number(product.price * qty).toFixed(2)}</span>
    </div>
  )
}

export default Item;
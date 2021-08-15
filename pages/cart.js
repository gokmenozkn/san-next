import Layout from "../components/Layout";
import Link from "next/link";
import { AppContext } from '../contexts/AppContext';
import { useContext, useEffect } from 'react';
import Item from "../components/Item";

export default function Cart() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    console.log(state);
  });

  const { cart } = state;

  const Empty = () => (
    <div className="text-center hover:bg-gray-100 px-6 py-5">
      <h1 className="text-3xl">No Item In Cart</h1>
    </div>
  );

  return (
    <Layout title="Cart">
      <div className="container mx-auto mb-44">
        <div className="p-10 shadow-xl mt-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cart.length} Items</h2>
          </div>
          
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>

          {(cart && cart.length) ? cart.map((item) => (
            <Item key={item.product._id} product={item.product} qty={item.qty} />
          ))
          : <> <Empty /> </>}
          
          <div className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
            <Link href="/">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
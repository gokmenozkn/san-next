/* eslint-disable */

import { useContext } from 'react';
import sanity from '../lib/sanity';
import groq from 'groq';

import Layout from '../components/Layout';
import Info from '../components/Info';
import Clients from '../components/Clients';
import Hero from '../components/Hero';

import { AppContext } from '../contexts/AppContext';
import * as types from '../contexts/ActionTypes'

const query = groq`*[_type == "product"] {
  _id,
  title,
  price,
  "slug": slug.current,
  image
}`;

export default function Home({ products }) {
  const { dispatch } = useContext(AppContext);

  return (
    <Layout title="Ecommerce">
      {/* Hero */}
      <Hero />

      {/* Products */}
      <div className="container mx-auto mt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4">
          {products && products.map((product) => (
            <div key={product._id} className="p-6 max-w-sm shadow-xl rounded-2xl">
              <picture>
                <img className="w-full" src={product.image} />
              </picture>
              <figcaption className="text-md">
                <h2 className="text-center text-lg">{product.title}</h2>
                <div className="flex justify-between items-center mt-3 px-6">
                  <button 
                    onClick={() => dispatch({ type: types.ADD_TO_CART, product })}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded font-bold">
                      Order
                    </button>
                  <span className="font-bold text-lg">${product.price}</span>
                </div>
              </figcaption>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <Info />

      {/* client cards */}
      <Clients />
    </Layout>
  )
}

export async function getStaticProps() {
  const products = await sanity.fetch(query);
  return {
    props: {
      products
    }
  };
};
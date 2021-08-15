import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

export default function Top() {
  const [session, loading] = useSession();
  const { state } = useContext(AppContext);

  return (
    <>
      <nav 
        className="flex py-4 justify-center items-center shadow-lg md:justify-between md:items-center md:px-14 md:py-6 bg-white text-black">
        <div id="brand">
          <Link href="/">Ecommerce</Link >
        </div>
        <ul className="md:flex hidden" id="links">
          <li className="nav-links">
            {!session && <>
              <Link href={`/api/auth/signin`} onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}>Sign In</Link>
            </>}
            {session && (
              <Link href={`/api/auth/signout`} 
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}>Sign Out</Link>
            )}
          </li>
          <li id="shop" className="nav-links">
            <Link href="/cart">Cart</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{state.cart.length}</span>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        #brand {
          text-transform: uppercase;
          font-weight: bold;
        }

        @media screen and (min-width: 900px) {
          .flexed {
            display: flex;
          }

          ul > .nav-links + .nav-links {
            margin-left: .3em;
          }

          .nav-links {
            display: block;
            padding: .2em 1em;
            border-radius: .25em;
          }
        }

        @media (max-width: 750px) {
          .flexed {
            display: none;
          }
        }


        .nav-links:hover {
          background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
        }

        #shop {
          display: flex;
          flex-direction: row;
          justfiy-content: space-between;
        }

        #shop > svg {
          // display: block !important;
          margin-left: .3em;
        }
      `}</style>
    </>
  )
}
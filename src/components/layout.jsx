import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

export default function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="max-w-lg mx-auto">
      <header className="font-black text-5xl text-gray-500 my-6">
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className="flex mb-5">
          <li>
            <Link className="pr-8 text-black underline" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="pr-8 text-black underline" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="pr-8 text-black underline" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-purple-700 text-3xl mb-6">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

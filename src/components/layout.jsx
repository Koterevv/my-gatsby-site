import { Link } from "gatsby";
import React from "react";

export default function Layout({pageTitle, children}) {
  return (
    <div className="max-w-lg mx-auto">
      <nav>
        <ul className="flex">
          <li><Link className="pr-8 text-black underline" to="/">Home</Link></li>
          <li><Link className="pr-8 text-black underline" to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className="text-purple-700 text-3xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}

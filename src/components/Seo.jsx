import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Seo({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return <title>
    {title} | {data.site.siteMetadata.title}
  </title>;
}

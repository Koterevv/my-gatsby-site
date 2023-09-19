import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export default function BlogPage({ data }) {
  console.log(data)
  return (
    <Layout pageTitle={"My Blog Posts"}>
      <p>My cool posts will go in here</p>
      <ul>
        {data?.allFile?.nodes?.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title={"My Blog Posts"} />;

import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";

export default function BlogPage({ data }) {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {data?.allMdx?.nodes?.map((node) => (
        <article className=" mb-3" key={node.id}>
          <h2 className="text-xl">
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          slug
        }
        id
      }
    }
  }
`;

export const Head = () => <Seo title={"My Blog Posts"} />;

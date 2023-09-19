import React from "react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout pageTitle={"About Me"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
}

export const Head = () => {
  return (
    <>
      <title>About me</title>
      <meta name="description" content="Your description" />
    </>
  );
};

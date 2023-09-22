import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export default function IndexPage() {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        src="https://cdnstatic.rg.ru/uploads/images/photogallery/2019/12/06/8085b70e8b6927e/8085b70e8b6927e1575618884.jpg"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </Layout>
  );
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title={'Home page'}/>;

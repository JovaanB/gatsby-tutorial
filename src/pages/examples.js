import React from "react";
import HeaderHook from "../examples/Header-Hooks";
import HeaderStatic from "../examples/Header-Static";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person;

  return (
    <Layout>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>this is our persone
        <h4>name: {name}</h4>
        <h4>age: {age}</h4>
      </div>
    </Layout>
  );
};

export const getData = graphql`
  query {
    site {
      siteMetadata {
        description
        siteTitle: title
        author
        person: data {
          name
          age
        }
      }
    }
  }
`;

export default examples;

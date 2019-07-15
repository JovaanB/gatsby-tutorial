import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        description
        siteTitle: title
        author
        data {
          name
          age
        }
      }
    }
  }
`;

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(getData);

  const title = info.siteTitle;
  const author = info.author;

  return (
    <div>
      <h1>Author : {author}</h1>
      <h1>Title : {title}</h1>
    </div>
  );
};

export default Header;

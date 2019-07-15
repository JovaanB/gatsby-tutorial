import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import img from "../images/image-01.jpg";
import Image from "gatsby-image";

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-02.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 150, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-03.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const data = useStaticQuery(getImages);

  return (
    <Wrapper>
      <article>
        <h3>Basic Image</h3>
        <img src={img} alt="basic" className="basic" />
      </article>
      <article>
        <h3>Fixed Image - Blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>Fluid Image - SVG</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  article {
    border: 3px solid purple;
    padding: 1rem 0;
    margin: 1rem 1rem;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;

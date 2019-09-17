import styled from 'styled-components';

export const ArticleWrapper = styled.section`
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
  display: flex;
  margin: 50px 0px;
`;

export const ArticleContentWrapper = styled.section`
  flex: 1;
  margin: 0;
`;

export const ArticleTitle = styled.h1`
  font-size: 1.2em;
  margin: 0;
`;

export const ArticleText = styled.article`
  margin-top: 20px;
`;

export const ArticleImageWrapper = styled.div`
  @media only screen and (min-width: 800px) {
    width: 30%;
  }
  width: 100%;
  padding: 0 20px;
`;

export const ArticleImage = styled.img`
  display: block;
  width: auto;
  height: auto;
  @media only screen and (min-width: 800px) {
    max-width:100%;
    max-height:95px;
  }
  max-width: 100%;
  max-height: 100%;
`;

export const ArticleDate = styled.div`
  font-weight: bold;
  font-size: 0.8em;
`;

export const ArticleSeeMore = styled.a`
  cursor: pointer;
  color: #3498db;
`;
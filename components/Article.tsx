import React, { FunctionComponent, useState, useMemo } from 'react';
import {
  ArticleWrapper,
  ArticleContentWrapper,
  ArticleDate,
  ArticleImage,
  ArticleImageWrapper,
  ArticleText,
  ArticleTitle,
  ArticleSeeMore
} from './article.styled';

type ArticleProps = {
  id: number,
  src: string,
  title: string,
  text: string,
  date: string
}

function formatTitle(title) {
  if (title.length > 50) {
    return `${title.substr(0, 50)}...`
  }
  return title;
}

const Article: FunctionComponent<ArticleProps> = ({
  id,
  src,
  title,
  text,
  date
}) => {
  const [seeMore, setSeeMore] = useState(false);
  const formatedTitle = useMemo(() => formatTitle(title), [title]);

  return (
    <ArticleWrapper>
      {
        src && (
          <ArticleImageWrapper>
            <ArticleImage src={`https://upply-interview.herokuapp.com/images/${src}`} />
          </ArticleImageWrapper>
        )
      }
      <ArticleContentWrapper>
        <ArticleTitle>{formatedTitle}</ArticleTitle>
        {date && <ArticleDate>Written the {new Date(date).toLocaleDateString()}</ArticleDate>}
        <ArticleText>
          {
            seeMore ? text : text.substr(0, 200)
          }
        </ArticleText>
        {
          text.length > 200 && (
            <ArticleSeeMore onClick={() => setSeeMore(!seeMore)}>
              {seeMore ? 'See less' : 'See more'}
            </ArticleSeeMore>
          )
        }
      </ArticleContentWrapper>
    </ArticleWrapper>
  );
};

export default Article;
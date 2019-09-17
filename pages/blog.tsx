import React, { FunctionComponent, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Article from '../components/Article';
import Sort from '../components/Sort';
import Search from '../components/Search';

type Article = {
  id: number,
  src: string,
  text: string,
  date: string,
  title: string
}

type BlogProps = {
  articles: Article[]
}

const Blog: FunctionComponent<BlogProps> = ({ articles }) => {
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState('desc');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    const regex = new RegExp(search, 'gi')

    const filteredArticles = articles.filter(({ title }) => {
      return regex.test(title);
    }).sort(({ date: d1 }, { date: d2 }) => {
      if (order === 'asc') {
        return new Date(d1).getTime() - new Date(d2).getTime();
      }
      return new Date(d2).getTime() - new Date(d1).getTime();
    })

    setFilteredArticles(filteredArticles);
  }, [search, order]);

  return (
    <Layout>
      <Search
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <Sort
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      {
        filteredArticles.map((article) => (
          <Article key={article.id} {...article} />
        ))
      }
    </Layout>
  );
};

// Todo fix ts
// @ts-ignore
Blog.getInitialProps = async function () {
  const res = await fetch('https://upply-interview.herokuapp.com/');
  const data = await res.json();
  return {
    articles: data
  }
}

export default Blog;

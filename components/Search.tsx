import React, { FunctionComponent, useState, useMemo } from 'react';
import styled from 'styled-components';

type SearchProps = {
  value: string;
  // Todo type
  onChange: any;
}

const SearchStyled = styled.input`
  height: 40px;
  padding: 5px;
  margin: 0 20px 0px 0px;
`;


const Search: FunctionComponent<SearchProps> = ({ value, onChange }) => {
  return (
    <SearchStyled
      type="text"
      value={value}
      placeholder="search..."
      onChange={onChange}
    />
  );
};

export default Search;
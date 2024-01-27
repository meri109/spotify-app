import * as React from 'react';
import GenreList from './GenreList';
import SearchList from './SearchList';

export interface ISearchProps {
}

export default function Search (props: ISearchProps) {
  return (
    <div>
      <SearchList />
      <GenreList />

    </div>
  );
}

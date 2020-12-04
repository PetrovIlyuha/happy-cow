import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
  Stats,
} from 'react-instantsearch-dom';
import { SiHappycow } from 'react-icons/si';

import './App.css';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_ID,
  process.env.REACT_APP_ALGOLIA_API_KEY,
);

export default function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName='products'>
      <div className='app'>
        <div className='search-container'>
          <h2 className='logo'>
            <SiHappycow size={40} color='yellow' />
            Happy Cow Searcher
          </h2>
          <Stats />
          <SearchBox />
          <Hits hitComponent={Product} />
          <Pagination />
        </div>
      </div>
    </InstantSearch>
  );
}

const Product = ({ hit }) => {
  return (
    <a
      className='product'
      href={hit.url}
      target='_blank'
      rel='noopener noreferrer'>
      <img src={hit.image} alt={`${hit.name} product`} />
      <div>
        <h3>{hit.brand}</h3>
        <h2>{hit.name}</h2>
        <p>${hit.price}</p>
      </div>
    </a>
  );
};

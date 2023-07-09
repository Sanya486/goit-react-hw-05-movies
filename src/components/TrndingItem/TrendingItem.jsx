import React from 'react';

const TrendingItems = ({ films }) => {
  return (
    <>
      {' '}
      {films.map(film => (
        <li>{film.title}</li>
      ))}
    </>
  );
};

export default TrendingItems;

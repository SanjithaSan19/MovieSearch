import React from 'react';
import BasicExample from './BasicExample';

const Movies = ({ data }) => {
  if (!data || !data.Search) {
    return <div className='input' 
                 style={{fontFamily: 'sans-serif',color:'white'}}>
                          No such movie in IMDB database or the Spelling is wrong.
           </div>;
  }

  return (
    <div className='data'>
      {data.Search.map((movie) => (
        <BasicExample key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;

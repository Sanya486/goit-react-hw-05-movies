import React from 'react';

import TrendingItems from 'components/TrndingItem/TrendingItem';

const Trendings = () => {
  return (
    <div>
      <h1>Trendings today</h1>
          <ul>
              <TrendingItems films={ console.log("daw")} />
      </ul>
    </div>
  );
};

export default Trendings;

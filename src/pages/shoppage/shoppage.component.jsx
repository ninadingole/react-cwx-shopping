import React from 'react';
import { Route, useMatch, Routes } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
  const match = useMatch('/shop/:collectionId');
  return (<div className='shop-page'>
    <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route
          path=":collectionId"
          element={<CollectionPage match={match}/>}
        />
      </Routes>
    </div>);
};

export default ShopPage;

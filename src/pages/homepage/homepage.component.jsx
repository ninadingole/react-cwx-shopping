import React from 'react';

import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = (props) => (
    <HomePageContainer>
        <h1>Welcome to my Homepage</h1>
        <Directory />
    </HomePageContainer>
);

export default HomePage;
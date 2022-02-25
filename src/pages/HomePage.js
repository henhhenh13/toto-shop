import React from 'react';
import HomePageContainer from '../components/HomePageContainer';
import NavDesktop from '../components/NavDesktop';
import NavMobile from '../components/NavMobile';

function HomePage(props) {
    return (
        <div className="grid grid-cols-10">
            <NavDesktop />
            <NavMobile />
            <HomePageContainer />
        </div>
    );
}

export default HomePage;
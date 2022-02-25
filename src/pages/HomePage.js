import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePageContainer from '../components/HomePageContainer';
import NavDesktop from '../components/NavDesktop';
import NavMobile from '../components/NavMobile';
import { getProducts } from '../features/totoshop.service'

function HomePage(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <div className="grid grid-cols-10">
            <NavDesktop />
            <NavMobile />
            <HomePageContainer />
        </div>
    );
}

export default HomePage;
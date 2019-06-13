import React from 'react';
import MainTemplate from '../templates/MainTemplate'
import Header from '../organisms/header/Header'
import Content from '../organisms/content/Content';

const MainPage = () =>
    <MainTemplate header={<Header/>} content={<Content/>}></MainTemplate>

export default MainPage;
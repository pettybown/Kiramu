import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import List from '../../screens/List/List';
import Button from '../Button/Button';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section__heading'>
        <h1 className='hero-section__title'>
          ДОБРО ПОЖАЛОВАТЬ НА KIRAMU
        </h1>

        <p className='hero-section__description'>
          Найди свое аниме
        </p>
      </div>

      <Routes>
        <Route path='/list' element={<List />}></Route>
      </Routes>

      <Button title='Начать смотреть'/>
    </div>
  )
}

export default HeroSection;
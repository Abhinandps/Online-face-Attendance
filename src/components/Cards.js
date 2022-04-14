import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id='features'>
      <h1>Face-Attendace® Awesome Features</h1>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Admin can easily track and know when they login or not.'
              label='Audit Log'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='The first Face Recoginition Attendance system that work 100%,you do not need to worry your data securley stored and backup.'
              label='100% Saftey'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='You do not need a special browser, just use any web browser on your device'
              label='Any Browser'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Admin can invites other users grant them access permission as needed.'
              label='Multi Users'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='You can start using the app right away to track our students attendance'
              label='Free'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

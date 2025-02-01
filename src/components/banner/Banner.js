import React from 'react'
import Button from '../common/Button';
import './Banner.css';

function Banner() {
  return (
    <div className='banner-main'>
      <h1 className='banner-text'>Connect your app to <br/>your users' wearables</h1>
      <Button text="Get started"/>
    </div>
  );
}

export default Banner

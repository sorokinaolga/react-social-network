
import React from 'react';
import preloader from '../../../assets/images/loading.svg';
import style from './Preloader.module.css';


const Preloader = () => {

  return <div className={style.preloader}>
    <img src={preloader} height='70' width='70' />
  </div>

}

export default Preloader;

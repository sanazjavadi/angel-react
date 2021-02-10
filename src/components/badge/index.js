import React from 'react';

//styles
import styles from './styles/badge.module.scss'

const Badege = ({ numberOfBasket }) => {

     return(
         <div className={styles.badge}>
             {numberOfBasket}
         </div>
     )
    
}

export default Badege
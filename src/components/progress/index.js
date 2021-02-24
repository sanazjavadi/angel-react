import React from 'react'

//styles
import styles from './styles/progress.module.scss'

function Progress({ percantage, allprice, payPrice }) {

  return (
    <div className={`d-flex align-items-center justify-content-between ${styles['progress-wrapper']}`}>
         <div className={styles.progress}>

<div className={styles['progress-done']} data-done="60" style={{ 'width': percantage }}>

</div>
</div>
      <div className={styles.price}>
     <span className="ml-3">{percantage}</span>      <span className={styles.pay}>حمایت شده</span> 
      </div>
 
   
    </div>
  )
}

export default Progress;

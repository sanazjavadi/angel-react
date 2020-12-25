import React from 'react'
import { useHistory } from "react-router-dom";

//styles
import Styles from './styles/NotFound.module.scss'

//components
import Button from  '../../components/Button'

function Notfound(props) {

    const history =useHistory()
    return (
      
            <div className={Styles.Notfound}>
               <div id={Styles.clouds}>
            <div className={`${Styles['cloud']} ${Styles.cloud_1}`}></div>
            <div className={`${Styles['cloud']} ${Styles.cloud_2}`}></div>
            <div className={`${Styles['cloud']} ${Styles.cloud_3}`}></div>
            <div className={`${Styles['cloud']} ${Styles.cloud_4}`} ></div>
            <div className={`${Styles['cloud']} ${Styles.cloud_5}`} ></div>
            <div className={`${Styles['cloud']} ${Styles.cloud_6}`} ></div>
        </div>
        <div className={Styles.error}>
            <div className={Styles._404}>۴۰۴</div>
           
            <div className={Styles.text}>متاسفانه صفحه مورد نظر یافت نشد</div>
         
         <div className="mt-5">
         <Button handleClick={() => history.push('/')}>بازگشت به صفحه قبلی</Button>
         </div>
           
        </div>
            </div>
       
    )
}



export default Notfound

import React, { memo } from 'react'

//styles
import Styles from './styles/Hero.module.scss'

const Index = memo(function Index(props) {
    return (
        <>
         <div className="row justify-content-center">
      <h2 className={`${Styles['hero-title']} text-center w-100`}>

          {props.children}
      </h2>
    </div>
    <div id={Styles.clouds1} className={Styles['clouds']}></div>
    <div id={Styles.clouds2} className={Styles['clouds']}></div>
            
        </>
    )
})

Index.propTypes = {
    
}

export default Index

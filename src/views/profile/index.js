import React from 'react'

//component
import Hero from '../../layouts/common/Hero'

//styles
import styles from './styles/Profile.module.scss'

function Profile(props) {
    

    return (
        <div>
            <Hero/>
             <section className={styles.profile}>
          <div className={styles.userInfo}>
 dddd
          </div>
             </section>
        </div>
    )
}

export default Profile;

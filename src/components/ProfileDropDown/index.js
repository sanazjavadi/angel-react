import React, { useState } from 'react'

//styles
import styles from './styles/profile.module.scss'

//assets
import ArrowDown from '../../svg/DownArrow'
import ArrowUp from '../../svg/UpArrow'

function Profile(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.profile} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.account}>
                <span>
                    حساب کاربری
               </span>
                {
                    isOpen ? <ArrowUp height="15" width="15" fill="#696478" className="mr-1 pb-1" /> :
                        <ArrowDown height="15" width="15" fill="#696478" className="mr-1 pt-1" />
                }


            </div>

            <ul className={styles.drop} style={isOpen ? { 'display': 'block' } : { 'display': 'none' }}>
                <li className="pt-4">
                    sanaz javadi
                    </li>

                <li className="pb-2 ">
                    sanaz.jvd72@gmai.com
                        </li>
                <li className="py-2">
                    آرزوها
                    </li>
                <li className="pt-2 pb-4">
                    خروج
                       </li>

            </ul>




        </div>
    )
}
export default Profile

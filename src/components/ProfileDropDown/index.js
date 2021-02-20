import React, { useState } from 'react'

//styles
import styles from './styles/profile.module.scss'

function Profile(props) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.profile} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.account}>
                حساب کاربری
              </div>
            { isOpen &&
                <ul className={styles.drop}>
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

            }


        </div>
    )
}
export default Profile

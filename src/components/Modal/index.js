import React from 'react'

//styles
import {  Modal } from "react-bootstrap";
import styles from "./styles/modal.module.scss"

 const ModalComp = ({ status, changeStatus, children })=>  {

    return (
        <Modal
       show={status}
       onHide={changeStatus}
       dialogClassName={styles["_modal"]}
        bsPrefix={styles["_modal"]}
     >
      <div className={`${styles["close-button"]} mt-2 mr-2`} onClick={changeStatus}>
        <span>
          x
          </span>
      </div>
      {children}
    </Modal>
    )
}

export default ModalComp
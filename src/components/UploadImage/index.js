import React from 'react'
import Dropzone from "react-dropzone";

//styles
import styles from './styles/uploadImage.module.scss'

//assets
import UploadSvg from '../../svg/Upload'

const UploadImage = ({ file }) => {
 const handleDrop= () => {
     
 }

    return (

        <Dropzone multiple={true}
            accept="image/*" onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (

                <div {...getRootProps({ className: `${styles.uploadArea} dropzone` })}>

                    <UploadSvg heigth="40" width="40" />
                  
                            <div className="mt-3">drag and drops your files or  browse</div>
                    

                    <input
                        {...getInputProps()}
                    />

                </div>

            )}
        </Dropzone>
    );

}


export default UploadImage
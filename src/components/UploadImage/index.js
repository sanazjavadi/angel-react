import React, { useState } from 'react'

//styles
import styles from './styles/uploadImage.module.scss'

//assets
import UploadSvg from '../../svg/Upload'

function UploadImage(props) {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const handleChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    }

    return (
        <>

            <label htmlFor="upload" className={styles.uploadArea}>

                <UploadSvg heigth="40" width="40" />
                <div className="mt-3">drag and drops your files or  browse</div>

            </label>
            <input type="file"
                id="upload"
                style={{ display: "none" }}
                onChange={handleChange} />
        </>
    )
}

export default UploadImage
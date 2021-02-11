import React from 'react'

//components
import Input from '../../../components/Input'
import Button from '../../../components/Button'

//styles
import styles from './styles/organization.module.scss'

//assets
import UploadSvg from '../../../svg/Upload'

export function Organization(props) {
    

    return (
        <div className={styles['org-sec']}>
             <p className="text-right pb-3 mt-5">
                 اگر میخواهید به عنوان یک سازمان با کمپین فرشته همکاری داشته باشید فرم زیر را تکمیل کنید 
             </p>

             <form className="mt-3 mx-auto d-flex flex-wrap">
                
             <div className={styles.rightForm}>
             <div className={`${styles['input-area']} mt-3`}>
                  <Input placeholder="نام سازمان*"/>
              </div>
              <div className={`${styles['input-area']} mt-3`}>
                  <Input placeholder="نام مدیر *"/>
              </div>
            
              
              <div className={`${styles['input-area']} mt-3`}>
                  <Input placeholder="شماره تلفن سازمان*"/>
              </div>
              <div className={`${styles['input-area']} mt-3`}>
                  <Input placeholder="شماره تلفن مدیر*"/>
              </div>
     
                <div className={`mt-3 mx-auto ${styles['text-area']}`}>
                <textarea
                    placeholder="  آدرس ...*"
                    rows="3"
                    className={styles['form-control']}
                  ></textarea>
              
                </div>
                <div className={`mt-3 mx-auto ${styles['text-area']}`}>
                <textarea
                    placeholder=" توضیح در مورد سازمان"
                    rows="2"
                    className={styles['form-control']}
                  ></textarea>
              
                </div>
             </div>
             <div className={`${styles.rightForm} d-flex flex-column align-items-center mt-3`}>

                
                     <div className={styles.uploadArea}>
                         <UploadSvg heigth="40" width="40" />
                         <div className="mt-3">drag and drops your files or  browse</div>
                     </div>
                     <span className="mt-3 mr-3 w-75 text-right">آپلود عکس کارت ملی *</span>
                     
                     <div className="w-75 mt-lg-auto mb-3 mt-4">
                     <Button  size="block">
                ارسال
                </Button>
                     </div>
                 </div>
           
             </form>

        </div>
    )
}

export default Organization

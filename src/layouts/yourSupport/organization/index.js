import React from 'react'
import { Formik } from 'formik';

//components
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import TextArea from '../../../components/TextArea'
import UploadImage from '../../../components/UploadImage'

//styles
import styles from './styles/organization.module.scss'


export function Organization(props) {


    return (
        <div className={styles['org-sec']}>
            <p className="text-right pb-3 mt-5">
                اگر میخواهید به عنوان یک سازمان با کمپین فرشته همکاری داشته باشید فرم زیر را تکمیل کنید
             </p>
            <Formik
                initialValues={{ file: null, orgName: '', managerName: '', orgTel: '', managerTel: '', address: '', desc: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.orgName) {
                        errors.orgName = 'نام سازمان را وارد کنید';
                    } else if (
                        values.orgName.length < 3 && values.orgName.length > 30
                    ) {
                        errors.orgName = 'نام سازمان معتبر نمیباشد';
                    }
                    else if (!values.managerName) {
                        errors.managerName = 'نام مدیر را وارد نمایید'
                    }
                    else if (!values.orgTel) {
                        errors.orgTel = 'شماره سازمان را وارد نمایید'
                    }
                    else if (!values.managerTel) {
                        errors.managerTel = 'شماره مدیر را وارد نمایید'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                 console.log(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <form className="mt-3 mx-auto d-flex flex-wrap" onSubmit={handleSubmit}>

                        <div className={styles.rightForm}>
                            <div className={`${styles['input-area']} mt-3`}>
                                <Input placeholder="نام سازمان*"
                                    name="orgName"
                                    value={values.orgName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.orgName && touched.orgName && errors.orgName}
                                />
                            </div>
                            <div className={`${styles['input-area']} mt-3`}>
                                <Input placeholder="نام مدیر *"
                                    name="managerName"
                                    value={values.managerName}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    error={errors.managerName && touched.managerName && errors.managerName}
                                />
                            </div>


                            <div className={`${styles['input-area']} mt-3`}>
                                <Input placeholder="شماره تلفن سازمان*"
                                    name="orgTel"
                                    value={values.orgTel} handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.orgTel && touched.orgTel && errors.orgTel}
                                />
                            </div>
                            <div className={`${styles['input-area']} mt-3`}>
                                <Input placeholder="شماره تلفن مدیر*"
                                    name="managerTel"
                                    value={values.managerTel}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange}
                                    error={errors.managerTel && touched.managerTel && errors.managerTel}
                                />
                            </div>

                            <div className={`mt-3 mx-auto ${styles['text-area']}`}>
                                <TextArea rows={3} placeholder="  آدرس ...*" name="address" value={values.address}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange} />
                            </div>
                            <div className={`mt-3 mx-auto ${styles['text-area']}`}>
                                <TextArea rows={2} placeholder=" توضیح در مورد سازمان"
                                name="desc"
                                    value={values.desc}
                                    handleBlur={handleBlur}
                                    handleChange={handleChange} />
                            </div>
                        </div>
                        <div className={`${styles.rightForm} d-flex flex-column align-items-center mt-3`}>
                            <UploadImage id="file" name="file" type="file" handleChange={(event) => {
                                setFieldValue("file", event.currentTarget.files[0])
                            }} file={values.file} />
                            <span className="mt-3 mr-3 w-75 text-right">آپلود عکس کارت ملی *</span>

                            <div className="w-75 mt-lg-auto mb-3 mt-4">
                                <Button size="block" type="submit" disabled={isSubmitting}>
                                    ارسال
                       </Button>
                            </div>
                        </div>

                    </form>
                )}
            </Formik>



        </div>
    )
}

export default Organization

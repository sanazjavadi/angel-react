
//styles
import styles from './styles/payProduct.module.scss'

//components
import Input from '../../components/Input'
import Button from '../../components/Button'

function PayProductCart({children, image, name, id}) {
    

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className={`d-flex flex-column align-items-center justify-content-center py-4 ${styles['product-cart']}`}>
    
                <img src={image} alt={name} className="img-fluid"/>
               <p className="mt-5 mb-0">برآورده کردن آرزوی {name}</p>
               <blockquote className="mb-0">{children}</blockquote>
               <span>مبلغ حمایت</span>
               <div className="w-50 my-3">
               <Input type="text" placeholder="به ریال وارد کنید" />
               </div>
               <div className="w-50 mb-3 mt-2">
               <textarea
                    placeholder=" یه چیز خوب اینجا بنویس :)"
                    rows="3"
                    className={`${styles['form-control']} `}
                  ></textarea>
               </div>
            
               <div className={styles['product-body']}>
                <span >پرداخت با</span>
            
            </div>
            <div className="w-50 my-4">
            <Button  size="block">
                پرداخت
                </Button>
            </div>
           
            </div>

         
            
        </div>
    )
}

export default PayProductCart;

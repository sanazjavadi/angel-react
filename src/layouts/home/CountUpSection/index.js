import React, { useEffect, useState } from 'react'

//styles
import Styles from './styles/CountUp.module.scss'

function CountUpSection(props) {

    const [count, setcount] = useState(0)

    const countUp = (start, end, duration ) => {
        const range = end - start
        let current = start
        const increment = end > start ? 1 : -1
        const stepTime = Math.abs(Math.floor(duration / range))
        const timer = setInterval(() => {
          current += increment
          // obj.innerHTML = current;
         setcount(current)
          if (current === end) {
            clearInterval(timer)
          }
        }, stepTime)
      }

    useEffect(()=> {
        setTimeout(countUp(0, 900, 2000), -100000);
        return()=> clearInterval()
    },[]
    
   
    )
    return (
        <section>
        <div className="container-fluid p-0">
          <div className={Styles['count-up']}>
            <h2 className="pb-4">
              تا الان
            </h2>
            <div className={Styles.counts}>
              <span>{count.toString()[0] }</span>
              <span>{count.toString()[1] }</span>
              <span>{count.toString()[2] }</span>
            </div>
    
            <h2 className="pt-4">
              آرزو برآورده شده
            </h2>
          </div>
        </div>
      </section>
    )
}



export default CountUpSection

import React from 'react'
import Image from 'next/image'
import cssStyle from "./hero.module.css"

const hero = () => {
  return (
    <div className={cssStyle.img}>
        
     <Image src = {"https://www.smartsight.in/wp-content/uploads/2021/09/NodeJS.jpg"}
   alt="pic"
   width={700}
   height={800} />
   
   


   <section className={cssStyle.hero}>
    <div className={cssStyle.content}>
      <h1>Welcome to my Website</h1>
   <p className= {cssStyle.content} >Hello, My name is Nimra. 
          This is my Next.js website.</p>

          <a href="#services" className={cssStyle.button}>Get Started</a>
    </div>

    </section>
    </div>
    
  )
}

export default hero

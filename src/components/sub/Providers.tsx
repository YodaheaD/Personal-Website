'use client'

import { FC, ReactNode } from 'react'
 /**
  * When you write a JSX expression with opening and closing tags, 
  * the content passed between them is referred to as their “child”.
  * //<Border> Hey, I represent the JSX children! </Border>
*/

interface ProvidersProps {
  children: ReactNode
}
// This component is for gaining access to children props.

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
      <>
        {children}
      </>
    )
  }
  
  export default Providers
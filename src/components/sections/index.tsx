import { title } from 'process'
import React, { PropsWithChildren } from 'react'

interface ISectionsProps {
  title: string
}

const BaseSections: React.FunctionComponent<
  PropsWithChildren<ISectionsProps>
> = ({ children, title }) => {
  return (
    <div>
      <div className='flex flex-row justify-center items-center'>
        <h2 className='text-3xl'>{title}</h2>
        <div className='border-[0.1px] w-1/4 border-white h-0' />
      </div>

      {children}
    </div>
  )
}

export default BaseSections

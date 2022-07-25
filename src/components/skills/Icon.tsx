import React from 'react'

const Icon = ({iconPath, iconName, styles }: {iconPath: string, iconName: string, styles:string}) => {

  return (
    <div 
        className={`flex items-center justify-center px-1 py-1 w-4/5 mt-6`}
    >
        <div className=' w-1/4 flex items-center justify-center'>
            <img 
              src={iconPath} 
              alt={iconName}
              className="w-8 h-8" 
            />
        </div>
        <div className={styles}>
            <p className='font-merri text-white text-[16px]'>{iconName}</p>
        </div>
    </div>
  )
}

export default Icon
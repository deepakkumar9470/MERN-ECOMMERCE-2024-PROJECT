import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {
  return (
    <div className='flex gap-4'>
  
        <div>
        <Skeleton width={300} height={200}/>
        <div className='flex justify-between'>
        <Skeleton width={160}/>
        <Skeleton width={80} className='mr-2'/>
        </div>
        <Skeleton width={150}/>
        <div className='flex gap-4 justify-between'>
        <Skeleton width={120}/>
        <Skeleton width={140}/>
        </div>
        </div>
        <div>
        <Skeleton width={300} height={200}/>
        <div className='flex justify-between'>
        <Skeleton width={160}/>
        <Skeleton width={80} className='mr-2'/>
        </div>
        <Skeleton width={150}/>
        <div className='flex gap-4 justify-between'>
        <Skeleton width={120}/>
        <Skeleton width={140}/>
        </div>
        </div>
        <div>
        <Skeleton width={300} height={200}/>
        <div className='flex justify-between'>
        <Skeleton width={160}/>
        <Skeleton width={80} className='mr-2'/>
        </div>
        <Skeleton width={150}/>
        <div className='flex gap-4 justify-between'>
        <Skeleton width={120}/>
        <Skeleton width={140}/>
        </div>
        </div>
        <div>
        <Skeleton width={300} height={200}/>
        <div className='flex justify-between'>
        <Skeleton width={160}/>
        <Skeleton width={80} className='mr-2'/>
        </div>
        <Skeleton width={150}/>
        <div className='flex gap-4 justify-between'>
        <Skeleton width={120}/>
        <Skeleton width={140}/>
        </div>
        </div>
       
    </div>
  )
}

export default Loader
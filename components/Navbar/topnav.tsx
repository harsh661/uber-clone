import Image from 'next/image'
import React from 'react'

const TopNav = () => {
    return (
        <div className='h-[60px] px-16 border-b-4 flex items-center'>
            <div className='flex items-center h-full'>
                <div className='w-36'>
                    <Image src={'/uber.svg'} alt='Uber' width={60} height={20} />
                </div>

                <div className='flex h-full items-center gap-2 px-4 pt-3 active'>
                    <Image src={'/car.svg'} alt='' width={18} height={18} />
                    <p className='text-sm font-medium'>Trip</p>
                </div>
            </div>
        </div>
    )
}

export default TopNav
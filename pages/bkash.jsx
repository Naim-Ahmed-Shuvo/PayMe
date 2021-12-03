import React from 'react'
import Image from 'next/image';
import bkashLogo from '../public/BKash-Icon-Logo.wine.svg';
import {useAppState} from '../overmind/overmind'

const Bkash = () => {
    const {text_color} = useAppState()
    return (
        <div className="flex xs:flex-col lg:flex-row xs:mt-5 xs:p-6 items-center shadow-lg justify-center">
           <div className="img">
                <Image src={bkashLogo} alt="bkash" width={200} height={200}/>
            </div> 
           <div className="text">
               <h5 className="xs:text-sm lg:text-base"> <span className={`${text_color}`}>BKash No:</span>  01755842748</h5>
               <p className="xs:text-center xs:mt-4 xs:text-xs text-red-500 lg:text-base">Thanks For Your Payment !!</p>
           </div>
        </div>
    )
}

export default Bkash

import React from 'react'
import Image from 'next/image';
import rocketLogo from '../public/rocket.png';
import {useAppState} from '../overmind/overmind'
import Link from "next/link";

//
const Rocket = () => {
    const {text_color} = useAppState()
    return (
       <>
        <div className="flex xs:flex-col lg:flex-row items-center shadow-lg justify-center p-10 xs:mt-5">
            
           <div className="img mr-6">
                <Image src={rocketLogo} alt="bkash" width={100} height={100}/>
            </div> 
           <div className="text">
               <h5 className="xs:text-sm xs:my-3 xs:text-center lg:text-base"> <span className={`${text_color}`}>Rocket No:</span>  01644011341</h5>
               <p className="text-red-500 xs:text-sm xs:text-center lg:text-base">Thanks For Your Payment !!</p>
           </div>
        </div>
      </>
    )
}

export default Rocket

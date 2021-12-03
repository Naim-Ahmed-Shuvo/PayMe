import React from 'react'
import Image from "next/image";
import dbblLogo from '../public/dutch-bangla-bank.png';
import { useAppState } from '../overmind/overmind';


const Dbbl = () => {
    const {text_color} = useAppState();

    //
    return (
        <div className="flex xs:flex-col lg:flex-row shadow-lg xs:mt-5 xs:p-3 items-center justify-center">
           <div className="img mr-5">
                <Image src={dbblLogo} alt="bkash" width={100} height={100}/>
            </div> 
           <div className="text p-3">
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base">Account Holder Name: Naim Ahmed <span className={`${text_color}`}>Shuvo</span></p>
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base">Account Number: 2901050000160</p>
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base">Branch Name: Meherpur</p>
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base"> Routing Number: 090570379</p>
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base">Bank SWIFT Code:	DBBLBDDH</p>
               <p className="xs:text-sm my-2 sm:text-sm md:text-sm lg:text-base">Country: Bangladesh</p>
               <p className="xs:text-center xs:mt-4 xs:text-xs text-red-500 lg:text-base">Thanks For Your Payment !!</p>
           </div>
        </div>
    )
}

export default Dbbl

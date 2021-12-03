import React from 'react';

import Nav from '../components/Nav';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import {BiArrowBack} from "react-icons/bi";
import { useAppState } from '../overmind/overmind';

const Layout = ({children}) => {
    const router = useRouter();
    const {text_color} = useAppState()
    
    return (
        <section className={` lg:w-3/6 min-w-min md:w-3/6 sm:w-3/6 xs:w-5/6 sm:mt-20 mt-36 mx-auto px-5 pb-5 sm:mb-10 rounded shadow`}>
        {/* <div>I am Nav</div> */}
        <Nav/>
       {/* <Cards/> */}
       {router.pathname!=="/" ? <Link href={`/`}><BiArrowBack className={`text-red-500 xs:mt-3`}/></Link>:''}
       {children}
   </section>
    );
};

export default Layout;
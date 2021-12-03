import React from 'react'
import bkashLogo from '../public/BKash-Icon-Logo.wine.svg';
import rocketLogo from '../public/rocket.png';
import dbblLogo from '../public/dutch-bangla-bank.png';
import Image from 'next/image';
import Link from 'next/link'
import { useAppState } from '../overmind/overmind';

const cardContent = [
    {
        img: bkashLogo,
        title: "Bkash",
        link:{
            title: "Pay with Bkash",
            href: "/bkash"
        }
    },
    {
        img: rocketLogo,
        title: "Rocket",
        link:{
            title: "Pay with Rocket",
            href: "/rocket"
        }
    },
    {
        img: dbblLogo,
        title: "DBBL",
        link:{
            title: "Pay with DBBL",
            href: "/dbbl"
        }
    },
]
const Cards = () => {
    const {text_color} = useAppState();

    //
    return (
        <div className="flex xs:flex-col sm:flex-col x-sm:flex-col md:flex-col lg:flex-row items-center justify-between py-9 sm:p-1">
            {cardContent.map((item)=>(

            <div className=" rounded-sm shadow-lg lg:p-20 md:p-16 xs:p-10 sm:p-14 xs:my-5 md:my-2 sm:my-4 lg:mx-1" key={item.title}>
                <div className="card_image">
                    <Image src={item.img} alt="bkashLogo" width={100} height={100} />
                </div>
                <div className="card_info text-center pt-5">
                    <h4 className={`text-lg font-sans ${text_color} mb-2`}>{item.title}</h4>
                    <Link href={item.link.href}>
                      <a><p className="hover:text-red-400 font-medium xs:w-full xs:block xs:text-xs">{item.link.title}</p></a>
                    </Link>
                </div>
            </div>
            ))}
           
        </div>
    )
}

export default Cards

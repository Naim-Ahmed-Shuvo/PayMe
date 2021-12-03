import React from 'react'
import {useAppState,useActions} from '../overmind/overmind'
const Nav = () => {

    const {count,bg,text_color} = useAppState();
    const actions = useActions();
    
    const handleClick = (color) => { 
      actions.setBgColor(color);
      
      console.log(bg);
    }

    return (
        <div className=" flex items-center justify-between  lg:p-5 sm:py-5 xs:py-2 md:p-5">
            <div >
              <h4 className={`font-mono font-semibold text-gray-900   xs:text-sm ${text_color}`}>Make My Payment</h4>
            </div>
            <div className="flex items-center">
                <div className="bg-green-500 inline-block rounded-full hover:cursor-poninter m-1" onClick={()=>{
                    handleClick('bg-green-500')
                    actions.setTextColor('text-green-500');
                }} style={{height: 15,width:15}}>
                </div>
                <div className="bg-red-500 inline-block rounded-full hover:cursor-poninter m-1" onClick={()=>{
                    handleClick('bg-red-500')
                    actions.setTextColor('text-red-500');
                }} style={{height: 15,width:15}}>
                </div>
                <div className="bg-yellow-500 inline-block rounded-full hover:cursor-poninter m-1" onClick={()=>{
                    handleClick('bg-yellow-500')
                    actions.setTextColor('text-yellow-500');
                }} style={{height: 15,width:15}}>
                </div>
                <div className="bg-purple-600 inline-block rounded-full hover:cursor-poninter m-1" onClick={()=>{
                    handleClick('bg-purple-600')
                    actions.setTextColor('text-purple-600')
                }} style={{height: 15,width:15}}>
                </div>
            </div>
        
    </div>
    )
}

export default Nav

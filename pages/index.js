import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useAppState,useActions} from '../overmind/overmind'
import Nav from '../components/Nav';
import Cards from '../components/Cards';

export default function Home() {
  const {count,bg,text_color} = useAppState();
  const actions = useActions();
  
  const handleClick = (color) => { 
    actions.setBgColor(color);
    
    console.log(bg);
  }
  return (
    <>
      <Head>
        <title>Make My Payment</title>
      </Head>
      <Cards/>
    </>
  )
}

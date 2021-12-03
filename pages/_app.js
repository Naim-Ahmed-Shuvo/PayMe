import Layout from '../layout/Layout'

import '../styles/globals.css'
import {Provider } from "overmind-react";
import app from "../overmind/overmind.js";



function MyApp({ Component, pageProps }) {
  
  
  return  <Provider value={app}>
      <Layout>    
         <Component {...pageProps} />
      </Layout>
  </Provider>
}

export default MyApp

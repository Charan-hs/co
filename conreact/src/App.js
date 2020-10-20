import React from 'react';
import './App.css';
import PostContact from './components/PostContact';
import { Provider } from 'react-redux';
import {store} from "./actions/store";
import SideMenu from './components/comp/sidemenu';
import {  Container} from '@material-ui/core';
import Header from './components/comp/header';
import ButterToast,{POS_TOP,POS_RIGHT} from 'butter-toast'; 



function App() {
 
  return (
    <Provider store={store}>
        <SideMenu />
        <Container maxWidth='lg' >
          <Header />
          {/* <PostContactForm/> */}
         <PostContact />
         <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}} />
         {/* <Edit /> */}
      </Container>
    </Provider>
  );
}

export default App;

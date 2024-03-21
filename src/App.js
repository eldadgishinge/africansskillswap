import React from 'react';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Share from './components/Share';
import Learn from './components/Learn';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Router>
      
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/learn" component={Learn}/>
        <Route path="/share" component={Share}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        
      </Switch>
    </Router>
      

    </>
  )
}
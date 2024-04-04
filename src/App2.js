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
import Login from './components/login';
import Logout from './components/logout';
import { gapi } from 'gapi-script';  
 const clientId = "307041883946-vsfbo0p3ovu0hf05v0fip465heb9mq8e.apps.googleusercontent.com"

export default function App2() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope :""
      })
    }
    gapi.load('client:auth2', start)
      })
  return (
    <>
    <Router>
      
      <Navbar/> 
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/learn" component={Learn}/>
        <Route path="/share" component={Share}/>
        <Route path="/contactus" component={ContactUs}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/Signin" component={Signin}/>
        
      </Switch>
    </Router>
    

      

    </>
  )
}
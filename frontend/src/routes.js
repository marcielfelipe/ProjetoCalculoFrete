import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Frete from './pages/Frete';

export default function Routes(){
    return(
        <BrowserRouter>
           <Switch>
               <Route path="/" exact component={Frete}/>
           </Switch>
        
        </BrowserRouter>
    );
}
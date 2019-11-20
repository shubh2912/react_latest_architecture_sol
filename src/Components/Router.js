import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Form from './Form';
import DisplayUsers from './displayUserList';


const Routes = () => {
    return <BrowserRouter>
        <div>
            <Route exact path="/" component={Form}></Route>
            <Route path="/list" component={DisplayUsers}></Route>
        </div>
    </BrowserRouter>
}

export default Routes;
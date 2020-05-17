import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CardBinder from './../CardBinder/CardBinder.component';
import PackPicker from '../PackPicker/PackPicker.component';
import NotFound from './../NotFound/NotFound.component';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={PackPicker}/>
            <Route path="/pack/:packId" component={CardBinder}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
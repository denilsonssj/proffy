import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeachrList';

function Routes() {
    return(
        <BrowserRouter> 
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/study" component={TeacherList} />
                <Route path="/give-classes" component={TeacherForm} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
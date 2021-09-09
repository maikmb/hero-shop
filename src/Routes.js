import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './pages/Home';
import ProductPage from './pages/Product';

export default function Routes() {
    return (
        <Router >
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/product/:productId">
                    <ProductPage />
                </Route>
            </Switch>
        </Router>
    )
}

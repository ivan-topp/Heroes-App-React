import React from 'react'
import { Navbar } from '../components/ui/NavBar'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exat path="/marvel" component={ MarvelScreen }/>
                    <Route exat path="/hero/:heroeId" component={ HeroScreen }/>
                    <Route exat path="/dc" component={ DcScreen }/>
                    <Route exat path="/search" component={ SearchScreen }/>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

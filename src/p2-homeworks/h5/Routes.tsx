import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Error404 from "./pages/Error/Error404";
import PreJunior from "./pages/PreJunior/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    JUNIOR_PLUS: "/junior+",
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
            <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>

            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;

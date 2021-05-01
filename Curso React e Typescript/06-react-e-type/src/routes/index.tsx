import { Switch } from "react-router";
import { useAuth } from "../contexts/auth";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import CustomRoute from "./Route";

// Propriedades das Rotas
// exact -> path exato, igual o nome.

export default function Routes() {
    const {signed} = useAuth();

    return (
        <Switch>
            <CustomRoute path="/dashboard" component={Dashboard} exact isPrivate signed={signed}/>
            <CustomRoute path="/" component={SignIn} isPrivate={false} signed={signed}/>
        </Switch>
    );
}
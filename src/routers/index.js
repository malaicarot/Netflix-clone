import Homepage from "../page/HomePage/Homepage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage"
import LoginPage from "../page/Authentication/LoginPage/LoginPage";
import SignupPage from "../page/Authentication/SignupPage/SignupPage";

export const publicRouters = [
    {path: '/login', component: LoginPage},
    {path: '/signup', component: SignupPage},
    {path: '/not-found', component: NotFoundPage}
]


export const privateRouters = [
    {path: '/', component: Homepage},
]
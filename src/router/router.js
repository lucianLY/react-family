import { Counter, Home, Visa, AdminLogin, TodoList } from '../view'

export  const  mainRouter = [
    {
        pathname: '/',
        exact: true,
        component: Home
    },
    {
        pathname: '/index',
        exact: true,
        component: Home
    },
    {
        pathname: '/visa',
        exact: false,
        component: Visa
    },
    {
        pathname: '/counter',
        exact: false,
        component: Counter
    },
    {
        pathname: '/login',
        exact: false,
        component: AdminLogin
    },
    {
        pathname: '/todolist',
        exact: false,
        component: TodoList
    },
]
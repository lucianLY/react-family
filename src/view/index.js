import Loadbble from "react-loadable"
import Loading from "component/Loading"

const TodoList = Loadbble({
    loader: () => import('./TodoList/TodoList'),
    loading: Loading,
    delay: 300
})

const Counter = Loadbble({
    loader: () => import('./Counter/Counter'),
    loading: Loading,
    delay: 300
})

const Home = Loadbble({
    loader: () => import('./Home/Home'),
    loading: Loading,
    delay: 300
})

const UserInfo = Loadbble({
    loader: () => import('./UserInfo/UserInfo'),
    loading: Loading,
    delay: 300
})

const Visa = Loadbble({
    loader: () => import('./Visa/Index'),
    loading: Loading,
    delay: 300
})

const Navigtion = Loadbble({
    loader: () => import('./Navigation/Navigation'),
    loading: Loading,
    delay: 300
})

const AdminLogin = Loadbble({
    loader: () => import('./Admin/login'),
    loading: Loading,
    delay: 300
})

export {
    Counter, Home, Navigtion, UserInfo, Visa, AdminLogin, TodoList
}
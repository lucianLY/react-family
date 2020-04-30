import Loadbble from "react-loadable"
import Loading from "component/Loading"

const Counter = Loadbble({
    loader: () => import('./Counter/Counter'),
    loading: Loading,
    delay: 300
})

const Home = Loadbble({
    loader: () => import('./Home/Home'),
    loading: Loading,
    delay: 300,
    timeout: 10000,
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

export {
    Counter, Home, Navigtion, UserInfo, Visa
}
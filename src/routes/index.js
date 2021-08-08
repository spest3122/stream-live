import Login from '../views/login'
import Lobby from '../views/lobby'
import Main from '../views/main'
import App from '../App'

const Routes = [
    {
        component: App, 
        routes: [
            {
                //直播大廳
                path: '/',
                exact: true,
                component: Lobby
            },
            {
                //直播主畫面
                path: '/main/:id',
                exact: true,
                component: Main
            },
            {
                //登入畫面
                path: '/login',
                exact: true,
                component: Login
            },
        ]
    }
]

export default Routes
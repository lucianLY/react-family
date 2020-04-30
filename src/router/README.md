## 路由
    前端路由的原理: 检测浏览器URL变化、截获URL地址然后进行匹配
    实现方式: hash-mode、html5-mode

### withRouter 组件    
    作用:
    默认情况下必须经过路由匹配渲染的组件才能纯在this.props，才拥有路由参数。
    执行 this.props.history.push('/home') 跳转到对应路由的页面，然后不是所有组件都直接与路由项链。
    当组件需要参与路由时，就可以给组件传入路由参数，将 react-router 的histoty\location\match
    传入到props对象上。
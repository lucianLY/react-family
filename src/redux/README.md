 ### Redux-connect 高阶组件

    Redux的connect负责把 React组件和Redux中的store链接起来
    connect([mapStateToProps],[mapDispatchToProps],[mergeProps],[options])
    --【connect 方法有4个参数，常用的是前面两个】
 
    mapStateToProps的作用是允许store中的数据作用在props绑定的组件上
    mapStateToProps 第一个参数 state: Redux 的sore 可以根据state的数据、动态输出到组件需要的最小属性
    mapStateToProps 第二个参数 ownProps: 组件自己的props 
 
    mapDispatchToProps的作用是将action作为props绑定到组件上
    直接第二个参数传递一个对象，这里面的对象就是actionCreators
    只要传入了actionCreators，在组件内就通过 this.props.actionCreators 来调用
    这样的话，在调用之后，那个actionCreators会自动帮你把它内部的action dispatch出去

#### 原理解析
    首先 connect之所以会成功是因为 Provider 组件：
    ~应用上报过了一层，使原来整个应用成为 Provider 的子组件
    ~接收Redux的store作为props，通过centext对象传递给子组件的connect

    connect是一个高阶函数，首先传入mapStateToProps\mapDispatchToProps然后返回一个生产Component的函数
    (wrapWithConnect),然后再将真正的Component作为参数传入WrapWithConnect这样就产生了包裹connect组件。
    * 通过props.store获取先祖Component的store
    * props包括stateProps、dispatchProps、parentProps 合并在一起得到nextState作为props传给真正的Component
    * componentDidMount时，添加时间 thisstore.subscribe( this.handlechange ) 实现见面交互
    * shouldCouponentUpdate 时判断是否有避免进行渲染，提升页面性能并得到 nextState
    * componentWillUnmount 时移除注册的时间 this.handleChange

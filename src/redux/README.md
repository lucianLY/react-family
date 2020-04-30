 **HOC 高阶组件**
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
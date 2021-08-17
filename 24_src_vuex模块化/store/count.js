
// 求和相关的配置
export default {
    namespaced:true,
    // 用于相应组件中的动作
    actions:{
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }},
    // 用于操作数据（state）
    mutations:{
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        }},
    // 用于存储数据
    state:{
        sum: 0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    // 用于将state中的数据进行加工
    getters:{
        bigSum(state){
            return state.sum*10
        }}
}
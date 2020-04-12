export default {
    countIncrease(state) {
        state.count++;
    },
    login(state, v) {
        state.userInfo = v;
    },
    setMemberInfo(state, v) {
        state.userStatus = v.userStatus;
        state.vipLevel = v.vipLevel;
    }
}
import AV from 'leancloud-storage';

const APP_ID = 'a9LoGqiGaA46Gt1fXMitwYHT-gzGzoHsz';
const APP_KEY = 'W0JvqFX9sOXQovUeO59Vc3SS';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV;


/*---------------------------------用户相关---------------------------------*/
/*---------------------------------注册---------------------------------*/
export function signUpRemote(username, password, email, successFn, errorFn) {
    let user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.setEmail(email)
    user.signUp().then(function(loginedUser) {
        //获取该user的实例
        let query = new AV.Query('_User')
        query.get(loginedUser.id).then(function(_user){
            //_user就是id为currentUser.id的实例对象
            _user.set('todoList',[])
            //为新的用户设置属性todolist的值为空数组
            _user.save().then(function(_user){
                //得到需要的_user中的内容
                let currentUser = getUserFromAVUser(_user)
                //回调执行
                successFn.call(null, currentUser)
            },function(error){
                console.error(error)
            })
        },function(error){
            console.error(error)
        })
    }, function(error) {
        errorFn.call(null, error)
    })
}
/*---------------------------------登入---------------------------------*/
export function signInRemote(username, password, successFn, errorFn) {
    AV.User.logIn(username, password).then(function(loginedUser) {
        //获取该user的实例
        let query = new AV.Query('_User')
        //_user就是id为loginedUser.id的实例对象
        query.get(loginedUser.id).then(function(_user){
            //获取_user中我们需要的数据
            let currentUser = getUserFromAVUser(_user)
            //执行回调
            successFn.call(null,currentUser)
        },function(error){
            console.error(error)
        })
    }, function(error) {
        errorFn.call(null, error)
    })
}
/*---------------------------------当前用户---------------------------------*/
export function getCurrentUser() {
    let user = AV.User.current()
    return user ? getUserFromAVUser(user) : null //getUserFromAVUser(user) => {id:xx,attr:xx}
}
/*---------------------------------登出---------------------------------*/
export function signOutRemote() {
    AV.User.logOut()
}
/*---------------------------------当前密码---------------------------------*/
export function sendPasswordResetEmail(email, successFn, errorFn) {
    AV.User.requestPasswordReset(email).then(function(success) {
        successFn.call()
    }, function(error) {
        errorFn.call()
    });
}
/*------------------------------获取有用的用户数据----------------------------*/
function getUserFromAVUser(AVUser) {
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}

/*---------------------------------用户相关---------------------------------*/



export function updataData(data) {
    if (getCurrentUser()) {
        //获取当前leanCloud中缓存的用户数据
        let cachingUser = getCurrentUser();
        //查询user实例
        let query = new AV.Query('_User');
        query.get(cachingUser.id).then(function(_user){
            //_user就是id为cachingUser.id下的实例对象
            _user.set('todoList',data)
            //将每一次操作变动的数据，保存到对应的_user实例中
            _user.save().then(function(_user){
                let currentUser = getUserFromAVUser(_user)
                console.log(currentUser)
            },function(error){
                console.error(error)
            })
        }, function(error){
            console.error(error);
        })
    }
}

export function getDataForMount(successFn) {
    //判断当前leanCloud端是否有缓存
    if (getCurrentUser()) {
        let cachingUser = getCurrentUser()
        let query = new AV.Query('_User');
        //获取当前的_user实例对象
        query.get(cachingUser.id).then(function(_user){
            let currentUser = getUserFromAVUser(_user)
            //执行回调
            successFn.call(null,currentUser)
        }, function(error){
            console.log(error)
        })
    }
}
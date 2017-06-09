var AV = require('leancloud-storage')

var APP_ID = 'a9LoGqiGaA46Gt1fXMitwYHT-gzGzoHsz';
var APP_KEY = 'W0JvqFX9sOXQovUeO59Vc3SS';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

// var TodoFolder = AV.Object.extend('TodoFolder');
// var todoFolder = new TodoFolder();
// // 设置名称
// todoFolder.set('name', '工作');
// // 设置优先级
// todoFolder.set('priority', 1);
// todoFolder.save().then(function(todo) {
//     console.log('objectId is ' + todo.id);
// }, function(error) {
//     console.error(error);
// });

/*---获取1---- */
// var query = new AV.Query('TodoFolder');
// query.get('5936dbc8fe88c20061e6f1a2').then(function(todo) {
//     var priority = todo.get('priority')
//     console.log(priority)
//     var objectId = todo.id
//     console.log(objectId)
// }, function(error) {
//     // 异常处理
// });

/*---获取2---- */
// var todo = AV.Object.createWithoutData('TodoFolder', '5936dbc8fe88c20061e6f1a2');
// todo.fetch().then(function() {
//     var title = todo.get('name'); // 读取 title
//     var content = todo.get('priority'); // 读取 content
//     console.log(title)
//     console.log(content)
// }, function(error) {
//     // 异常处理
// });

var TodoFolder = AV.Object.extend('TodoFolder');
var todoFolder = new TodoFolder;
todoFolder.id = '5936dbc8fe88c20061e6f1a2';
todoFolder.fetch().then(function(todo) {
    var priority = todo.get('priority')
    console.log(priority)
    todo.set('priority', 2)
    priority = todo.get('priority')
    console.log(priority)
}, function(error) {

})
import Mock from 'mockjs'

// 設置ajax请求2秒后再返回
Mock.setup({
    timeout: 2000
})

Mock.mock('/getTodos', {
    'list|1-5': [{
        'text': 'todo-item',
        'completed|1': true,
    }]
})
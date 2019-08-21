

// 此文件用来派发food页面的任务

const actionCreator = {
    // 获取分类，然后更新到文档中
    getCategories(list) {
        return {
            type: 'GET_CATEGORIES',
            list
        }

    },
    // 发送ajax请求获取分类
    getList() {
        return (dispatch) => {
            var url = "https://www.easy-mock.com/mock/5d12e0c00e92257276a5a749/App/food";
            fetch(url).then((res) => res.json()).then((res) => {
                dispatch(this.getCategories(res.data.categories));
            })
        }
    }
}

export default actionCreator;
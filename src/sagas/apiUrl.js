export const GET_CATEGORY_URL = 'http://localhost:3004/category';
export const GET_TASKS_URL = 'http://localhost:3004/todos';
export const GET_TASK_URL = (id) => (`http://localhost:3004/todos/${id}`);

export const convertObjectToQuery = (obj) => {
    var str = "";
    for (var key in obj) {
        str+='&'+key+'='+obj[key];
    }
    return str;
}

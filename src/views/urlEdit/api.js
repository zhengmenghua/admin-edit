import request from '@/common/utils/request';
export  function getUrlList(query){
   return request({
        url: '/demo/index/show',
        method: 'get',
        params: query
   })
}
export  function deleteUrl(query){
   return request({
        url: '/demo/index/delete',
        method: 'delete',
        params: query
   })
}
export  function addteUrl(data){
   return request({
        url: '/demo/index/add',
        method: 'post',
        data
   })
}
export  function updateteUrl(data){
   return request({
        url: '/demo/index/update',
        method: 'put',
        data
   })
}

const baseUrl = 'http://8.130.36.149:8008/api';


const request=(option={})=>{
	return new Promise((resolve,inject)=>{
		uni.request({
			url:baseUrl+option.url||'',
			method:option.type||'get',
			body:option.body||{},
			header:{au:uni.getStorageSync('token')}||{}
		})
		.then(res=>{
			resolve(res.data);
		})
		.catch(err=>{
			reject(err);
		})
	})
}

const get=(url,data,options={})=>{
    options.type='get';
    options.data = data;
    options.url = url;
    return request(options)
}
const post = (url, data, options = {}) => {
    options.type = 'post';
    options.data = data;
    options.url = url;
    return request(options)
}
const put = (url, data, options = {}) => {
    options.type = 'put';
    options.data = data;
    options.url = url;
    return request(options)
}
const del = (url, data, options = {}) => {
    options.type = 'delete';
    options.data = data;
    options.url = url;
    return request(options)
}
const requestShowToastSuccess=(msg)=>{
	uni.showToast({
		title: msg,
		icon: 'success',
		mask: true
	})
}
const requestShowToastError=(msg)=>{
	uni.showToast({
		title: msg,
		icon: 'error',
		mask: true
	})
}
export default {
    request,
    get,
    post,
    put,
		del,
    baseUrl,
	requestShowToastSuccess,
	requestShowToastError
}

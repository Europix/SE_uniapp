/**
 * 我的api
 */
const install = (Vue, vm) => {

	let myGet = (params = {}) => vm.$u.get('url', params);

	let myPost = (params = {}) => vm.$u.post('url', params);

	let myPut = (params = {}) => vm.$u.put('url', params);

	let myDelete = (params = {}) => vm.$u.delete('url', params);
	
	/**
	 * 注册
	 */
	let register = (params = {}) => vm.$u.post('/userManager/addApp', params);
	
	/**
	 * 登录
	 */
	let login = (params = {}) => vm.$u.post('/loginApp', params);

	/**
	 * 获取最新用户信息
	 */
	let userInfo = (params = {}) => vm.$u.get(`/userManager/get?${params}`);
	
	/**
	 * 修改资料 
	 */
	let updateUserInfo = (params = {}) => vm.$u.post(`/userManager/modApp`,params);
	
	/**
	 * 修改密码
	 */
	let updatePassword = (params = {}) => vm.$u.post(`/userManager/updatePwdApp`,params); 
	
	vm.$u.myApi = {
		register,  //注册
		login,  //登录
		userInfo,  //获取最新用户信息
		updateUserInfo,  //修改资料
		updatePassword,  //修改密码
	};

}

export default {
	install
}

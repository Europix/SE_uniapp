/**
 * 题海api
 */

const install = (Vue, vm) => {
	// this.$u.indexApi.indexGet().then()
	let indexGet = (params = {}) => vm.$u.get(`url`, params);
	
	let indexPost = (params = {}) => vm.$u.post(`url`, params);
	
	let indexPut = (params = {}) => vm.$u.put(`url`, params);
	
	let indexDelete = (params = {}) => vm.$u.delete(`url`, params);
	
	/**
	 * 私教列表
	  */
	let coachList = (params = {}, header = {}) => vm.$u.get(`/coach/page`,params,header);
	
	/**
	 * 团体课列表
	  */
	let courseList = (params = {}, header = {}) => vm.$u.get(`/course/page`,params,header);
	
	/**
	 * 器材列表
	 */
	let materialList = (params = {}, header = {}) => vm.$u.get(`/material/page`,params,header);
	
	/**
	 * 储值卡
	 */
	let cardList = (params={}, header = {}) => vm.$u.get(`/card/page`,params,header);
	
	/**
	 * 购买储值卡 
	 */
	let buyCard = (params={}, header = {}) => vm.$u.post(`/fee/addApp`,params,header);
	
	/**
	 * 储值订单 fee/page 这是充值记录
	 */
	let cardOrder = (params={}) => vm.$u.get(`/fee/page3App`,params);
	
	/**
	 * 预约 
	 */
	let book = (params={}, header = {}) => vm.$u.post(`/book/addApp`,params,header);
	
	/**
	 *  已预约
	 */
	let alreadyBook = (params={}, header = {}) => vm.$u.get(`/book/page2App`,params,header);
	
	/**
	 * 快开始的预约 
	 */
	let expireBook = (params={}) => vm.$u.get(`/book/page2App`, params);
	
	/**
	 * 取消预约 
	 */
	let cancelBook = (params={}) => vm.$u.post(`/book/delApp`, params);
	
	/**
	 * 私教,器材不可用时间 
	 */
	let notUseTime = (params={}) => vm.$u.get(`/book//page3App`, params);
	
	vm.$u.indexApi = {
		indexGet,
		indexPost,
		indexPut,
		indexDelete,
		coachList,  //私教列表
		courseList, //课程列表
		materialList,//器材列表
		cardList, //储值卡列表
		cardOrder, //储值订单
		buyCard, //购买储值卡
		book,  //预约
		alreadyBook,  //已预约
		expireBook,  //快开始的预约
		cancelBook, //取消预约
		notUseTime,  //私教,器材不可用时间
	};
	
}

export default {
	install
}

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
	 * 获取首页轮播图
	 */
	let getIndexBanner = (params = {}) => vm.$u.get(`/manage/dictionary/getListByClassification`, params);
	
	/**
	 * 获取试卷列表 
	*/
    let examPaper = (params = {}, header = {}) => vm.$u.post(`/manage/app-exam-paper/pages`, params, header);
	
	/** 
	 * 添加报名  --  答题报名管理后台接口
	 */
	let addApply = (params = {}) => vm.$u.post(`/manage/app-sign-up/create?lng=${params.lng}&lat=${params.lat}`, params.children);
	
	/**
	 * 已报名  --  试卷管理后台接口
	 */
	let alreadyApply = (params = {}, header = {}) => vm.$u.post(`/manage/app-exam-paper/mySignUp/pages`, params, header);
	
	/**
	 * 试卷详情  --  试卷管理后台接口
	 */
	let topicDetails = (params = {}) => vm.$u.get(`/manage/app-exam-paper/${params.id}`);
	
	/**
	 * 试卷详情（获取评论数量）  --  试卷评论管理后台接口
	*/
    let getTopicComment = (params = {}) => vm.$u.get(`/manage/app-exam-paper-comment/selectAsTree/${params.id}`);
	
	/**
	 * 试卷详情（获取评论列表）  --  试卷评论管理后台接口
	*/
    let getTopicCommentList = (params = {}, header={}) => vm.$u.post(`/manage/app-exam-paper-comment/pages`, params, header);
	
	/**
	 * 添加试卷评论  --  试卷评论管理后台接口
	*/
    let addTopicComment = (params = {}) => vm.$u.post(`/manage/app-exam-paper-comment/create`, params);
	
	/**
	 * 追加评论  --  试卷评论管理后台接口
	*/
	let createComment = (params = {}) => vm.$u.post(`/manage/app-exam-paper-comment/create`, params);
	
	/**
	 * 删除试卷评论  --  试卷评论管理后台接口
	*/
    let delCommentById = (params = {}) => vm.$u.delete(`/manage/app-exam-paper-comment/${params.ids}`);
	
	/**
	 * 试卷添加收藏  --  问题收藏记录管理后台接口
	*/
	let collectTopic = (params = {}) => vm.$u.post(`/manage/app-subject-bank-record/create`, params);
	
	/**
	 * 试卷取消收藏  --  问题收藏记录管理后台接口
	*/
    let cancelCollectTopic = (params = {}) => vm.$u.delete(`/manage/app-subject-bank-record/${params.ids}`);
	
	/** 
	 * 开始答题试卷  --  试卷评论管理后台接口
	 */
	let startWork = (params = {}) => vm.$u.get(`/manage/app-exam-paper/${params.id}`);
	
	/**
	 * 根据id查询奖品库  --  用户奖品库管理后台接口 
	*/
    let getPrizeById = (params = {}) => vm.$u.get(`/manage/app-award-warehouse/${params.id}`);
	
	/**
	 *  提交用户答题  --  用户题目结果管理后台接口
	*/
    let commitTopic = (params = {}) => vm.$u.post(`/manage/app-exam-result/create`, params)
	
	/**
	 *   查询答题结果  --   根据id查询用户题目结果
	*/
    let ResultById = (params = {}) => vm.$u.put(`/manage/app-sign-up/submitExamPaper/${params.examPaperId}`);
	
	vm.$u.indexApi = {
		indexGet,
		indexPost,
		indexPut,
		indexDelete,
		getIndexBanner,
		examPaper,
		addApply,
		alreadyApply,
		topicDetails,
		getTopicComment,
		getTopicCommentList,
		addTopicComment,
		createComment,
		delCommentById,
		collectTopic,
		cancelCollectTopic,
		startWork,
		getPrizeById,
		commitTopic,
		ResultById
	};
	
}

export default {
	install
}

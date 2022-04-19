/**
 * 我的api
 */
const install = (Vue, vm) => {

	let myGet = (params = {}) => vm.$u.get('url', params);

	let myPost = (params = {}) => vm.$u.post('url', params);

	let myPut = (params = {}) => vm.$u.put('url', params);

	let myDelete = (params = {}) => vm.$u.delete('url', params);

	/**
	 * 短信方式 注册、登录
	 */
	let login = (params = {}) => vm.$u.post('/login', params);

	/**
	 * 短信验证码
	 */
	let loginCode = (params = {}) => vm.$u.get('/manage/sms-code/sendSms', params);

	/**
	 * 获取最新用户信息
	 */
	let userInfo = (params = {}) => vm.$u.get('/manage/app-user-base/userInfo', params);

	/**
	 * 余额提现
	 */
	let withdraw = (params = {}) => vm.$u.post('/app-balance/withdrawal', params);

	/**
	 * 转换余额
	 */
	let exchangeBalance = (params = {}) => vm.$u.post('/app-balance/exchange-balance', params);

	/**
	 * 转换答币
	 */
	let exchangeAnswerCoin = (params = {}) => vm.$u.post('/app-balance/exchange-answer-coin', params);

	/**
	 * 充值 余额/充值答币/保证金
	 */
	let topUp = (params = {}) => vm.$u.get(`/recharge?${params}`);

	/**
	 * 获取充值记录
	 */
	let rechargeRecord = (params = {}) => vm.$u.get(`/recharge-records`);

	/**
	 * 出题荣誉列表
	 */
	let outHonor = (params = {}) => vm.$u.post('/manage/app-assign-honour/pages', params);

	/**
	 * 我的出题荣誉等级
	 */
	let getMyOutHonor = (params = {}) => vm.$u.get(`/recharge-records/${params.id}`);

	/**
	 * 答题荣誉列表
	 */
	let answerHonor = (params = {}) => vm.$u.post('/manage/app-exam-honour/pages', params);

	/**
	 * 我的答题荣誉等级
	 */
	let getMyAnswerHonor = (params = {}) => vm.$u.get(`/manage/app-exam-honour/${params.id}`);

	/**
	 * 获取我的店铺信息
	 * 
	 */
	let getMyShops = (params = {}) => vm.$u.get(`/app-shop/manage/info`);

	/**
	 * 根据店铺ID查询店铺
	 */
	let getIdShops = (params = {}) => vm.$u.get(`/app-shop/info/${params.id}`);

	/**
	 * 投诉
	 */
	let complaint = (params = {}) => vm.$u.post(`/manage/app-complain-record/create`, params);

	/**
	 * 添加店铺收藏
	 */
	let addShopsCollection = (params = {}) => vm.$u.post(`/app-shop/collect-record/create`, params);
	
	/**
	 * 取消店铺收藏
	 */
	let cancelShopsCollection = (params = {}) => vm.$u.delete(`/app-shop/collect-record/delete/${params.shopId}`);
	
	/**
	 * 我收藏的店铺记录
	 */
	let getCollectingShops = (params = {}, header = {}) => vm.$u.get(`/app-shop/collect-record/shop-list`,params,header);


	/**
	 * 获取收藏的题目
	 */
	let getCollectingTopic = (params = {}, header = {}) => vm.$u.post(`/manage/app-subject-bank-record/pages`,params,header);
	
	/**
	 * 取消收藏的题目
	 */
	let cancelCollectingTopic = (params = {}) => vm.$u.delete(`/manage/app-subject-bank-record/${params.id}`);
	
	/**
	 * 我的奖品记录
	 */
	let prizeRecord = (params = {}) => vm.$u.post(`/manage/app-exam-reward/pages`);
	
	/**
	 * 领取转账
	 */
	let walletReceive = (params = {}) => vm.$u.post(`/app-balance/transfer/receive?transferId=${params.transferId}`);
	
	/**
	 * 余额转账
	 */
	let walletTransfer = (params = {}) => vm.$u.post(`/app-balance/transfer?toUserId=${params.toUserId}&amount=${params.amount}`);

	/**
	 * 余额提现
	 */
	let walletWithdrawal = (params = {}) => vm.$u.post(`/app-balance/withdrawal`,params);
	
	/**
	 * 兑换余额
	 */
	let walletBalance = (params = {}) => vm.$u.post(`/app-balance/exchange-balance`,params);
	
	/**
	 * 兑换答币
	 */
	let walletAnswerCoin = (params = {}) => vm.$u.post(`/app-balance/exchange-answer-coin`,params);
	
	/**
	 * 协议1
	 */
	let getAgreement1 = (params = {}) => vm.$u.get(`/manage/dictionary/getSingleByClassification`,params);
	
	/**
	 * 协议2
	 */
	let getAgreement2 = (params = {}) => vm.$u.get(`/manage/dictionary/getListByClassification`,params);
	
	/**
	 * 搜索店铺
	 */
	let searchShop = (params = {}) => vm.$u.post(`/app-shop/pages`,params);
	
	/**
	 * 搜索商品列表
	 */
	let searchProducts = (params = {}, header = {}) => vm.$u.post(`/app-product/manage/pagesByName`,params,header);
	
	/**
	 * 方行智力-开始答题
	 */
	let createIQ = (params = {}, header = {}) => vm.$u.post(`/manage/app-iq-table/create`,params,header);
	
	/**
	 * 方行智力-提交答案
	 */
	let submitIQ = (params = {}, header = {}) => vm.$u.put(`/manage/app-iq-table/update/iqTableSubject/${params.id}`,params,header);
	
	/**
	 * 当前用户方行智力
	 */
	let userIQ = (params = {}, header = {}) => vm.$u.get(`/manage/app-iq-table/currentUser`,params,header);
	
	/**
	 * 设置 修改 支付密码
	 */
	let paymentCode = (params = {}) => vm.$u.put(`/manage/app-user-base/updatePayPassword/${params.password}`);
	
	/**
	 * 我的出题统计
	 */
	let myExamPaperStat = (params = {}) => vm.$u.get(`/manage/app-exam-paper/myExamPaperStat`,params);
	
	/**
	 * 我的答题统计
	 */
	let mySignUpStat = (params = {}) => vm.$u.get(`/manage/app-exam-paper/mySignUpStat`,params);
	
	/**
	 * PK答题统计
	 */
	let pkStat = (params = {}) => vm.$u.get(`/manage/app-subject-bank/pkStat`,params);
	
	/**
	 * 我的出题统计：收入、付出答币 发放奖品 获得粉丝数
	 */
	let examPaperStat = (params = {}) => vm.$u.get(`/manage/app-exam-paper/myStat`,params);
	
	/**
	 * 更新我的信息
	 */
	let updateUserInfo = (params = {}) => vm.$u.put(`/manage/app-user-base/update`,params);
	
	
	
	vm.$u.myApi = {
		login,
		loginCode,
		userInfo,
		withdraw,
		exchangeBalance,
		exchangeAnswerCoin,
		topUp,
		rechargeRecord,
		outHonor,
		getMyOutHonor,
		answerHonor,
		getMyAnswerHonor,
		getMyShops,
		getIdShops,
		complaint,
		getCollectingShops,
		getCollectingTopic,
		addShopsCollection,
		cancelShopsCollection,
		prizeRecord,
		walletReceive,
		walletTransfer,
		walletWithdrawal,
		walletBalance,
		walletAnswerCoin,
		getAgreement1,
		getAgreement2,
		cancelCollectingTopic,
		searchShop,
		searchProducts,
		createIQ,
		submitIQ,
		userIQ,
		paymentCode,
		myExamPaperStat,
		mySignUpStat,
		pkStat,
		examPaperStat,
		updateUserInfo
	};

}

export default {
	install
}
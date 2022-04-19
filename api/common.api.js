/**
 * 公共api
 */
const install = (Vue, vm) => {

	/**
	 * 根据字典类型获取admin字典列表
	 */
	let dictAdmin = (params = {}) => vm.$u.get(`/manage/dictionary/admin?dictType=${params.dictType}`);

	/**
	 * 删除字典数据
	 */
	let dictDel = (params = {}) => vm.$u.get(`/manage/dictionary/delete?id=${params.id}`);
	
	/**
	 * 删除单个字典项
	 */
	let dictDelOne = (params = {}) => vm.$u.get(`/manage/dictionary/delete-dictionaryitem?id=${params.id}`);
	
	/**
	 * 字典类型值获取多个字典项
	 */
	let dictGetList = (params = {}) => vm.$u.get(`/manage/dictionary/getListByClassification?dictionaryClassification=${params.dictionaryClassification}`);
	
	/**
	 * 字典类型值获取多个字典项（获取用户自身）
	 */
	let dictGetListByUser = (params = {}) => vm.$u.get(`/manage/dictionary/getListByUserIdAndClassification?dictionaryClassification=${params.dictionaryClassification}&userId=${params.userId}`);
	
	/**
	 * 字典类型值获取单个字典项
	 */
	let dictGetSingle = (params = {}) => vm.$u.get(`/manage/dictionary/getSingleByClassification?dictionaryClassification=${params.dictionaryClassification}&userId=${params.userId}`);
	
	/**
	 * 字典类型值获取单个字典项（获取用户自身）
	 */
	let dictGetSingleByUser = (params = {}) => vm.$u.get(`/manage/dictionary/getSingleByUserIdAndClassification?dictionaryClassification=${params.dictionaryClassification}&userId=${params.userId}`);
	
	/**
	 * 保存多项字典
	 */
	const dictSaveList = (params = {}) => vm.$u.post(`/manage/dictionary/saveorupdate-list`, params);
	
	/**
	 * 保存单项字典
	 */
	const dictSaveSingle = (params = {}) => vm.$u.post(`/manage/dictionary/saveorupdate-single`, params);
	
	vm.$u.commonApi = {
		dictAdmin,
		dictDel,
		dictDelOne,
		dictGetList,
		dictGetListByUser,
		dictGetSingle,
		dictGetSingleByUser,
		dictSaveList,
		dictSaveSingle,
	};

}

export default {
	install
}

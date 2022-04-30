export default ()=>{
	let userInfo = uni.getStorageSync('userInfo');
	if(userInfo){
		return true;
	}else{
		return false;
	}
}
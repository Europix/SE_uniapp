// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token变量
const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		
		//#ifdef APP-PLUS
		baseUrl: (process.env.NODE_ENV === 'development' ? 'http://180.76.154.60:8080/gymnasium' : 'http://180.76.154.60:8080/gymnasium'),
		//#endif
		
		//#ifdef H5
		baseUrl: (process.env.NODE_ENV === 'development' ? 'http://180.76.154.60:8080/gymnasium' : 'http://180.76.154.60:8080/gymnasium'),
		//#endif
		
		loadingText: '请求中...',
		loadingTime: 200,
		loadingMask: true,
		// 配置请求头信息
		header: {
			'content-type': 'application/json;charset=UTF-8'
		},
	});

	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// 引用token
		// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式
		// 见：https://uviewui.com/components/globalVariable.html
		// config.header.token = vm.token;

		// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
		// config.header.token = vm.$store.state.token;

		// 方式三，如果token放在了globalData，通过getApp().globalData获取
		// config.header.token = getApp().globalData.username;

		// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的
		// 所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		const token = uni.getStorageSync('XSessionId');
		config.header['X-SessionId'] = token;

		// 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
		// if(config.url == '/user/login') config.header.noToken = true;
		// 最后需要将config进行return
		return config;
		// 如果return一个false值，则会取消本次请求
		// if(config.url == '/user/rest') return false; // 取消某次请求
	}

	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {

		console.log('响应拦截:', res)

		if (res.success) {
			// res为服务端返回值，可能有code,result,datas等字段
			// 这里对res.datas进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
			// 如果配置了originalData为true，请留意这里的返回值
			return res.datas;
		} else {
			vm.$u.toast(res.msg);
			return false;
		}
		
	}
}

export default {
	install
}

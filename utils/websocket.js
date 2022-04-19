class socketIO {
	constructor(data, time, url) {
		this.socketTask = null
		this.is_open_socket = false //避免重复连接
		this.url = 'wss://dev.wenleda.com/websocket' //连接地址
		this.data = data ? data : null
		this.connectNum = 1 // 重连次数
		this.traderDetailIndex = 100 // traderDetailIndex ==2 重连
		this.accountStateIndex = 100 // traderDetailIndex ==1 重连
		this.followFlake = false // traderDetailIndex == true 重连
		//心跳检测
		this.timeout = time ? time : 15000 //多少秒执行检测
		this.heartbeatInterval = null //检测服务器端是否还活着
		this.reconnectTimeOut = null //重连之后多久再次重连
	}

	// 进入这个页面的时候创建websocket连接【整个页面随时使用】
	connectSocketInit(data) {
		this.data = data
		this.socketTask = uni.connectSocket({
			url: this.url,
			success: () => {
				console.log("正准备建立websocket中...");
				// 返回实例
				return this.socketTask
			},
		});
		this.socketTask.onOpen((res) => {
			this.connectNum = 1
			console.log("WebSocket连接正常！");
			this.send(data)
			console.log("WebSocket用户登录成功！");
			clearInterval(this.reconnectTimeOut)
			clearInterval(this.heartbeatInterval)
			this.is_open_socket = true;
			this.start(data);
			// 注：只有连接正常打开中 ，才能正常收到消息
			this.socketTask.onMessage((e) => {
				let res = JSON.parse(e.data);
				if(res.msgType !== 'ping'){
					console.log("WebSocket推送的消息！", res) // 这里 查看 推送过来的消息
					uni.$emit('getPositonsOrder', res);
				}
			});
		})
		// 监听连接失败，如果服务器关闭后，和下面的onclose方法一起发起重连操作，这样会导致重复连接
		uni.onSocketError((res) => {
			console.log('WebSocket连接打开失败，请检查！');
			this.socketTask = null
			this.is_open_socket = false;
			clearInterval(this.heartbeatInterval)
			clearInterval(this.reconnectTimeOut)
			uni.$off('getPositonsOrder')
			if (this.connectNum < 6) {
				console.log(`WebSocket连接失败，正尝试第${this.connectNum}次连接`);
				this.reconnect();
				this.connectNum += 1
			} else {
				uni.$emit('connectError');
				this.connectNum = 1
			}

		});
		// 这里仅是事件监听【如果socket关闭了会执行】
		this.socketTask.onClose(() => {
			console.log("WebSocket已经被关闭了！")
			clearInterval(this.heartbeatInterval)
			clearInterval(this.reconnectTimeOut)
			this.is_open_socket = false;
			this.socketTask = null
			uni.$off('getPositonsOrder')
			if (this.connectNum < 6) {
				this.reconnect();
			} else {
				uni.$emit('connectError');
				this.connectNum = 1
			}

		})
	}
	// 主动关闭socket连接
	Close() {
		if (!this.is_open_socket) {
			return
		}
		this.socketTask.close({
			success() {
				console.log('SocketTask关闭成功！')
			}
		});
	}
	//发送消息
	send(data) {
		// console.log("发送WebScoket消息！", data);
		// 注：只有连接正常打开中 ，才能正常成功发送消息
		if (this.socketTask) {
			this.socketTask.send({
				data: JSON.stringify(data),
				async success() {
					console.log("WebScoket消息发送成功！");
				},
			});
		}
	}
	//开启心跳检测
	start(data) {
		this.heartbeatInterval = setInterval(() => {
			this.send({"msgType":"ping","from": data.from,"time":new Date().getTime()});
		}, this.timeout)
	}
	//重新连接
	reconnect() {
		//停止发送心跳
		clearInterval(this.heartbeatInterval)
		//如果不是人为关闭的话，进行重连
		if (!this.is_open_socket && (this.traderDetailIndex == 2 || this.accountStateIndex == 0 || this
				.followFlake)) {
			this.reconnectTimeOut = setInterval(() => {
				this.connectSocketInit(this.data);
			}, 5000)
		}
	}
}

module.exports = socketIO

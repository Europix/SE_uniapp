export default (filePath,baseUrl) => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: baseUrl+'/manage/upload-image/resetHeadPortrait',
			filePath,
			name: 'pic',
			header: {
				'X-SessionId': uni.getStorageSync('XSessionId')
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes);
				if (uploadFileRes.statusCode == 200) {
					let _uploadFileRes = JSON.parse(uploadFileRes.data);
					if (_uploadFileRes.success) {
						resolve(_uploadFileRes.datas);
					} else {
						uni.showToast({
							title: _uploadFileRes.msg,
							icon: 'none'
						});
						reject(_uploadFileRes)
					}
				}
			}
		});
	})
}

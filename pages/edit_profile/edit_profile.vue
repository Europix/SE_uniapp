<template>
	<view class="wrap">
		<u-navbar title="编辑资料" title-color="#000000" title-size="32" back-icon-size="40" back-icon-color="#000000"
			back-icon-name="arrow-left" :border-bottom="false">
		</u-navbar>
		
		<view class="avatar" @click="setAvatar">
			<u-avatar :src="userInfo.avatar" size="120" mode="square"></u-avatar>
		</view>
		
		<view class="row">
			<view class="name">名称</view>
			<u-input v-model="userInfo.name" height="90" placeholder="请输入名称" maxlength="6" />
		</view>
		
		<view class="row">
			<view class="name">昵称</view>
			<u-input v-model="userInfo.nickName" height="90" placeholder="请输入昵称" maxlength="6" />
		</view>
		
		<view class="row">
			<view class="name">性别</view>
			<view class="radio">
				<view :class="['radio_item',userInfo.sex === 1 ? 'radio_item_s' : '']" @click="setSex(1)">男</view>
				<view :class="['radio_item',userInfo.sex === 2 ? 'radio_item_s' : '']" @click="setSex(2)">女</view>
			</view>
		</view>

		<view class="row" @click="showBirthday = true">
			<view class="name">生日</view>
			<view class="text">{{userInfo.birthday}}</view>
		</view>

		<view class="row" @click="showRegion = true">
			<view class="name">所在地</view>
			<view class="text">{{userInfo.region}}</view>
		</view>

		<view class="row">
			<view class="name">个性签名</view>
			<u-input v-model="userInfo.mark" height="90" placeholder="请输入个性签名" maxlength="30"/>
		</view>

		<u-picker mode="time" v-model="showBirthday" :safe-area-inset-bottom="true" confirm-color="#FF5B5B"
			@confirm="setBirthday"></u-picker>

		<u-picker mode="region" v-model="showRegion" :safe-area-inset-bottom="true" confirm-color="#FF5B5B"
			@confirm="setRegion"></u-picker>

		<view class="confirm" @click="setUserInfo">提交修改</view>
	</view>
</template>

<script>
	// import fnUploadFile from '@/api/uploadFile.js' //单图片视频上传方法
	export default {
		data() {
			return {
				baseUrl: getApp().globalData.baseUrl,
				showBirthday: false,
				showRegion: false,
				userInfo: {
					avatar: '',
					name: '',
					nickName: '',
					sex: 1,
					birthday: '',
					region: '',
					mark: ''
				}
			};
		},
		onLoad() {
			// this.getUserInfo()
		},
		methods: {
			getUserInfo() {},
			setAvatar(){
				uni.chooseImage({
					count: 1, //默认1
					// sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success:(res)=> {
						let imgFile = res.tempFilePaths;
						fnUploadFile(imgFile[0], this.baseUrl).then((res) => {
							const imageSrc = this.baseUrl +
								'/manage/upload-image/getImage?id=' + res.id;
							this.$set(this.userInfo,'avatar',imageSrc);
						})
					}
				});
			},
			setSex(type) {
				this.userInfo.sex = type
			},
			setBirthday({
				year,
				month,
				day
			}) {
				this.userInfo.birthday = `${year}-${month}-${day}`
			},
			setRegion({
				province,
				city,
				area
			}) {
				this.userInfo.region = `${province.label}-${city.label}-${area.label}`
			},
			setUserInfo() {
				
					uni.showToast({
						duration: 1000,
						title: '设置成功',
						icon: 'none'
					})
					setTimeout(()=>{
						uni.navigateBack({})
					},500)
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		background-color: #FFFFFF;

		.avatar {
			width: 120rpx;
			height: 120rpx;
			margin: 60rpx auto;
		}

		.row {
			display: flex;
			align-items: center;
			height: 90rpx;
			margin: 0rpx 30rpx;
			border-bottom: 1rpx solid rgba(210, 210, 210, 0.4);
			line-height: 1;

			.name {
				width: 120rpx;
				color: #929292;
				font-size: 28rpx;
				font-weight: 400;
				margin-right: 20rpx;
			}

			.text {
				color: #000000;
				font-size: 28rpx;
				font-weight: 400;
			}

			.radio {
				display: flex;

				.radio_item {
					width: 72rpx;
					height: 36rpx;
					background: #F5F5F5;
					border-radius: 8rpx;
					text-align: center;
					line-height: 36rpx;
					color: #000000;
					font-size: 28rpx;
					font-weight: 400;
					margin-right: 20rpx;

					&:last-child {
						margin-right: 0rpx;
					}
				}

				.radio_item_s {
					color: #FFFFFF;
					background: #ffb600;
				}
			}
		}

		.confirm {
			width: 690rpx;
			height: 80rpx;
			background: #ffb600;
			border-radius: 40rpx;
			text-align: center;
			line-height: 80rpx;
			color: #FFFFFF;
			font-size: 32rpx;
			font-weight: 400;
			position: fixed;
			left: 30rpx;
			right: 30rpx;
			bottom: 100rpx;
		}

	}
</style>

<template>
	<view class="wrap">
		<u-navbar title="购卡详情" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<view class="detail">
			<image :src="details.cardImg"></image>
			<view class="title"><text class="label">名称：</text>{{details.name}}</view>
			<view class="time"><text class="label">时间：</text>{{details.time}}</view>
			<view class="price"><text class="label">价格：</text>￥{{details.price}}</view>
			<image :src="details.img"></image>
			<view class="describe">{{details.describe}}</view>
		</view>
		<view class="card-detail">
			
		</view>
		<view class="foot">
			<u-button class="paybtn" shape="square" @click="showPop(true)">前去支付</u-button>
		</view>
		<u-keyboard
			default=""
			ref="uKeyboard" 
			mode="number" 
			:mask="true" 
			:mask-close-able="false"
			:dot-enabled="false" 
			v-model="show"
			:safe-area-inset-bottom="true"
			:tooltip="false"
			@change="onChange"
			@backspace="onBackspace">
			<view>
				<view class="u-text-center u-padding-20 money">
					<text>{{details.price}}</text>
					<text class="u-font-20 u-padding-left-10">元</text>
					<view class="u-padding-10 close" data-flag="false" @tap="showPop(false)">
						<u-icon name="close" color="#333333" size="28"></u-icon>
					</view>
				</view>
				<view class="u-flex u-row-center">
					<u-message-input 
						mode="box" 
						:maxlength="6"
						:dot-fill="true"
						v-model="password"
						:disabled-keyboard="true"
						@finish="finish"
					></u-message-input>
				</view>
				<view class="u-text-center u-padding-top-10 u-padding-bottom-20 tips">支付键盘</view>
			</view>
		</u-keyboard>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				show:false,
				password:'',
				details: {
					cardImg: '/static/card/halfyear.jpg',
					name: '半年健身卡',
					time: '半年',
					price: '698',
					img: '/static/swiper/swiper2.png',
					describe: '健身俱乐部是一所集健身、游泳、运动为一体的综合运动场馆，占地4000平米，场内具备有氧器械40余台、力量器械20余台、500平超大恒温泳池、篮球场、mini足球场、乒乓球场、羽毛球场共计20余块，满足您各种类型的运动需求。本俱乐部现开设有：瑜珈、有氧拉丁、有氧健身操、搏击操、踏板操、普拉提及腰腹练习与课程。希望我们可以给您一个健康的身体，完美的身材。'
				}
			}
		},
		methods: {
			onChange(val){
				if(this.password.length<6){
					this.password += val;
				}
				
				if(this.password.length>=6){
					this.pay();
				}
			},
			onBackspace(e){
				if(this.password.length>0){
					this.password = this.password.substring(0,this.password.length-1);
				}
			},
			pay(){
				uni.showLoading({
					title:'支付中'
				})
				
				setTimeout(()=>{
					uni.hideLoading();
					this.show = false;
					uni.showToast({
						icon:'success',
						title:'支付成功'
					})
				},2000);
			},
			showPop(flag = true){
				this.password = '';
				this.show = flag;
			},
			finish(){
				console.log(11111)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		box-sizing: border-box;
		background-color: #F5F5F5;
		padding-bottom: 100rpx;
		.detail{
			margin: 20rpx;
			&>image{
				width: 100%;
				height: 300rpx;
				border-radius: 10px;
			}
			.title{
				// color: #004d86;
				// font-weight: bold;
				// font-size: 36rpx;
				margin: 10rpx 0;
			}
			.time{
				margin: 10rpx 0;
				// color: #999999;
				// font-size: 26rpx;
			}
			.price{
				margin: 10rpx 0;
				// color: #ffb600;
				// font-weight: bold;
				// font-size: 30rpx;
			}
			.describe{
				text-indent: 54rpx;
				line-height: 60rpx;
			}
			.label{
				color: #999999;
			}
		}
		.foot{
			width: 100%;
			height: 100rpx;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			left: 0;
			.paybtn{
				width: 90%;
				margin: 10rpx auto;
				border-radius: 50rpx;
				background-color: #ffb600;
				color: #FFFFFF;
				border-color: #ffb600;
			}
		}
		.money{
			font-size: 80rpx;
			color: $u-type-warning;
			position: relative;
			
			.close{
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				line-height: 28rpx;
				font-size: 28rpx;
			}
		}
		.tips{
			color:$u-tips-color;
		}
	}
</style>

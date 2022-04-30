<template>
	<view class="wrap">
		<u-navbar title="充值中心" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<!-- 会员卡 -->
		<view class="card_con clearfix">
			<view class="card_title">会员卡</view>
			<view class="card_item" v-for="(item, index) in card" @click="toDetails('card')">
				<image :src="image" v-if="item.type=='年卡'"></image>
				<image :src="image1" v-else-if="item.type=='月卡'"></image>
				<image :src="image2" v-else-if="item.type=='游泳卡'"></image>
				<image :src="image3" v-else-if="item.type=='团体课卡'"></image>
				<image :src="image4" v-else-if="item.type=='私教卡'"></image>
				<view class="name">{{item.type}}</view>
				<view class="time">{{item.startdate}}~{{item.enddate}}</view>
				<view class="remark">{{item.remark}}</view>
				<view class="price_order clearfix">
					<text class="price">￥{{item.fee}}</text>
					<u-button size="mini" class="order" ref="order" @click="order(true, item, index)">立即购买</u-button>
				</view>
			</view>
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
			:disabled-keyboard="true"
			@change="onChange"
			@backspace="onBackspace">
			<view>
				<view class="u-text-center u-padding-20 money">
					<text>{{details.fee}}</text>
					<text class="u-font-20 u-padding-left-10">元</text>
					<view class="u-padding-10 close" data-flag="false" @tap="order(false)">
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
				image: '/static/card/year.jpg',  //年卡图片
				image1: '/static/card/halfyear.jpg',  //年卡图片
				image2: '/static/card/youyong.jpg',  //游泳卡图片
				image3: '/static/card/jezz.jpg',  //团体课卡图片
				image4: '/static/card/quanji.jpg',  //团体课卡图片
				card: [],
				show:false,
				password:'',
				details: {
					  "id": 3,
					  "type": "年卡",
					  "startdate": "2022-04-11",
					  "enddate": "2022-04-30",
					  "fee": "1200",
					  "remark": "这是一个年卡",
					  "createtime": "2022-04-10 08:37:52.0"
				}
			}
		},
		onLoad() {
			this.getCardList()
		},
		methods: {
			/* 网络请求 */
			getCardList(){
				let _this = this;
				_this.$u.indexApi.cardList({},{}).then( res => {
					console.log(res)
					_this.card = res.data.rows
				})
			},
			/* 订单支付 */
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
				//调用支付接口
				this.$u.indexApi.buyCard({
					type: this.details.type,
					cardid: this.details.id,
					fee: this.details.fee
				},{}).then( res => {
					uni.hideLoading();
					this.show = false;
					uni.showToast({
						icon:'success',
						title:'支付成功'
					})
				})
				
			},
			order(flag = true, item, index){
				this.password = '';
				this.show = flag;
				this.details = item
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
		.card_con{
			padding: 20rpx;
			.card_title{
				color: #004d86;
				font-weight: bold;
				font-size: 36rpx;
				margin-bottom: 20rpx;
			}
			.card_item{
				width: calc(50% - 12rpx);
				float: left;
				background-color: #FFFFFF;
				border-radius: 20rpx;
				overflow: hidden;
				margin-bottom: 20rpx;
				&:nth-child(2n+1){
					margin-left: 20rpx;
				}
				&>image{
					width: 100%;
					height: 200rpx;
				}
				.name{
					padding: 0 20rpx 16rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
				.time,.remark{
					padding: 0 20rpx;
					color: #999999;
					font-size: 22rpx;
				}
				.remark{
					margin-top: 10rpx;
					height: 40rpx;
					overflow:hidden;
					text-overflow:ellipsis;
					white-space:nowrap
				}
				.price_order{
					padding: 16rpx 20rpx 20rpx;
					
					.price{
						float: right;
						margin-top: 6rpx;
						color: #ffb600;
						font-weight: bold;
					}
					.order{
						margin-right: 0;
						border: 1rpx solid #ffb600;
						color: #ffb600;
						background-color: #FFFFFF;
					}
				}
				
			}
		}
		
	}
	.clearfix{
		*zoom: 1;
	}
	
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
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
</style>

<template>
	<view class="wrap">
		<u-navbar title="设置" title-color="#000000" title-size="32" back-icon-size="40" back-icon-color="#000000"
			back-icon-name="arrow-left" :border-bottom="false">
		</u-navbar>
		<u-cell-group :border="false">
			<u-cell-item :title="item" :title-style="titleStyle" v-for="(item,index) in list" :key="index" :index="index" @click="clickCell"></u-cell-item>
			<u-cell-item title="退出登录" :title-style="titleStyle" @click="loginOut"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				titleStyle:{
					'font-size':'28rpx',
					'color':'#000000'
				},
				list:[
					'编辑资料',
					'修改密码',
				]
			};
		},
		methods:{
			clickCell(index){
				let url = '';
				switch(index){
					case 0:
						url = '/pages/edit_profile/edit_profile'
						break;
					case 1:
						url = '/pages/change_password/change_password'
						break;
				}
				
				uni.navigateTo({url});
			},
			loginOut(){
				uni.showModal({
				    title: '提示',
				    content: '您确定要退出登录吗？',
					confirmColor: '#FA473F',
				    success: (res)=> {
				        if (res.confirm) {
							uni.switchTab({
								url:'/pages/index/index'
							})
				        }
				    }
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap{
		width: 100%;
		min-height: 100vh;
		background-color: #F5F5F5;
	}
</style>

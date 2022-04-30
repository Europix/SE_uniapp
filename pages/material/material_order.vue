<template>
	<view class="wrap">
		<u-navbar title="预约器材" title-color="#FFFFFF" title-size="32" :border-bottom="false"
			:background="background" back-icon-size="40" back-icon-color="#ffffff" back-icon-name="arrow-left">
		</u-navbar>
		<view class="order_con">
			<times @change="getTime" :appointTime="appointTime" :isMultiple="false" :isSection="false" :disableTimeSlot = "disableTimeSlot"></times>
		</view>
	</view>
</template>

<script>
	import times from 'components/pretty-times/pretty-times.vue'
	export default {
		components: {
		    times
		},
		data() {
			return {
				background: {
					backgroundColor: '#ffb600',
				},
				appointTime: ["2021-11-16 15:30:00"],
				disableTimeSlot: {
					begin_time: "2021-11-17 11:00:00",
					end_time: "2021-11-17 16:00:00"
				},
				type: '',
				materialid:''
			}
		},
		onLoad(params) {
			this.type = params.type
			this.materialid = params.id
			this.getNotuseTime(this.materialid)
		},
		methods: {
			/* 网络请求--不可预约 */
			getNotuseTime(id){
				this.$u.indexApi.notUseTime({
					"pageNum": "1",
					"pageSize": "50",
					"materialid": id
				}).then(res => {
					console.log(res)
					res.data.rows.forEach(item=>{
						this.appointTime.push(item.booktime)
					})
				})
			},
			getTime(orderDateTime) {
				console.log(orderDateTime)
				//调用预约接口
				this.$u.indexApi.book({
					type: this.type,
					coachid: '',
					courseid: '',
					materialid: this.materialid,
					booktime: orderDateTime
				}).then( res => {
					if(res.code==0){
						return false
					}else{
						this.appointTime.push(orderDateTime)
						console.log('this.appointTime',this.appointTime)
						uni.showToast({
							icon:'success',
							title:'预约成功'
						})
						setTimeout(function(){
							uni.navigateBack({
								delta: 2
							})
						}, 2000)
					}
				})
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
	}
</style>

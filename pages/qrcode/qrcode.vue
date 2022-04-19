<template>
	<view class="wrap">
		<u-navbar title="二维码名片" title-color="#000000" title-size="32"  back-icon-size="40" 
		back-icon-color="#000000" back-icon-name="arrow-left" :border-bottom="false" :background="background"></u-navbar>
		<view class="qrcode">
			<view class="top"></view>
			<view class="code-con">
				<canvas id="qrcode" canvas-id="qrcode" :style="{'width': `${size}px`, 'height': `${size}px`}" />
			</view>
		</view>
		
	</view>
</template>

<script>
	import uQRCode from 'uni_modules/Sansnn-uQRCode/components/uqrcode/common/uqrcode.js'
	export default {
		data() {
			return {background: {
					backgroundColor: "transparent"
				},
				size: 256,
				margin: 10,
				backgroundColor: '#FFFFFF',
				foregroundColor: '#000000'
			}
		},
		onReady() {
		  let modules = uQRCode.getModules({
		    text: 'uQRCode 3.0',
		    errorCorrectLevel: uQRCode.errorCorrectLevel.H
		  })
		  let tileSize = (this.size - this.margin * 2) / modules.length
		  // 获取绘图所需的上下文
		  let ctx = uni.createCanvasContext('qrcode', this)
		  // 开始绘制
		  ctx.setFillStyle(this.backgroundColor)
		  ctx.fillRect(0, 0, this.size, this.size)
		  for (var row = 0; row < modules.length; row++) {
		    for (var col = 0; col < modules.length; col++) {
		      // 计算每一个小块的位置
		      var x = col * tileSize + this.margin
		      var y = row * tileSize + this.margin
		      var w = tileSize
		      var h = tileSize
		  
		      var style = modules[row][col] ? this.foregroundColor : this.backgroundColor
		      ctx.setFillStyle(style)
		      ctx.fillRect(x, y, w, h)
		    }
		  }
		  ctx.draw()
		},
		onLoad() {
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 20rpx;
		box-sizing: border-box;
		background-color: #F5F5F5;
		
		.qrcode{
			width: 90%;
			height: 60vh;
			background-color: #FFFFFF;
			border-radius: 10px;
			margin: 15vh auto;
			padding-top: 10vh;
			.code-con{
				#qrcode{
					margin: 0 auto;
				}
			}
		}
	}
</style>

<template>
	<scroll-view scroll-y class="index-wrapper">
		<u-navbar placeholder title="" leftIconSize="28" border bgColor="#fff" @leftClick="showCamera" leftIcon="camera">
			<view slot="center">
				<u-tabs :current="current" @change="changeTabs" :list="listTitle" :itemStyle="itemStyle" lineColor="#4F68B0"></u-tabs>
			</view>
			<view slot="right" class="right">
				<view class="right-item">
					<image class="msg-icon" src="../../static/images/home/消息.png"></image>
					<text>消息</text>
				</view>
				<view class="right-item">
					<image class="add-icon" src="../../static/images/home/发布.png"></image>
					<text>发布</text>
				</view>
			</view>
		</u-navbar>
		
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				itemStyle: {
					height: '38px',
					fontWeight: 'bold',
					fontSize: '18px'
				},
				listTitle: [
					{
						name: '伤痛问答',
						badge: {
							isDot: true
						}
					},
					{
						name: '康复资讯'
					},
				],
				menuBaseUrl: 'https://cdn.uviewui.com/uview/menu/',
				title: 'Hello',
				current: 0
			}
		},
		methods: {
			showCamera(){
				
			},
			changeTabs(info){
				console.log('info', info)
				this.current = info.index
			}
		}
	}
</script>

<style lang="scss">
	.index-wrapper {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		position: relative;
		padding-top: 24rpx;
		
		.right{
			display: flex;
			align-items: center;
		}
		
		.right-item{
			flex-shrink: 0;
			margin-left: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
			flex-direction: column;
		}
		
		.msg-icon{
			width: 18px;
			height: 18px;
		}
		
		.add-icon{
			width: 18px;
			height: 18px;
		}
	}
	
	
	
	.home-sticky {
		top: 0 !important;
	}
</style>

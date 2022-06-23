<template>
	<scroll-view scroll-y class="index-wrapper">
		<u-navbar placeholder title="" leftIconSize="28" border bgColor="#fff" @leftClick="showCamera" leftIcon="camera">
			<view slot="center">
				<u-tabs :current="current" @change="changeTabs" :list="listTitle" :itemStyle="itemStyle" lineColor="#4F68B0"></u-tabs>
			</view>
			<view slot="right" class="right">
				<view class="right-item" @click="handleShowNotice">
					<image class="msg-icon" src="../../static/images/home/消息.png"></image>
					<text>消息</text>
					<view class="badge-box" :class="{'less99': message <= 99 && message >= 10, 'less10': message <10}" v-if="message">
						<u-badge numberType="overflow" type="error" max="99" :value="message"></u-badge>
					</view>
				</view>
				<view class="right-item" @click="handleShowPublish">
					<image class="add-icon" src="../../static/images/home/发布.png"></image>
					<text>发布</text>
				</view>
			</view>
		</u-navbar>
		<PainQA v-show="current === 0"></PainQA>
		<RehabilitationInformation v-show="current === 1"></RehabilitationInformation>
	</scroll-view>
</template>

<script>
	import PainQA from '@/pages_index/painQA.vue'
	import RehabilitationInformation from '@/pages_index/rehabilitationInformation.vue'
	export default {
		components: {
			PainQA,
			RehabilitationInformation
		},
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
				current: 0,
				message: 998
			}
		},
		methods: {
			showCamera(){
				
			},
			changeTabs(info){
				console.log('info', info)
				this.current = info.index
			},
			handleShowPublish() {
				const that = this
				uni.navigateTo({
					url: "/pages_index/painQAPublish"
				})
			},
			handleShowNotice() {
				const that = this
				uni.navigateTo({
					url: "/pages_index/noticePage"
				})
			},
		}
	}
</script>

<style lang="scss">
	.index-wrapper {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		position: relative;
		
		.right{
			display: flex;
			align-items: center;
		}
		
		.right-item{
			flex-shrink: 0;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
			flex-direction: column;
			position: relative;
			
			.badge-box{
				position: absolute;
				right: -36rpx;
				top: -12rpx;
				
				&.less99{
					right: -24rpx;
				}
				
				&.less10{
					right: -12rpx;
				}
			}
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

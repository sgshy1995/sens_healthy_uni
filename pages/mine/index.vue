<template>
	<scroll-view scroll-y class="mine-wrapper">
		<u-navbar placeholder title="" leftIconSize="28" border bgColor="#fff">
			<view slot="center">
				
			</view>
			<view slot="left" class="left">
				个人中心
			</view>
			<view slot="right" class="right">
				<view class="right-item" @click="handleShowInfo">
					<u-icon name="setting" color="#333" size="22"></u-icon>
				</view>
			</view>
		</u-navbar>
		<MineInfo @show="handleShowInfo" ref="MineInfo"></MineInfo>
	</scroll-view>
</template>

<script>
	import MineInfo from '@/pages_mine/mineInfo.vue'
	export default {
		components: {
			MineInfo
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
				message: 998,
				userInfo: {
					id: '1',
					username: 'xiewendong',
					nickname: '谢文东',
					identity: 'physician',
					authenticate: 1,
					avatar: require('@/static/images/mine/avatar.jpeg'),
					balance: 0,
					integral: 0,
					phone: '13800001111',
					email: 'lidashi@163.com',
					gender: 1,
					uuid: '232323-21321312-1111-32322',
					status: 1,
					integral: 1300,
					age: 30
				}
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
			handleShowInfo() {
				const that = this
				uni.navigateTo({
					url: "/pages_mine/userInfo",
					success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('show', { userInfo: that.userInfo })
					}
				})
			},
			handleScan(){
				// 调起条码扫描
				uni.scanCode({
					scanType: ['barCode', 'qrCode', 'datamatrix', 'pdf417'],
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.showToast({
							icon: 'none',
							title: res.result
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.mine-wrapper {
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
		position: relative;
		
		.left{
			font-size: 14px;
			color: #333;
		}
		
		.right{
			display: flex;
			align-items: center;
		}
		
		.right-item{
			flex-shrink: 0;
			margin-left: 52rpx;
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

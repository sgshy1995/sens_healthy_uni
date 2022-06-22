<template>
	<view class="rehabilitation-information">
		<view class="rehabilitation-information-item" v-for="(u,index) in dataSource" :key="u.id" @click="handleShowDetail(u)">
			<view class="information-item-top">
				<view class="information-item-top-left">
					<image class="information-item-avatar" :src="u.avatar"></image>
					<text class="information-item-author">{{ u.author }}</text>
				</view>
				<view class="information-item-top-right">
					<text class="information-item-time">{{ u.create_time }}</text>
				</view>
			</view>
			<view class="information-item-middle">
				<image class="information-item-back" :src="u.back"></image>
			</view>
			<view class="information-item-bottom">
				<view class="information-item-title">{{ u.title }}</view>
				<view class="information-item-read">{{ u.read }}人读过</view>
			</view>
		</view>
		<view v-html=""></view>
		<view class="no-more">
			没有更多了 ~
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				dataSource: [
					{
						id: '1',
						avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/19/20220319205139_b509f.thumb.1000_0.jpg',
						author: '健康医报',
						back: require('@/static/images/index/back1.png'),
						create_time: '10分钟前',
						title: '如果关节疼痛，当心以下三点',
						read: 193,
						loadUrl: 'https://mp.weixin.qq.com/s/ta0dVQ3ct84zmpWfh28vLA'
					},
					{
						id: '2',
						avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/19/20220319205139_b509f.thumb.1000_0.jpg',
						author: '医疗通',
						back: require('@/static/images/index/back2.jpeg'),
						create_time: '40分钟前',
						title: '医疗行业企业新闻传播误区解读',
						read: 300,
						loadUrl: 'https://mp.weixin.qq.com/s/ta0dVQ3ct84zmpWfh28vLA'
					},
					{
						id: '3',
						avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/19/20220319205139_b509f.thumb.1000_0.jpg',
						author: '健康医报',
						back: require('@/static/images/index/back3.webp'),
						create_time: '2小时前',
						title: '医疗科技业投资扩展的理想枢纽',
						read: 2008,
						loadUrl: 'https://mp.weixin.qq.com/s/ta0dVQ3ct84zmpWfh28vLA'
					},
					{
						id: '4',
						avatar: 'https://c-ssl.dtstatic.com/uploads/blog/202203/19/20220319205139_b509f.thumb.1000_0.jpg',
						author: '央视网',
						back: require('@/static/images/index/back4.webp'),
						create_time: '昨天',
						title: '智慧医疗，让看病更便捷',
						read: 1198,
						loadUrl: 'https://mp.weixin.qq.com/s/ta0dVQ3ct84zmpWfh28vLA'
					}
				]
			}
		},
		methods: {
			handleShowDetail(record) {
				const that = this
				uni.navigateTo({
					url: "/pages_index/informationDetail",
					success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('show', { loadUrl: record.loadUrl })
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.rehabilitation-information {
		width: 100%;
		min-height: calc(100% - 292rpx);
		box-sizing: border-box;
		padding: 0 24rpx 24rpx 24rpx;
		margin-top: 24rpx;
		padding-bottom: 148rpx;
		position: relative;
		
		.rehabilitation-information-item{
			width: 100%;
			background: #fff;
			box-sizing: border-box;
			border-radius: 24rpx;
			margin-bottom: 36rpx;
			
			.information-item-top{
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 24rpx;
								
				.information-item-top-left{
					display: flex;
					align-items: center;
					
					.information-item-avatar{
						width: 50rpx;
						height: 50rpx;
						border-radius: 50%;
						margin-right: 12rpx;
					}
					
					.information-item-author{
						font-size: 14px;
						font-weight: 700;
						color: #4F68B0;
					}
				}
				
				.information-item-time{
					font-size: 12px;
					color: #ccc;
				}
			}
			
			.information-item-middle{
				width: 100%;
				
				.information-item-back{
					width: 100%;
				}
			}
			
			.information-item-bottom{
				width: 100%;
				box-sizing: border-box;
				padding: 24rpx;
				
				.information-item-title{
					font-size: 16px;
					margin-bottom: 12rpx;
				}
				
				.information-item-read{
					font-size: 12px;
					color: #ccc;
				}
			}
		}
		
		.no-more {
			width: 100%;
			color: #ddd;
			font-size: 12px;
			width: 100%;
			text-align: center;
			position: absolute;
			bottom: 24rpx;
			left: 0;
		}
	}
</style>
<template>
	<view class="mine-info">
		<view class="mine-info-top">
			<image class="mine-info-top-left" :src="userInfo.avatar" @click="showView(userInfo.avatar)"></image>
			<view class="mine-info-top-right">
				<view class="mine-username">
					<view class="mine-username-text">{{ userInfo.nickname }} <text
							v-if="userInfo.identity === 'physician'" class="mine-username-physician"> (医师)</text>
					</view>
					<image v-if="userInfo.gender === 1" src="@/static/images/mine/male.png"
						class="mine-username-gender"></image>
					<image v-if="userInfo.gender === 0" src="@/static/images/mine/female.png"
						class="mine-username-gender"></image>
				</view>
				<view class="mine-auth" v-if="userInfo.authenticate === 1">
					<image src="@/static/images/mine/auth.png" class="mine-auth-logo"></image>
					<text class="mine-auth-text">专业认证</text>
				</view>
				<view class="mine-integral">积分：{{ userInfo.integral }}</view>
			</view>
		</view>

		<view class="mine-info-items">

			<view class="mine-info-items-inner">
				<view class="items-item">
					<image class="items-item-icon qa" src="@/static/images/mine/qa.png"></image>
					<view class="items-item-text">我的问答</view>
				</view>

				<view class="items-item">
					<image class="items-item-icon collect" src="@/static/images/mine/collect.png"></image>
					<view class="items-item-text">我的收藏</view>
				</view>

				<view class="items-item">
					<image class="items-item-icon" src="@/static/images/mine/prescription.png"></image>
					<view class="items-item-text">康复处方</view>
				</view>

				<view class="items-item">
					<image class="items-item-icon order" src="@/static/images/mine/order.png"></image>
					<view class="items-item-text">我的订单</view>
				</view>
			</view>

		</view>

		<view class="mine-info-record">
			<view class="mine-info-record-title">病历档案</view>
			<view class="mine-info-record-body">
				<view class="record-body-top">
					<view class="record-body-top-left">
						<text class="top-left-text">{{ userInfo.nickname }}</text>
						<text class="top-left-text">{{ userInfo.gender === 1 ? '男' : '女' }}</text>
						<text class="top-left-text">{{ userInfo.age }}岁</text>
					</view>
					<view class="record-body-top-right">
						维护信息 >
					</view>
				</view>

				<view class="record-body-bottom">

					<view class="body-bottom-item">
						<view class="body-bottom-item-title">
							既往伤病史
						</view>
						<view class="body-bottom-item-content">
							腰间盘突出并伴有偶发阵痛，腰部无力，下雨天天气湿冷难受，展不开腰。
						</view>
					</view>

					<view class="body-bottom-item">
						<view class="body-bottom-item-title">
							近期伤病描述
						</view>
						<view class="body-bottom-item-content">
							腿软，走路腿软，打突突。
						</view>
					</view>

					<view class="body-bottom-item">
						<view class="body-bottom-item-title">
							出院小结
						</view>
						<view class="body-bottom-item-content">
							出院了，医生说经常保养，注意身体，多喝热水。晚上记得盖棉被，每天记得洗澡...
						</view>
					</view>

					<view class="body-bottom-item">
						<view class="body-bottom-item-title">
							影像学资料
						</view>
						<view class="body-bottom-item-content">
							<u-album :urls="cover" rowCount="6" multipleSize="100rpx" singleSize="600rpx" maxCount="6">
							</u-album>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				},
				cover: [
					'https://www.lemonlv.com/d/file/20170113/7b5ec0fa91284266a2546f3aef2627de.jpg',
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
				]
			}
		},
		methods: {
			showView(url) {
				// 预览图片
				uni.previewImage({
					urls: [url],
					indicator: 'none'
				});
			},
			handleShowInfo() {
				const that = this
				uni.navigateTo({
					url: "/pages_mine/userInfo",
					success: function(res) {
						// 通过eventChannel向被打开页面传送数据
						res.eventChannel.emit('show', {
							userInfo: that.userInfo
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	.mine-info {
		width: 100%;

		.mine-info-top {
			width: 100%;
			margin-top: 36rpx;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			padding: 0 24rpx;

			.mine-info-top-left {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				margin-right: 24rpx;
			}

			.mine-info-top-right {
				.mine-username {
					display: flex;
					align-items: center;

					.mine-username-text {
						font-size: 14px;
						margin-right: 12rpx;
					}

					.mine-username-gender {
						width: 24rpx;
						height: 24rpx;
						margin-right: 24rpx;
					}

					.mine-username-physician {
						font-size: 14px;
						color: #FCA315;
						padding-left: 2rpx;
					}


				}

				.mine-auth {
					margin-top: 12rpx;
					align-items: center;
					box-sizing: border-box;
					padding: 0 10rpx 0 0;
					background: rgba(123, 121, 255, 0.3);
					display: inline-flex;
					border-radius: 24rpx;
					color: rgba(123, 121, 255, 1);

					.mine-auth-text {
						font-size: 10px;
						flex-shrink: 0;
					}

					.mine-auth-logo {
						width: 32rpx;
						height: 32rpx;
						margin-right: 6rpx;
					}
				}

				.mine-integral {
					font-size: 11px;
					color: #999;
				}
			}
		}

		.mine-info-items {
			width: 100%;
			margin-top: 36rpx;
			box-sizing: border-box;
			padding: 0 24rpx;

			.mine-info-items-inner {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 24rpx 48rpx;
				background: #fff;
				border-radius: 18rpx;
			}

			.items-item {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;

				.items-item-icon {
					width: 40rpx;
					height: 40rpx;
					margin-bottom: 24rpx;

				}

				.items-item-text {
					font-size: 13px;
				}
			}
		}

		.mine-info-record {
			width: 100%;
			padding: 0 24rpx;
			margin-top: 36rpx;
			box-sizing: border-box;

			.mine-info-record-title {
				font-size: 14px;
				font-weight: 700;
				margin-bottom: 24rpx;
			}

			.mine-info-record-body {
				width: 100%;
				border-radius: 18rpx;
				background: #fff;
				box-sizing: border-box;
				padding: 12rpx 24rpx;

				.record-body-top {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.record-body-top-left {

						.top-left-text {
							font-size: 13px;
							font-weight: 700;
							padding-right: 24rpx;
						}
					}

					.record-body-top-right {
						font-size: 13px;
						color: #999;
					}
				}

				.record-body-bottom {
					width: 100%;
					margin-top: 12rpx;

					.body-bottom-item {
						width: 100%;
						border-top: 1px solid #999;
						box-sizing: border-box;
						padding-top: 12rpx;
						margin-bottom: 12rpx;

						.body-bottom-item-title {
							font-size: 12px;
							font-weight: 700;
							color: #999;
							margin-bottom: 12rpx;
						}

						.body-bottom-item-content {
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>

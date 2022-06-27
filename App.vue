<script>
	export default {
		onLaunch() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
			const that = this
			uni.getSystemInfo({
			    success(e) {
					console.log('success ------')
			        let barHeight = 0;
			        // #ifdef APP-PLUS  
					console.log('APP-PLUS')
			        if (e.platform == 'android') {
			            barHeight = e.statusBarHeight + 50
			        } else {
			            barHeight = e.statusBarHeight + 45
			        }
			        // #endif
					
			        // #ifdef MP-WEIXIN  
			        let custom = wx.getMenuButtonBoundingClientRect()
			        barHeight = custom.bottom + custom.top - e.statusBarHeight
			        // #endif  
					
			        // #ifdef MP-ALIPAY  
			        barHeight = e.statusBarHeight + e.titleBarHeight
			        // #endif
					
			        // 本地缓存
			        console.log('barHeight',barHeight)
					that.$store.commit('setGlobalHeight', barHeight)
			    },
				fail(e){
					console.log('faile ------')
				}
			})
		},
		onShow() {
			console.log('App Show')
		},
		onHide() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "@/uni_modules/uview-ui/index.scss";
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	
	/* 解决小程序和app滚动条的问题 */
	
	/* #ifdef MP-WEIXIN || APP-PLUS */
	
	::-webkit-scrollbar{
	
		width: 0;
		height: 0;
		background-color: transparent;
	    display: none;
	
	}
	
	/* #endif */
	
	/* 解决H5 的问题 */
	
	/* #ifdef H5 */
	
	    uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
	
	    /* 隐藏滚动条，但依旧具备可以滚动的功能 */
	
	display: none
	
	    }
	
	/* #endif */
</style>

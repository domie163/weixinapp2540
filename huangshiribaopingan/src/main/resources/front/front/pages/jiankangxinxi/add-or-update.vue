
<template>
	<view class="content">
		<form class="app-update-pv">
                <view
                        :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                        class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}'
                          class="title">体温</view>
                    <input   disabled
                             :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
                             :disabled="ro.jiankangxinxiTiwen" type="number" v-model="ruleForm.jiankangxinxiTiwen" placeholder="体温"></input>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}'
                          class="title">是否发烧</view>
                    <picker @change="fashaoTypesChange" :value="fashaoTypesIndex" :range="fashaoTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
                                class="uni-input">{{ruleForm.fashaoTypes?ruleForm.fashaoValue:"请选择是否发烧"}}</view>
                    </picker>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}'
                          class="title">是否去过高风险地区</view>
                    <picker @change="gaofengxianTypesChange" :value="gaofengxianTypesIndex" :range="gaofengxianTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
                                class="uni-input">{{ruleForm.gaofengxianTypes?ruleForm.gaofengxianValue:"请选择是否去过高风险地区"}}</view>
                    </picker>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}'
                      class="title">旅居史</view>
                <input   disabled
                         :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
                         :disabled="ro.jiankangxinxiAddress" type="text" v-model="ruleForm.jiankangxinxiAddress" placeholder="旅居史"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="jiankangxinxiPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}'
                          class="title">健康码</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.jiankangxinxiPhoto" :src="ruleForm.jiankangxinxiPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
			
			<view class="btn">
				<button
					:style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#A27DE3","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
					@tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
						  ref="createTime" themeColor="#333333"></w-picker>


	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross: '',
                ro:{
					yonghuId: false,
					jiankangxinxiTiwen: false,
					fashaoTypes: false,
					gaofengxianTypes: false,
					jiankangxinxiAddress: false,
					jiankangxinxiPhoto: false,
					createTime: false,
				},
				ruleForm: {
					yonghuId: '',
					jiankangxinxiTiwen: '',
					fashaoTypes: '',//数字
					fashaoValue: '',//数字对应的值
					gaofengxianTypes: '',//数字
					gaofengxianValue: '',//数字对应的值
					jiankangxinxiAddress: '',
					jiankangxinxiPhoto: '',
					createTime: '',
				},
				// 登陆用户信息
				user: {},
				fashaoTypesOptions: [],
				fashaoTypesIndex : 0,
				gaofengxianTypesOptions: [],
				gaofengxianTypesIndex : 0,

			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
		},
		async onLoad(options) {

		/*下拉框*/
			let fashaoTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'fashao_types',
			}
			let fashaoTypes = await this.$api.page(`dictionary`, fashaoTypesParams);
			this.fashaoTypesOptions = fashaoTypes.data.list
		/*下拉框*/
			let gaofengxianTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'gaofengxian_types',
			}
			let gaofengxianTypes = await this.$api.page(`dictionary`, gaofengxianTypesParams);
			this.gaofengxianTypesOptions = gaofengxianTypes.data.list


			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				let res = await this.$api.info(`jiankangxinxi`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			if(options.jiankangxinxiId){
                this.ruleForm.jiankangxinxiId = options.jiankangxinxiId;
			}
			// 跨表
			// this.styleChange()
		},
		methods: {
			// 下拉变化
            fashaoTypesChange(e) {
            this.fashaoTypesIndex = e.target.value
            this.ruleForm.fashaoValue = this.fashaoTypesOptions[this.fashaoTypesIndex].indexName
            this.ruleForm.fashaoTypes = this.fashaoTypesOptions[this.fashaoTypesIndex].codeIndex
        },
            gaofengxianTypesChange(e) {
            this.gaofengxianTypesIndex = e.target.value
            this.ruleForm.gaofengxianValue = this.gaofengxianTypesOptions[this.gaofengxianTypesIndex].indexName
            this.ruleForm.gaofengxianTypes = this.gaofengxianTypesOptions[this.gaofengxianTypesIndex].codeIndex
        },


			// styleChange() {
			// 	this.$nextTick(() => {
			// 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
			// 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
			// 		// })
			// 	})
			// },


			jiankangxinxiPhotoTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.jiankangxinxiPhoto = _this.$base.url + 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(() => {
						// _this.styleChange()
					})
				});
			},
			// 日期控件
			createTimeConfirm(val) {
                console.log(val)
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




			getUUID() {
				return new Date().getTime();
			},
			async onSubmitTap() {
				if ((!this.ruleForm.jiankangxinxiTiwen) && (!this.$validate.isNumber(this.ruleForm.jiankangxinxiTiwen)) && this.ruleForm.jiankangxinxiTiwen >0) {
                    this.$utils.msg(`体温不能为空，不能小于0 格式为数字或小数`);
                    return
                }
				if ((!this.ruleForm.fashaoTypes)) {
					this.$utils.msg(`是否发烧不能为空`);
					return
				}
				if ((!this.ruleForm.gaofengxianTypes)) {
					this.$utils.msg(`是否去过高风险地区不能为空`);
					return
				}
				if ((!this.ruleForm.jiankangxinxiAddress)) {
					this.$utils.msg(`旅居史不能为空`);
					return
				}
				if ((!this.ruleForm.jiankangxinxiPhoto)) {
					this.$utils.msg(`健康码不能为空`);
					return
				}
				if (this.ruleForm.id) {
					await this.$api.update(`jiankangxinxi`, this.ruleForm);
				} else {
					await this.$api.save(`jiankangxinxi`, this.ruleForm);
				}
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}

	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}

	.cu-form-group.active {
		justify-content: space-between;
	}

	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 20upx 0;
	}

	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}

	.cu-form-group+.cu-form-group {
		border: 0;
	}

	.cu-form-group uni-input {
		padding: 0 30upx;
	}

	.uni-input {
		padding: 0 30upx;
	}

	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}

	.cu-form-group uni-picker::after {
		line-height: 68rpx;
	}

	.select .uni-input {
		line-height: 68rpx;
	}

	.input .right-input {
		line-height: 68rpx;
	}
</style>
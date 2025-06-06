<template>
	<view class="content">
		<form class="app-update-pv">
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}' class="title">
					出入情况</view>
				<input disabled
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
					:disabled="ro.churushenqingQinkuang" type="text" v-model="ruleForm.churushenqingQinkuang"
					placeholder="出入情况"></input>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}' class="title">
					出入时间</view>
				<input
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
					v-model="ruleForm.churushenqingTime" placeholder="出入时间" :readonly="ro.churushenqingTime"
					@tap="toggleTab('churushenqingTime')"></input>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}' class="title">
					出入类型</view>
				<picker @change="churushenqingTypesChange" :value="churushenqingTypesIndex"
					:range="churushenqingTypesOptions" range-key="indexName">
					<view
						:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
						class="uni-input">{{ruleForm.churushenqingTypes?ruleForm.churushenqingValue:"请选择出入类型"}}</view>
				</picker>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}' class="title">
					出入去向</view>
				<input disabled
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
					:disabled="ro.churushenqingAddress" type="text" v-model="ruleForm.churushenqingAddress"
					placeholder="出入去向"></input>
			</view>
			<view
				:style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
				class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"#A27DE3","textAlign":"left"}' class="title">
					体温</view>
				<input disabled
					:style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#A27DE3","borderRadius":"0px","color":"#A27DE3","textAlign":"left","borderWidth":"0 0 6rpx","fontSize":"24rpx","borderStyle":"solid","height":"68rpx"}'
					:disabled="ro.churushenqingTiwen" type="number" v-model="ruleForm.churushenqingTiwen"
					placeholder="体温"></input>
			</view>

			<view class="btn">
				<button
					:style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#A27DE3","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
					@tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

		<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="churushenqingTimeConfirm"
			ref="churushenqingTime" themeColor="#333333"></w-picker>
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
				ro: {
					yonghuId: false,
					churushenqingQinkuang: false,
					churushenqingTime: false,
					churushenqingTypes: false,
					churushenqingAddress: false,
					churushenqingTiwen: false,
					churushenqingYesnoTypes: false,
					createTime: false,
				},
				ruleForm: {
					yonghuId: '',
					churushenqingQinkuang: '',
					churushenqingTime: '',
					churushenqingTypes: '', //数字
					churushenqingValue: '', //数字对应的值
					churushenqingAddress: '',
					churushenqingTiwen: '',
					churushenqingYesnoTypes: '', //数字
					churushenqingYesnoValue: '', //数字对应的值
					createTime: '',
				},
				// 登陆用户信息
				user: {},
				churushenqingTypesOptions: [],
				churushenqingTypesIndex: 0,
				churushenqingYesnoTypesOptions: [],
				churushenqingYesnoTypesIndex: 0,

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
			let churushenqingTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'churushenqing_types',
			}
			let churushenqingTypes = await this.$api.page(`dictionary`, churushenqingTypesParams);
			this.churushenqingTypesOptions = churushenqingTypes.data.list
			/*下拉框*/
			let churushenqingYesnoTypesParams = {
				page: 1,
				limit: 100,
				dicCode: 'churushenqing_yesno_types',
			}
			let churushenqingYesnoTypes = await this.$api.page(`dictionary`, churushenqingYesnoTypesParams);
			this.churushenqingYesnoTypesOptions = churushenqingYesnoTypes.data.list


			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				let res = await this.$api.info(`churushenqing`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			if (options.churushenqingId) {
				this.ruleForm.churushenqingId = options.churushenqingId;
			}
			// 跨表
			// this.styleChange()
		},
		methods: {
			// 下拉变化
			churushenqingTypesChange(e) {
				this.churushenqingTypesIndex = e.target.value
				this.ruleForm.churushenqingValue = this.churushenqingTypesOptions[this.churushenqingTypesIndex].indexName
				this.ruleForm.churushenqingTypes = this.churushenqingTypesOptions[this.churushenqingTypesIndex].codeIndex
			},
			churushenqingYesnoTypesChange(e) {
				this.churushenqingYesnoTypesIndex = e.target.value
				this.ruleForm.churushenqingYesnoValue = this.churushenqingYesnoTypesOptions[this
					.churushenqingYesnoTypesIndex].indexName
				this.ruleForm.churushenqingYesnoTypes = this.churushenqingYesnoTypesOptions[this
					.churushenqingYesnoTypesIndex].codeIndex
			},


			// styleChange() {
			// 	this.$nextTick(() => {
			// 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
			// 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
			// 		// })
			// 	})
			// },


			// 日期控件
			churushenqingTimeConfirm(val) {
				console.log(val)
				this.ruleForm.churushenqingTime = val.result;
				this.$forceUpdate();
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
				if ((!this.ruleForm.churushenqingQinkuang)) {
					this.$utils.msg(`出入情况不能为空`);
					return
				}
				if ((!this.ruleForm.churushenqingTime)) {
					this.$utils.msg(`出入时间不能为空`);
					return
				}
				if ((!this.ruleForm.churushenqingAddress)) {
					this.$utils.msg(`出入去向不能为空`);
					return
				}
				if ((!this.ruleForm.churushenqingTiwen) && (!this.$validate.isNumber(this.ruleForm
						.churushenqingTiwen)) && this.ruleForm.churushenqingTiwen > 0) {
					this.$utils.msg(`体温不能为空，不能小于0 格式为数字或小数`);
					return
				}
				if (this.ruleForm.id) {
					await this.$api.update(`churushenqing`, this.ruleForm);
				} else {
					await this.$api.save(`churushenqing`, this.ruleForm);
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

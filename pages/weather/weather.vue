<template>
	<view>
		<view class="content">
			<view class="container">
				<u-navbar
				           title="天气"
				           :autoBack="true"
						   :fixed="false"
						   :border="true"
				       >
				       </u-navbar>
				<view>
					<view>
						<view class="list-item">
							<view>
								<u--image radius="15px 15px 0 0" :showLoading="true" src="https://img-qn.51miz.com/preview/element/00/01/27/38/E-1273800-6287C2E4.jpg" width="100%" :lazy-load="true"  mode="aspectFill" ></u--image>
							</view>
							<view style="padding: 1rem;">
								<view >
									<u-row>
										<u-col span="6" align="start">
											<u-icon
											@click="show=true" 
											    name="arrow-down"
											    size="19"
												:label="wheather.cityName"
												labelPos="left"
												
												
											></u-icon>
										</u-col>
										<u-col span="6" >
											<u--text :text="todayDate" align="right"></u--text>
										</u-col>
									</u-row>
								</view>
								<u-divider lineColor="#fff"></u-divider>
								<view>
									<u-row justify="space-between" align="center">
										<u-col span="6" align="center">
											<view class="flex">
												<view >
													<u-icon :name="$url+wheather.weatherIcon" :label="wheather.weather" 
												  size="24" ></u-icon>
												</view>
											</view>
											<u--text :text="wheather.minTemperature+'℃~'+wheather.maxTemperature+'℃'"  size="20" align="center"></u--text>
										</u-col>
										<u-col span="6" align="center">
											<u--text :text="wheather.currentTemperature+'℃'" size="28" align="center" ></u--text>
										</u-col>
									</u-row>
									<view>
										<br>
										<view>
											<u-row justify="space-between">
												<u-col span="3"  align="center">
													<u--text text="湿度" align="center" :bold="true" ></u--text>
													<text>{{wheather.humidity}}</text>
												</u-col>
												<u-col span="3"  align="center">
													<u--text text="风速" align="center" :bold="true" ></u--text>
													<text>{{wheather.windSpeed}} <text style="font-size: 12px;">km/h</text></text>
												</u-col>
												<u-col span="3"  align="center">
													<u--text text="能见度" align="center" :bold="true" ></u--text>
													<text>{{wheather.visibility}} <text style="font-size: 12px;">%</text></text>
												</u-col>
												<u-col span="3"  align="center">
													<u--text text="空气质量" align="center" :bold="true" ></u--text>
													<text>{{wheather.airQuality}}  <text style="font-size: 12px;">m</text></text>
												</u-col>
											</u-row>
										</view>
									</view>
								</view>	
							</view>
											
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
				wheather:[],
				
			}
		},
		onLoad() {
			this.getWeather(13);
		},
		computed:{
			todayDate(){
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1; // 注意月份是从0开始计数的，所以需要+1
				let day = date.getDate();
				let formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
				return formattedDate;
			}
		},
		methods: {
			getWeather(cityId){
				this.$request.get(`/control/weather/list?cityId=${cityId}`)
				.then(res=>{
					if(res.code==200){
						this.wheather=res.rows[0]||this.wheather;
					}else{
						this.$request.requestShowToastError(res.msg);
					}
				})
				.catch(err=>{
					this.$request.requestShowToastError(err);
				})
			},
		}
	}
</script>

<style lang="scss">
	@import url("@/style/global.scss");
	.list-item{
		border-radius:  15px 15px 0 0 ;
		margin: 1rem;
		background-color: #fff;
	}
</style>

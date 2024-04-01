<template>
	<view class="wh-100">
			<view class="wh-100">
				<view style="padding: 1rem;" class="wh-100">
					 <u-grid :border="false" col="2">
						<u-grid-item >
							<view class="list-item" style="background-color: #4690F9;height: 90px;">
								<u-row justify="start" align="start">
									<u-col span="3">
										<view class="image-music flex">
											<u--image   :showLoading="true" src="https://p1.music.126.net/Oe2hsITZSTX21ovDWUpspw==/109951164524289363.jpg?param=130y130" width="80px" height="80px" :lazy-load="true" shape="circle" mode="widthFix" ></u--image>
										</view>
									</u-col>
									<u-col span="9" style="padding: .5rem 0;">
										<u--text text="吻别-张学友" color="#fff"></u--text>
										<view class="flex" style="justify-content: start;padding: .5rem 0;transform: translateX(-5px);">
											<u-icon name="skip-back-left" color="#fff"  size="28"></u-icon>
											<u-icon name="pause"  size="27" color="#fff"></u-icon>
											<u-icon name="skip-forward-right" color="#fff" size="28"></u-icon>
										</view>
										<view class="music-progress">
											<view></view>
										</view>
									</u-col>
								</u-row>
								
							</view>
						</u-grid-item>	
						<u-grid-item>
							<view class="list-item" style="background-color: #e45656;height: 90px;">
								<view>
									<u-row>
										<u-col span="6">
											<u--text :text="todayDate" size="14" color="#fff"></u--text>
											<u--text text=" 二月初二" size="14"  color="#fff"></u--text>
										</u-col>
										<u-col span="6">
											
											<u--text text="甲辰 龙" size="14" align="end"  color="#fff"></u--text>
											
										</u-col>
									</u-row>
								</view>
								<u-divider></u-divider>
								<view>
									<u--text text="距离 2024年清明节 还有23天" size="12"  color="#fff"></u--text>
								</view>
							</view>
						</u-grid-item>
						<u-grid-item>
							<view class="list-item" style="height: 200px;">
								<view >
									<view>
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
		
										</u-row>
									</view>
									<u-divider></u-divider>
									<view>
										<u-row justify="space-between" align="center">
											<u-col span="6" align="center">
												<view class="flex">
													<view >
														<u-icon :name="$url+wheather.weatherIcon" :label="wheather.weather"  size="24" ></u-icon>
													</view>
												</view>
												<u--text :text="wheather.minTemperature+'℃~'+wheather.maxTemperature+'℃'" size="20" align="center" ></u--text>
											</u-col>
											<u-col span="6" align="center">
												<u--text :text="wheather.currentTemperature+'℃'" size="28" align="center"></u--text>
											</u-col>
										</u-row>
										<view>
											<br>
											<view>
												<u-row justify="space-between">
													<u-col span="3"  align="center">
														<u--text text="湿度" align="center" :bold="true"></u--text>
														<text>{{wheather.humidity}}</text>
													</u-col>
													<u-col span="3"  align="center">
														<u--text text="风速" align="center" :bold="true"></u--text>
														<text>{{wheather.windSpeed}} <text style="font-size: 12px;">km/h</text></text>
													</u-col>
													<u-col span="3"  align="center">
														<u--text text="能见度" align="center" :bold="true"></u--text>
														<text>{{wheather.visibility}} <text style="font-size: 12px;">%</text></text>
													</u-col>
													<u-col span="3"  align="center">
														<u--text text="空气质量" align="center" :bold="true"></u--text>
														<text>{{wheather.airQuality}}  <text style="font-size: 12px;">m</text></text>
													</u-col>
												</u-row>
											</view>
										</view>
									</view>					
								</view>
							</view>
						</u-grid-item>
						<u-grid-item>
							<view class="list-item" style="height: 200px;">
								<u-row justify="center" align="center" class="wh-100">
									<u-col span="6">
										<view >
											<u--image :showLoading="true" src="https://i.xiao84.com/art/jianbihua/car/06.gif" width="180px" height="162px" :lazy-load="true"  mode="widthFix"></u--image>
										</view>
									</u-col>
									<u-col span="6">
										<u-row justify="start" align="start">
											<u-col span="6" align="start" justify="start"> 
												<view>
													<u--text text="行驶距离" align="center"></u--text>
													<u--text text="220km" align="center"></u--text>
												</view>
												<br>
												<view>
													<u--text text="出行次数" align="center"></u--text>
													<u--text text="12次" align="center"></u--text>
												</view>
											</u-col>
											<u-col span="6">
												<view>
													<u--text text="车外温度" align="center"></u--text>
													<u--text text="22℃" align="center"></u--text>
												</view>
												<br>
												<view>
													<u--text text="车内温度" align="center"></u--text>
													<u--text text="18℃" align="center"></u--text>
												</view>
											</u-col>
										</u-row>
									</u-col>
								</u-row>
							</view>
						</u-grid-item>
					</u-grid>
					<view class="bottom-add" style="position: absolute;bottom: 80px;">
						<view class="bottom-view" v-for="(i,index) in addImageList" :class="{'bg-fff':!isIconChange(i)}">
							<u--image :showLoading="true" :src="i" :width="isIconChange(i)?'60px':'32px'" :height="isIconChange(i)?'60px':'32px'" :lazy-load="true"  mode="widthFix" @click="show=true,selectAddIndex=index"></u--image>
						</view>
					</view>
					
				</view>
			</view>
			<u-popup :show="show" @close="show=false" @open="show=true" >
			    <view class="" style="padding: 1rem;">
					<view class="bottom-add">
						<view class="bottom-view" v-for="(i,index) in replaceImageList">
							<u--image :showLoading="true" :src="i"  height="60px" width="60px" :lazy-load="true"  mode="widthFix" @click="addImageList[selectAddIndex]=i,show=false"></u--image>
						</view>
					</view>
				</view>
			</u-popup>
		
		<!-- <u-grid :border="false" col="4">
			<u-grid-item v-for="(c,index) in iconArray">
				<view class="icon-bg" @click="$emit('switchMainScreenIndex',index)">
					<u-icon :name="c.icon"  size="32" labelSize="10" labelPos="bottom" :label="c.title"></u-icon>
				</view>
			</u-grid-item>
		 </u-grid> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconArray:[
					{
						url:'/pages/weather/weather',
						title:'天气',
						icon:'../../static/icon/weather.png'
					},
					{
						url:'/pages/video/video',
						title:'媒体播放器',
						icon:'../../static/icon/music.png'
					},
					{
						url:'/pages/video/video',
						title:'一键关机',
						icon:'../../static/icon/close.png'
					}
				],
				wheather:[],
				show:false,
				selectAddIndex:0,
				addImageList:[
					'/static/icon/add.png',
					'/static/icon/add.png',
					'/static/icon/add.png',
					'/static/icon/add.png',
					'/static/icon/add.png'
				],
				replaceImageList:[
					'/static/icon/u15.png',
					'/static/icon/u12.png',
					'/static/icon/u14.png',
					'/static/icon/u16.png',
					'/static/icon/u13.png'
				]
			}
		},
		mounted() {
			this.getWeather(13)
		},
		computed:{
			todayDate(){
				let date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1; // 注意月份是从0开始计数的，所以需要+1
				let day = date.getDate()
				let formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
				return formattedDate;
			},
			
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
			
			isIconChange(c){
				return c=='/static/icon/add.png'?false:true;
			}
		}
	}
</script>

<style lang="scss">
	
	.icon-bg{
		width: 78px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 78px;
		background-color: #fff;
		border-radius: 15px;
		box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
	}
</style>

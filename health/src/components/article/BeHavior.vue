<template>
  <div>

    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <!-- 体温和血压的健康指标 -->
      <div class="facts">
        <van-cell-group inset class="van-cell-group-biyan">
          <div  class="health_fact">
          <div class="title-box">
            <!-- 图标 -->
            <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
            <!-- <van-icon name="cart-o" color="#1989fa" /> -->
            <i class="iconfont icon-biyanjing" ></i>

            <!-- 数值 -->
            <span>{{tem_hstatic}}</span>
          </div>
          <div><!-- 标题 -->
            <span>{{tem_title}}</span></div>

        </div>
      </van-cell-group>
      <van-cell-group inset class="van-cell-group-chouyan">
        <div class="health_fact">
          <div class="title-box">
            <!-- 图标 -->
            <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
            <i class="iconfont icon-chouyan" ></i>
            <!-- 数值 -->
            <span>{{press_hstatic}}</span>
          </div>
            <div><!-- 标题 -->
            <span>{{press_title}}</span></div>

        </div>
      </van-cell-group>
      </div>

              <!-- 心跳和血脂的健康指标 -->
      <div class="facts">
      <van-cell-group inset class="van-cell-group-daheqian">
          <div  class="health_fact">
          <div class="title-box">
            <!-- 图标 -->
            <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
            <i class="iconfont icon-jingya" ></i>
            <!-- 数值 -->
            <span>{{heart_hstatic}}</span>
          </div>
            <div>            <!-- 标题 -->
            <span>{{heart_title}}</span></div>
        </div>
      </van-cell-group>
      <van-cell-group inset class="van-cell-group-dadianhua">
        <div class="health_fact">
          <div class="title-box">
            <!-- 图标 -->
            <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
            <i class="iconfont icon-dadianhua" ></i>
            <!-- 标题 -->

            <span>{{fat_hstatic}}</span>
          </div>
          <div>            <span>{{fat_title}}</span>
            <!-- 数值 --></div>
        </div>
      </van-cell-group>

      </div>

      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'HealthInfo',
  // 自定义属性
  props: {
    // 闭眼
    tem_title: {
      type: String,
      default: '闭眼'
    },
    tem_hstatic: {
      type: String,
      default: '1次'
    },
    // 抽烟
    press_title: {
      type: String,
      default: '抽烟'
    },
    press_hstatic: {
      type: String,
      default: '2次'
    },
    // 打呵欠
    heart_title: {
      type: String,
      default: '打呵欠'
    },
    heart_hstatic: {
      type: String,
      default: '2次'
    },
    // 打电话
    fat_title: {
      type: String,
      default: '打电话'
    },
    fat_hstatic: {
      type: String,
      default: '4次'
    }
  },
  // data () {
  //   return {
  //     name: '张雪',
  //     xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
  //     yData: [30, 132, 80, 134]
  //   }
  // },
  mounted () {
    // const { name, xData, yData } = this
    console.log(this.$refs)
    this.$refs.chart_line_tem.initChart(this.tem_title, this.tem_his_time, this.tem_his_static)
    this.$refs.chart_line_press.initChart(this.press_title, this.press_his_time, this.press_his_static)
    this.$refs.chart_line_heart.initChart(this.heart_title, this.heart_his_time, this.heart_his_static)

    // this.$nextTick(() => {
    //   const { name, xData, yData } = this
    //   console.log(this.$refs)
    //   this.$refs.chart_line_one[0].initChart(name, xData, yData)
    // })
  },
  components: {
  }
}

</script>

<style lang="less" scoped>
.van-cell{
  padding-top:0px;
}
.van-cell-group-biyan{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 45px;
  width: 117px;
  box-shadow: 0 0 8px #7742E4;
  margin-top:10px;
}

.van-cell-group-chouyan{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 45px;
  width: 117px;
  box-shadow: 0 0 8px #1284E8;
  margin-top:10px;
}

.van-cell-group-daheqian{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 45px;
  width: 117px;
  box-shadow: 0 0 8px #F36052;
  margin-top:10px;
}

.van-cell-group-dadianhua{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 45px;
  width: 117px;
  box-shadow: 0 0 8px rgb(50, 229, 217);
  margin-top:10px;
}
span{
  font-size: 5px;
}
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
.facts{
  display:flex;
}

.health_fact{
  // background: pink;
  flex: 1;
}

</style>

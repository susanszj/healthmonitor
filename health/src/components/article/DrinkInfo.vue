<template>
  <div>

    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <!-- 体温和血压的健康指标 -->

          <div class="title-box">
            <!-- 图标 -->
            <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
            <!-- <van-icon name="cart-o" color="#1989fa" /> -->
            <i class="iconfont icon-drink" style="margin-left: 10px;"></i>
            <!-- 标题 -->
            <span style="margin-right: 180px;">{{tem_title}}</span>
            <!-- 数值 -->
            <!-- <span>{{tem_hstatic}}</span> -->

        </div>
        <div>
            <EchartLine ref="chart_line_tem" :id="5" :name="tem_title" :xData="tem_his_time" :yData="tem_his_static"/>
          </div>

      </template>
    </van-cell>
  </div>
</template>

<script>
import EchartLine from '@/components/article/EchartLine2.vue'
export default {
  name: 'HealthInfo',
  // 自定义属性
  props: {
    // 体温
    tem_title: {
      type: String,
      default: '未饮酒'
    },
    tem_hstatic: {
      type: Number,
      default: 37
    },
    tem_his_time: {
      type: Array,
      default: function () {
        return ['2020-02', '2020-03', '2020-04', '2020-05']
      }
    },
    tem_his_static: {
      type: Array,
      default: function () {
        return [37, 38, 36, 37]
      }
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
    EchartLine
  }
}

</script>

<style lang="less" scoped>
// .van-celling{
//   // margin-right:25px;
//   border: 0.2px solid #E5E5E5;
//   box-shadow: 0 0 15px greenyellow;
//   // padding-block-end: 5px;
// }
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
  flex: 1;
}

</style>

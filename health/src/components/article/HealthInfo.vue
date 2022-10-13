<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <!-- 体温和血压的健康指标 -->

      <div class="facts">
        <van-cell-group inset class="van-cell-group-tiwen">
          <div  class="health_fact">
            <div class="title-box">
              <!-- 图标 -->
              <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
              <!-- <van-icon name="cart-o" color="#1989fa" /> -->
              <i class="iconfont icon-tiwen" ></i>

              <!-- 标题 -->
              <span style="margin-left:-40px">{{tem_title}}</span>
              <!-- 数值 -->
              <span>{{tem_his_static[3]}}℃</span>
            </div>
            <div>
              <EchartLine ref="chart_line_tem" :id="1" :name="tem_title" :xData="tem_his_time" :yData="tem_his_static" color="#7742E4"/>
            </div>
          </div>
        </van-cell-group>
        <van-cell-group inset class="van-cell-group-xueya">
          <div class="health_fact">
            <div class="title-box">
              <!-- 图标 -->
              <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
              <i class="iconfont icon-xieya" ></i>
              <!-- 标题 -->
              <span style="margin-left:-20px">{{press_title}}</span>
              <!-- 数值 -->
              <span>{{press_his_static[3]}}mmhg</span>
            </div>
            <div >
              <EchartLine ref="chart_line_press" :id="2" :name="press_title" :xData="press_his_time" :yData="press_his_static" color="#1284E8"/>
            </div>
          </div>
        </van-cell-group>
      </div>

              <!-- 心跳和血脂的健康指标 -->
      <div class="facts">
        <van-cell-group inset class="van-cell-group-xintiao">
          <div  class="health_fact">
            <div class="title-box">
              <!-- 图标 -->
              <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
              <i class="iconfont icon-heart-rate-full" ></i>
              <!-- 标题 -->
              <span style="margin-left:-25px">{{heart_title}}</span>
              <!-- 数值 -->
              <span>{{heart_his_static[3]}}次/分</span>
            </div>
            <div>
              <EchartLine ref="chart_line_heart" :id="3" :name="heart_title" :xData="heart_his_time" :yData="heart_his_static" color="#F36052"/>
            </div>
          </div>
        </van-cell-group>

        <van-cell-group inset class="van-cell-group-xuezhi">
          <div class="health_fact">
            <div class="title-box">
              <!-- 图标 -->
              <!-- <img :src="cover.images[0]" alt="" class="thumb" v-if="cover.type === 1"> -->
              <i class="iconfont icon-a-2-9_fuzhi-07-copy" ></i>
              <!-- 标题 -->
              <span style="margin-left:-35px">{{fat_title}}</span>
              <!-- 数值 -->
              <span>{{fat_his_static[3]}}次</span>
            </div>
            <div >
              <EchartLine ref="chart_line_fat" :id="4" :name="fat_title" :xData="fat_his_time" :yData="fat_his_static" color="#39A975"/>
            </div>
          </div>
      </van-cell-group>

    </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
import EchartLine from '@/components/article/EchartLine.vue'
export default {
  name: 'HealthInfo',
  // 自定义属性
  props: {
    // 体温
    tem_title: {
      type: String,
      default: '体温'
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
    },
    // 血压
    press_title: {
      type: String,
      default: '血压'
    },
    press_his_time: {
      type: Array,
      default: function () {
        return ['2020-02', '2020-03', '2020-04', '2020-05']
      }
    },
    press_his_static: {
      type: Array,
      default: function () {
        return [70, 75, 80, 75]
      }
    },
    // 心跳
    heart_title: {
      type: String,
      default: '心跳'
    },
    heart_his_time: {
      type: Array,
      default: function () {
        return ['2020-02', '2020-03', '2020-04', '2020-05']
      }
    },
    heart_his_static: {
      type: Array,
      default: function () {
        return [75, 70, 80, 75]
      }
    },
    // 血脂
    fat_title: {
      type: String,
      default: '血脂'
    },
    fat_his_time: {
      type: Array,
      default: function () {
        return ['2020-02', '2020-03', '2020-04', '2020-05']
      }
    },
    fat_his_static: {
      type: Array,
      default: function () {
        return [3.4, 3.5, 3.4, 3.3]
      }
    }

  },

  mounted () {

  },
  components: {
    EchartLine
  }
}

</script>

<style lang="less" scoped>
.van-cell{
  padding-top:0px;
}
.van-cell-group-tiwen{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 60px;
  width: 117px;
  box-shadow: 0 0 8px #7742E4;
  margin-top:10px;
}

.van-cell-group-xueya{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 60px;
  width: 117px;
  box-shadow: 0 0 8px #1284E8;
  margin-top:10px;
}

.van-cell-group-xintiao{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 60px;
  width: 117px;
  box-shadow: 0 0 8px #F36052;
  margin-top:10px;
}

.van-cell-group-xuezhi{
  padding: 10px;
  background-color: black;
  margin-left: 0px;
  height: 60px;
  width: 117px;
  box-shadow: 0 0 8px #39A975;
  margin-top:10px;
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
  background-color: black;
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
span{
  font-size: 5px;
}
</style>

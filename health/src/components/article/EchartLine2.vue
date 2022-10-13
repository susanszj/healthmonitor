<template>
  <div>
    <!-- 123{{name}}{{xData}}{{yData}} -->
  <!-- <div id="echart-line" :style="{width: '100%', height: '100%'}"></div> -->
  <div :id="id" :style="{width: '100%', height: '92%'}"></div>

  </div>
</template>

<script>

import * as echarts from 'echarts'

export default {
  // props: {
  //   name: {
  //     type: String,
  //     default: ''
  //   },
  //   xData: {
  //     type: Array,
  //     default: function () { return [1] }
  //   },
  //   yData: {
  //     type: Array,
  //     default: function () { return [2] }
  //   }
  // },
  // data () {
  //   return {
  //   }
  // },
  props: ['name', 'xData', 'yData', 'id'],
  methods: {
    initChart (name, xData, yData) {
      const getchart = echarts.init(document.getElementById(this.id))
      const option = {
        backgroundColor: 'black',
        tooltip: {
          trigger: 'axis'
        },
        // legend: {
        //   data: [name],
        //   bottom: '0%',
        //   textStyle: {
        //     color: 'white'
        //   }
        // },
        grid: { // 调整图表上下左右位置
          top: '10%',
          left: '3%',
          right: '8%',
          bottom: '11%',
          containLabel: true
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData
          // axisLine: {
          //   lineStyle: {
          //     color: 'white', // x轴的颜色
          //     width: 1 // 轴线的宽度
          //   }
          // }
        },
        yAxis: {
          type: 'value'

        },

        series: [
          {
            name: name,
            type: 'line',
            stack: '总量',
            data: yData
          }
        ]
      }

      getchart.setOption(option)
      // 随着屏幕大小调节图表
      window.addEventListener('resize', () => {
        getchart.resize()
      })
    }

  },
  mounted () {
    console.log(this.name, this.xData, this.yData)

    this.initChart(this.name, this.xData, this.yData)
  }

}
</script>

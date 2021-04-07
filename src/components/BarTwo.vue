<template>
  <div class="chart-container">
    <h2 class="chart-title">
      商品占比
    </h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot'
import data from '@/data/data2'

export default {
  name: 'BarTwo',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
    window.addEventListener('resize', this.screenAdapter)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化
    initChart () {
      const initOption = {
        data: data,
        xField: 'sales',
        yField: 'type',
        seriesField: 'type',
        autoFit: true,
        appendPadding: [8, 16, 8, 8],
        legend: false,
        colorField: 'sales',
        color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'],
        barStyle: {
          radius: [20, 20, 20, 20]
        },
        barBackground: {
          style: {
            stroke: '#01c1de',
            fill: 'rgba(0,0,0,0.1)',
            radius: [20, 20, 20, 20]
          }
        },
        label: {
          position: 'middle',
          content: (item) => {
            return item.sales + '%'
          },
          style: {
            fill: '#fff'
          }
        },
        yAxis: {
          label: {
            style: {
              fill: '#969dac'
            }
          },
          line: null,
          tickLine: null
        },
        xAxis: false,
        tooltip: {
          showContent: false
        }
      }
      this.chart = new Bar(this.$refs.chart, initOption)
      this.chart.render()
    },
    // 页面自适应
    screenAdapter () {
      this.chart.changeSize(document.getElementsByClassName('screen-main')[0].clientWidth * 3 / 11)
    }
  }
}
</script>

<style lang="scss" scoped></style>

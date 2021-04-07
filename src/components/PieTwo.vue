<template>
  <div class="chart-container">
    <h2 class="chart-title">
      玫瑰图
    </h2>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
import data from '@/data/data4'
import { Rose } from '@antv/g2plot'

export default {
  name: 'PieTwo',
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
        data,
        appendPadding: [8, 8, 0, 8],
        autoFit: true,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        colorField: 'value',
        color: ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', '#b0f7bb'],
        radius: 1,
        innerRadius: 0.1,
        label: false,
        tooltip: {
          showTitle: true,
          title: '分类占比'
        },
        sectorStyle: {
          lineWidth: 0
        },
        legend: {
          position: 'bottom',
          itemSpacing: 8,
          itemName: {
            style: {
              fill: '#969dac'
            }
          },
          marker: {
            symbol: 'square',
            spacing: 3
          }
        }
      }
      this.chart = new Rose(this.$refs.chart, initOption)
      this.chart.render()
    }
  }
}
</script>

<style lang="scss" scoped></style>

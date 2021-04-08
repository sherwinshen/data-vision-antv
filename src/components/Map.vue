<template>
  <div class="map">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
    <div class="map-wrap">
      <div id="map" ref="chart" class="chart"></div>
    </div>
  </div>
</template>

<script>
import { Scene } from '@antv/l7'
import { CountryLayer } from '@antv/l7-district'
import { Mapbox } from '@antv/l7-maps'
import ProvinceData from '@/data/provinceData'

export default {
  name: 'Map',
  data () {
    return {
      scene: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const scene = new Scene({
        id: 'map',
        // logoVisible: false,
        map: new Mapbox({
          pitch: 0,
          style: 'blank',
          zoom: 2,
          minZoom: 2,
          maxZoom: 3
        })
      })

      scene.on('loaded', () => {
        const countryLayer = new CountryLayer(scene, {
          zIndex: 100,
          data: ProvinceData,
          autoFit: true,
          joinBy: ['NAME_CHN', 'name'],
          depth: 1,
          provinceStroke: 'rgba(43, 196, 243, 1)',
          cityStroke: '#EBCCB4',
          cityStrokeWidth: 1,
          chinaNationalStroke: 'rgba(43, 196, 243, 1)',
          chinaNationalWidth: 1,
          label: {
            enable: false
          },
          fill: {
            color: 'rgba(43, 196, 243, 0.42)'
          },
          popup: {
            enable: true,
            Html: props => {
              return `<span>${props.NAME_CHN}</span>`
            }
          }
        })
        countryLayer.on('click', () => {
          // 图层点击事件
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

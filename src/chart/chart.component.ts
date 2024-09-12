import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { PrimeModule } from '../shared-module/prime-button/prime.module';

type EChartsOption = echarts.EChartsOption;

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  myChart!: echarts.ECharts;
  option!:EChartsOption
  used:string = 'استخدام';
  yearly = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
  monthly = ['1', '2', '3', '4', '5', '7', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']

  ngOnInit(): void {
    this.EechartInit();
    }
      

    EechartInit(){
      const chartDom = document.getElementById('main')!;
      this.myChart = echarts.init(chartDom);
      this.myChart.setOption(this.eChertOption());  
    
    }

    eChertOption(){
    return this.option = {
        height:'150px',

        color: ["#8a74f9"],
        tooltip: {
          backgroundColor: 'black',
          trigger: 'item',
          formatter:(params: any)=> {
            return `${params.value} استخدام`;  
          },

        axisPointer: {
          type: 'line',
          lineStyle: {
              color: '##8a74f9',
              width: 2,
              type: 'solid'
          },
      }
          
      },
        xAxis: {
          data: this.yearly,
          axisLabel: {
            fontSize: 14
          },
          axisLine: {
            show: false, // Show the axis line
            lineStyle: {
                color: 'gray', // Set the color of the axis line
                width: 4, // Set the width of the axis line
            }

          },
        axisTick: {
            show: false // Hide axis ticks
        }
        
        },
        yAxis: {
          axisLabel: {
            show: false,


        }
        },
        series: [
          {
            type: 'line',
            data: [620, 732, 901, 934, 1100, 1330, 320,1120,620,1320,1320,620],
            itemStyle: {
          },
            smooth: true,
            symbol: 'circle',
            symbolSize:3,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    { offset: 0, color: 'rgba(0, 0, 255, 0.2)' },
                    { offset: 1, color: 'rgba(0, 0, 255, 0)' }
                ]
            }
            }
          }
        ]
    };
    }

  }


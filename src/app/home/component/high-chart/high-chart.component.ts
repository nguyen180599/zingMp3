import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})
export class HighChartComponent implements OnInit {

  constructor() {
  }

  Highcharts = Highcharts;
  chartOptions = {};

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'spline',
      },
      // title: {
      //   text: '',
      // },

      credits: {  // nhãn tín dụng,đường link
        enabled: false
      },

      legend: {
        enabled: false
      },
      xAxis: [
        {
          categories: [
            '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
          ],

          // title: {
          //   text: 'tim',
          // },
          crosshair: {
            width: 1,
            color: 'rgb(39, 189, 156)',
          },
        },

        {
          linkedTo: 1,
          crosshair: {  // thanh dọc
            width: 1,
            color: 'blue',
          },
        },
        {
          linkedTo: 2,
          crosshair: {
            width: 1,
            color: 'red',
          },
        },
      ],

      yAxis: {
        title: {
          text: '',
        },
        labels: {
          enabled: false,  // ẩn trục y
        },
      },

      tooltip: {
        // pointFormat: '{series.name}: <b>{point.y}</b><br/>',
        // valueSuffix: '%',
        // shared: true,
        // valueDecimals: 2,
        useHTML: true,
        headerFormat: '<table><tr><th colspan="2"></th></tr>',
        pointFormat:
          '<tr><td rowspan="2"><img src="{series.options.custom.img}" style="width :40px; height: 40px"> </td>' +
          '<td style="color: {series.color}">{series.name}: </td>' +
          '<td rowspan="2" style="text-align: center"><b>{point.y}</b></td></tr>' +
          '<tr><td><b>bùi anh tuấn</b></td></tr>',
        footerFormat: '</table>',
        valueSuffix: ' %', // Một chuỗi để nối vào giá trị y của mỗi chuỗi
        valueDecimals: 2, // Có bao nhiêu số thập phân để hiển thị trong mỗi giá trị y của chuỗi
        valuePrefix: '~ ', // Một chuỗi để thêm vào trước giá trị y của mỗi chuỗi
      },

      plotOptions: {
        // chèn màu vào từng series
        series: {
          marker: {
            // enabled: false,
            fillColor: '#FFFFFF',
            lineWidth: 2,
            width: 10,
            lineColor: null, // inherit from series
          },

          events: {
            mouseOver: (ev: any) => {
              ev.target.update({
                marker: {
                  enabled: true,
                  fillColor: 'red',
                  lineWidth: 2,
                  width: 10,
                  lineColor: null, // inherit from series
                },
              });
            },
            mouseOut: (ev: any) => {
              ev.target.update({
                marker: {
                  enabled: false,
                },
              });
            },
          },
        },
      },

      series: [
        {
          name: '',
          color: 'rgb(39, 189, 156)',

          data: [
            34, 38, 45, 48, 24, 26, 32, 35, 42, 43, 50, 45, 24, 26, 25, 21, 22,
            25, 27, 22, 20, 20, 22, 25,
          ],
          custom: {
            img: '../assets/img/1a.jpg',
          },

          marker: {
            symbol: 'circle', // hình dạng chuỗi
          },
          xAxis: 0,
        },
        {
          name: '',
          color: 'blue',

          data: [
            23, 24, 25, 18, 24, 26, 22, 25, 22, 23, 20, 25, 24, 26, 25, 21, 22,
            25, 27, 12, 10, 20, 22, 25,
          ],
          custom: {
            img: '../../../../assets/images/khongnoinhieu.jpg',
          },

          marker: {
            symbol: 'circle', // hình dạng chuỗi
          },
          xAxis: 1,
        },

        {
          name: '',
          color: 'rgb(227, 80, 80)',
          data: [
            {
              y: 20,
              // marker:{
              //   symbol:'url(https://photo-playlist-zmp3.zadn.vn/s2/v2/mixartist?src=HavwqN7EvKCI1og5AfZbHm1SVzXfcEP71bnynsY1waTKMd7FRuMyI05USyuwrxuSLWaWcphJk4vR2ZYKSeQq20aPVy0am_DANs-UIMMaNf7TzL52fZBTXfgX1mJXS8lWodgUs_tv43_CrZtXyXtHaWUO5m1z&size=thumb/240_240)'
              // }
            },
            16,
            15,
            11,
            12,
            15,
            17,
            12,
            10,
            10,
            12,
            24,
            11,
            12,
            12,
            10,
            22,
            24,
            16,
            11,
            12,
            24,
            12,
            20,
          ],
          custom: {
            img: '../assets/img/2a.jpg',
          },
          marker: {
            symbol: 'circle',
          },

          xAxis: 2,
        },
      ],
    };
  }

}

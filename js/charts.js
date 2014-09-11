var casesColorPalette = ['rgb(255,237,160)','rgb(254,178,76)','rgb(240,59,32)'];
var deathsColorPalette = ['rgb(236,226,240)','rgb(166,189,219)','rgb(28,144,153)'];

/*
This function generates the stacked bar graph
*/
function generateEbolaStackedBarChart(bindTo, url) {
	return c3.generate({
		bindto: bindTo,
		data: {
			url: url,
			type: 'bar',
			groups: [
				['confirmed_cases', 'probable_cases', 'suspected_cases'],
				['confirmed_deaths', 'probable_deaths', 'suspected_deaths']
			],
			x: "country",
			names: {
				confirmed_cases: "Confirmed Cases",
				probable_cases: "Probable Cases",
				suspected_cases: "Suspected Cases",
				confirmed_deaths: "Confirmed Deaths",
				probable_deaths: "Probable Deaths",
				suspected_deaths: "Suspected Deaths"			
			},
			colors: {
				confirmed_cases: casesColorPalette[2],
				probable_cases: casesColorPalette[1],
				suspected_cases: casesColorPalette[0],
				confirmed_deaths: deathsColorPalette[2],
				probable_deaths: deathsColorPalette[1],
				suspected_deaths: deathsColorPalette[0]			
			}
		},
		axis: {
			y: {
				show: true
			},
			x: {
				show: true,
				label: {
					position: "middle"
				},
				type: "category"
			}		
		},
		tooltip: {
			format: {
				value: d3.format(',')
			}
		},
		size: {
			height: 300,
			width: 800
		},
		bar: {
			width: {
				ratio: 0.5 // this makes bar width 50% of length between ticks
			}
		}
	});
}

/*
This function generate a gauge chart for a country 
*/
function generateGaugeChart(bindTo) {
	return c3.generate({
		bindto: bindTo,
		data: {
			x: 'date',
			url: 'data/idp_data.csv',
			type: 'gauge'
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%B, %Y'
				}
			},
			y: {
				show: true
			}
		},
		tooltip: {
			format: {
				value: d3.format(',')
			}
		},
		point: {
			show: false
		},
		size: {
			height: 100,
			width: 100
		}
	});
};

var barChartTotal = generateEbolaStackedBarChart("#cumulativeChart","data/cumulative.csv");
var barChartLast21Days = generateEbolaStackedBarChart("#last21DaysChart","data/last_21days.csv")

  //// section with the different gauge charts -- 5 of them
  // Country 1
  var gaugeChart1 = c3.generate({
    bindto: '#gaugeChart1',
      data: {
        x: 'date',
        url: 'data/idp_data.csv',
        type: 'gauge'
      },
      axis: {
        x: {
          type: 'timeseries',
            tick: {
              format: '%B, %Y'
            }
        },
        y: {
          show: true
        }
      },
      tooltip: {
        format: {
          value: d3.format(',')
        }
      },
      point: {
        show: false
      },
      size: {
        height: 100,
        width: 100
      }
  });

  // Country 2
  var gaugeChart2 = c3.generate({
    bindto: '#gaugeChart2',
      data: {
        x: 'date',
        url: 'data/idp_data.csv',
        type: 'gauge'
      },
      axis: {
        x: {
          type: 'timeseries',
            tick: {
              format: '%B, %Y'
            }
        },
        y: {
          show: true
        }
      },
      tooltip: {
        format: {
          value: d3.format(',')
        }
      },
      point: {
        show: false
      },
      size: {
        height: 100,
        width: 100
      }
  });

  // Country 3
  var gaugeChart3 = c3.generate({
    bindto: '#gaugeChart3',
      data: {
        x: 'date',
        url: 'data/idp_data.csv',
        type: 'gauge'
      },
      axis: {
        x: {
          type: 'timeseries',
            tick: {
              format: '%B, %Y'
            }
        },
        y: {
          show: true
        }
      },
      tooltip: {
        format: {
          value: d3.format(',')
        }
      },
      point: {
        show: false
      },
      size: {
        height: 100,
        width: 100
      }
  });

  // Country 4
  var gaugeChart4 = c3.generate({
    bindto: '#gaugeChart4',
      data: {
        x: 'date',
        url: 'data/idp_data.csv',
        type: 'gauge'
      },
      axis: {
        x: {
          type: 'timeseries',
            tick: {
              format: '%B, %Y'
            }
        },
        y: {
          show: true
        }
      },
      tooltip: {
        format: {
          value: d3.format(',')
        }
      },
      point: {
        show: false
      },
      size: {
        height: 100,
        width: 100
      }
  });

  // Country 5
  var gaugeChart5 = c3.generate({
    bindto: '#gaugeChart5',
      data: {
        x: 'date',
        url: 'data/idp_data.csv',
        type: 'gauge'
      },
      axis: {
        x: {
          type: 'timeseries',
            tick: {
              format: '%B, %Y'
            }
        },
        y: {
          show: true
        }
      },
      tooltip: {
        format: {
          value: d3.format(',')
        }
      },
      point: {
        show: false
      },
      size: {
        height: 100,
        width: 100
      }
});
//var casesColorPalette = ['rgb(255,237,160)','rgb(254,178,76)','rgb(240,59,32)'];
//var deathsColorPalette = ['rgb(236,226,240)','rgb(166,189,219)','rgb(28,144,153)'];
var casesColorPalette = ['rgb(255,237,160)','rgb(95, 107, 119)','rgb(240,59,32)'];
var deathsColorPalette = ['rgb(0,0,0)','rgb(166,189,219)','rgb(28,144,153)'];
var cases

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
				show: true,
				max: 2000
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
			height: 300
		},
		bar: {
			width: {
				ratio: 0.5 // this makes bar width 50% of length between ticks
			}
		}
	});
};

function getMainChartData(data) {
	return [
		['country', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
		['Guinea', 648, 812, 862, 861, 936, 942], 
		['Liberia', 1378, 1871, 2046, 2081, 2407, 2710],
		['Nigeria', 19, 22, 21, 21, 21, 21],
		['Senegal', null, 1, 3, 3, 1, 1],
		['Sierra Leone', 1026, 1261, 1361, 1424, 1620, 1673]
	];
};

function getCountryChartData(data, country) {
	switch(country) {
		case "Guinea":
			return [
				['casedef', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
				['confirmed', 482, 604, 664, 678, 743, 750], 
				['probable', 141, 152, 151, 151, 162, 162], 
				['suspected', 25, 56, 47, 32, 31, 30]
			];
			break;
		case "Liberia":
			return [
				['casedef', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
				['confirmed', 322, 614, 634, 654, 790, 812],
				['probable', 674, 888, 969, 974, 1078, 1233],
				['suspected', 382, 369, 443, 453, 539, 675]
			];
			break;
		case "Sierra Leone":
			return [
				['casedef', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
				['confirmed', 935, 1146, 1234, 1287, 1464, 1513],
				['probable', 37, 37, 37, 37, 37, 37],
				['suspected', 54, 78, 90, 100, 119, 123]
			];
			break;
		case "Nigeria":
			return [
				['casedef', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
				['confirmed', 15, 18, 19, 19, 19, 19], 
				['probable', 1, 1, 1, 1, 1, 1], 
				['suspected', 3, 3, 1, 1, 1, 1]
			];
			break;
		case "Senegal":
			return [
				['casedef', '2014-08-29', '2014-09-05', '2014-09-08', '2014-09-12', '2014-09-16', '2014-09-18'], 
				['confirmed', null, 1, 1, 1, 1, 1], 
				['probable', null, null, 0, 0, 0, 0], 
				['suspected', null, null, 2, 2, 0, 0] 			
			];
			break;
	};
};

function generateMainChart(bindTo,data) {
	return c3.generate({
		bindto: bindTo,
		data: {
			x: "country",
			columns: getMainChartData(),
			types: {
				Guinea: "spline",
				Liberia: "spline",
				Nigeria: "Spline",
				SierraLeone: "area-spline",
				Senegal: "spline"
			}
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {format: '%Y-%m-%d'}
			}
		},
		size: {
			height: 300
		}
	});
};


function generateCountryChart(bindTo, data, country) {
	return c3.generate({
		bindto: bindTo,
		data: {
			x: "casedef",
			columns: getCountryChartData(data, country),
			types: {
				confirmed: 'area-spline',
				probable: 'area-spline',
				suspected: 'area-spline'
			},
			groups: [['confirmed','probable','suspected']]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {format: '%Y-%m-%d'}
			}
		},
		size: {
			height: 300
		}
	});
}
/*
This function generate a gauge chart for a country 
*/
function generateGaugeChart(bindTo, value) {
	return c3.generate({
		bindto: bindTo,
		data: {
			columns: [
				["data", value],
			],
			type: 'gauge'
		},
		color: {
			pattern: ["#FF0000", "#F97600", "F6C600", "#60B044"]
		},
		tooltip: {
			format: {
				value: d3.format(',')
			}
		},
		size: {
			height: 100,
			width: 100
		}
	});
};

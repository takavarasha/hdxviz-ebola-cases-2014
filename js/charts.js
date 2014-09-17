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

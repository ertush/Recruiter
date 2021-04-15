var themeState = false; // darkTheme

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');

var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: 'application',
			backgroundColor: 'rgba(52, 128, 210, 1)',
			pointBackgroundColor: 'rgba(52, 128, 210, 1)',
			borderWidth: 1,
			borderColor: 'rgba(52, 128, 210, 1)',
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var fontColor =  themeState ? '#5e6a81' : '#75adee';
var gridLinesColor = themeState ? '#fff8e5' : 'rgba(200, 200, 200, 0.08)';
var toolTipBgColor = themeState ? 'white' : 'rgba(0,0,0,0.4)';

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		yAxes: [{
      ticks: {
        fontColor: '#fff'
      },
			gridLines: {
				color: '#fff8e5',
				lineWidth: 1
			}
		}],
    xAxes:[{
      ticks: {
        fontColor: '#fff'
      }
    }]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: '#00c7d6'
	},
	tooltips: {
		titleFontFamily: 'Poppins',
		backgroundColor: toolTipBgColor,
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});

document.querySelector('.switch-node').addEventListener('click', function () {
	
	const appLogoClasses = document.querySelector(".app-logo").classList
	const appMainClasses = document.querySelector(".app-main").classList
	const appLeftClasses = document.querySelector(".app-left").classList
	const appRightClasses = document.querySelector(".app-right").classList
	const bodyClasses = document.querySelector("body").classList

	const iconClasses = document.querySelector('#switch-icon').classList
	iconClasses.replace(iconClasses[1], `${iconClasses[1] === 'fa-moon' ?  'fa-sun' : 'fa-moon'}`);
	if(iconClasses[2] === 'icon-dark'){ 
		iconClasses.remove('icon-dark');
		iconClasses.add('icon-light');
	} 
	else {
		iconClasses.remove('icon-light');
		iconClasses.add('icon-dark');
	} 
	
	const switchClasses = document.querySelector('.switch-wrapper').classList;
	switchClasses.replace(switchClasses[1], `${switchClasses[1] === 'switch-wrapper-dark' ? 'switch-wrapper-light': 'switch-wrapper-dark'}`);

	const chartContainerClasses =  document.querySelectorAll('.chart-container')
	
	themeState = iconClasses[1] === 'fa-moon' ? false : true;


	if(themeState){ // use lightTheme
		appLogoClasses.replace(appLogoClasses[1], 'light-theme')
		appMainClasses.replace(appMainClasses[1], 'light-theme')
		bodyClasses.replace(bodyClasses[0], 'light-theme')
		appLeftClasses.replace(appLeftClasses[1], 'light-theme')
		appRightClasses.replace(appRightClasses[1], 'light-theme')
	} else { // use darkTheme
		appLogoClasses.replace(appLogoClasses[1], 'dark-theme')
		appMainClasses.replace(appMainClasses[1], 'dark-theme')
		bodyClasses.replace(bodyClasses[0], 'dark-theme')
		appLeftClasses.replace(appLeftClasses[1], 'dark-theme')
		appRightClasses.replace(appRightClasses[1], 'dark-theme')
	}


	chartContainerClasses.forEach(element => {
		let elementOwnClasses = element.classList

		if(themeState){ // use lightTheme
		
			elementOwnClasses.replace(elementOwnClasses[1], 'light-theme')
			
		} else { // use darkTheme
			elementOwnClasses.replace(elementOwnClasses[1], 'dark-theme')
			
		}

	})



	

});

document.querySelector('.open-right-area').addEventListener('click', function () {
    document.querySelector('.app-right').classList.add('show');
});

document.querySelector('.close-right').addEventListener('click', function () {
    document.querySelector('.app-right').classList.remove('show');
});

document.querySelector('.menu-button').addEventListener('click', function () {
	document.querySelector('.app-left').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    document.querySelector('.app-left').classList.remove('show');
});


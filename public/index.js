var themeState = false; // darkTheme

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');

var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: '',
			backgroundColor: gradient,
			pointBackgroundColor: 'violet',
			borderWidth: 1,
			borderColor: 'violet',
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

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
        fontColor: `${themeState ? '#5e6a81' : '#75adee'}`
      },
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}],
    xAxes:[{
      ticks: {
        fontColor: `${themeState ? '#5e6a81' : '#75adee'}`
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
		backgroundColor: 'rgba(0,0,0,0.4)',
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

	const chartContainerClasses =  document.querySelector('.chart-container').classList;

	
	themeState = iconClasses[1] === 'fa-moon' ? false : true;

	
	
	if(themeState){ // use lightTheme
		
		chartContainerClasses.replace(chartContainerClasses[1], 'light-theme')
		
	} else { // use darkTheme
		chartContainerClasses.replace(chartContainerClasses[1], 'dark-theme')
		
	}

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


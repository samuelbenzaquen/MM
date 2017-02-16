/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: 'en',
	timeFormat: 12,
	units: 'imperial',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			position: 'top_left',
			config: {
				calendars: [
					{
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					},
					{
						url: 'webcal://calendar.google.com/calendar/ical/en.jewish%23holiday%40group.v.calendar.google.com/public/basic.ics'
					},
					{
						url: 'webcal://calendar.google.com/calendar/ical/samuel.benzaquen%40gmail.com/private-cf3d6e7f6ccad51ea235eacc67a09484/basic.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'bottom_bar'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Philadelphia',
				locationID: '',  //ID from http://www.openweathermap.org
				appid: '57591343e2c92d7e47fe8fddb49d0a1c'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: 'Weather Forecast',
			config: {
				location: 'Philadelphia',
				locationID: '4560349',  //ID from http://www.openweathermap.org
				appid: '57591343e2c92d7e47fe8fddb49d0a1c'
			}
		},
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
					{
						title: "Google",
						url: "https://news.google.com/?output=rss"
					}
				],
				showSourceTitle: false,
				showPublishDate: false
			}
		},
		{
			module: 'stocks',
			position: 'fullscreen_below',
			config: {
				stocks: 'MSFT,AAPL,GOOG,INTC,CICS,TSLA,FB,AMZN', // stock symbols
				updateInterval: 37000 // update interval in milliseconds
			}
		},
		
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}

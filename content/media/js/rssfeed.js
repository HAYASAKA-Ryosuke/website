$(document).ready(function () {
	$('#blog').rssfeed('http://kuroneko0208.hatenablog.com/feed',{}, function(e) {
		$(e).find('div.rssBody').vTicker();
	});
	$('#github').rssfeed('https://github.com/HAYASAKA-Ryosuke.atom',{}, function(e) {
		$(e).find('div.rssBody').vTicker();
	});
});

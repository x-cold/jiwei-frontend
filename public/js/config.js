require.config({
	paths: {
		jquery: './jquery/dist/jquery.min'
	}
});

require(['jquery'], function($) {
	$('#header').load('./_partial/header.html');
	$('#footer').load('./_partial/footer.html');
});
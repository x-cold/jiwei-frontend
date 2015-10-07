require.config({
	paths: {
		jquery: './jquery/dist/jquery.min'
	}
});

require(['jquery'], function($) {
	$('#header').load('./_partial/header.html');
	$('#wrapper').load('./_partial/task-list.html');
	$('#aside').load('./_partial/aside.html');
	$('#footer').load('./_partial/footer.html');
});
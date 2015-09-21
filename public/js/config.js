requirejs.config({
    baseUrl: '/jiwei/public/js',
    paths: {
        app: 'app',
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angularjs/angular'
    },
    shim: {
        angular: {exports: 'angular'}
    }
});

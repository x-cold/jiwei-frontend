requirejs.config({
    baseUrl: '../public/js',
    paths: {
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angular/angular',
        app: 'app'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['jquery']
        }
    },
    waitSeconds: 60
});
requirejs([
    'angular'
]);
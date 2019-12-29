step 0 : copy Cors.php and past into http middleware folder
step 1 : add the following line into kernel protected $middleware array to register Cors class as global
    protected $middleware = [
        \App\Http\Middleware\Cors::class,
    ];
step 2 :
   serve post request
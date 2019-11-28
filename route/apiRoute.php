<?php
/**
 * Api路由
 */

use think\facade\Route;

Route::group('api', function() {
    Route::rule('5ddcd8f9283dd','api/CsActivity/getActivity', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5dddded8be8af','api/CsActivity/store', 'POST')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5dde089b6a69c','api/CsUser/find', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5dde10d7a451c','api/CsUser/save', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5dde14a2deca2','api/CsUser/findu', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5dde1ce105568','api/CsUser/findc', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5ddf40016d93f','api/CsUser/mtm', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);Route::rule('5ddf4b7e92d83','api/CsUser/dbt', '*')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);
    //MISS路由定义
    Route::miss('api/Miss/index');
})->middleware('ApiResponse');

<?php

namespace app\api\controller;


use think\facade\App;

class Index extends Base {
    public function index() {
        $this->debug([
            'TpVersion' => App::version()
        ]);

        return $this->buildSuccess([
            'Product'    => config('apiadmin.APP_NAME'),
            'Version'    => config('apiadmin.APP_VERSION'),
            'Company'    => config('apiadmin.COMPANY_NAME'),
            'access_token'      => config('apiadmin.access_token')
        ]);
    }
}

<?php

namespace app\api\controller;


use app\util\StrRandom;
use think\facade\App;

class Miss extends Base {
    public function index() {
        $this->debug([
            'TpVersion' => App::version(),
            'Float' => StrRandom::randomPhone()
        ]);

        return $this->buildSuccess([
            'Product'    => config('apiadmin.APP_NAME'),
            'Version'    => config('apiadmin.APP_VERSION'),
            'Company'    => config('apiadmin.COMPANY_NAME'),
            'AccessToken'      => "123"
        ]);
    }
}

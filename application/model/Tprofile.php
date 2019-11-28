<?php

namespace app\model;
use app\model\Tuser;
class Tprofile extends Base {
  public function user()
    {
        return $this->belongsTo(Tuser::class,'uid','id');
    }
}
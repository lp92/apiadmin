<?php

namespace app\model;
use app\model\Tuser;
use app\model\Topic;
class Tcomment extends Base {
    public function user()
    {
        return $this->belongsTo(Tuser::class);
    }
//每个评论多个话题
 public function topics()
    {
        //return $this->hasMany(Topic::class,'pid','id')->field('topicname');
		return $this->hasMany(Topic::class,'pid','id');
    }
}

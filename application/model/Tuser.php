<?php

namespace app\model;
use app\model\Tprofile;
use app\model\Tcomment;
use app\model\Topic;
use app\model\Troles;
class Tuser extends Base {
 //关联一个资料
public function profilexx(){
	return $this->hasone(Tprofile::class,'uid')->field('email');
	//return $this->hasone(Tprofile::class,'uid')->bind('email')->field('id,name,email,uid');
}
//关联多个评价
 public function comments()
    {
        return $this->hasMany(Tcomment::class,'uid','id')->field('content');;
    }
	
	////每个用户有多个评论，每个评论有多个话题---查看每个用户的话题
 public function topics()
    {
        return $this->hasManyThrough(Topic::class,Tcomment::class,'uid','pid','id')->field('topicname');
    }
	//用户有多个角色，角色有多个用户
	   public function roles()
    {
		//belongsToMany('关联模型名','中间表名','外键名','当前模型关联键名',['模型别名定义']);,'trolesuser','uid','rid'
        return $this->belongsToMany('Troles','tuser_troles','troles_id','tuser_id',['xxx1']);
    }
}

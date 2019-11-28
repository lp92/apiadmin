<?php

namespace app\api\controller;


use app\model\Tactivity;
use app\util\ReturnCode;

class CsActivity extends Base
{	
    /*
     * 活动列表
     */
    public function index(){
		//获取所有活动
        $activities = Tactivity::all();
		//定义活动列表数组
        $data = [];
		//将活动数据集转为数组格式
        foreach($activities as $key=>$value){
            $data[$key] = $value;
        }
        return $this->buildSuccess($data);
    }

    /*
     * 获取活动详情
     */
    public function getActivity(){
		//获取用户发来的活动id参数
        $activity_id = $this->request->get('xid');
		//获取单个活动对象
        $activityObj = Tactivity::get(['id'=>$activity_id]);
		//判断活动是否存在
        if($activityObj){
            return $this->buildSuccess($activityObj->toArray());
        }else{
            return $this->buildFailed(ReturnCode::INVALID, '该活动不存在');
        }
    }
    /*
     * 添加活动
     */
    public function store(){
		//获取用户发来的活动参数
        $data = $this->request->post();
		//写入创建时间
        //$data['create_time']=time();
		//实例化模型
        $activity = new Tactivity($data);
		//保存数据至模型
        $activity->allowField(true)->save();
        return $this->buildSuccess($activity->toArray(), '添加成功');
    }

}
<?php
namespace app\api\controller;
use app\model\Tuser;
use app\model\Tprofile;
use app\model\Tcomment;
use app\util\ReturnCode;
use think\db;
class CsUser extends Base {
	public function find() {
		$user = Tuser::get(1);
		//输出profile关联模型的email属性
		if(empty($user)) {
			return $this->buildFailed(ReturnCode::INVALID, '用户不存在');
		}
		$profile=$user->profilexx;
		if(empty($profile)) {
			return $this->buildFailed(ReturnCode::INVALID, '资料不存在');
		}
		return $this->buildSuccess( $user ->toArray(),'查询成功');
	}
	public function save() {
		//获取用户发来的参数
		$user = Tuser::find(1);
		//保存数据至模型
		$user->profilexx()->save(['email' => 'thinkphp']);
		return $this->buildSuccess($user->toArray(), '添加成功');
	}
	public function findu() {
		$profile = Tprofile::find(1);
		// 输出资料关联的用户
		return $this->buildSuccess($profile->user->toArray(), '查询成功成功');
	}
	//查询用户评论
	public function findc() {
		$u = Tuser::get(1);
		// 获取用户的所有评论
		//return $this->buildSuccess($u->comments->toArray(), '查询成功成功');
		// 也可以进行条件搜索
		//return $this->buildSuccess(($u->comments()->where('status',1)->select())->toArray(), '查询成功成功');
		// 批量增加关联数据
		// $u->comments()->saveAll([
   // ['content'=>'thinkphp','status'=>'1'],
    //['content'=>'onethink'],
//]);
		///---远程一对多..获取用户的所有话题
		return $this->buildSuccess(($u->topics()->where('topic.statusx',1)->select())->toArray(), '查询成功成功');
	}
	
	//多对多
	public function mtm() {
		
		$user = Tuser::get(1);
		$user->roles;
// 获取用户的所有角色
return $this->buildSuccess($user->toArray(), '查询成功');
	}
	//db操作
	public function dbt() {
		//dump(Db::query('select * from tuser where id=?',[2]));
		$u1 = Db::query('SELECT tuser.id,troles.`name`,tuser.x2 FROM tuser INNER JOIN tuser_troles ON tuser.id = tuser_troles.tuser_id INNER JOIN troles ON tuser_troles.troles_id = troles.id where tuser.id=?',[2]);
		return $this->buildSuccess($u1);
		
		
		//return $this->buildSuccess($user->toArray(), '查询成功');
//Db::execute('insert into think_user (id, name) values (?, ?)',[8,'thinkphp']);
	}
	
	
}
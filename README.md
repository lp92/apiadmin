> 第一步：安装代码
```
composer create-project apiadmin/apiadmin4
```
```
你也可以：先获取基础代码 git clone https://gitee.com/apiadmin/ApiAdmin.git   再使用composer安装 composer install
```
> 第二步：检测环境以及配置数据库
```
php think apiadmin:install --db mysql://root:123456@127.0.0.1:3306/apiadmin#utf8
```
> 第三步：数据库迁移
```
php think migrate:run
```
> 数据模型
$activity_id = $this->request->get('xid');
$activityObj = Tactivity::get(['id'=>$activity_id]);
// 查询博客数据
$blog = Blog::find(3);
// 获取博客所属分类模型
$cate = Cate::where('id', $blog->cate_id)->find();
#--模型关联
##---1对1--例子一个用户（Tuser）有一个用户资料(Tprofile)
主表：hasone(关联模型名称，主键名，【模型别名定义】)
附表：belongsTo('关联模型名','外键名','关联表主键名',['模型别名定义'],'join类型');
关联模型定义查询的字段feild()
hasWhere方法。
##---一对多关联---例子一个用户有多个评论Tuser,Tcomments
hasMany('关联模型名','外键名','主键名',['模型别名定义']);
##---远程一对多(1.每个城市有多个用户,2.每个用户有多个话题,3.城市和话题之间并无关)
hasManyThrough('关联模型名','中间模型名','中间模型表外键名','关联模型表关联中间模型的外键','当前模型主键名',['模型别名定义']);
##---多对多
belongsToMany('关联模型名','中间表名','外键名','当前模型关联键名',['模型别名定义']);
##---use think\db;
$u1 = Db::query('SELECT tuser.id,troles.`name`,tuser.x2 FROM tuser INNER JOIN tuser_troles ON tuser.id = tuser_troles.tuser_id INNER JOIN troles ON tuser_troles.troles_id = troles.id where tuser.id=?',[2]);
		return $this->buildSuccess($u1);

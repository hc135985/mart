-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.0.96-community-nt - MySQL Community Edition (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  10.3.0.5918
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 mart.address 结构
DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `aid` char(20) NOT NULL,
  `auser` char(20) default NULL COMMENT '收货人昵称',
  `mobile` char(20) default NULL COMMENT '手机号',
  `province` char(20) default NULL COMMENT '省份',
  `city` char(20) default NULL COMMENT '城市',
  `county` char(20) default NULL COMMENT '区县',
  `street` char(50) default NULL COMMENT '街道门牌号',
  `uid` char(20) default NULL COMMENT '收货地址归属人',
  PRIMARY KEY  (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  mart.address 的数据：~5 rows (大约)
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`aid`, `auser`, `mobile`, `province`, `city`, `county`, `street`, `uid`) VALUES
	('2303d70281f4de358791', '黑楠', '13031061118', '北京', '北京市', '海淀区', '八维教育', 'db2ad7d1f211f42225d3'),
	('2431a0581bbe10585c04', 'heinan', '13031061118', '北京', '北京市', '海淀区', '八维教育', 'db2ad7d1f211f42225d3'),
	('4f6bdae618bda0cc9913', 'heinan', '13031061118', '北京', '北京市', '海淀区', '八维教育', '5af71c518b36c91f4cfe'),
	('e7c123584bb84caba27a', 'heinan', '13031061118', '北京', '北京市', '海淀区', '八维教育', 'db2ad7d1f211f42225d3'),
	('e7d90ad2f2804a51c8f9', '黑楠', '13031061118', '北京', '北京市', '海淀区', '八维教育', '5af71c518b36c91f4cfe');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 导出  表 mart.carousel 结构
DROP TABLE IF EXISTS `carousel`;
CREATE TABLE IF NOT EXISTS `carousel` (
  `cid` char(20) NOT NULL,
  `tit` char(30) default NULL COMMENT '轮播图-活动标题',
  `start_time` char(20) default NULL COMMENT '轮播图-活动开始时间',
  `end_time` char(20) default NULL COMMENT '轮播图-活动活动结束时间',
  `img` char(150) default NULL COMMENT '轮播图-图片',
  `type` int(11) default '0' COMMENT '投放开关 0 关闭 1 开启',
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='轮播图\r\n广告图';

-- 正在导出表  mart.carousel 的数据：~7 rows (大约)
DELETE FROM `carousel`;
/*!40000 ALTER TABLE `carousel` DISABLE KEYS */;
INSERT INTO `carousel` (`cid`, `tit`, `start_time`, `end_time`, `img`, `type`) VALUES
	('00ed2cd419f93db9bed4', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 0),
	('731f1506d54aa7f5899f', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 1),
	('74cb7d1981a30cec89fa', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 1),
	('7bac19a6f7571ba73425', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 0),
	('8401bf451cc15f4b037c', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 1),
	('9dd002abcfdaffc938e6', '你好周杰伦', '1594714797133', '1594714797133', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3545168918,2289094124&fm=26&gp=0.jpg', 1),
	('c0928067db50504767af', 'hahah', '123213', '456', 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1594715622&di=54d2b8e9b7bfa2881250ed7bc23e5afb&src=http', 0);
/*!40000 ALTER TABLE `carousel` ENABLE KEYS */;

-- 导出  表 mart.comment 结构
DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `cid` char(20) NOT NULL COMMENT '评论id',
  `pid` char(20) NOT NULL COMMENT '商品id',
  `uid` char(20) default NULL COMMENT '用户id',
  `uphoto` char(150) default NULL COMMENT '用户头像',
  `uname` char(20) default NULL COMMENT '用户昵称',
  `comment` varchar(255) default NULL COMMENT '评论',
  `score` int(11) default '5' COMMENT '默认5星好评',
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论表';

-- 正在导出表  mart.comment 的数据：~4 rows (大约)
DELETE FROM `comment`;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` (`cid`, `pid`, `uid`, `uphoto`, `uname`, `comment`, `score`) VALUES
	('2cf629cf23bc05af2461', '97f83f6c99e19ee73642', '5af71c518b36c91f4cfe', '455', 'zhangsan', '777', 3),
	('2cf629cf23bc05af246d', '97f83f6c99e19ee73642', 'db2ad7d1f211f42225d3', '123', 'heinan', '666', 5),
	('73415ac3f1eb101b121b', 'db2ad7d1f211f42225d3', '12313', '', '', '', 0),
	('b590cfb2ab35915198a7', '97f83f6c99e19ee73642', 'db2ad7d1f211f42225d3', '12313', '', '', 0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;

-- 导出  表 mart.identity 结构
DROP TABLE IF EXISTS `identity`;
CREATE TABLE IF NOT EXISTS `identity` (
  `identity_id` char(20) NOT NULL COMMENT '身份类型id',
  `identity_type` int(1) NOT NULL default '0' COMMENT '身份类型 0 管理员 1 普通用户',
  `identity_text` char(20) default NULL COMMENT '身份类型名称',
  PRIMARY KEY  (`identity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='身份表';

-- 正在导出表  mart.identity 的数据：~2 rows (大约)
DELETE FROM `identity`;
/*!40000 ALTER TABLE `identity` DISABLE KEYS */;
INSERT INTO `identity` (`identity_id`, `identity_type`, `identity_text`) VALUES
	('5f34104e6680f49372e9', 0, '管理员'),
	('f69d451429f41dbea7ed', 1, '普通用户');
/*!40000 ALTER TABLE `identity` ENABLE KEYS */;

-- 导出  表 mart.login 结构
DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `uid` varchar(20) NOT NULL,
  `username` char(20) default NULL COMMENT '用户名 最多20个字符',
  `password` char(20) default NULL COMMENT '密码 最多20个字符',
  `identity_id` char(20) default NULL COMMENT '用户身份id',
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户登录';

-- 正在导出表  mart.login 的数据：~4 rows (大约)
DELETE FROM `login`;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` (`uid`, `username`, `password`, `identity_id`) VALUES
	('5af71c518b36c91f4cfe', 'haonan666', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed'),
	('5f13db6cd93c32dfb37e', 'haonan888', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed'),
	('db2ad7d1f211f42225d3', 'haonan', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed'),
	('f4515c0b41dce27d33a5', 'haonan111', '96cae35ce8a9b0244178', 'f69d451429f41dbea7ed');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- 导出  表 mart.order 结构
DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `oid` char(20) NOT NULL,
  `list` varchar(255) default '' COMMENT '订单列表',
  `aid` char(50) default NULL COMMENT '收货地址id',
  `uid` char(50) default NULL COMMENT '用户id',
  `summary` char(20) default NULL COMMENT '总金额',
  `total` char(20) default NULL COMMENT '商品总数',
  `status` int(1) default '1' COMMENT '订单状态，默认1  待付款',
  PRIMARY KEY  (`oid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单表';

-- 正在导出表  mart.order 的数据：~3 rows (大约)
DELETE FROM `order`;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (`oid`, `list`, `aid`, `uid`, `summary`, `total`, `status`) VALUES
	('9d2aa8f65aa9ba08b044', '"[1,2,3]"', 'e7d90ad2f2804a51c8f9', '5af71c518b36c91f4cfe', '300', '5', 1),
	('e04238360dba695afed2', '"[1,2,3,4]"', 'e7d90ad2f2804a51c8f9', '5af71c518b36c91f4cfe', '300', '6', 3),
	('e771651d3c40aa027085', '"[1,2,3,4,5]"', 'e7d90ad2f2804a51c8f9', '5af71c518b36c91f4cfe', '300', '5', 2);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;

-- 导出  表 mart.product 结构
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `pid` char(20) NOT NULL COMMENT '商品id',
  `pname` char(50) default NULL COMMENT '商品名称',
  `imgUrl` char(150) default NULL COMMENT '商品图片',
  `sales` char(20) default NULL COMMENT '商品销量',
  `original_price` char(20) default NULL COMMENT '原价',
  `sale_price` char(20) default NULL COMMENT '现价',
  `mode` char(20) default NULL COMMENT '经营模式',
  `s_type` int(5) default NULL COMMENT '商品二级分类',
  `t_type` int(5) default NULL COMMENT '商品一级分类',
  `cid` char(20) default NULL COMMENT '评论id',
  `carousel` varchar(255) default NULL COMMENT '轮播图字符串，保存多张图片路径',
  `desc` char(255) default NULL COMMENT '商品描述',
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';

-- 正在导出表  mart.product 的数据：~3 rows (大约)
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`pid`, `pname`, `imgUrl`, `sales`, `original_price`, `sale_price`, `mode`, `s_type`, `t_type`, `cid`, `carousel`, `desc`) VALUES
	('83a8707c684961cabd5f', '壳牌机油', '1', '29999', '120', '98', '自营', 0, 0, NULL, '', '大河弯弯向东流，就是这么牛！'),
	('8fea35e62b961e3f9f68', '美孚金装机油', '1', '29999', '150', '128', '自营', 0, 0, NULL, '', '大河弯弯向东流，就是这么牛！'),
	('97f83f6c99e19ee73642', '怡泉 Schweppes', '123321', '8888', '45.9', '43.9', '自营', 8, 2, '2cf629cf23bc05af246d', '121221', '真棒!');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 导出  表 mart.sort 结构
DROP TABLE IF EXISTS `sort`;
CREATE TABLE IF NOT EXISTS `sort` (
  `s_type` int(11) NOT NULL COMMENT '二级分类',
  `s_text` char(50) default NULL COMMENT '二级分类名称',
  `t_type` int(11) default NULL COMMENT '一级分类',
  PRIMARY KEY  (`s_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='二级分类';

-- 正在导出表  mart.sort 的数据：~10 rows (大约)
DELETE FROM `sort`;
/*!40000 ALTER TABLE `sort` DISABLE KEYS */;
INSERT INTO `sort` (`s_type`, `s_text`, `t_type`) VALUES
	(0, '汽车周边', 0),
	(1, '畅销推荐', 3),
	(2, '明星品牌', 3),
	(3, '纸巾湿巾', 3),
	(4, '热门推荐', 1),
	(5, '童书', 1),
	(6, '中外名酒', 2),
	(7, '水', 2),
	(8, '饮料', 2),
	(9, '汽车用品', 0);
/*!40000 ALTER TABLE `sort` ENABLE KEYS */;

-- 导出  表 mart.type 结构
DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `tid` int(11) NOT NULL auto_increment,
  `t_text` char(20) default NULL COMMENT '一级分类',
  `t_type` int(11) default NULL COMMENT '一级分类标识 ',
  PRIMARY KEY  (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='分类表';

-- 正在导出表  mart.type 的数据：~4 rows (大约)
DELETE FROM `type`;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`tid`, `t_text`, `t_type`) VALUES
	(1, '汽车生活', 0),
	(2, '图书影像', 1),
	(3, '酒水饮料', 2),
	(4, '个人清洁', 3);
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

-- 导出  表 mart.user 结构
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `uid` char(20) NOT NULL,
  `nickname` char(20) default NULL COMMENT '昵称',
  `graph` char(200) default NULL COMMENT '个性签名',
  `avatar` char(100) default NULL COMMENT '头像',
  `email` char(50) default NULL COMMENT '邮箱',
  `mobile` char(20) default NULL COMMENT '手机号',
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 正在导出表  mart.user 的数据：~2 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`uid`, `nickname`, `graph`, `avatar`, `email`, `mobile`) VALUES
	('5af71c518b36c91f4cfe', 'shuaige', NULL, NULL, NULL, '18600865187'),
	('db2ad7d1f211f42225d3', 'heinan', '', '', '76351506@163.com', '13031061118');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

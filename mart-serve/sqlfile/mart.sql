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

-- 导出  表 mart.avatar 结构
DROP TABLE IF EXISTS `avatar`;
CREATE TABLE IF NOT EXISTS `avatar` (
  `aid` char(20) NOT NULL,
  `uid` char(20) NOT NULL,
  `imgUrl` char(150) NOT NULL,
  PRIMARY KEY  (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='头像表';

-- 正在导出表  mart.avatar 的数据：~0 rows (大约)
DELETE FROM `avatar`;
/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` (`aid`, `uid`, `imgUrl`) VALUES
	('008e138cba85da967d76', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/37085835c70c4d98cd2f69e399efe3b0.jpg'),
	('02fb1e538cf0c89b913e', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/c88b8e95e868b569b7a5f8bd819fdfd4.jpg'),
	('038dacd46edce87c633d', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/c2423c0d2697a5025e8307ccdf311fc3.jpg'),
	('0e160dd5d4ff0e77cb15', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/14bc2aafc66e191a908ae7271e15d148.jpg'),
	('11699bcdb7031a5bb197', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/e5b22a7b79576053ce4f7634d5ddd877.jpg'),
	('118f917097f009df6411', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/3c63512228abc50d98a6260bd7e00952.jpg'),
	('16296f386776975c53a3', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/2177a811d8c42f611276868c8f43c44d.jpg'),
	('1a7bcb21a9cf88cf51d0', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/b8f64fabc717290b89f3dec3a9da8cc9.jpg'),
	('203aa5e18ca05feb5a8b', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/6c6bc4f5f95e807d06ae70beb2e710de.jpg'),
	('289ee86fdaae3ce05c0b', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/5b09d254612a91aff06df00d4919d5a7.jpg'),
	('2acc09b144542ac05c09', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/8a794cdad31ad1826d09e92344e48ba3.jpeg'),
	('3b06364f95383d90b5a2', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/082c209d5dc6807ad78f1e09c19e8686.jpeg'),
	('3b2e7bb8df398aec78cb', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/3a9e0c9fe69598eafe10aabfeafcc4d3.png'),
	('3d99d4e71412175aa635', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/28844155fa3577d4fb2ddf4530962960.png'),
	('3ec1ab415cc815827212', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/50167a6f84c6b090fbe61b68b98f07dc.jpg'),
	('5041281c4c577c6eca85', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/776555575f50fded1c2782c17674ceae.jpg'),
	('57924b3bae81dae99fd8', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/ff039229a1dc80041699a30584b23e8e.jpg'),
	('579ebf928eeb0c3961f6', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/4b5dfc5be4721fe41e0b7a9dcb92e147.jpg'),
	('58e949edab4d95a3e478', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/985c04ac76c8aa5c35e4fd3ed5121c9a.jpg'),
	('5d02de8f70143c7720b7', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/89665a3054d77792fce526c9c7e9cd07.jpeg'),
	('657864a0bfeb1aff870b', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/599e91cbbf968f188404846582326392.jpg'),
	('666d7d09b16177d61960', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/955240b5e56bff3d0bfadeac1ddd5271.jpg'),
	('673053e4661fe8d6aef8', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/6ea28faa02dca025aa717eaa3388f0ee.jpg'),
	('678c285465cface3b4eb', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/d89d9cacbf104f67abfc8e7b579a988f.jpg'),
	('6df2a6163972476a8602', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/af52b00d9debaceed8d55993d7c486c8.jpg'),
	('6f5b69f1214a156812b9', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/6a1e20dcc3c18c08617256beae803ee7.jpg'),
	('70b0efcf8c2f908da9f5', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/4e690523588d507e75c1911cfac91598.jpg'),
	('845f57c5b153a27f682e', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/0724a5e1d388916113501cfb85693187.png'),
	('887e4f918880996a4c5d', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/be090bcf0ad3aa7d6bbf288de3911e32.jpg'),
	('8a7e6b050275f6f436db', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/ae8623b254b18056c04584bb9d36fa88.jpg'),
	('8b61d0d50d8d807333aa', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/64afd632855a4f83bcc73372c2a18333.jpg'),
	('8befb589e07383bf05c2', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/3076ef013b1e6fcaa7a6b3bd53bc011b.jpg'),
	('8fc7ce0b809f0052fea2', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/317714ab2e7eef59da4d5db61b10a20c.jpg'),
	('960eced7455458610699', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/5bff650c8d49b3e91351465b5bd104df.jpg'),
	('9bfc087f66fe8c53454e', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/af01be3ad07317d9da41922ae7f7cc93.jpg'),
	('9e2d6a471b24e32f4a93', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/149948ae5e4e1cfc6cc59c4635dd3111.jpg'),
	('a53787d4fcf6f083b9a5', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/9198dbe976ee0423c698a4b07c33f516.jpg'),
	('ac181832bd6f18c7e48f', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/672af3ec1beba072e0c76282f24cec10.jpg'),
	('ad7b3fdc468676b10af6', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/8e3cd956bc476f9f974bf21f61dcddd2.jpg'),
	('b2342037833d0a5d9bca', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/d59a43ccd33937be1d4d31b4b4a85f64.jpg'),
	('b526428f5395b23a9841', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/1df8cee10b6cc2e8ca72477aa60d8f64.jpg'),
	('b5fdc7662bc1bf0181e5', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/cc33b357e2a589fa27733a37fda2c371.jpg'),
	('b6bfc2bc0e1f64d3b6cb', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/fe11d9e8667f1aef78199afa67baad9c.jpg'),
	('bb7eae7482424d40392f', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/541dea6bb1da2cd73fd8d5e7eca50993.jpg'),
	('c119c84bb344359ac706', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/d346a74e6a3e13ad67bb85642254ef12.jpg'),
	('c79a270031193d2a1de9', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/d25096f6752874b53d41a8328a9dd19c.jpg'),
	('d0353a9c0f0591fc5fa0', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/44016c92cc493887d952ac48611a6d25.jpg'),
	('d09a756ebca0125230d4', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/ff759d14d0abc52b7f9d0aba63c293e3.jpg'),
	('d2f56074eaf07300a9e3', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/99d65443e0919629d4ff00093d5b26aa.jpg'),
	('d4b03e223f5bf1c3e3a9', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/1ad06ddea97e14560c6dd32726896390.jpg'),
	('d5b5a879cb14ff11649a', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/cd7b89f8bc44e2bd51fbb06a85dcc53a.jpg'),
	('db385e265b391d4dcf5d', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/2d26c25bac81e7a3b897694185fa07ae.jpg'),
	('db7c9fd46f00a2ec4572', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/f9114c5ef1c512905efaabd4b9ea4174.jpg'),
	('e07cc4a9137044e21eb6', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/458c3537f63e856e6d3abda074d5be03.jpg'),
	('e11fb59508f851737bfc', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/64f5114ca8422801b21b1e00db54bf06.jpg'),
	('e255278d53639f63478b', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/9e4d6e3045cc7d724a7a2f301171e6f9.jpg'),
	('e32ebe4207bc44292402', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/f313707406428bf6a7ddde4b602ae7e3.jpg'),
	('e95394f3bb9353281d40', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/8225ceca0ef6a9706de2392933df10bf.jpg'),
	('ec05feda1737fa43f715', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/1915946c579dd941ddecc241f6888a2d.jpg'),
	('f429d809308bf6e5c578', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/b0ac53be5f4741b675ae80720265ab08.jpg'),
	('f5d4863c5d47fb0d8d3f', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/3e1f695ca6e3560b15af248774058b16.jpg'),
	('f5f4674e4f9422d93903', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/edcbc50f38d5aa13f8e73cab9c695441.jpg'),
	('f674447abc2d1bae3f83', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/fa56c00bd8d5443cc4e3d191bc2379c3.jpg'),
	('f6788a6a2be6db9a8e5c', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/1a690e030ef54bc68f8be7242c8f1868.jpg'),
	('f6a8ea112c86fad419f1', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/b6d7c0b1f859e9c7972cdbdcf63bc253.jpg'),
	('fb891fa397e3b293b980', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/5c19406a7fd5c36d180eb1e3b963cb3f.jpg'),
	('fd1303b102be8c9d3e44', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/6fe704151dc2d668fbe388c4fd732281.jpeg'),
	('fe455b04c9caa13eaf0f', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/3b8d383194b2fc7989980efd7d16f032.jpg'),
	('feb8c6c85da521ce24c8', 'db2ad7d1f211f42225d3', 'http://10.34.4.35:7001/public/upload/f03831ee59f1cb50c9d2f0bac040d7f0.jpg');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;

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

-- 正在导出表  mart.carousel 的数据：~41 rows (大约)
DELETE FROM `carousel`;
/*!40000 ALTER TABLE `carousel` DISABLE KEYS */;
INSERT INTO `carousel` (`cid`, `tit`, `start_time`, `end_time`, `img`, `type`) VALUES
	('010dab2fe4aaaf6c4be7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('020b5a2a0801009e91b5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('02499fe2f429bbb7b86a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('026038c01996e638427e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('04368e9de9467403f615', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('046311e8e6319a1afbd0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('04efca30a8ed45b64039', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('0728f95aafcb115847f3', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0993456f80f8f56bb709', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('0a1ab76ade51dbe536af', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0a8209c00a12e367502d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('0ac355fd6b6af199bff5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('0afd9e6a75bfd6eb579d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0b311a5a570905724ae0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0c5b6d1fc60fbd1a1cd6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0c7ffaef1695d9b5d0da', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('0cd7dc8b70eb2e15ed69', '111', NULL, NULL, '2223', 0),
	('0d0da7ce558d13707a45', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0f4adcb0918428f9ffcf', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('0f88851c2d08dd28aced', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('100501dd4f2ea2becd51', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('107a0b102feb8ceeda6e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('11a1b10fa9560413035b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('11d080136bb768e22889', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('121873b8e9b8f13d3700', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('124795845030e236b74c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1282c3e493f2a900c78c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('12d22a26750c1d3a5ab6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('131a1d79d022573f388a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('14d5ab57870fb6e7f357', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('14e7c617b111e127fa6c', '111', NULL, NULL, '2223', 0),
	('156f700d652a274dbc40', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1627d960fb5a5e79af05', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('165d7087f2195caf8c48', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('172bea0f462d53aeb9ff', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1747484970f7566a59e5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('1773686e75ac64a18529', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('187f0cd753ee4aa7b829', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('199fb70059f607cb0ac5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1b145c6695c971e5063d', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/1881.html', 1),
	('1b2a40f57b21efed2569', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1bfd84b803a14f9fde82', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1ccce33b611d27279f20', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('1cffae508873f5457917', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2477.html', 1),
	('1d87196cac6271f04159', '111', NULL, NULL, '2223', 0),
	('1fa935697c0df5756e8f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('207a48ad322ce345ae2f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('207b0e66bab739822a14', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('23c5ae521ea1883a1a3f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2503bc2cbcdbab337029', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('257ee7edc078bffca9cc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2646fc86c8bd5779f1f5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2751fc46acabdb77d2ac', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2926edeb1ccf1af4185d', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2938e1193484f28dcc75', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('293a498d01b5e357ca44', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('29c8b92cd8676abc328f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2a21d354a0841c1d4be9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2afab905bddf300945d2', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2092.html', 1),
	('2b23ebf4a52560f68de0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2b2abdf54deb8d5b75b9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2ce2fa409e725d2af99a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2cfc10a95c8f88bebfd2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2d715042ca56b8982be6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2f1a03d769e77baf8acf', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('2fc756286d7934e15499', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('2fd2a8f90b0a676d5043', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('314565dc585d37111faf', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('32565dc0b7fd6a4d73ee', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3346dbf1c2594853c232', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('33f9ee3b782a1840d8db', '你好谦哥', NULL, NULL, 'http://www.obzhi.com/2512.html', 1),
	('3409a803a540d7107b15', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('344ae7ce5dc72d25b589', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('349a274b5264678309ed', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('354603caed2a83cc9438', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('359ae3746f44f19375be', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('363088c75e0a390a94ac', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('364c2822b4449de18758', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('37628c95eaf39e333be0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('378eb4ff5b622d9a4442', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('37a4b65c2bc01a8d37f2', '123', NULL, NULL, 'http://pic.netbian.com/tupian/26327.html', 0),
	('383a41ddf790d83de7f5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('3887140e934f413d7a08', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('3927a8bcf2c13be4d1ce', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('39e430f11572efebfc26', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('3a05308a8ac3f269bff2', '123', NULL, NULL, 'http://pic.netbian.com/tupian/26327.html', 0),
	('3a48bf69cff1b1b13db7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3a50c29e10afbb4ffb7b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3be0e2e3621a29d10ec4', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('3c744c315e7b48610832', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('3c95adb616ab1a23f9f8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3ce41c90296096b91a3c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3de3e04199cb13590676', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('3fa025f56be5464b4904', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('41f3af054d0deb3a8d59', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('428ce1c8121f3ab65be0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('433f36fba71c091a68fc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('444e62076855faf683b9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('45c83d3310c665f3a4fe', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('45cd730804dbe75af9a8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('45f8a9c3efd096434475', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('472b6986ba5c3de15175', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('49f621ccc72266f1b94b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('4a813a6d69a6053daee4', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2067.html', 1),
	('4c69a4db025df21472b2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('4ce62cc70eaa7664b05f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('4e846ea2ca2ee15801e2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('504cca5de463c96e3f77', '111', NULL, NULL, '2223', 0),
	('5053619899128cebb4d1', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('51310c3eba08c9fcfee7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('51742b55387dc0a4d86a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('52b9ffdc173b67657b99', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('53dda8296d92ef8ccb4c', '111', NULL, NULL, '2223', 0),
	('549ca70bb70681f0c2f5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('54f78ed5161911f58f42', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('55cc42ed9a089d3020d9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('560d5b8fe431955419e7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('57510e4c6346a9fb1e77', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('584b0d802abdc7861fba', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('58951cd9cb00621b7321', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('58b48421ac68e62ff7b2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('59088ae4d967b6349dae', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('594e9f1c60aed2f76f0d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('59ad158af9a12fe8b8df', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('5a0069a4383296e069b3', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('5a2b0d20c167f332a09c', '111', NULL, NULL, '2223', 0),
	('5b6a75a5ccbbdc90e4fa', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('5b8996e31a131593acb2', '111', NULL, NULL, '2223', 0),
	('5bcbe9fa2a12a2734512', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('5c28f36fd6f4dc4f9e9c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('5c3ddcafe57ce72fccad', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('5ca97e0b38234ca63eab', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('5d24b8a02ce8c773c779', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('5f87f0150bf138a58a77', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('602c943fcc64bf76e77b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('62445f3ac6bf3c56597e', '111', NULL, NULL, '2223', 0),
	('62f0ce54974b8be1d51e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('630848e713bffcf85cd2', '111', NULL, NULL, '2223', 0),
	('630ca53c99ff2d2a793f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('63e9c90d017fc141ea6c', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('658bdea458af9a2b3150', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('65b1a38d9c0677f4c36e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6602b927e3a7348f4f2b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('662683f8cf4dd31bf31c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('67efb0dc2a69fb4cf386', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('6889bf28c28688c4ff1a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('68dd6073902169e633f0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('69d51e84fa26b0b45da2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('69fbc310ef37bba7f6dd', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('6a560adee1ef641aaf3b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('6bf0f8aa51f492773879', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('6c0ae177af6af4fa5ebf', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6c1e6fe3e560f7bf6ca6', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6c57e8644c48ed302bd4', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6c8689abbcbe98616ba2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('6e51807802226afa7442', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6e6a06dfb2bfd90cd9ac', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6eb0e1ab8558d0b79d56', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('6ff68bbd2bdfdcf4422e', '111', NULL, NULL, '2223', 0),
	('704ac3badf46f34aaa6c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('705e94c71d60bafdcd9a', '111', NULL, NULL, '2223', 0),
	('7104b752f2ff36c3863a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('71a89ba4e49a1a662c92', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7256586bced4078f60d2', '123', NULL, NULL, 'http://pic.netbian.com/tupian/26327.html', 0),
	('733da65572b181a2ef98', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('73429184f79672368783', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('736996a604f2c35b59e2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('73c5b3781284bf27b29d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('741c09a9af0f8c8363dd', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7710bf96a1af313f5407', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('7740acaf1c23db73ea6b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7743ced7fde1aaa07f7d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('7790ccd195005df05ec0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('77ae9298aae9f16311aa', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/1955.html', 1),
	('77d067a98d702ee7b5f1', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('784a53a8b2ca43db71e4', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('78fe887d5b3ee93f02e0', '111', NULL, NULL, '2223', 0),
	('79840344bb297e70cc51', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('7bb2c3d11a4387f34b3f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('7c45e5399fb81bc19678', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7d9da01d014ea2a34ff7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7da5630525b321dd8fa8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7dd0a3911bfbd2bc27c8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7e756c15ee652d4e40b3', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('7ea100f5400c8c1d7802', '111', NULL, NULL, '2223', 0),
	('7eadc9a902295347e928', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('7fbf1522ec3c4fd8b17a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8190f67dbd04ac5347ce', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('82870260e7da45d266cf', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('82a595cd4bd8a731da95', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('8412733abeea4cb322fa', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8453e37da2084a888652', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('849a1cf94ebba5c085c1', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('8655978cec05874bbf3f', '你好谦哥', NULL, NULL, 'http://www.obzhi.com/2837.html', 1),
	('87b773f5963c047ffcda', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('87ee2d2ba695e1e0d09d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('88aedd54d2289238cb17', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('898a43c407d300c77ede', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8b34acdb827e4488fb4c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8ccc08a12feae8805848', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8d72392327a42f8c75cb', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8e80f342cb21ff241be3', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8ed7d8da467f6ef1e3c7', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8effdfdd5038049d3567', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('8f45aaa81378185a4368', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('8f991bb142b7d13d3432', '111', NULL, NULL, '2223', 0),
	('90ee248783d03b150977', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('915b652ba9a681f1cf94', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('917f3d7b7bfad2a7d043', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('91cdb3f50638a3f803e6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('91d6991ed91b453fa004', '111', NULL, NULL, '2223', 0),
	('933822b31f332bae001e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9472add70c5f4127ead1', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('94777be5a41a81e31ef6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('94d2e686c43547663d7f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('94e8c3f3b804b8ceaca6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('95998e57d13960ed8181', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('966a29b16feca8103cdc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('972b2dc6c60563b4805d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('973d92ec6845382a55f8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('988cf4f6799fcf8d1856', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('98be1c73d8cc0c5748ba', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('98db3db29e9c76028de8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9919d9779360b2968168', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('99682bd0b94f7172a363', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9a1eb149b983320af67c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9a64d965d89d9b14b67d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('9a654560e5b053adee37', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9ad8f3919bb8b39e70dc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9be855c69d883128ef13', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('9d5327333944af4fb13c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('9dae21e0396805871bd7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9dfdff1d0b50d7e62d39', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('9f5b4036e9f9efc859fb', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('9fe7567c1e1a99eee13a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a0fd2c2fb183f0729a10', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a1fb8d6d3d5f832c06fa', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('a28098425a003615880d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a306112ade4674cebb92', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('a3526c03cf4a3aa08211', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a37a6c9a94e0d923832a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('a37c3b5f9181edecfd94', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a493a3140f1a37b93cda', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('a4dc909ec50d2a6e6366', '你好谦哥', NULL, NULL, 'http://www.obzhi.com/2651.html', 1),
	('a6d0686a900716603a75', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a755cffd22826aa0d228', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a7b16108c6df08e127d7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('a7bd487c6365bf5204ad', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a7d9ec5724a0de178e41', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a831f867acabbeaae402', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a8ef0ed0805aa93bb221', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a967d08cf66bfd3f772a', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a98fdf5f1f5ec0fbf22d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('a9f3069bdf1b8a71230d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('aacd5fbe0424c5e3179f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('acc0343ab52c0e577ccf', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('acf38592ca7cfbca7b1a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('ae8235ba2226898da3ed', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2454.html', 1),
	('ae8fcb386467fa2ce9e3', '111', NULL, NULL, '2223', 0),
	('aef35f8f311e80b1917a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('af0b7c6dc309b202343b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('af1dc1be27510cea5fa5', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b08b878c50e86df94582', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b0ddbf8ac57339840c28', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b201aa40e6b3402b79d4', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b2404ca992b5460d8ec1', '123', NULL, NULL, 'http://pic.netbian.com/tupian/26327.html', 0),
	('b28634ccd034572e66e6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b51c8559eee4fa917112', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b577028eebb118bff555', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('b579f3c211a3f4b6242f', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b6351ee9045d12a2554a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('b68e185d915ebc682ef6', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b7a75509983f3da0ca57', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('b8b6548dcfa9aa2f45b1', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('b977c31920eb35361e54', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('baba21840a49f701b016', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('bbc054615f3603558c1c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('bbe6bcab54c8fab3d922', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('bcbcdc73d6d92d1e6e60', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('bd2ef4164df70372fa58', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('bd8f0583442563fc0c8e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('bd9a98908ae04ed5c3fa', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('bdc94f43e61173fc4fb1', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('beb4cce9bad49eba707c', '111', NULL, NULL, '2223', 0),
	('bfeba3e5357c9c5c9a73', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c032f1dffe9221cb5e52', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c1473138157945731dfb', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c1b5cec14111683d82f4', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c22678dcc3ed63c6e879', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c26d3dce85ae74b76aa3', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c2782e443e4f0f93198b', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c32ac60be1f413fa81b7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c40d7b98fdcb22703ec8', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c4a252b97a9509651b68', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c5495d9ba3ebae8b328f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c6d9aa4e8e506026aa7f', '111', NULL, NULL, '2223', 0),
	('c6ff1cd41e6fd6edf99d', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c71874126cf67531c081', '111', NULL, NULL, '2223', 0),
	('c84e6b358c9f0913d61e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c8a257617a42bb41befa', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('c99d340ac38fce959653', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('c9fa328c9a11f10da655', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('ca6163011ef9f7c1a33c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('ca64173dcab7522e7e97', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('cab622af9c2d7fe52a62', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('cafc0e07d1ef767f15cd', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('cb0543f4230d501b847f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('cc2ae8fcdda750ca0c68', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('cca79d1739aac9dfd0ba', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('cd1bff917c4a9444561d', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('cd2a795727f79e1cfe7c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('ce6fa8b34bcaa5f83e1c', '111', NULL, NULL, '2223', 0),
	('cececeec14dcb8603f96', '111', NULL, NULL, '2223', 0),
	('cfd7879614bf2ebcd573', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d02578024f3e95909125', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2179.html', 1),
	('d2d2a6c98d006733c8f9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d2f41009b4bb3e462ecd', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('d46cfa8f447f0d942971', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d4f0f2aa45080c4d30e0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d5d651e045a0daa0d93c', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('d5f2151f9f84c6346691', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d605d538130d2edd1355', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('d765863fbc06c3c168eb', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d7f7cd1d72efb44ccba5', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2284.html', 1),
	('d7fd8277e3b250a4a218', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('d81f186400ee0e7a9165', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('d826bc5be48348ef04fc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d8a617205195a59d55c2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d8e3063b4de80fa19bde', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d97cf6ed3d169aa56bff', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('d9fae0f960beafabcf7e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('da743937a9dccdfd2371', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('dac92d562895808cda28', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('db02a1514453560204b7', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('db482334332037b8d60b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('db7268416a4eab036d8e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('db8b4f1a874013b5a316', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('dbf81d53440d3e496cfd', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('de7a2b5c71b4d9e707e2', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('dec9e728fddf9d708d94', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('df80b10a4e6764119db9', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('e01db63a8bef68c17252', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('e02e5c9a8e48869b595e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('e1a1a61fe4ef33969419', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('e2d61c002417fd4b0696', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('e48925ae1a3745643967', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('e63950d88da757955e56', '狗', NULL, NULL, 'http://a1.att.hudong.com/86/38/300001140423130278388082725_950.jpg', 1),
	('e660eaf6840b3303005b', '你好zhiqiang', NULL, NULL, 'http://www.obzhi.com/2328.html', 1),
	('e895e430147681aad67f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('e9e6543a6021341883a1', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('eb01f488bcb0c5f1c312', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('eb5cfa7d632136806a94', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('eba8da690465cc514998', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('ebe43bc27af69b82784f', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('edc60c97f5afcff611a8', 'n666', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('ef40c5041510371299d0', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('f02cd744a427d5d9fe7b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('f1aa64366d8cb6c48879', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('f3b821cd5a8109719151', '111', NULL, NULL, '2223', 0),
	('f3cd55626dbf5a65405a', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('f4c1ae76d216e305ec57', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('f4df0cfe6a573d079a56', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('f62b089e7be17d058931', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('f7156b2f2d224fce52fc', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('f89de0c143e4f4984b73', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('f8e54d4fa859d59f54ed', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('fa1e1b8740218ee922ac', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('faaa1549e25663197a19', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('faaa776db745604eb941', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('fadb8a0d4c00009a93de', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('fb0ad0e62e0016000f25', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('fb59b8946221aed469e3', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('fc48eff5162383e97c5b', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('fd92a4011b2746015135', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('fe5c0975f2e7c6c6cd54', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1),
	('fe9f637e3599e6eebe8e', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 0),
	('ff30d8c5795c50932e0f', 'nihao', NULL, NULL, 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3466080997,1636551986&fm=115&gp=0.jpg', 1);
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
	('5af71c518b36c91f4cfe', 'zhangsan', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed'),
	('5f13db6cd93c32dfb37e', 'lisi', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed'),
	('db2ad7d1f211f42225d3', 'haonan', 'a320480f534776bddb5c', 'f69d451429f41dbea7ed');
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
	('5af71c518b36c91f4cfe', '三哥', NULL, NULL, NULL, '18600865187'),
	('5f13db6cd93c32dfb37e', '四哥', NULL, NULL, NULL, NULL),
	('db2ad7d1f211f42225d3', 'heinan', '', 'http://10.34.4.35:7001/public/upload/ae8623b254b18056c04584bb9d36fa88.jpg', '76351506@163.com', '13031061118');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

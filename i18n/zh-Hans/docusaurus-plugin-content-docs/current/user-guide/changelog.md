# 变更日志

## 未发布

:::tip

如下罗列的变更是还未发布的列表，代码变更历史：[未发布]

:::

#### 新增

- `Web` 后台任务支持使用系统/用户的语言设置（默认回退为英文）
- `Web` 移动端新增迷你分析仪表盘

#### 修复

- `Web` 优化部分小语种的本地化

#### 变更

- `Web` 图标包 fontawesome 升级到 7.0
- `开发环境` Ruby 升级到 3.4
- `开发环境` 前端包管理器由 yarn 更换为 pnpm
- `开发环境` 前端 UI 框架 adminlte 升级到 4.0.0-rc4

## 6.1.0 (2025-10-14)

详细[代码变更记录][6.1.0]。

#### 新增

- `Web` 增加 Gitea 第三方认证提供商支持 [#2052](https://github.com/tryzealot/zealot/pull/2052)
- `Web` 增加文件权限错误提示信息（如果健康检查失败）
- `Web` 在操作渠道和方案时增加通知功能
- `Web` 在渠道页面增加“返回应用详情”按钮
- `Web` 增加新的用户登录开关设置，用于控制是否启用内置认证系统 [#2009](https://github.com/tryzealot/zealot/pull/2009)

#### 修复

- `Web` 修复访客模式下无权限查看拆解详情的问题
- `Web` 增加缺失的 Github 登录本地化内容
- `Web` 修复无法在应用详情页面创建新渠道的问题
- `Web` 修复用户登录页面“记住我”样式问题
- `Web` 修复侧边栏无法切换的问题
- `Web` 忽略单一异常情况下的 SMTP 验证
- `Web/API` 修复无法通过指定的主版本号找到发布版本问题

## 6.0.4 (2025-07-24)

详细[代码变更记录][6.0.4]。

#### 新增

- `Web` 应用渠道详情新增应用详情的快速链接
- `Web` 对于应用类型和应用渠道 CRUD 新增消息提醒
- `Web` 系统信息页面对于文件权限有异常的补充原因

#### 修复

- `Web` 修复无法创建应用渠道
- `Web` 修复游客模式无法查看应用解包详情
- `Docker` 忽略启动检测 SMTP 认证的特别异常

## 6.0.3 (2025-06-14)

详细[代码变更记录][6.0.3]。

#### 修复

- `Web` 修复 [**安全漏洞**]: 应用构建 ID 和解包 ID 作用域安全问题 [#1951](https://github.com/tryzealot/zealot/pull/1951) [#1951](https://github.com/tryzealot/zealot/pull/1951)
- `Web` 修复抛出必需协议缺失或过期错误 [#1946](https://github.com/tryzealot/zealot/pull/1946)
- `Web` 修复用户的活跃和归档应用 [#1955](https://github.com/tryzealot/zealot/pull/1955)
- `Web` 修复应用和调试文件权限 [#1956](https://github.com/tryzealot/zealot/pull/1956)

#### 变更

- `Web` 隐藏文件校验和字段 [#1947](https://github.com/tryzealot/zealot/pull/1947)

## 6.0.2 (2025-06-03)

详细[代码变更记录][6.0.2]。

#### 修复

- `Web/API` 修复偶发性上传应用保存图片引发的错误 [#1933](https://github.com/tryzealot/zealot/issues/1933) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复 channels 表缺少 `download_file_type` 字段 [#1933](https://github.com/tryzealot/zealot/issues/1933) 感谢 [mlch911](https://github.com/mlch911)

## 6.0.1 (2025-05-23)

详细[代码变更记录][6.0.1].

#### 修复

- `Web` 修复应用渠道无法获取下载文件名格式
- `Web/API` 修复无效 mobile provision 文件的判断逻辑
- `API` 修复创建应用类型异常报错 [#1927](https://github.com/tryzealot/zealot/pull/1927)

## 6.0.0 (2025-05-20)

一年的期待！全面优化界面设计，新的配色、新的用户体验，提升页面打开速度，详细[代码变更记录][6.0.0]。

#### 新增

- `Web` 全面优化界面设计，新的配色、新的用户体验，提升页面打开速度
- `Web/API` 新增对鸿蒙系统的基础信息上传和解包解析 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Web` 手机应用获取 iOS 设备 UDID 会根据限制安装设置给出友好提示
- `Web` 新增下载应用的文件名可配项，支持保留源文件名或默认格式 [#1744](https://github.com/tryzealot/zealot/pull/1744) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `Web` Android 元信息解析新增 `native codes` 字段 [#1745](https://github.com/tryzealot/zealot/pull/1745)
- `Web` 网络钩子新增 `ci_url, branch, source, release_type` 字段 [#1750](https://github.com/tryzealot/zealot/pull/1750) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `Web` 新增页码底部的显示配置项 [#1888](https://github.com/tryzealot/zealot/pull/1888)
- `Web` 应用列表支持按照应用名排序 [#1879](https://github.com/tryzealot/zealot/pull/1879) 感谢 [BraZucco](https://github.com/BraZucco)
- `Web/API` 应用列表支持按照应用名搜索、排序及归档功能 [#1864](https://github.com/tryzealot/zealot/pull/1864) [#1886](https://github.com/tryzealot/zealot/pull/1886) [#1879](https://github.com/tryzealot/zealot/pull/1879) 感谢 [BraZucco](https://github.com/BraZucco)
- `Web` 新增 Github 授权登录且支持限定组织 [#1878](https://github.com/tryzealot/zealot/pull/1878) 感谢 [BraZucco](https://github.com/BraZucco)
- `Docker` 新增日志输出格式 `rails, json, graylog2, lines, ltvs, keyvalue (默认格式)` 支持 [#1747](https://github.com/tryzealot/zealot/pull/1747)
- `Docker` 新增 `ZEALOT_POSTGRES_URL` 环境变量通过 URL 配置数据库（老的单独字段环境变量也保留）
- `Docker` 服务启动前增加配置的 SMTP 验证测试
- `Docker` 服务启动期增加启动页面 [#1921](https://github.com/tryzealot/zealot/pull/1921)

#### 修复

- `Web/API` 修复受保护的应用下载时也需要认证 [#1798](https://github.com/tryzealot/zealot/pull/1798)
- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Web` 优化英文语言包
- `API` 修复上传应用没有写入上传来源 [#1746](https://github.com/tryzealot/zealot/pull/1746) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `API` 优化注册测试 iOS 设备到苹果开发者账户的逻辑
- `Docker` 修复初始化数据时会引发异常报错。

#### 变更

- `API` 上传应用接口支持不解析元信息
- `开发环境` Ruby 升级至 3.3.8 和 NodeJS 升级至 22.13.1，Rails 升级至 8.0

## 5.3.7 (2024-09-27)

详细[代码变更记录][5.3.7].

#### 新增

- `API` 新增两个接口：编辑应用版本元信息、删除应用版本 [#1669](https://github.com/tryzealot/zealot/pull/1669)

#### 修复

- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Docker` 修复初始化数据时会引发异常报错。

## 5.3.6 (2024-08-10)

详细[代码变更记录][5.3.6].

#### 修复

- `Web` 修复使用 OAuth 及 LDAP 第三方登录异常问题 [#1613](https://github.com/tryzealot/zealot/issues/1613) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Docker` 修复第一次初始化合并数据库异常，感谢 [InjoyDeng](https://github.com/InjoyDeng) 在 Telegram 反馈。

## 5.3.5 (2024-07-24)

详细[代码变更记录][5.3.5].

#### 修复

- `API` 上传应用接口关闭验证应用类型。感谢电报群友 @Jason1
- `Web` 处理 Android 设备受限应用提示用浏览器打开的错误提示 [#1593](https://github.com/tryzealot/zealot/issues/1593) 感谢 [GanHuaLin](https://github.com/GanHuaLin)
- `Web` 关闭用户注册模式后同时禁用所有第三方登录授权登录。感谢电报群友 @Jason1
- `Web` 修复无法解析应用时新版本提示没有展示自动版本号

## 5.3.4 (2024-07-08)

详细[代码变更记录][5.3.4]。

#### 新增

- `Web` 支持 AppleTV 设备的解包 [#1565](https://github.com/tryzealot/zealot/pull/1565)
- `Web` 重新生成失效的用户激活邮件的 token
- `Web` 添加自定义 umami 脚本地址的变量 (环境变量名 `UMAMI_SCRIPT_URL`)

#### 修复

- `Web/API` 修复多架构 Universal APK 无法解析应用名和图标
- `Web` 修复关闭游客模式时用户登出会出现错误页面
- `Web` 网络钩子验证采用更合理的验证方式
- `Web` 在没有上传应用版本触发网络钩子时展示错误提示

## 5.3.3 (2024-06-25)

详细[代码变更记录][5.3.3]。

#### 变更

- `Web` 修改之前权限设计：游客可以通过 URL 查看版本详情页面和安装 [#1558](https://github.com/tryzealot/zealot/pull/1558)
- `API` 修改全局权限和应用权限 `user` 为 `member` [#1560](https://github.com/tryzealot/zealot/pull/1560)
- `API` 仅展示通过环境变量设置统计类且设置只读

#### 修复

- `API` 修复上传应用设置 password 异常报错 [#1557](https://github.com/tryzealot/zealot/issues/1557) 感谢 [rie-jos](https://github.com/rie-jos)

## 5.3.2 (2024-06-24)

详细[代码变更记录][5.3.2]。

#### 修复

- `Web/API` 修复上传应用是设置的应用名不会使用。感谢 G0_0Oopoa。
- `Web` 修复设置 Umami script url 变量名错误。感谢 Ethan。

## 5.3.1 (2024-06-20)

小功能的问题修复，详细[代码变更记录][5.3.1]。

#### 新增

- `Web` 新增 SMTP 邮箱配置验证 [#1548](https://github.com/tryzealot/zealot/pull/1548)
- `Web` 新增未激活的用户重新发送确认邮件功能

#### 修复

- `Web` 修复游客禁止访问应用版本详情及密码认证异常 [#1544](https://github.com/tryzealot/zealot/issues/1544) 感谢 [savage7](https://github.com/savage7)
- `Web` 渠道列表批量删除版本后跳转原先页面
- `Web` 修复渠道列表无法点击跳转版本详情页面 [#1540](https://github.com/tryzealot/zealot/issues/1540) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复新用户无法注册 [#1539](https://github.com/tryzealot/zealot/issues/1539) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复苹果开发者添加、删除再添加的测试设备无法注册 [#1542](https://github.com/tryzealot/zealot/issues/1542) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复 SMTP 邮箱配置后无法发送邮件 [#1547](https://github.com/tryzealot/zealot/issues/1547) 感谢 [jason-xie-123](https://github.com/jason-xie-123)
- `Web` 修复备份报错及备份阶段状态展示
- `Web` 修复查看 macOS、mobilprovision 解包找不到 devices 异常

## 5.3.0 (2024-05-28)

服务架构精简（移除对 redis 服务的依赖），新增应用内权限控制。详细[代码变更记录][5.3.0]。

#### 变更

- `Docker` **重大变更** 计划弃用 Redis 服务 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 数据备份逻辑调整 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 新增应用权限及全局权限调整 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` **重大变更** 不再支持 arm/v7 平台镜像
- `开发环境` Ruby 升级至 3.3 和 NodeJS 升级至 20.11.1

#### 新增

- `Web` 新增应用成员权限及应用转移功能 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` 新增用户个性化设定，包含语言、外观和时区 [#1506](https://github.com/tryzealot/zealot/pull/1506)
- `Web` 新增用户锁定、启用功能
- `Web` 新增应用渠道版本列表多选删除和一键删除 [#1512](https://github.com/tryzealot/zealot/issues/1512)
- `API` 新增应用成员 CRUD 接口，应用详情额外返回成员列表 [#1494](https://github.com/tryzealot/zealot/issues/1494)
- `API` 新增用户 CRUD 及锁定、启用接口
- `API` 新增应用、应用类型以及应用渠道的 CRUD 接口 [#1485](https://github.com/tryzealot/zealot/issues/1485)

#### 修复

- `Web` 三方登录无法获取 email 造成生成 token 异常 [#1461](https://github.com/tryzealot/zealot/issues/1461) 感谢 [yiukamsum]
- `Web` 修复系统设置从环境变量设置的值在页面展示有误
- `Web` 修复 OIDC scope 变量名错误
- `Web` 修复系统设置没有正确展示环境变量的值
- `Web` 修复新用户邮箱确认展示异常
- `Web` 优化部分页面在移动设备的友好化展示
- `Web` 优化英文翻译

## 5.2.3 (2024-04-29)

详细[代码变更记录][5.2.3]。

#### 修复

- `Web` 修复用户注册提示用户名为空 [#1479](https://github.com/tryzealot/zealot/pull/1479) 感谢 [mlch911](https://github.com/mlch911)

## 5.2.2 (2024-04-03)

详细[代码变更记录][5.2.2]。

#### 修复

- `Web` 修复 OIDC 跳转链接 [#1455](https://github.com/tryzealot/zealot/pull/1455) 感谢 [yiukamsum](https://github.com/yiukamsum)

## 5.2.1 (2024-04-02)

解决 iOS 14.5 以下系统版本无法展示安装按钮的小臭虫。详细[代码变更记录][5.2.1]。

#### 修复

- `Web` iOS 13 以下不显示安装按钮 [#1335](https://github.com/tryzealot/zealot/issues/1335) 感谢 [InjoyDeng](https://github.com/InjoyDeng) [mlch911](https://github.com/mlch911)
- `Web` 删除新建应用下属任意层级造成应用列表页异常 [#1445](https://github.com/tryzealot/zealot/issues/1445) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Web` 修复空渠道在应用类型详情页异常 [#1426](https://github.com/tryzealot/zealot/issues/1426) 感谢 [Liberately](https://github.com/Liberately)
- `API` 修复无 bundle_id 获取最新版本逻辑错误
- `API` 非 iOS 应用应用下载 install_url 使用普通下载地址

## 5.2.0 (2024-03-14)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.2.0]。

#### 新增

- `Web` 应用类型新增最大保留版本数的设置 [#1407](https://github.com/tryzealot/zealot/pull/1407)
- `Web` 开放 macOS 系统获取设备 UDID 功能
- `Web` 允许注册 macOS 设备到苹果开发者测试设备

#### 修复

- `Web` Anroid 解包没有 services 存储错误的异常报错
- `Web` 创建网络钩子格式校验错误造成创建失败 [#1314](https://github.com/tryzealot/zealot/issues/1314)
- `Web` 应用版本详情匹配调试文件查询错误造成的异常报错 [#1406](https://github.com/tryzealot/zealot/issues/1406)
- `API` 修复下载调试文件接口并修改变更为 GET 请求 [#1416](https://github.com/tryzealot/zealot/issues/1416)

## 5.1.0 (2023-12-07)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.1.0]。

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Docker` 新增 Redis 版本检测，过低版本会无法正常运行
- `Docker` 服务初始化时创建数据库
- `Web` 设置页面针对 JSON 格式设置增强校验条件

#### 修复

- `Web` 上传检测磁盘空间判断文件是否存在
- `Web` 修复应用版本关联的调试文件
- `Web` 修复应用解包详情页面没有展示测试设备列表
- `Web` 优化应用版本错误页面的展示信息
- `Web` 优化移动设备应用长包名溢出展示
- `Web` 优化部分页面样式及英语语言的显示
- `API/Web` Android 应用解析图标 webp 格式无法转换 png
- `API` 修复 GraphQL 用户认证

## 5.0.0 (2023-09-06)

支持泛应用托管，支持解析会自动解析比如 Windows，不支持解析会跳过。详细[代码变更记录][5.0.0]

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Web/API` 支持泛应用托管（支持解析会自动解析，不支持解析会跳过），默认新增 Windows 和 Linux 平台 [#1121](https://github.com/tryzealot/zealot/pull/1121)
- `Web/API` 新增 Windows 应用托管（上传和元信息解析展示） [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 全新调试文件页面并新增多 dSYM 调试文件解析和托管 [#1127](https://github.com/tryzealot/zealot/pull/1127) [#1124](https://github.com/tryzealot/zealot/pull/1124) [#961](https://github.com/tryzealot/zealot/issues/961)
- `Web` 支持 Android 应用解包 v1, v2, v3 签名信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 强化 Android 和 iOS 应用解包的 X509 证书信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 新增 “重新解析” 功能更新老结构的调试文件元信息
- `Web` 上传应用版本的变更日志支持 markdown 格式
- `Web` 设置页可配置全局 “每页返回最小” 和 “最大条目数”
- `Web` 应用版本详情页面针对 iOS 应用展示签名证书过期时间信息和签名证书过期无法安装（可以下载）的逻辑限制
- `Web` 网络钩子及设置页添加或更新增加 JSON 格式校验
- `Web` 注册测试设备到苹果开发者支持自定义设备名称和创建后编辑更新设备名称
- `Web` 苹果开发者的私钥证书支持下载

#### 修复

- `Web/API` 修复受保护的应用下载时也需要认证 [#1798](https://github.com/tryzealot/zealot/pull/1798)
- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Web` 优化英文语言包
- `API` 修复上传应用没有写入上传来源 [#1746](https://github.com/tryzealot/zealot/pull/1746) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `API` 优化注册测试 iOS 设备到苹果开发者账户的逻辑
- `Docker` 修复初始化数据时会引发异常报错。

#### 变更

- `API` 上传应用接口支持不解析元信息
- `开发环境` Ruby 升级至 3.3.8 和 NodeJS 升级至 22.13.1，Rails 升级至 8.0

## 5.3.7 (2024-09-27)

详细[代码变更记录][5.3.7].

#### 新增

- `API` 新增两个接口：编辑应用版本元信息、删除应用版本 [#1669](https://github.com/tryzealot/zealot/pull/1669)

#### 修复

- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Docker` 修复初始化数据时会引发异常报错。

## 5.3.6 (2024-08-10)

详细[代码变更记录][5.3.6].

#### 修复

- `Web` 修复使用 OAuth 及 LDAP 第三方登录异常问题 [#1613](https://github.com/tryzealot/zealot/issues/1613) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Docker` 修复第一次初始化合并数据库异常，感谢 [InjoyDeng](https://github.com/InjoyDeng) 在 Telegram 反馈。

## 5.3.5 (2024-07-24)

详细[代码变更记录][5.3.5].

#### 修复

- `API` 上传应用接口关闭验证应用类型。感谢电报群友 @Jason1
- `Web` 处理 Android 设备受限应用提示用浏览器打开的错误提示 [#1593](https://github.com/tryzealot/zealot/issues/1593) 感谢 [GanHuaLin](https://github.com/GanHuaLin)
- `Web` 关闭用户注册模式后同时禁用所有第三方登录授权登录。感谢电报群友 @Jason1
- `Web` 修复无法解析应用时新版本提示没有展示自动版本号

## 5.3.4 (2024-07-08)

详细[代码变更记录][5.3.4]。

#### 新增

- `Web` 支持 AppleTV 设备的解包 [#1565](https://github.com/tryzealot/zealot/pull/1565)
- `Web` 重新生成失效的用户激活邮件的 token
- `Web` 添加自定义 umami 脚本地址的变量 (环境变量名 `UMAMI_SCRIPT_URL`)

#### 修复

- `Web/API` 修复多架构 Universal APK 无法解析应用名和图标
- `Web` 修复关闭游客模式时用户登出会出现错误页面
- `Web` 网络钩子验证采用更合理的验证方式
- `Web` 在没有上传应用版本触发网络钩子时展示错误提示

## 5.3.3 (2024-06-25)

详细[代码变更记录][5.3.3]。

#### 变更

- `Web` 修改之前权限设计：游客可以通过 URL 查看版本详情页面和安装 [#1558](https://github.com/tryzealot/zealot/pull/1558)
- `API` 修改全局权限和应用权限 `user` 为 `member` [#1560](https://github.com/tryzealot/zealot/pull/1560)
- `API` 仅展示通过环境变量设置统计类且设置只读

#### 修复

- `API` 修复上传应用设置 password 异常报错 [#1557](https://github.com/tryzealot/zealot/issues/1557) 感谢 [rie-jos](https://github.com/rie-jos)

## 5.3.2 (2024-06-24)

详细[代码变更记录][5.3.2]。

#### 修复

- `Web/API` 修复上传应用是设置的应用名不会使用。感谢 G0_0Oopoa。
- `Web` 修复设置 Umami script url 变量名错误。感谢 Ethan。

## 5.3.1 (2024-06-20)

小功能的问题修复，详细[代码变更记录][5.3.1]。

#### 新增

- `Web` 新增 SMTP 邮箱配置验证 [#1548](https://github.com/tryzealot/zealot/pull/1548)
- `Web` 新增未激活的用户重新发送确认邮件功能

#### 修复

- `Web` 修复游客禁止访问应用版本详情及密码认证异常 [#1544](https://github.com/tryzealot/zealot/issues/1544) 感谢 [savage7](https://github.com/savage7)
- `Web` 渠道列表批量删除版本后跳转原先页面
- `Web` 修复渠道列表无法点击跳转版本详情页面 [#1540](https://github.com/tryzealot/zealot/issues/1540) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复新用户无法注册 [#1539](https://github.com/tryzealot/zealot/issues/1539) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复苹果开发者添加、删除再添加的测试设备无法注册 [#1542](https://github.com/tryzealot/zealot/issues/1542) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复 SMTP 邮箱配置后无法发送邮件 [#1547](https://github.com/tryzealot/zealot/issues/1547) 感谢 [jason-xie-123](https://github.com/jason-xie-123)
- `Web` 修复备份报错及备份阶段状态展示
- `Web` 修复查看 macOS、mobilprovision 解包找不到 devices 异常

## 5.3.0 (2024-05-28)

服务架构精简（移除对 redis 服务的依赖），新增应用内权限控制。详细[代码变更记录][5.3.0]。

#### 变更

- `Docker` **重大变更** 计划弃用 Redis 服务 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 数据备份逻辑调整 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 新增应用权限及全局权限调整 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` **重大变更** 不再支持 arm/v7 平台镜像
- `开发环境` Ruby 升级至 3.3 和 NodeJS 升级至 20.11.1

#### 新增

- `Web` 新增应用成员权限及应用转移功能 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` 新增用户个性化设定，包含语言、外观和时区 [#1506](https://github.com/tryzealot/zealot/pull/1506)
- `Web` 新增用户锁定、启用功能
- `Web` 新增应用渠道版本列表多选删除和一键删除 [#1512](https://github.com/tryzealot/zealot/issues/1512)
- `API` 新增应用成员 CRUD 接口，应用详情额外返回成员列表 [#1494](https://github.com/tryzealot/zealot/issues/1494)
- `API` 新增用户 CRUD 及锁定、启用接口
- `API` 新增应用、应用类型以及应用渠道的 CRUD 接口 [#1485](https://github.com/tryzealot/zealot/issues/1485)

#### 修复

- `Web` 三方登录无法获取 email 造成生成 token 异常 [#1461](https://github.com/tryzealot/zealot/issues/1461) 感谢 [yiukamsum]
- `Web` 修复系统设置从环境变量设置的值在页面展示有误
- `Web` 修复 OIDC scope 变量名错误
- `Web` 修复系统设置没有正确展示环境变量的值
- `Web` 修复新用户邮箱确认展示异常
- `Web` 优化部分页面在移动设备的友好化展示
- `Web` 优化英文翻译

## 5.2.3 (2024-04-29)

详细[代码变更记录][5.2.3]。

#### 修复

- `Web` 修复用户注册提示用户名为空 [#1479](https://github.com/tryzealot/zealot/pull/1479) 感谢 [mlch911](https://github.com/mlch911)

## 5.2.2 (2024-04-03)

详细[代码变更记录][5.2.2]。

#### 修复

- `Web` 修复 OIDC 跳转链接 [#1455](https://github.com/tryzealot/zealot/pull/1455) 感谢 [yiukamsum](https://github.com/yiukamsum)

## 5.2.1 (2024-04-02)

解决 iOS 14.5 以下系统版本无法展示安装按钮的小臭虫。详细[代码变更记录][5.2.1]。

#### 修复

- `Web` iOS 13 以下不显示安装按钮 [#1335](https://github.com/tryzealot/zealot/issues/1335) 感谢 [InjoyDeng](https://github.com/InjoyDeng) [mlch911](https://github.com/mlch911)
- `Web` 删除新建应用下属任意层级造成应用列表页异常 [#1445](https://github.com/tryzealot/zealot/issues/1445) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Web` 修复空渠道在应用类型详情页异常 [#1426](https://github.com/tryzealot/zealot/issues/1426) 感谢 [Liberately](https://github.com/Liberately)
- `API` 修复无 bundle_id 获取最新版本逻辑错误
- `API` 非 iOS 应用应用下载 install_url 使用普通下载地址

## 5.2.0 (2024-03-14)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.2.0]。

#### 新增

- `Web` 应用类型新增最大保留版本数的设置 [#1407](https://github.com/tryzealot/zealot/pull/1407)
- `Web` 开放 macOS 系统获取设备 UDID 功能
- `Web` 允许注册 macOS 设备到苹果开发者测试设备

#### 修复

- `Web` Anroid 解包没有 services 存储错误的异常报错
- `Web` 创建网络钩子格式校验错误造成创建失败 [#1314](https://github.com/tryzealot/zealot/issues/1314)
- `Web` 应用版本详情匹配调试文件查询错误造成的异常报错 [#1406](https://github.com/tryzealot/zealot/issues/1406)
- `API` 修复下载调试文件接口并修改变更为 GET 请求 [#1416](https://github.com/tryzealot/zealot/issues/1416)

## 5.1.0 (2023-12-07)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.1.0]。

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Docker` 新增 Redis 版本检测，过低版本会无法正常运行
- `Docker` 服务初始化时创建数据库
- `Web` 设置页面针对 JSON 格式设置增强校验条件

#### 修复

- `Web` 上传检测磁盘空间判断文件是否存在
- `Web` 修复应用版本关联的调试文件
- `Web` 修复应用解包详情页面没有展示测试设备列表
- `Web` 优化应用版本错误页面的展示信息
- `Web` 优化移动设备应用长包名溢出展示
- `Web` 优化部分页面样式及英语语言的显示
- `API/Web` Android 应用解析图标 webp 格式无法转换 png
- `API` 修复 GraphQL 用户认证

## 5.0.0 (2023-09-06)

支持泛应用托管，支持解析会自动解析比如 Windows，不支持解析会跳过。详细[代码变更记录][5.0.0]

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Web/API` 支持泛应用托管（支持解析会自动解析，不支持解析会跳过），默认新增 Windows 和 Linux 平台 [#1121](https://github.com/tryzealot/zealot/pull/1121)
- `Web/API` 新增 Windows 应用托管（上传和元信息解析展示） [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 全新调试文件页面并新增多 dSYM 调试文件解析和托管 [#1127](https://github.com/tryzealot/zealot/pull/1127) [#1124](https://github.com/tryzealot/zealot/pull/1124) [#961](https://github.com/tryzealot/zealot/issues/961)
- `Web` 支持 Android 应用解包 v1, v2, v3 签名信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 强化 Android 和 iOS 应用解包的 X509 证书信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 新增 “重新解析” 功能更新老结构的调试文件元信息
- `Web` 上传应用版本的变更日志支持 markdown 格式
- `Web` 设置页可配置全局 “每页返回最小” 和 “最大条目数”
- `Web` 应用版本详情页面针对 iOS 应用展示签名证书过期时间信息和签名证书过期无法安装（可以下载）的逻辑限制
- `Web` 网络钩子及设置页添加或更新增加 JSON 格式校验
- `Web` 注册测试设备到苹果开发者支持自定义设备名称和创建后编辑更新设备名称
- `Web` 苹果开发者的私钥证书支持下载

#### 修复

- `Web/API` 修复受保护的应用下载时也需要认证 [#1798](https://github.com/tryzealot/zealot/pull/1798)
- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Web` 优化英文语言包
- `API` 修复上传应用没有写入上传来源 [#1746](https://github.com/tryzealot/zealot/pull/1746) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `API` 优化注册测试 iOS 设备到苹果开发者账户的逻辑
- `Docker` 修复初始化数据时会引发异常报错。

#### 变更

- `API` 上传应用接口支持不解析元信息
- `开发环境` Ruby 升级至 3.3.8 和 NodeJS 升级至 22.13.1，Rails 升级至 8.0

## 5.3.7 (2024-09-27)

详细[代码变更记录][5.3.7].

#### 新增

- `API` 新增两个接口：编辑应用版本元信息、删除应用版本 [#1669](https://github.com/tryzealot/zealot/pull/1669)

#### 修复

- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Docker` 修复初始化数据时会引发异常报错。

## 5.3.6 (2024-08-10)

详细[代码变更记录][5.3.6].

#### 修复

- `Web` 修复使用 OAuth 及 LDAP 第三方登录异常问题 [#1613](https://github.com/tryzealot/zealot/issues/1613) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Docker` 修复第一次初始化合并数据库异常，感谢 [InjoyDeng](https://github.com/InjoyDeng) 在 Telegram 反馈。

## 5.3.5 (2024-07-24)

详细[代码变更记录][5.3.5].

#### 修复

- `API` 上传应用接口关闭验证应用类型。感谢电报群友 @Jason1
- `Web` 处理 Android 设备受限应用提示用浏览器打开的错误提示 [#1593](https://github.com/tryzealot/zealot/issues/1593) 感谢 [GanHuaLin](https://github.com/GanHuaLin)
- `Web` 关闭用户注册模式后同时禁用所有第三方登录授权登录。感谢电报群友 @Jason1
- `Web` 修复无法解析应用时新版本提示没有展示自动版本号

## 5.3.4 (2024-07-08)

详细[代码变更记录][5.3.4]。

#### 新增

- `Web` 支持 AppleTV 设备的解包 [#1565](https://github.com/tryzealot/zealot/pull/1565)
- `Web` 重新生成失效的用户激活邮件的 token
- `Web` 添加自定义 umami 脚本地址的变量 (环境变量名 `UMAMI_SCRIPT_URL`)

#### 修复

- `Web/API` 修复多架构 Universal APK 无法解析应用名和图标
- `Web` 修复关闭游客模式时用户登出会出现错误页面
- `Web` 网络钩子验证采用更合理的验证方式
- `Web` 在没有上传应用版本触发网络钩子时展示错误提示

## 5.3.3 (2024-06-25)

详细[代码变更记录][5.3.3]。

#### 变更

- `Web` 修改之前权限设计：游客可以通过 URL 查看版本详情页面和安装 [#1558](https://github.com/tryzealot/zealot/pull/1558)
- `API` 修改全局权限和应用权限 `user` 为 `member` [#1560](https://github.com/tryzealot/zealot/pull/1560)
- `API` 仅展示通过环境变量设置统计类且设置只读

#### 修复

- `API` 修复上传应用设置 password 异常报错 [#1557](https://github.com/tryzealot/zealot/issues/1557) 感谢 [rie-jos](https://github.com/rie-jos)

## 5.3.2 (2024-06-24)

详细[代码变更记录][5.3.2]。

#### 修复

- `Web/API` 修复上传应用是设置的应用名不会使用。感谢 G0_0Oopoa。
- `Web` 修复设置 Umami script url 变量名错误。感谢 Ethan。

## 5.3.1 (2024-06-20)

小功能的问题修复，详细[代码变更记录][5.3.1]。

#### 新增

- `Web` 新增 SMTP 邮箱配置验证 [#1548](https://github.com/tryzealot/zealot/pull/1548)
- `Web` 新增未激活的用户重新发送确认邮件功能

#### 修复

- `Web` 修复游客禁止访问应用版本详情及密码认证异常 [#1544](https://github.com/tryzealot/zealot/issues/1544) 感谢 [savage7](https://github.com/savage7)
- `Web` 渠道列表批量删除版本后跳转原先页面
- `Web` 修复渠道列表无法点击跳转版本详情页面 [#1540](https://github.com/tryzealot/zealot/issues/1540) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复新用户无法注册 [#1539](https://github.com/tryzealot/zealot/issues/1539) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复苹果开发者添加、删除再添加的测试设备无法注册 [#1542](https://github.com/tryzealot/zealot/issues/1542) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复 SMTP 邮箱配置后无法发送邮件 [#1547](https://github.com/tryzealot/zealot/issues/1547) 感谢 [jason-xie-123](https://github.com/jason-xie-123)
- `Web` 修复备份报错及备份阶段状态展示
- `Web` 修复查看 macOS、mobilprovision 解包找不到 devices 异常

## 5.3.0 (2024-05-28)

服务架构精简（移除对 redis 服务的依赖），新增应用内权限控制。详细[代码变更记录][5.3.0]。

#### 变更

- `Docker` **重大变更** 计划弃用 Redis 服务 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 数据备份逻辑调整 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 新增应用权限及全局权限调整 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` **重大变更** 不再支持 arm/v7 平台镜像
- `开发环境` Ruby 升级至 3.3 和 NodeJS 升级至 20.11.1

#### 新增

- `Web` 新增应用成员权限及应用转移功能 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` 新增用户个性化设定，包含语言、外观和时区 [#1506](https://github.com/tryzealot/zealot/pull/1506)
- `Web` 新增用户锁定、启用功能
- `Web` 新增应用渠道版本列表多选删除和一键删除 [#1512](https://github.com/tryzealot/zealot/issues/1512)
- `API` 新增应用成员 CRUD 接口，应用详情额外返回成员列表 [#1494](https://github.com/tryzealot/zealot/issues/1494)
- `API` 新增用户 CRUD 及锁定、启用接口
- `API` 新增应用、应用类型以及应用渠道的 CRUD 接口 [#1485](https://github.com/tryzealot/zealot/issues/1485)

#### 修复

- `Web` 三方登录无法获取 email 造成生成 token 异常 [#1461](https://github.com/tryzealot/zealot/issues/1461) 感谢 [yiukamsum]
- `Web` 修复系统设置从环境变量设置的值在页面展示有误
- `Web` 修复 OIDC scope 变量名错误
- `Web` 修复系统设置没有正确展示环境变量的值
- `Web` 修复新用户邮箱确认展示异常
- `Web` 优化部分页面在移动设备的友好化展示
- `Web` 优化英文翻译

## 5.2.3 (2024-04-29)

详细[代码变更记录][5.2.3]。

#### 修复

- `Web` 修复用户注册提示用户名为空 [#1479](https://github.com/tryzealot/zealot/pull/1479) 感谢 [mlch911](https://github.com/mlch911)

## 5.2.2 (2024-04-03)

详细[代码变更记录][5.2.2]。

#### 修复

- `Web` 修复 OIDC 跳转链接 [#1455](https://github.com/tryzealot/zealot/pull/1455) 感谢 [yiukamsum](https://github.com/yiukamsum)

## 5.2.1 (2024-04-02)

解决 iOS 14.5 以下系统版本无法展示安装按钮的小臭虫。详细[代码变更记录][5.2.1]。

#### 修复

- `Web` iOS 13 以下不显示安装按钮 [#1335](https://github.com/tryzealot/zealot/issues/1335) 感谢 [InjoyDeng](https://github.com/InjoyDeng) [mlch911](https://github.com/mlch911)
- `Web` 删除新建应用下属任意层级造成应用列表页异常 [#1445](https://github.com/tryzealot/zealot/issues/1445) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Web` 修复空渠道在应用类型详情页异常 [#1426](https://github.com/tryzealot/zealot/issues/1426) 感谢 [Liberately](https://github.com/Liberately)
- `API` 修复无 bundle_id 获取最新版本逻辑错误
- `API` 非 iOS 应用应用下载 install_url 使用普通下载地址

## 5.2.0 (2024-03-14)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.2.0]。

#### 新增

- `Web` 应用类型新增最大保留版本数的设置 [#1407](https://github.com/tryzealot/zealot/pull/1407)
- `Web` 开放 macOS 系统获取设备 UDID 功能
- `Web` 允许注册 macOS 设备到苹果开发者测试设备

#### 修复

- `Web` Anroid 解包没有 services 存储错误的异常报错
- `Web` 创建网络钩子格式校验错误造成创建失败 [#1314](https://github.com/tryzealot/zealot/issues/1314)
- `Web` 应用版本详情匹配调试文件查询错误造成的异常报错 [#1406](https://github.com/tryzealot/zealot/issues/1406)
- `API` 修复下载调试文件接口并修改变更为 GET 请求 [#1416](https://github.com/tryzealot/zealot/issues/1416)

## 5.1.0 (2023-12-07)

功能修复为主，小部分新特性升级，详细[代码变更记录][5.1.0]。

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Docker` 新增 Redis 版本检测，过低版本会无法正常运行
- `Docker` 服务初始化时创建数据库
- `Web` 设置页面针对 JSON 格式设置增强校验条件

#### 修复

- `Web` 上传检测磁盘空间判断文件是否存在
- `Web` 修复应用版本关联的调试文件
- `Web` 修复应用解包详情页面没有展示测试设备列表
- `Web` 优化应用版本错误页面的展示信息
- `Web` 优化移动设备应用长包名溢出展示
- `Web` 优化部分页面样式及英语语言的显示
- `API/Web` Android 应用解析图标 webp 格式无法转换 png
- `API` 修复 GraphQL 用户认证

## 5.0.0 (2023-09-06)

支持泛应用托管，支持解析会自动解析比如 Windows，不支持解析会跳过。详细[代码变更记录][5.0.0]

#### 变更

- `Docker` **重大变更** Redis 最低版本依赖从原来的 5.x 升级至 6.2+，建议使用 7.x 主版本，升级时请手动修改。

#### 新增

- `Web/API` 支持泛应用托管（支持解析会自动解析，不支持解析会跳过），默认新增 Windows 和 Linux 平台 [#1121](https://github.com/tryzealot/zealot/pull/1121)
- `Web/API` 新增 Windows 应用托管（上传和元信息解析展示） [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 全新调试文件页面并新增多 dSYM 调试文件解析和托管 [#1127](https://github.com/tryzealot/zealot/pull/1127) [#1124](https://github.com/tryzealot/zealot/pull/1124) [#961](https://github.com/tryzealot/zealot/issues/961)
- `Web` 支持 Android 应用解包 v1, v2, v3 签名信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 强化 Android 和 iOS 应用解包的 X509 证书信息 [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` 新增 “重新解析” 功能更新老结构的调试文件元信息
- `Web` 上传应用版本的变更日志支持 markdown 格式
- `Web` 设置页可配置全局 “每页返回最小” 和 “最大条目数”
- `Web` 应用版本详情页面针对 iOS 应用展示签名证书过期时间信息和签名证书过期无法安装（可以下载）的逻辑限制
- `Web` 网络钩子及设置页添加或更新增加 JSON 格式校验
- `Web` 注册测试设备到苹果开发者支持自定义设备名称和创建后编辑更新设备名称
- `Web` 苹果开发者的私钥证书支持下载

#### 修复

- `Web/API` 修复受保护的应用下载时也需要认证 [#1798](https://github.com/tryzealot/zealot/pull/1798)
- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Web` 优化英文语言包
- `API` 修复上传应用没有写入上传来源 [#1746](https://github.com/tryzealot/zealot/pull/1746) 感谢 [rakuyoMo](https://github.com/rakuyoMo)
- `API` 优化注册测试 iOS 设备到苹果开发者账户的逻辑
- `Docker` 修复初始化数据时会引发异常报错。

#### 变更

- `API` 上传应用接口支持不解析元信息
- `开发环境` Ruby 升级至 3.3.8 和 NodeJS 升级至 22.13.1，Rails 升级至 8.0

## 5.3.7 (2024-09-27)

详细[代码变更记录][5.3.7].

#### 新增

- `API` 新增两个接口：编辑应用版本元信息、删除应用版本 [#1669](https://github.com/tryzealot/zealot/pull/1669)

#### 修复

- `Web` 撤回 5.3.5 版本关于关闭用户注册模式后同时禁用所有第三方登录授权登录的逻辑。 [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) 感谢 [officebluesource](https://github.com/officebluesource)
- `Docker` 修复初始化数据时会引发异常报错。

## 5.3.6 (2024-08-10)

详细[代码变更记录][5.3.6].

#### 修复

- `Web` 修复使用 OAuth 及 LDAP 第三方登录异常问题 [#1613](https://github.com/tryzealot/zealot/issues/1613) 感谢 [InjoyDeng](https://github.com/InjoyDeng)
- `Docker` 修复第一次初始化合并数据库异常，感谢 [InjoyDeng](https://github.com/InjoyDeng) 在 Telegram 反馈。

## 5.3.5 (2024-07-24)

详细[代码变更记录][5.3.5].

#### 修复

- `API` 上传应用接口关闭验证应用类型。感谢电报群友 @Jason1
- `Web` 处理 Android 设备受限应用提示用浏览器打开的错误提示 [#1593](https://github.com/tryzealot/zealot/issues/1593) 感谢 [GanHuaLin](https://github.com/GanHuaLin)
- `Web` 关闭用户注册模式后同时禁用所有第三方登录授权登录。感谢电报群友 @Jason1
- `Web` 修复无法解析应用时新版本提示没有展示自动版本号

## 5.3.4 (2024-07-08)

详细[代码变更记录][5.3.4]。

#### 新增

- `Web` 支持 AppleTV 设备的解包 [#1565](https://github.com/tryzealot/zealot/pull/1565)
- `Web` 重新生成失效的用户激活邮件的 token
- `Web` 添加自定义 umami 脚本地址的变量 (环境变量名 `UMAMI_SCRIPT_URL`)

#### 修复

- `Web/API` 修复多架构 Universal APK 无法解析应用名和图标
- `Web` 修复关闭游客模式时用户登出会出现错误页面
- `Web` 网络钩子验证采用更合理的验证方式
- `Web` 在没有上传应用版本触发网络钩子时展示错误提示

## 5.3.3 (2024-06-25)

详细[代码变更记录][5.3.3]。

#### 变更

- `Web` 修改之前权限设计：游客可以通过 URL 查看版本详情页面和安装 [#1558](https://github.com/tryzealot/zealot/pull/1558)
- `API` 修改全局权限和应用权限 `user` 为 `member` [#1560](https://github.com/tryzealot/zealot/pull/1560)
- `API` 仅展示通过环境变量设置统计类且设置只读

#### 修复

- `API` 修复上传应用设置 password 异常报错 [#1557](https://github.com/tryzealot/zealot/issues/1557) 感谢 [rie-jos](https://github.com/rie-jos)

## 5.3.2 (2024-06-24)

详细[代码变更记录][5.3.2]。

#### 修复

- `Web/API` 修复上传应用是设置的应用名不会使用。感谢 G0_0Oopoa。
- `Web` 修复设置 Umami script url 变量名错误。感谢 Ethan。

## 5.3.1 (2024-06-20)

小功能的问题修复，详细[代码变更记录][5.3.1]。

#### 新增

- `Web` 新增 SMTP 邮箱配置验证 [#1548](https://github.com/tryzealot/zealot/pull/1548)
- `Web` 新增未激活的用户重新发送确认邮件功能

#### 修复

- `Web` 修复游客禁止访问应用版本详情及密码认证异常 [#1544](https://github.com/tryzealot/zealot/issues/1544) 感谢 [savage7](https://github.com/savage7)
- `Web` 渠道列表批量删除版本后跳转原先页面
- `Web` 修复渠道列表无法点击跳转版本详情页面 [#1540](https://github.com/tryzealot/zealot/issues/1540) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复新用户无法注册 [#1539](https://github.com/tryzealot/zealot/issues/1539) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复苹果开发者添加、删除再添加的测试设备无法注册 [#1542](https://github.com/tryzealot/zealot/issues/1542) 感谢 [mlch911](https://github.com/mlch911)
- `Web` 修复 SMTP 邮箱配置后无法发送邮件 [#1547](https://github.com/tryzealot/zealot/issues/1547) 感谢 [jason-xie-123](https://github.com/jason-xie-123)
- `Web` 修复备份报错及备份阶段状态展示
- `Web` 修复查看 macOS、mobilprovision 解包找不到 devices 异常

## 5.3.0 (2024-05-28)

服务架构精简（移除对 redis 服务的依赖），新增应用内权限控制。详细[代码变更记录][5.3.0]。

#### 变更

- `Docker` **重大变更** 计划弃用 Redis 服务 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 数据备份逻辑调整 [#1318](https://github.com/tryzealot/zealot/pull/1318)
- `Web` **重大变更** 新增应用权限及全局权限调整 [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` **重大变更** 不再支持 arm/v7 平台镜像
- `开发环境` Ruby 升级至 3.3 和 NodeJS 升级至 20.11.1

#### 新增

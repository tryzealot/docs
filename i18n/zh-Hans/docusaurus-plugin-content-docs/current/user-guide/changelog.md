# 变更日志

## 未发布

:::tip

如下罗列的变更是还未发布的列表，代码变更历史：[未发布]

:::

## 4.5.2 (2022-11-01)

#### 修复

- `Web` 修复注册测试设备异常 [#935](https://github.com/tryzealot/zealot/issues/935) 感谢 [ycy0430](https://github.com/ycy0430)
- `Web` 适配二维码支持黑暗模式
- `Web` 修正 `en` 英文语言包

#### 新增

- `WebHook` 变量结构体新增 `username` 和 `email` 字段 [#934](https://github.com/tryzealot/zealot/issues/934) 感谢 [rkonfj](https://github.com/rkonfj)
- `Docker` 支持 `SIDEKIQ_CONCURRENCY` 环境变量设置后台任务的并发量，默认 5

#### 变更

- `Docker` 减少安全隐患，Web 服务包含 puma 和 puma_control_server 监听更换成 `127.0.0.1`
- `Web` 优化 iOS 设备 UDID 描述文件的文案
- `Web` 更新页面底部的文案，感谢 Rails 和 AdminLTE 开源项目！

## 4.5.1 (2022-09-14)

#### 修复

- `Web` 修复应用解包解析报错

## 4.5.0 (2022-08-19)

支持 👨🏻‍🔧 苹果开发者托管测试设备顺手把 🌑 黑暗模式搞来了！

#### 新增

- `Web` 支持黑暗模式 [#816](https://github.com/tryzealot/zealot/pull/816)
- `Web` 新增苹果开发者管理用于注册测试设备 [#817](https://github.com/tryzealot/zealot/pull/817)
- `Web` 新增数据备份管理 [#835](https://github.com/tryzealot/zealot/pull/835)
- `Web` 管理面板完成依赖服务的监控 [#586](https://github.com/tryzealot/zealot/issues/586)
- `API` 涉及 `release` 字典的地方新增三个字段 `platform`, `device_type` 和 `custom_fields`

#### 变更

- `Web` **不兼容变更** Google 统计强制升级 v4 版本，之前设置的需要重新配置才可以生效 [#815](https://github.com/tryzealot/zealot/pull/815)
- `CLI` **不兼容变更** 数据备份和还原功能因结构发生变更不再提供，请使用管理员面板的数据备份功能
- `Web` 针对获取设备 UDID 及 iOS 版本安装和下载变更根据设备展示对应的功能界面，不再全部展示
- `Web` 移除管理员面板的页面统计功能 [#814](https://github.com/tryzealot/zealot/pull/814)
- `Web` 前端技术栈从 webpacker 迁移至 esbuild + sass, Turbolinks 迁移至 Stimulus 带来更好的前端交互体验 [#829](https://github.com/tryzealot/zealot/pull/829)
- `Web` 鉴于编辑应用的类型和渠道逻辑较复杂，变更只能修改应用名

#### 修复

- `Web` 处理应用类型下没有存在渠道的选择错误 [#795](https://github.com/tryzealot/zealot/issues/795) 感谢 [tasselsd](https://github.com/tasselsd)
- `API` 修复 Android 地址返回错误 [#813](https://github.com/tryzealot/zealot/issues/813) 感谢 [denymz](https://github.com/denymz)
- `Web`/`API` 修正 aab 解析部分参数为空引发的异常 [tryzealot/fastlane-plugin-zealot#9](https://github.com/tryzealot/fastlane-plugin-zealot/issues/9) 感谢 [tasselsd](https://github.com/tasselsd)
- `Web` 修复第一次初始化项目生成演示数据异常 [#821](https://github.com/tryzealot/zealot/issues/821)
- `API` 修复检查应用最新版本数据异常 [#856](https://github.com/tryzealot/zealot/issues/856) 感谢 [denymz](https://github.com/denymz)
- `Web` 修复应用渠道详情因关联网络钩子数据异常报错
- `Web` 修正英文语言包很多拼写错误

> 代码变更历史：[4.5.0]

## 4.4.1 (2022-06-20)

#### 修复

- `WebHook` 修复网络钩子触发成功后报错 [#792](https://github.com/tryzealot/zealot/issues/792) 感谢 [tasselsd](https://github.com/tasselsd)
- `Docker` 兼容 Caddy 2.5.0 反代 https 到 http [#790](https://github.com/tryzealot/zealot/pull/790) 感谢 [VisionBao](https://github.com/VisionBao) [songge1209](https://github.com/songge1209)

## 4.4.0 (2022-06-09)

#### 变更

- `Web` 对于未登录且未开启游客模式的用户权限新增查看应用版本详情之外还提供按照版本、分支、打包类型方式的筛选显示列表
- `Web` 运行时环境升级至 Ruby 3.0，服务框架升级至 Rails 7.0
- `Web` 兼容 macOS M1 芯片组

#### 新增

- `Web` 便于分享简化和统一部分应用链接 [#666](https://github.com/tryzealot/zealot/pull/666)
- `Web` 补全一些遗漏的权限检查页面

#### 修复

- `Job` 修复 iOS 文件解析 URL Schemes 异常
- `Web` 修复服务日志没有输出到终端控制台
- `Web` 增加处理上传调试文件在解析时它被删除掉或其他原因没有找到本地文件的异常捕获
- `Web` 适配超宽屏幕的 UI
- `Web` 修复第三方登录依赖库的安全隐患
- `API` 修复上传 Android 再不传 channel_key 异常 [#779](https://github.com/tryzealot/zealot/issues/779) 感谢 [likfe](https://github.com/likfe)

> 代码变更历史：[4.4.0]

## 4.3.1 (2021-12-22)

#### 新增

- `Web` 设置项更新后可恢复原始默认值
- `Web` 应用解包支持 Android 对 app links (区分 deep links 和 url schemes) 的解析显示
- `Web` 设置页面强化设置开启、关闭状态的视觉效果

#### 修复

- `Web` 修复演示模式异步任务方法错误
- `Web` 修复创建和编辑应用无法勾选选中的应用类型和渠道
- `Web` 修复在环境页面无法
- `Web` 修复解析 aab 没有 intent filters 无法解析
- `Web` 增加取消勾选任何类型和渠道更新应用的报错
- `Web` 修复加载策略造成第三方登录全部不可用

> 代码变更历史：[4.3.1]

## 4.3.0 (2021-12-08)

支持 aab 格式解析、多语言支持！

#### 变更

- `Web` 使用默认提示的结构体作为网络钩子的数据结构，不再是一个奇怪的结构
- `Web` 设置页面不再提供第三方登录授权的参数变更（依赖服务重启）
- `API` 上传应用接口和版本详情返回主体新增 `text_changelog` [650f1ffd](https://github.com/tryzealot/zealot/commit/650f1ffd3731f6a1f4cc703430be1b1b6f5d1cee)
- `API` 上传应用接口返回主体 `changelog_list` 改名 `changelog` [719f0b1e](https://github.com/tryzealot/zealot/commit/719f0b1eff92f358d246ededd6c1e6f9863f7f85)
- `Web` 变更日志输出的内容不再是一个数组内容，而是改为兼容 markdown list 格式的文本内容 [719f0b1e](https://github.com/tryzealot/zealot/commit/719f0b1eff92f358d246ededd6c1e6f9863f7f85)
- `Web` 一些隐私的配置 key 或 token 仅在管理员权限下明文显示；其他权限不可见；演示只读且会做部分加密处理 [#644](https://github.com/tryzealot/zealot/pull/644)
- `Web` 构建日期和哈希值无法获取不显示

#### 新增

- `Web` 支持 Android App Bundle (aab) 文件格式和 webp 图标的解析
- `Web` 支持语言国际化，可选语言包：简体中文，英文 (支持页面配置)
- `Web` 支持配置更多的系统设置项 [#643](https://github.com/tryzealot/zealot/pull/643)
- `Web` 管理面板支持网络钩子的编辑功能
- `Web` 重写并优化应用列表的样式布局
- `Web` 优化基础的邮件模板
- `Web` 调整登录窗口的样式和错误逻辑
- `Web` 管理面板的环境变量页面新增文件权限检查 [#608](https://github.com/tryzealot/zealot/pull/608)
- `Web` 管理面板的新增错误异步任务的详情展示，最大错误数量为 5000
- `Web` 使用更好的日志输出格式 [#646](https://github.com/tryzealot/zealot/pull/646)

#### 修复

- `Web` 修复设置页面默认情况下 boolean 值类型的参数勾选状态错误
- `Web` 修复在钉钉 App 点击安装或下载出现异常问题（改为微信逻辑处理）
- `Web` 修复在环境页面无法显示构建日期（构建 docker 镜像时的时间戳）
- `Web` 修复异步通知域名作用域无法生效
- `Web` 修复获取 gems 异常
- `Web` 修复 iOS 证书过期时间判断异常
- `Web` 修复使用虚拟机开发挂载磁盘空间无法获取
- `Web` 修复演示模式下的一些已知错误

> 代码变更历史：[4.3.0]

## 4.2.2 (2021-10-15)

#### 修复

- `API` 解决因批量替换造成的参数不匹配没有正确输出错误信息 [#615](https://github.com/tryzealot/zealot/issues/615) 感谢 [gin7758258](https://github.com/gin7758258)
- `Web` 解决了针对部分 apk Android 文件解析异常问题 [#587](https://github.com/tryzealot/zealot/pull/529)

## 4.2.1 (2021-09-14)

#### 变更

- `Web` 应用的图标不再按照预设尺寸裁切并移除图片处理依赖减少将近 200MB 镜像体积
- `Docker` 反代服务 Caddy 不再输出日志到 STDOUT 而是直接到文件

#### 修复

- `Web` 修复上传应用后图标没有正常处理和显示
- `Web` 兼容上传 dSYM 不同的 zip 解压缩逻辑
- `Web` 修复安装 iOS 无法显示应用图标
- `Web` 安全隐患：禁止编辑设置只读的系统设置
- `Web` 修复 macOS 下载文件后缀不正确
- `Web` 修复个别情况下不显示弹出无法安装的窗口

> 代码变更历史：[4.2.1]

## 4.2.0 (2021-09-01)

#### 变更

- `Web` 清理老版本逻辑默认改为关闭，如需开启请设置环境变量 `ZEALOT_KEEP_UPLOADS=false` [#570](https://github.com/tryzealot/zealot/pull/570)
- `Web` `文件解析`改名为`应用解包` [#529](https://github.com/tryzealot/zealot/pull/529)
- `Web` 下线应用解包中对已上传应用的解包支持（现在上传的应用都会自动触发额外的应用解包）
- `API` 上传应用的自定义字段图标支持 fontawesome css 的值，比如 [flag](https://fontawesome.com/v5.15/icons/flag?style=solid) 的值是 `fas fa-flag`
- `Docker` 镜像由 caddy 作为反代提供服务并对 volume 持久化做了变更，涉及迁移，具体看 [#540](https://github.com/tryzealot/zealot/pull/540)

#### 新功能

- `Web` 支持 macOS 应用的上传、解析和下载 [#562](https://github.com/tryzealot/zealot/pull/562)
- `Web` 新增手机设备在渠道详情页对应用类型和渠道快速筛选项 [#510](https://github.com/tryzealot/zealot/issues/510) 感谢 [huacnlee](https://github.com/huacnlee)
- `Web` 管理员面板可配置应用的类型模板和默认注册用户的权限 [#562](https://github.com/tryzealot/zealot/pull/562) [#568](https://github.com/tryzealot/zealot/pull/568)
- `Web` 环境变量涉及隐私的做部分加密处理
- `Web` 内存和磁盘使用率增加图形展示
- `Docker` 新增支持 [Github Container Registry](https://github.com/tryzealot/zealot/pkgs/container/zealot) 镜像同步更新
- `Docker` 新增支持环境变量配置 postgres 端口号

#### 修复

- `Web` 修复在 iPad 和 M1 芯片的 macOS 无法显示 iOS 安装按钮 [#519](https://github.com/tryzealot/zealot/issues/519) 感谢 [ohdarling](https://github.com/ohdarling)
- `Web` 修复注册但未验证邮件的同时使用第三方登录失败 [#517](https://github.com/tryzealot/zealot/issues/517) 感谢 [huacnlee](https://github.com/huacnlee)
- `Web` 修复使用网页上传没有触发应用解包
- `Web` 修复 tubrolink 开启下左侧导航样式错位
- `Web` Android 上传应用也显示解包链接
- `Web` 优化解包文件列表判断为空的显示提示
- `Web` 修复 LDAP 参数获取错误 [#541](https://github.com/tryzealot/zealot/pull/542) 感谢 [Martwu](https://github.com/Martwu)
- `Web` 优化捕获页面上传应用错误改为可读的错误信息
- `Web` 修复创建应用类型出错判断异常
- `Web` 补充在应用删除全部渠道后点击详情报错的一个异常情况的判断
- `Web` 修复上传应用因解析过程变量释放错误
- `Web` 修复应用设置密码保护校验时报错 [#564](https://github.com/tryzealot/zealot/issues/564) 感谢 [EasierLu](https://github.com/EasierLu)
- `Web` 修复管理员面板编辑用户资料报错 [#564](https://github.com/tryzealot/zealot/issues/564) 感谢 [EasierLu](https://github.com/EasierLu)
- `Web` 修复应用详情页面 "安装" 按钮会在错误的系统和设备上异常显示（正常只有 iOS 应用在 iOS 及 macOS 设备才会显示）
- `Web` 优化应用解包对于开发者证书因包含特殊字符集（目前已知的是中文编码）解析失败及 UI 样式的重新布局
- `Web` 修复无法编辑当前用户
- `Web` 改正调试文件的标题重复
- `Docker` 修复镜像初始化 logrotate 错误
- `Docker` 修复使用 Caddy 部署需要确认 [#551](https://github.com/tryzealot/zealot/issues/551) 感谢 [ReverseScale](https://github.com/ReverseScale)

> 代码变更历史：[4.2.0]

## 4.1.0 (2021-07-17)

#### 变更

- `Web` 因 iPad 的 User-Agent 和 Desktop 一样更改获取设备 UDID 的显示逻辑
- `Docker` 设置 Gihub Container Registry (gcr.io) 作为默认 Docker 镜像源

#### 新功能

- `Web` 支持飞书、Gitlab 第三方一键登录认证
- `Web` 优化找不到应用版本详情页面并可以手动跳转到最新版本
- `Web` 系统配置新增部分配置项的查看和部分不通过重启的参数修改
- `Web` 管理面板新增页面统计报表

#### 修复

- `Web` 修复网络钩子无法获取 title 变量的值
- `Web` 修复解析应用过程中异常报错
- `Web` 修复创建应用过程中会有异常报错
- `Web` 修复系统配置保存时为空造成无法编辑
- `Job` 处理移除老版本的逻辑造成删除的版本逻辑和文档逻辑是反的

> 代码变更历史：[4.1.0]

## 4.0.0 (2020-12-31)

#### 修复

- `Web` 修正文件解析 iOS 证书对失效时间判断异常造成的页面错误显示
- `Web` 忽略默认开发版本号检查新版本

> 代码变更历史：[4.0.0]

## 4.0.0.rc2 (2020-12-25)
#### 新功能

- `Web` 新的文件解析会保存到列表，上传的应用也会同步一份文件解析（异步任务） [#346](https://github.com/tryzealot/zealot/pull/346)
- `Web` 控制面板新增文件解析数据统计
- `Web` 控制面板针对管理员新增网络钩子、后台任务和磁盘使用的数据统计
- `Web` 版本详情提示文件缺失增加有权限者快速删除功能

#### 变更

- `API` 调试文件版本检查接口改名并新增按照文件指纹和 dSYM uuid 检查是否存在 [#349](https://github.com/tryzealot/zealot/pull/346)

#### 修复

- `Web` 修复禁用 LDAP 登录认证报错（ IP 白名单设置错误）
- `Web` 修正 Android 微信打开版本详情提示的文案


> 代码变更历史：[4.0.0.rc2]

## 4.0.0.rc1 (2020-10-29)

#### 变更

- `Docker` **重大变更** 合并 rails 和 worker 到同一镜像部署需要同步更新 zealot-docker 库 [#235](https://github.com/tryzealot/zealot/pull/235)
- `Docker` Ruby 升级 2.7 部署
- `Web` font-awesome 从 4.7.0 升级至 5.13.0，可能会有遗漏的 Icon 显示不正常
- `Web` 调整邀请邮件的文案
- `Web` 应用和调试文件下载路径统一到 `/download` 路径
- `Web` 在线解析应用需要登录权限
- `Web` 优化已经删除的或不存在的版本详情地址会自动跳转最新版本
- `Web` 应用安装和下载逻辑做了调整（主要 iPadOS UserAgent 和 Desktop 一样无法判断）

#### 新功能

- `Web` 涉及下载文件不存在会提示无法下载
- `Web` 在线解析支持 .mobileprovision 格式文件以及解析 .ipa 新增开启功能等
- `Web` 部分系统设置可以使用管理员面板在线修改 [#245](https://github.com/tryzealot/zealot/pull/245)
- `Web` 新增游客模式 [#243](https://github.com/tryzealot/zealot/pull/243)
- `Web` 支持显示 iOS AdHoc 版本测试设备的名称 [#211](https://github.com/tryzealot/zealot/pull/211)
- `Web` 支持解析已上传版本安装包的内容 [#210](https://github.com/tryzealot/zealot/pull/210)
- `Web` 支持获取 iOS 设备 UDID 功能 [#203](https://github.com/tryzealot/zealot/pull/203)
- `Web` 支持定期数据初始化且有功能限制的演示模式 [#198](https://github.com/tryzealot/zealot/pull/198)
- `Web` 上传 App 后在版本详情显示原本应用的名称
- `Web` 可通过版本、Git 分支、打包类型筛选过滤应用列表
- `Web` 版本详情最近上传关联 git commit 链接（如果在渠道设置了 git url）
- `Web` LDAP 登录融合到现有登录界面，不再使用第三方依赖提供的简陋界面
- `Job` 支持通过 rails 命令管理生成恢复数据备份功能（数据库、上传文件数据）[#207](https://github.com/tryzealot/zealot/pull/207)
- `API` 新增检查调试文件是否存在接口 `/api/debug_files/version_exist`

#### 修复

- `Web` 修复上传 App 填写变更日志解析报错
- `Web` 解决版本详情中二维码在中等分辨率会超出父视图
- `Web` 解决应用渠道一些值为空确没有不显示默认值
- `Web` 优化在线解析 iOS 包的内容展示（和永远展示假数据的问题）
- `Web` 解决版本详情在使用 [fastlane-plugin-ci_changelog](https://github.com/icyleaf/fastlane-plugin-ci_changelog) 生成的变更日志没有展示提交者信息
- `Web` 修复并优化检查新版本逻辑
- `Web` 修复删除调试文件确认弹窗信息获取为空
- `Web` 优化版本详情设备列表在一些手机的显示方式
- `Web` 修复解析应用在不传参数提交的报错
- `Web` 优化版本列表在手机查看
- `Web` 渠道版本的最近上传动态仅显示底部分页，上部改为版本总数
- `Web` 修复管理员编辑用户留空密码提示不能为空
- `Web`/`API` 修复在线下载和安装版本不存在时会采用最新版本
- `Web` 修复游客模式登录界面会显示边栏菜单
- `Web` 修复上传同一应用同一平台调试文件总是会被覆盖的问题
- `Web` 系统设置页面优化对布尔类型、字典类型的显示
- `Job` 修复定时任务来清理老版本时因版本判断错误发生的误删版本
- `Docker` 修复因为 volume 存储 public 文件夹造成内部静态资源不会更新
- `Docker` 容器内的版本和外部不一致

> 代码变更历史：[4.0.0.rc1]

## 4.0.0.beta4 (2020-05-07)

#### 新功能

- `Docker` 支持 Heroku 部署
- `Web` 游客模式允许查看 App 详情、列表和上传 App 详情
- `API` 上传 App 支持自定义字段 [#178](https://github.com/tryzealot/zealot/issues/178)
- `Web`/`API` 上传 App 传递了 `branch` 值开头包含 `origin/` 开头会自动清理掉
- `Web` 登录、注册、找回密码、重设密码等用户认证界面增加项目简介

#### 修复

- `Web` 修正用户密码描述文案
- `Web` 修复网络钩子（WebHook）包含 url 字段的地址错误
- `Web`/`API` 修复上传 iOS dSYM 文件上传报错
- `API` 修复获取 App 接口 has_password 参数异常
- `API` 修复上传 App 记录的 source 来源都是 Web
- `API` 修复并支持上传 App 传递字符串类型的 json 格式的 changelog
- `Web` 修复系统信息没有正常获取 CPU 和内存信息
- `Web` 修复在线解析 Android 应用偶尔报错
- `Web` 修复使用微信扫描二维码页面报错

#### 变更

- `API` 应用最新版本接口(`apps/latest`)增加 bundle_id 纬度的验证
- `Web` 游客模式可以访问应用版本详情和下载操作
- `Web` 应用版本详情对于 iOS AdHoc 右侧的设备列表左移并默认收起状态
- `Web` 开发环境移除 GraphQL 控制台功能，推荐使用 [graphql-playground](https://github.com/prisma-labs/graphql-playground)
- `Web` 页面底部移除 footbar，版本信息可以在系统信息查看

> 代码变更历史：[4.0.0.beta4]

## 4.0.0.beta3 (2020-01-16)

#### 新功能

- `Web` 管理员添加的用户在邮箱未激活会提示并显示确认邮箱的链接
- `Web` 默认开启 Sentry 匿名上报机制（可关闭）

#### 修复

- `API` 修复上传应用总会创建新渠道
- `Web`/`API` 修复上传 Android 应用无法显示图标

#### 变更

- `Docker` 初始化数据从镜像移出到 [zealot-docker](https://github.com/tryzealot/zealot-docker) 操作 [#120](https://github.com/tryzealot/zealot/pull/120)
- `Docker` 精简镜像的体积大小从 1.18G 降到 308M [#114](https://github.com/tryzealot/zealot/issues/114)
- `Job` 使用异步任务代替传统 cron job 来实现定时清理老版本历史包文件（可关闭）
- `Job` 对异步任务进行分组和设置优先级
- `API` 所有报错信息改成中文显示，因数据库写操作会返回具体错误信息
- `Web` 使用 Rubocop Lint 规范化代码

> 代码变更历史：[4.0.0.beta3]

## 4.0.0.beta2 (2020-01-10)

#### 新功能

- `Web` 新增上传到具体应用渠道的全部版本列表同时支持删除操作

#### 修复

- `Web` 对于上传应用不是有效 ipa 或 apk 的会给予错误提示而不是报错
- `API` 修复获取应用最新版本列表因查询版本号不存在数据库无法返回最新版本列表
- `API` 只针对写操作的接口才会要求 token 验证（之前是绝大部分都需要）

> 代码变更历史：[4.0.0.beta2]

## 4.0.0.beta1

🌈 第一个公测版本发布啦

## 更早的版本

之前多年一直是公司内部开发和运营并没有开源，曾经承担过很多的功能到现在脱离出来专注提供应用托管和分发的服务。

[未发布]: https://github.com/tryzealot/zealot/compare/4.5.2...HEAD
[4.5.2]: https://github.com/tryzealot/zealot/compare/4.5.1...4.5.2
[4.5.1]: https://github.com/tryzealot/zealot/compare/4.5.0...4.5.1
[4.5.0]: https://github.com/tryzealot/zealot/compare/4.4.1...4.5.0
[4.4.1]: https://github.com/tryzealot/zealot/compare/4.4.0...4.4.1
[4.4.0]: https://github.com/tryzealot/zealot/compare/4.3.1...4.4.0
[4.3.1]: https://github.com/tryzealot/zealot/compare/4.3.0...4.3.1
[4.3.0]: https://github.com/tryzealot/zealot/compare/4.2.2...4.3.0
[4.2.2]: https://github.com/tryzealot/zealot/compare/4.2.1...4.2.2
[4.2.1]: https://github.com/tryzealot/zealot/compare/4.2.0...4.2.1
[4.2.0]: https://github.com/tryzealot/zealot/compare/4.1.0...4.2.0
[4.1.0]: https://github.com/tryzealot/zealot/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/tryzealot/zealot/compare/4.0.0.rc2...4.0.0
[4.0.0.rc2]: https://github.com/tryzealot/zealot/compare/4.0.0.rc1...4.0.0.rc2
[4.0.0.rc1]: https://github.com/tryzealot/zealot/compare/4.0.0.beta4...4.0.0.rc1
[4.0.0.beta4]: https://github.com/tryzealot/zealot/compare/4.0.0.beta3...4.0.0.beta4
[4.0.0.beta3]: https://github.com/tryzealot/zealot/compare/4.0.0.beta2...4.0.0.beta3
[4.0.0.beta2]: https://github.com/tryzealot/zealot/compare/4.0.0.beta1...4.0.0.beta2

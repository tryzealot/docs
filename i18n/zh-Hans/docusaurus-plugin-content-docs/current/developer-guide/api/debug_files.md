---
sidebar_label: "Debug Files"
---

# 调试文件接口

## 上传调试文件

上传 iOS 和 Android 的调试文件：

- iOS: 使用 Zip 压缩后的 dSYM 文件
- Android: 使用 Zip 压缩后包含 mapping.txt、R.txt 和 AndroidManifest.xml 的文件

```
POST /api/debug_files/upload
```

### 参数

!> 需要[用户认证](/docs/developer-guide/api#authentication)。

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| file | `File` | true | Zip 压缩文件后的调试文件 |
| release_version | `String` | true | 发布版本号，iOS 类型可忽略该参数 |
| build_version | `String` | true | 内部版本号，iOS 类型可忽略该参数 |

### 返回样例

> TODO

## 下载调试文件

下载 iOS 和 Android 的调试文件

```
POST /api/debug_files/download
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| release_version | `String` | true | 发布版本号，iOS 类型可忽略该参数 |
| build_version | `String` | false | 内部版本号，iOS 类型可忽略该参数 |
| order | `String` | false | 获取最新的方式，可选值有：<br />`version` = 最新版本 和 `upload_date` = 最新上传时间<br />**仅限接受 release_version 值为 `latest` 有效** |

### 返回样例

- 版本存在返回 200 状态码并返回 302 重定向到下载地址
- 版本不存在返回 404 状态码和错误信息

## 调试文件列表

获取创建的应用列表，支持分页

```
GET /api/debug_files
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| page | `Integer` | false | 页数 |
| per_page | `Integer` | false | 每页返回最大数目 |

### 返回样例

> TODO

## 调试文件详情

查看调试文件的明细，包含上传调试文件的具体解析。

```
GET /api/debug_files/:id
```

### 参数

!> 需要[用户认证](/docs/developer-guide/api#authentication)。

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| id | `String` | true | 调试文件 ID |

### 返回样例

> TODO

## 更新调试文件

更新调试文件

```
PUT /api/debug_files/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| id | `String` | true | 调试文件 ID |
| file | `File` | true | Zip 压缩文件后的调试文件 |
| release_version | `String` | true | 发布版本号，iOS 类型可忽略该参数 |
| build_version | `String` | true | 内部版本号，iOS 类型可忽略该参数 |

### 返回样例

> TODO

## 删除调试文件

删除指定调试文件

```
DELETE /api/debug_files/:id
```
### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| channel_key | `String` | true | 应用具体渠道的 Key |
| id | `String` | true | 调试文件 ID |

### 返回样例

> TODO

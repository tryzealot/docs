# 钉钉

[钉钉](https://developers.dingtalk.com/document/robots/custom-robot-access#section-e4x-4y8-9k0)的网络钩子结构体通常支持文本和 markdown 两种方式，
由于系统限制尽量使用关键词或 IP 地址白名单机制来接受消息。可通过如下配置实现：

## Text 文本格式

```ruby
{
  "msgtype": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\n上传时间: #{@uploaded_at}"
  }
}
```

## Markdown 格式

title 字段仅在对话列表展示，进入对话框的聊天内容则展示 text 字段

```ruby
{
  "msgtype": "markdown",
  "markdown": {
    "title": @title,
    "text": "## #{@title}\n平台: #{@device_type}\n上传时间: #{@uploaded_at}\n安装二维码:\n![qrcode](#{@qrcode_url})"
  }
}
```

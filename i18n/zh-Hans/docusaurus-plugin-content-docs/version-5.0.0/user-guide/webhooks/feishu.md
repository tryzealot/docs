# 飞书

[飞书](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN)的网络钩子结构体通常支持文本和卡片两种方式，
由于系统限制尽量使用关键词或 IP 地址白名单机制来接受消息。可通过如下配置实现：

## Text 文本格式

```ruby
{
  "msg_type": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\n上传时间: #{@uploaded_at}"
  }
}
```

## Interactive 卡片格式

通过这种格式可以实现支持 markdown 的部分语法：

```ruby
{
  "msg_type": "interactive",
  "card": {
    "config": {
      "wide_screen_mode": true,
      "enable_forward": true
    },
    "elements": [
      {
        "tag": "div",
        "text": {
          "content": "## #{@title}\n平台: #{@device_type}\n上传时间: #{@uploaded_at}\n安装二维码:\n![qrcode](#{@qrcode_url})",
          "tag": "lark_md"
        }
      },
      {
        "actions": [{
          "tag": "button",
          "text": {
            "content": "点击安装",
            "tag": "lark_md"
          },
          "url": @install_url,
          "type": "default",
          "value": {}
        }],
        "tag": "action"
      }
    ]
  }
}
```

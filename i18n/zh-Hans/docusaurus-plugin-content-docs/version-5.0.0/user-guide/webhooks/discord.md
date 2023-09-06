# Discord

[Discord](https://support.discord.com/hc/zh-tw/articles/228383668) 支持 Slack 兼容的网络钩子因此其结构体通常支持文本和 block 富文本两种方式，可通过如下配置实现：

## Text 文本格式

```ruby
{
  "text": "#{@title}\n平台: #{@device_type}\n上传时间: #{@uploaded_at}"
}
```

## Block 富文本格式

一个简单的支持 markdown 的 block

```ruby
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "## #{@title}\n平台: #{@device_type}\n上传时间: #{@uploaded_at}\n安装二维码:\n![qrcode](#{@qrcode_url})"
      }
    }
  ]
}
```

稍微好看点有些结构展示的 block

```ruby
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": @title,
      }
    },
    {
      "type": "section",
      "fields": [
        {
          "type": "mrkdwn",
          "text": "*平台:*\n#{@device_type}"
        },
        {
          "type": "mrkdwn",
          "text": "*上传时间:*\n#{@uploaded_at}"
        }
      ]
    },
    "accessory": {
      "type": "image",
      "image_url": @qrcode_url,
      "alt_text": "install qrcode"
    }
  ]
}
```

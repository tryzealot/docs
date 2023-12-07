# 企业微信

[企业微信](https://work.weixin.qq.com/api/doc/90000/90136/91770)的网络钩子结构体通常支持文本和 markdown 两种方式，可通过如下配置实现：

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

```ruby
{
  "msgtype": "markdown",
  "markdown": {
    "content": "## #{@title}\n平台: #{@device_type}\n上传时间: #{@uploaded_at}\n安装二维码:\n![qrcode](#{@qrcode_url})"
  }
}
```

# Wecom (Wechat Work)

[企业微信](https://work.weixin.qq.com/api/doc/90000/90136/91770) use Incoming Webhooks whose constructs
typically support both text and markdown, and can be configured as follows:

## Text format

```ruby
{
  "msgtype": "text",
  "text": {
    "content": "#{@title}\n\nInstall url：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

## Markdown format

```ruby
{
  "msgtype": "markdown",
  "markdown": {
    "content": "## #{@title}\nPlatform: #{@device_type}\nUplaod at: #{@uploaded_at}\nInstall QRcode:\n![qrcode](#{@qrcode_url})"
  }
}
```

# Lark (Feishu)

[飞书](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN) use Incoming Webhooks whose constructs
typically support both text and interactive card, and can be configured as follows:

> Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages.

## Text format

```ruby
{
  "msg_type": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

## Interactive card format

Use card format could use partly of markdown syntax:

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
          "content": "## #{@title}\nPlatform: #{@device_type}\nUplaod at: #{@uploaded_at}\nInstall QRcode:\n![qrcode](#{@qrcode_url})",
          "tag": "lark_md"
        }
      },
      {
        "actions": [{
          "tag": "button",
          "text": {
            "content": "Install",
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

# Dingtalk (Dingding)

[钉钉](https://developers.dingtalk.com/document/robots/custom-robot-access#section-e4x-4y8-9k0) use Incoming Webhooks whose constructs
typically support both text and markdown, and can be configured as follows:

> Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages.

## Text format

```ruby
{
  "msgtype": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

## Markdown format

The title field is only displayed in the dialog list, the text field is displayed for the chat content entering the dialog.

```ruby
{
  "msgtype": "markdown",
  "markdown": {
    "title": @title,
    "text": "## #{@title}\nPlatform: #{@device_type}\nUplaod at: #{@uploaded_at}\nInstall QRcode:\n![qrcode](#{@qrcode_url})"
  }
}
```

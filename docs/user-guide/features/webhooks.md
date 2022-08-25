# Webhook

Zealot provides a webhook for message notifications for each application channel.
The webhook is a fully customizable structure that can be used for most notification services, such as Wecom, Dingtalk, Slack, etc.

## Payload (default)

Each parameter of the default structure has its value provided as a variable,
and each variable starts with `@`, the default structure will be used if the custom structure is left empty when creating the webhook.
The following variables are all provided.

```ruby
{
  event: @event,
  title: @title,
  app_name: @name,
  device_type: @device_type,
  release_version: @release_version,
  build_version: @build_version,
  size: @file_size,
  changelog: @changelog,
  install_url: @install_url,
  icon_url: @icon_url,
  qrcode_url: @qrcode_url,
  uploaded_at: @uploaded_at
}
```

Output:

```json
{
  "event": "upload_events",
  "title": "Zealot upload 1.0.0 version",
  "app_name": "Zealot",
  "device_type": "iOS",
  "release_version": "1.0.0",
  "build_version": "1",
  "size": "30 MB",
  "install_url": "https://zealot.test/api/apps/download/12354",
  "icon_url": "https://zealot.test/api/apps/icon.png",
  "qrcode_url": "https://zealot.test/api/apps/354/qrcode",
  "uploaded_at": "2019-12-30 11:33:00",
  "changelog": "- Add feture A\n- Fix issue B\n- Release v1.0.0",
}
```

## Slack

[Slack](https://api.slack.com/messaging/webhooks) use Incoming Webhooks whose constructs
typically support both text and block rich text, and can be configured as follows:
### Text format

```ruby
{
  "text": "## #{@title}\nPlatform: #{@device_type}\nUpload at: #{@uploaded_at}"
}
```

### Block rich text format

A simple block with markdown support

```ruby
{
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "## #{@title}\nPlatform: #{@device_type}\nUpload at: #{@uploaded_at}\nInstal QRcode:\n![qrcode](#{@qrcode_url})"
      }
    }
  ]
}
```

Better look at some of the structures shown in the block

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
          "text": "*Platform:*\n#{@device_type}"
        },
        {
          "type": "mrkdwn",
          "text": "*Upload at:*\n#{@uploaded_at}"
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


## Wecom

[企业微信](https://work.weixin.qq.com/api/doc/90000/90136/91770) use Incoming Webhooks whose constructs
typically support both text and markdown, and can be configured as follows:

### Text format

```ruby
{
  "msgtype": "text",
  "text": {
    "content": "#{@title}\n\nInstall url：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

### Markdown format

```ruby
{
  "msgtype": "markdown",
  "markdown": {
    "content": "## #{@title}\nPlatform: #{@device_type}\nUplaod at: #{@uploaded_at}\nInstall QRcode:\n![qrcode](#{@qrcode_url})"
  }
}
```

## Dingtalk

[钉钉](https://developers.dingtalk.com/document/robots/custom-robot-access#section-e4x-4y8-9k0) use Incoming Webhooks whose constructs
typically support both text and markdown, and can be configured as follows:

> Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages.
### Text format

```ruby
{
  "msgtype": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

### Markdown format

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

## Feishu

[飞书](https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN) use Incoming Webhooks whose constructs
typically support both text and interactive card, and can be configured as follows:

> Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages.

### Text format

```ruby
{
  "msg_type": "text",
  "text": {
    "content": "#{@title}\n\n安装地址：#{@install_url}\nUplaod at: #{@uploaded_at}"
  }
}
```

### Interactive card format

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

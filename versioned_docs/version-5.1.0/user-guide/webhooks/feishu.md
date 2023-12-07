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
        "fields": [
          {
            "is_short": true,
            "text": {
              "tag": "lark_md",
              "content": "**Platform**\n#{@device_type}"
            }
          },
          {
            "is_short": true,
            "text": {
              "tag": "lark_md",
              "content": "**Version**\n#{@release_version} (#{@build_version})"
            }
          },
          {
            "is_short": true,
            "text": {
              "tag": "lark_md",
              "content": "**Developer**\n#{@username}"
            }
          },
          {
            "is_short": true,
            "text": {
              "tag": "lark_md",
              "content": "**Upload date**\n#{@uploaded_at}"
            }
          },
        ]
      },
      {
        "tag": "div",
        "text": {
          "content": "**Changelog**\n#{@changelog}",
          "tag": "lark_md"
        }
      },
      {
        "actions": [
          {
            "tag": "button",
            "text": {
              "content": "🐞 Go to app",
              "tag": "lark_md"
            },
            "url": "#{@release_url}",
            "type": "primary",
            "value": {}
          }
        ],
        "tag": "action"
      }
    ],
    "header": {
      "title": {
        "content": "#{@title}",
        "tag": "plain_text"
      }
    }
  }
}
```

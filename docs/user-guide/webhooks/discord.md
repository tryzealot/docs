# Discord

[Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) should use Slack-Compatible Webhook whose constructs
typically support both text and block rich text, and can be configured as follows:

## New

:::tip

Working in process, i dont know when this version is out. follow the un-offical [document](https://birdie0.github.io/discord-webhooks-guide).

:::

## Legacy

:::caution

This section was dropped by offical. **DO NOT USE**

:::


### Text format

```ruby
{
  "text": "##{@title}\nPlatform: #{@device_type}\nUpload at: #{@uploaded_at}"
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

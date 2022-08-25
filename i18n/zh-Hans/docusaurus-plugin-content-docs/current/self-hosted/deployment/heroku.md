---
sidebar_label: "Heroku"
---

# 部署 Zealot 到 Heroku 指南

## Deploying on Heroku

Deploy Zealot on Heroku through the following steps.

1. Click [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy/?template=https://github.com/tryzealot/zealot) button to install on heroku.
1. Log in and go to the Resources tab in the Heroku app dashboard and ensure the worker dynos is turned on.
1. Head over to settings tabs in Heroku app dashboard and click reveal config vars.
1. Configure the environment variables for [mailer](/docs/self-hosted/configuration/environment-variables#configure-emails) as per the [documentation](/docs/self-hosted/configuration/environment-variables).
1. Visit `yourapp.herokuapp.com` and enjoy using Zealot.

## Updating the deployment on Heroku

Whenever a new version is out for Zealot, you update your Heroku deployment through following steps.

1. In the deploy tab, choose `Github` as the deployment option.
2. Connect Zealot repo to the app.
3. Head over to the manual deploy option, choose `master` or `develop` branch and hit deploy.

## Known Limitations

1. If you are on a free tier and you don’t access the application for a while Heroku will put your dynos to sleep. You can fix this by upgrading the dynos to paid tier.

2. Heroku has an "ephemeral" hard disk. The files uploaded to Zealot would not persist after the application is restarted. Zealot uses local disk as the upload destination only.

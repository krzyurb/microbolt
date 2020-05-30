# Microbolt

This is an idea of slack bot created using [boltjs](https://slack.dev/bolt-js) that reacts to slack actions but fetches data from external microservices/APIs.

## Set up

You need to fill `.env` file with proper data. You will obtain all those keys from page of your app ([your slack apps](https://api.slack.com/apps)).

* `APP_ID` - select your app and copy id from url (e.g. `https://api.slack.com/apps/APP_ID`)
* `SLACK_SIGNING_SECRET` - you will find it in `Basic Information`
* `SLACK_BOT_TOKEN` - go to `OAuth & Permissions`. After creating new scope with `Add an OAuth Scope` copy your token.

## Local development

1. You need to enable events. Go to config of your slack app and enable it in `Event Subscriptions` category. Consider using [ngrok](https://ngrok.com/) to publish your local app.

2. After that you can run your app:

```
node index.js
```

## Testing

```
yarn test
```

# Inbox Tuna

A Next.js website for managed customer communication: email, text, newsletters, and automated follow-up.

```sh
npm ci
npm run dev
```

Run `npm run lint` and `npm run build` before deploying. See [docs/LAUNCH.md](docs/LAUNCH.md) for contact delivery configuration, remaining assets, and launch notes.

The inquiry form defaults to an explicit email-draft flow. It does not silently discard requests or claim to send mail without a configured provider.

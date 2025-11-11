import sendgrid from '@sendgrid/mail'

import { Config } from '@crowd/archetype-standard'
import { ServiceWorker, Options } from '@crowd/archetype-worker'

import { scheduleEmailEagleEyeDigest, scheduleEmailAnalyticsWeekly } from './schedules'

const config: Config = {
  envvars: [
    'API_FRONTEND_URL',
    'EAGLE_EYE_URL',
    'EAGLE_EYE_API_KEY',
    'CUBEJS_URL',
    'CUBEJS_JWT_SECRET',
    'CUBEJS_JWT_EXPIRY',
    'SENDGRID_KEY',
    'SENDGRID_TEMPLATE_EAGLE_EYE_DIGEST',
    'SENDGRID_TEMPLATE_WEEKLY_ANALYTICS',
    'SENDGRID_NAME_FROM',
    'SENDGRID_EMAIL_FROM',
  ],
  producer: {
    enabled: false,
  },
  temporal: {
    enabled: true,
  },
  redis: {
    enabled: false,
  },
}

const options: Options = {
  postgres: {
    enabled: true,
  },
}

export const svc = new ServiceWorker(config, options)

setImmediate(async () => {
  await svc.init()

  sendgrid.setApiKey(process.env['SENDGRID_KEY'])

  await scheduleEmailEagleEyeDigest()
  await scheduleEmailAnalyticsWeekly()

  await svc.start()
})

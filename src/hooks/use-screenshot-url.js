import getScreenshotUrl from '@/lib/screenshot-url'
import { useState, useEffect } from 'react'
import isDev from '@/lib/is-dev'

export default queryVariables => {
  const [screenshotUrl, setScreenshotUrl] = useState('')

  const sync = queryVariables => {
    setScreenshotUrl(
      getScreenshotUrl(
        decodeURI(window.location.href.replace('/editor/', '')),
        {
          endpoint: isDev ? 'http://localhost:3000' : queryVariables.endpoint
        }
      )
    )
  }

  useEffect(() => sync(queryVariables), [])

  return [screenshotUrl, sync]
}
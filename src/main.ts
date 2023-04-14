import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const url: string = core.getInput('url')
    const response = await fetch(url)
    const text = await response.text()
    core.setOutput('time', new Date().toTimeString())
    core.info(text)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()

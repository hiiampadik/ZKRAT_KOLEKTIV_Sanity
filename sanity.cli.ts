import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '61w2dclt',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    strictMode: true,
    overloadClientMethods: true,
  }
})

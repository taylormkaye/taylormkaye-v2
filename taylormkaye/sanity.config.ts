import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './sanity/schemas'

const config = defineConfig({
  name: 'default',
  title: 'taylormkaye',

  projectId: 't4txo4o6',
  dataset: 'production',
  basePath: '/admin',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})

export default config

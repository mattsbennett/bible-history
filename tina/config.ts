import { defineConfig } from 'tinacms'

console.log('Tina Client ID:', process.env.NEXT_PUBLIC_TINA_CLIENT_ID);
console.log('Tina Token:', process.env.TINA_TOKEN);

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'timelinePage',
        label: 'Timeline Page',
        path: 'content/timelinePage',
        fields: [
          {
            type: 'string',
            name: 'heroHeading',
            label: 'Hero Heading',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'heroSubheading',
            label: 'Hero Subheading',
            required: true,
          },
          {
            type: 'string',
            name: 'intro',
            label: 'Introduction',
            isBody: true,
            required: true,
          },
          {
            type: 'string',
            name: 'timelineOutroHeading',
            label: 'Timeline Outro Heading',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'timelineOutro',
            label: 'Timeline Outro',
            isBody: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        name: 'otherPages',
        label: 'Other Pages',
        path: 'content/otherPages',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            required: true,
          },
        ],
        ui: {
          allowedActions: {
            create: false,
          },
        },
      },
      {
        name: 'events',
        label: 'Timeline Events',
        path: 'content/events',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover Image',
          },
          {
            type: 'string',
            name: 'intro',
            label: 'Intro',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'source',
            label: 'Source',
            toolbarOverride: ['bold', 'italic', 'link'],
          },
          {
            type: 'string',
            name: 'dated',
            label: 'Dated Year',
            required: true,
            ui: {
              validate(value) {
                if (value && value.match(/^-?\d+$/) === null) {
                  return 'Dated year must be an integer value'
                }
              },
            },
            description: 'Use negative numbers for BCE',
          },
          {
            type: 'string',
            name: 'discovered',
            label: 'Discovered Year',
            ui: {
              validate(value) {
                if (value && value.match(/^-?\d+$/) === null) {
                  return 'Discovered year must be an integer value'
                }
              },
              description: 'Use negative numbers for BCE',
            },
          },
        ],
        ui: {
          allowedActions: {
            createNestedFolder: false,
          },
        },
      },
    ],
  },
  // search: {
  //   tina: {
  //     indexerToken: process.env.TINA_SEARCH_TOKEN,
  //     stopwordLanguages: ['eng'],
  //   },
  //   indexBatchSize: 100,
  //   maxSearchIndexFieldLength: 100,
  // },
})

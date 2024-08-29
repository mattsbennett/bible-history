import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "events",
        label: "Timeline Events",
        path: "content/events",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
            required: true,
          },
          {
            type: "string",
            name: "intro",
            label: "Intro",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            required: true,
          },
          {
            type: "string",
            name: "dated",
            label: "Dated Year",
            required: true,
            ui: {
              validate(value) {
                if (value && value.match(/^-?\d+$/) === null) {
                  return "Dated year must be an integer value";
                }
              }
            },
            description: "Use negative numbers for BCE",
          },
          {
            type: "string",
            name: "discovered",
            label: "Discovered Year",
            ui: {
              validate(value) {
                if (value && value.match(/^-?\d+$/) === null) {
                  return "Discovered year must be an integer value";
                }
              },
              description: "Use negative numbers for BCE",
            }
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/#${document._sys.breadcrumbs}`,
        },
      },
    ],
  },
});

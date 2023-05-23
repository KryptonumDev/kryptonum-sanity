import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const singletonActions = new Set(["publish", "discardChanges", "restore"])

const singletonTypes = new Set(["footer"])

export default defineConfig({
  name: 'default',
  title: 'kryptonum',

  projectId: '8mfl0q49',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Footer")
              .id("footer")
              .child(
                S.document()
                  .schemaType("footer")
                  .documentId("footer")
              ),
            // Regular document types
            S.documentTypeListItem("caseStudies"),
            S.documentTypeListItem("blog_entries"),
            S.documentTypeListItem("blog_categories"),
            S.documentTypeListItem("curiosities"),
            S.documentTypeListItem("team"),
            S.documentTypeListItem("technologies"),
            S.documentTypeListItem("testimonials"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})

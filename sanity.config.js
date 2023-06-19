import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { singleTypes } from './schemas'
import { media } from 'sanity-plugin-media'

import {markdownSchema} from 'sanity-plugin-markdown'
import {CustomMarkdownInput} from './components/CustomInput'

import global from './schemas/singleTypes/global';

const singletonTypes = new Set(singleTypes.map(type => type.name))

const singletonActions = new Set(["publish", "discardChanges", "restore"])

function createListItem(S, singleType) {
  const { title, name, icon } = singleType;
  return S.listItem()
    .title(title)
    .id(name)
    .icon(icon)
    .child(
      S.document()
        .schemaType(name)
        .title(title)
        .documentId(name)
    );
}

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
            createListItem(S, global),
            S.divider(),
            ...singleTypes.map((item) => createListItem(S, item)),
            S.divider(),
            S.documentTypeListItem("blog_entries"),
            S.documentTypeListItem("blog_categories"),
            S.divider(),
            S.documentTypeListItem("curiosity_entries"),
            S.documentTypeListItem("curiosity_categories"),
            S.divider(),
            S.documentTypeListItem("caseStudies"),
            S.documentTypeListItem("teamMember"),
            S.documentTypeListItem("technologies"),
            S.documentTypeListItem("testimonials"),
          ]),
    }),
    visionTool(),
    markdownSchema({input: CustomMarkdownInput}),
    media(),
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

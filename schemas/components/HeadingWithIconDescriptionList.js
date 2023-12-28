import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'HeadingWithIconDescriptionList',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'IconDescriptionList',
      type: 'array',
      of: [{type: 'IconDescription'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[HeadingWithIconDescriptionList] ${removeMarkdown(title)}`,
      }
    },
  },
}

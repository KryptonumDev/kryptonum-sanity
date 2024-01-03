import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'HeadingWithIconTitleGrid',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'titleAndImageGrid',
      type: 'array',
      of: [{type: 'titleAndImage'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      return {
        title: `[HeadingWithIconTitleGrid] ${removeMarkdown(title)}`,
      }
    },
  },
}

import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'IconDescription',
  title: 'List',
  type: 'object',
  fields: [
    {
      name: 'icon',
      type: 'image',
    },
    {
      name: 'description',
      type: 'markdown',
    },
  ],
  preview: {
    select: {
      title: 'description',
    },
    prepare({title}) {
      return {
        title: `[Icon Description] ${removeMarkdown(title)}`,
      }
    },
  },
}

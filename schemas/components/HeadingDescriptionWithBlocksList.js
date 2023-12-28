import {removeMarkdown} from '../../utils/functions'

export default {
  name: 'HeadingDescriptionWithBlocksList',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'description',
      type: 'markdown',
    },
    {
      name: 'blocks',
      type: 'array',
      of: [{type: 'titleDescriptionAndImg'}],
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: `[HeadingDescriptionWithBlocksList] ${removeMarkdown(title)}`,
        subtitle: `${removeMarkdown(subtitle)}`,
      }
    },
  },
}

import { removeMarkdown } from "../../utils/functions";

export default {
  name: 'Slider',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'slides',
      type: 'array',
      of: [{type: 'titleDescriptionAndImg'}]
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'slides',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Slider] ${removeMarkdown(title)}`,
        subtitle: `${subtitle.length} slides`,
      };
    }
  }
}
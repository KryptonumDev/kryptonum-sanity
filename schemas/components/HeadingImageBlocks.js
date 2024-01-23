import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'HeadingImageBlocks',
  title: 'Heading Image Blocks',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown'
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'blocks',
      type: 'array',
      of: [{
        type: 'titleAndDescription'
      }]
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      image: 'image',
      blocks: 'blocks',
    },
    prepare({ heading, image, blocks }) {
      return {
        title: `[HeadingImageBlocks] - ${removeMarkdown(heading)}`,
        subtitle: `${blocks.length} blocks`,
        media: image,
      }
    },
  },
}
import { removeMarkdown } from "../../utils/functions"

export default {
  name: 'HeadingWithTitleAndImgList',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'markdown',
    },
    {
      name: 'TitleAndImage',
      type: 'array',
      of:[{type: 'titleAndImage'}]
    }
  ],
  preview: {
    select: {
      title: 'heading'
    },
    prepare({ title }) {
      return {
        title: `[HeadingWithTitleAndImgList] ${removeMarkdown(title)}`
      }
    }
  }
}
import { removeMarkdown } from "../../utils/functions"

export default {
  name: "titleAndImage",
  title: "Title & Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
    },
    {
      name: 'img',
      title: 'Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'img'
    },
    prepare({ title, media }){
      return {
        title: removeMarkdown(title),
        media
      }
    }
  }
}
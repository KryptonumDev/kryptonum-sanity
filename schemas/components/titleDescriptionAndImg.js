import { removeMarkdown } from "../../utils/functions"

export default {
  name: "titleDescriptionAndImg",
  title: "Title, Description & Image",
  type: "object",
  fields: [
    {
      name: 'title',
      type: 'markdown',
    },
    {
      name: 'description',
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
      subtitle: 'description',
      media: 'img'
    },
    prepare({ title, subtitle, media }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
        media
      }
    }
  }
}
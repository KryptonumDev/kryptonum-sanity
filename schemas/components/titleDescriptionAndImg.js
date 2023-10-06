import { removeMarkdown } from "../../utils/functions"

export default {
  name: "titleDescriptionAndImg",
  title: "Title, Description & Image",
  type: "object",
  fields: [
    {
      name: 'isHref',
      type: 'boolean',
      initialValue: false,
    },
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
    {
      name: 'href',
      title: 'Link (optional)',
      type: 'string',
      validation: Rule =>
        Rule.custom(value => {
          if (value && !value.startsWith('/') && !value.startsWith('https://')) {
            return 'Invalid URL format. Please provide a relative URL (starting with "/") or an absolute URL (with "https").';
          }
          return true;
        }),
      description: 'A URL, either relative or absolute (https://)',
      hidden: ({ parent }) => !parent?.isHref
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


export const titleDescriptionAndImg_Array = {
  name: "titleDescriptionAndImg_Array",
  title: "Title, Description & Image",
  type: "object",
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'titleDescriptionAndImg',
        }
      ],
      title: 'Blocks',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'blocks',
    },
    prepare({ title }) {
      return {
        title: `[Title, Description & Image] - ${title.length} blocks`,
      };
    }
  }
}
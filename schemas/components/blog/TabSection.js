import { removeMarkdown } from "../../../utils/functions"

export default {
  name: "TabSection",
  title: "Tab Section",
  type: "object",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'markdown',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Tab Section] - ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}

export const TabSection_Array = {
  name: "TabSection_Array",
  title: "Tab Section Array",
  type: "object",
  fields: [
    {
      name: 'blocks',
      type: 'array',
      of: [
        {
          type: 'TabSection',
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
        title: `[Tab Section] - ${title.length} blocks`,
      };
    }
  }
}
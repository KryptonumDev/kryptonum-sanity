import { removeMarkdown } from "../../utils/functions";

export default {
  name: "titleAndDescription",
  title: "Title And Description",
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
    },
    prepare({ title, subtitle }){
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      }
    }
  }
}
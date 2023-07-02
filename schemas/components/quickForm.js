import { removeMarkdown } from "../../utils/functions";

export default {
  name: "quickForm",
  title: "Quick Form",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'subheading',
      type: 'markdown',
      title: 'Subheading',
    },
    {
      name: 'cta',
      type: 'string',
      title: 'Cta',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({ title, subtitle }) {
      return {
        title: removeMarkdown(title),
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}
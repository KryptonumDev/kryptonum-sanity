import { removeMarkdown } from "../../utils/functions";

export default {
  name: "consultationForm",
  title: "Consultation Form",
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
      name: 'buttonContents',
      type: 'string',
      title: 'Button Contents',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[consultationForm] ${removeMarkdown(title)}`,
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}
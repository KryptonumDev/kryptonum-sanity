import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_Sources",
  title: "Sources",
  type: "object",
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'markdown',
      initialValue: '**Źródła ~**'
    },
    {
      name: 'list',
      type: 'array',
      of: [
        {
          type: 'link',
        }
      ],
      title: 'List',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: removeMarkdown(title),
      };
    }
  }
}
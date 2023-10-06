import { removeMarkdown } from "../../utils/functions";

export default {
  name: "CaseStudies",
  title: "Case Studies",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Case Studies] ${removeMarkdown(title)}`,
      };
    }
  }
}
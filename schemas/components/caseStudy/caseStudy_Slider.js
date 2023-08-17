import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Slider",
  title: "Case Study Slider",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'slides',
      type: 'array',
      of: [
        { type: 'titleDescriptionAndImg' }
      ],
      title: 'Slides',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'slides',
    },
    prepare({ title, subtitle }) {
      return {
        title: `[Slider] ${removeMarkdown(title)}`,
        subtitle: `${subtitle.length} slides`,
      };
    }
  }
}
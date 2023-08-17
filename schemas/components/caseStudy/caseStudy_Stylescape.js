import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Stylescape",
  title: "Case Study Stylescape",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'paragraph',
      type: 'markdown',
      title: 'Paragraph',
    },
    {
      name: 'stylescapes',
      type: 'array',
      of: [
        {
          type: 'image'
        }
      ],
      title: 'Stylescapes',
    },
    {
      name: 'elements',
      type: 'array',
      of: [
        {
          type: 'titleAndImage'
        }
      ],
      title: 'Elements',
    },
  ],
  preview: {
    select: {
      subtitle: 'heading',
      media: 'stylescapes',
    },
    prepare({ subtitle, media }) {
      return {
        title: `[Stylescape] ${media.length} stylescapes`,
        subtitle: removeMarkdown(subtitle),
      };
    }
  }
}
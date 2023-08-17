import { removeMarkdown } from "../../utils/functions";

export default {
  name: "ctaSection",
  title: "CTA Section",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Button',
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'cta',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: removeMarkdown(title),
        subtitle: `'${subtitle.text}' linked to '${subtitle.href}'`,
        media
      };
    }
  }
}
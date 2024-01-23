import { removeMarkdown } from "../../utils/functions"

export default {
  name: "ctaSectionPill",
  title: "CTA Section Pill",
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
    {
      name: 'icon',
      type: 'image',
      title: 'Icon'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'cta',
      img: 'img',
    },
    prepare({ title, subtitle, img }) {
      return {
        title: `[CtaSectionPill] - ${removeMarkdown(title)}`,
        subtitle: `'${subtitle.text}' linked to '${subtitle.href}'`,
        media: img
      };
    }
  }
}
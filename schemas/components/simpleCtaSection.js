import { removeMarkdown } from "../../utils/functions";

export default {
  name: "simpleCtaSection",
  title: "Simple CTA Section",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required(),
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'CTA',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      cta: 'cta'
    },
    prepare({ title, cta }) {
      return {
        title: `[Simple CTA Section] ${removeMarkdown(title)}`,
        subtitle: cta.href ? `'${cta.text}' linked to '${cta.href}'` : '',
      };
    }
  }
}
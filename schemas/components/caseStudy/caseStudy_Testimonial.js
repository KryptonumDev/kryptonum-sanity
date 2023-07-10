import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "caseStudy_Testimonial",
  title: "Opinia klienta",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      initialValue: '**Opinia** klienta',
    },
    {
      name: 'testimonial',
      type: 'reference',
      to: [
        { type: 'testimonials' }
      ],
      options: { disableNew: true }
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
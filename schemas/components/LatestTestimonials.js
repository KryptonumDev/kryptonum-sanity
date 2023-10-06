import { removeMarkdown } from "../../utils/functions";

export default {
  name: "LatestTestimonials",
  title: "Testimonials",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare({ title }) {
      return {
        title: `[Testimonials] ${removeMarkdown(title)}`,
      };
    }
  }
}
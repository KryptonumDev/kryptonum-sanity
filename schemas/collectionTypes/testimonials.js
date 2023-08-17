import { removeMarkdown } from "../../utils/functions";

export default {
  name: 'testimonials',
	title: 'Referencje',
  type: 'document',
  icon: () => '🖊️',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'project',
      type: 'string',
      title: 'Project',
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text'
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Call To Action',
      name: 'cta',
      type: 'cta'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
      media: 'img'
    },
    prepare({ title, subtitle, media }) {
      return {
        title: `[Testimonial] ${removeMarkdown(title)}`,
        subtitle,
        media
      }
    }
  }
}
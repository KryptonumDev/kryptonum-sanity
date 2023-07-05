import { removeMarkdown } from "../../../utils/functions";

export default {
  name: "curiosity_Share",
  title: "Share",
  type: "object",
  fields: [
    {
      name: 'heading',
      type: 'markdown',
      title: 'Heading',
      initialValue: '**Udostępnij** artykuł'
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      initialValue: {
        asset: {
          _ref: 'image-0c5df92be748428b48f09c0ad04ca8e7bc9400e6-556x447-webp',
        }
      }
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'img'
    },
    prepare({ title }) {
      return {
        title: removeMarkdown(title),
      };
    }
  }
}
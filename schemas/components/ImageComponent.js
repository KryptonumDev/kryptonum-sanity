export default {
  name: "ImageComponent",
  title: "Image Component",
  type: "object",
  fields: [
    {
      name: 'isMockup',
      type: 'boolean',
      title: 'Should be visible as a mockup?',
      initialValue: true,
    },
    {
      name: 'img',
      type: 'image',
      title: 'Image',
    },
  ],
  preview: {
    select: {
      isMockup: 'isMockup',
      media: 'img',
    },
    prepare({ isMockup, media }) {
      return {
        title: `[Image Component${isMockup ? " - as mockup" : ''}]`,
        media
      };
    }
  }
}
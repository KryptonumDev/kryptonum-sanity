export default {
  name: "caseStudy_Image",
  title: "Case Study Image",
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
        title: isMockup ? `[Mockup]` : `[Image]`,
        media
      };
    }
  }
}
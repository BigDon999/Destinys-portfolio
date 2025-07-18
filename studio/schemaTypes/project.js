export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'technologies', title: 'Technologies', type: 'array', of: [{ type: 'string' }] },
    { name: 'githubLink', title: 'GitHub Link', type: 'url' },
    { name: 'liveLink', title: 'Live Link', type: 'url' },
  ],
}; 
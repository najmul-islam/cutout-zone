export default function sitemap() {
  const baseUrl = "https://www.cutoutzone.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
  ];
}

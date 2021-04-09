export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60705787cb5e4a41448e06d6",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-musjwfpd",
                  apiId: "aa3e1996-ff6d-40ea-a971-46b92616f2fb",
                },
                {
                  buildHookId: "607057877831524de0e80873",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9r3gff97",
                  apiId: "9f4a5381-484c-4739-8716-dae8f7b9c9b3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/martinstor/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9r3gff97.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

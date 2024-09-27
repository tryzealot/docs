module.exports = [
  {
    label: "Getting Started",
    type: "doc",
    id: 'contributing-guide/index',
  },
  {
    collapsible: false,
    label: "Local development",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "contributing-guide/local-development/devcontainer",
      "contributing-guide/local-development/source-code"
    ],
  },
];

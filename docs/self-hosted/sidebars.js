module.exports = [
  {
    label: "Getting Started",
    type: "doc",
    id: 'self-hosted/index',
  },
  {
    collapsible: false,
    label: "Deployment",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "self-hosted/deployment/architecture",
      "self-hosted/deployment/requirements",
      "self-hosted/deployment/docker",
      "self-hosted/deployment/kubernetes",
      "self-hosted/deployment/render",
      // "self-hosted/deployment/heroku",
      "self-hosted/deployment/source-code",
    ],
  },
  {
    collapsible: false,
    label: "Configuration",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "self-hosted/configuration/environments",
    ],
  },
  {
    type: 'doc',
    label: "Storage",
    id: 'self-hosted/storage',
  },

];

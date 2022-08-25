module.exports = [
  {
    label: "Getting Started",
    type: "doc",
    id: 'user-guide/index',
  },
  {
    collapsible: true,
    label: "Features",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "user-guide/features/apple_team",
      "user-guide/features/webhooks",
    ],
  },
  "user-guide/permissions",
  "user-guide/best_practices",
  "user-guide/screenshot",
  "user-guide/changelog",
  "user-guide/qa",
  "user-guide/credits",
];

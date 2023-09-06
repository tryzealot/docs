module.exports = [
  {
    label: "Getting Started",
    type: "doc",
    id: 'user-guide/index',
  },
  {
    label: "Dashboard",
    type: "doc",
    id: 'user-guide/dashboard',
  },
  {
    collapsible: true,
    label: "Apps",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "user-guide/apps/create",
    ],
  },
  {
    collapsible: true,
    label: "Debug Files",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "user-guide/debug-files/upload",
    ],
  },
  {
    collapsible: true,
    label: "Toolkits",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "user-guide/toolkits/teardown",
      "user-guide/toolkits/fetch-udid",
    ],
  },
  {
    collapsible: true,
    label: "Webhooks",
    type: "category",
    link: {
      type: "doc",
      id: 'user-guide/webhooks',
    },
    items: [
      "user-guide/webhooks/slack",
      "user-guide/webhooks/discord",
      "user-guide/webhooks/feishu",
      "user-guide/webhooks/dingtalk",
      "user-guide/webhooks/wecom",
    ],
  },
  {
    collapsible: true,
    label: "Administrator",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "user-guide/administrator/apple-team",
      "user-guide/administrator/permissions",
      "user-guide/administrator/backup",
      {
        collapsible: true,
        label: "Monitoring",
        type: "category",
        link: {
          type: 'generated-index',
        },
        items: [
          "user-guide/administrator/monitoring/system-info",
          "user-guide/administrator/monitoring/logging",
          "user-guide/administrator/monitoring/background-jobs",
          "user-guide/administrator/monitoring/database-analytics",
        ],
      },
    ],
  },
  "user-guide/best_practices",
  "user-guide/changelog",
  "user-guide/qa",
  "user-guide/credits",
];

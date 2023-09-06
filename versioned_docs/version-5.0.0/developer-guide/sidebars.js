module.exports = [
  {
    label: "Getting Started",
    type: "doc",
    id: 'developer-guide/index',
  },
  {
    collapsible: false,
    label: "SDKs",
    type: "category",
    link: {
      type: 'generated-index',
    },
    items: [
      "developer-guide/sdk/ios",
      "developer-guide/sdk/android"
    ],
  },
  {
    collapsible: false,
    label: "fastlane plugins",
    type: "category",
    link: {
      type: 'doc',
      id: 'developer-guide/fastlane',
    },
    items: [
      "developer-guide/fastlane/zealot",
      "developer-guide/fastlane/zealot_version_check",
      "developer-guide/fastlane/zealot_debug_file",
      "developer-guide/fastlane/zealot_sync_devices"
    ],
  },
  {
    collapsible: false,
    label: "APIs",
    type: "category",
    link: {
      type: 'doc',
      id: 'developer-guide/api',
    },
    items: [
      "developer-guide/api/apps",
      "developer-guide/api/debug_files",
    ],
  }
];

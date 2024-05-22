---
sidebar_label: "Permissions"
---

# User Permissions and roles

Zealot offers four types of user permissions.

- **Guest** can view and download mostly data but can't make changes if enable guest mode.
- **User** can view and download all data, but can't make changes.
- **Developer** can manage app services (e.g. create app/scheme/channel, upload app/debug file).
- **Administrator** can manage system settings, apple teams, app settings, collaborators etc.

## Roles

These are the all roles in Zealot and the actions each can take:

<table>
  <thead>
    <tr>
      <th>Action</th>
      <th>Guest (On/Off)</th>
      <th>User</th>
      <th>Developer</th>
      <th>Administrator</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><h4>Dashboard</h4></td>
    </tr>
    <tr>
      <td>View all data</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View app list</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View app scheme(s) and channel(s) detail</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View the build(release) of app</td>
      <td>✓/✓ <br />Password Auth</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View webhook list</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Upload/Install/Download app</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Create/Edit/Delete an app</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Create/Edit/Delete a scheme/channel of app</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Delete a given version of app</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Test a webhook network connection</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Enable/Disable webhook</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Delete an app</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View app collaborators</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Edit/destory app collaborators</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>DebugFile</h4></td>
    </tr>
    <tr>
      <td>View debug file list</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View debug file detail</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Download debug file</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Upload/Delete a debug file</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>Teardown</h4></td>
    </tr>
    <tr>
      <td>View teardown list</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View teardown detail</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>Delete a teardown</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>Admin</h4></td>
    </tr>
    <tr>
      <td>View and manage users</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View and manage webhooks</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View and manage Apple developer accounts</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View and manage settings</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View system informations</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View and manage background jobs</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>View realtime logging</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

## Collaborators

Add permissions management for individual applications since [#1496](https://github.com/tryzealot/zealot/pull/1496).
These are the all roles within an App and the actions each can take:

Roles | Create App | See all Apps | Manage App | Add Collaborator | Upload App
------|------------|--------------|------------|------------------|-----------
Guest | ✕ | ✕ | ✕ | ✕ | ✕
User | ✕ | ✓ Only if you belong | ✕ | ✕ | ✕
Developer | ✓ | ✓ Only if you belong | ✓ | ✕ | ✓
Administrator | ✓ | ✓ | ✓ | ✓ | ✓

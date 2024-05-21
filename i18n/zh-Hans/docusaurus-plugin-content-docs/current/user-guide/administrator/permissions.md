# 用户权限

Zealot 提供四种用户权限：

- **游客**可以查看和下载大部分数据，但在启用访客模式时不能进行更改。
- **普通用户**可以查看和下载所有数据，但不能进行更改。
- **开发者**可以管理应用服务（例如创建应用/方案/频道，上传应用/调试文件）。
- **管理员**可以管理系统设置、苹果团队、应用设置、协作者等。

## 权限明细

以下是全部权限类型的详细列表。

<table>
  <thead>
    <tr>
      <th>功能</th>
      <th>游客（开/关）</th>
      <th>普通用户</th>
      <th>开发者</th>
      <th>管理员</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5"><h4>控制面板</h4></td>
    </tr>
    <tr>
      <td>浏览所有的数据</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览应用列表</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览应用类型和渠道详情</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览应用类型和渠道详情</td>
      <td>✓/✓ <br />支持密码访问</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览应用内的网络钩子</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>上传/安装/下载应用</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>创建/编辑/删除应用</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>创建/编辑/删除应用的类型或渠道</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>删除指定的应用版本和上传的应用文件</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>测试应用的网络钩子</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>启用或禁用网络钩子</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>删除应用</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>查看应用成员列表</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>编辑/删除应用成员</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>调试文件</h4></td>
    </tr>
    <tr>
      <td>浏览调试文件列表</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览上传调试文件详情</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>下载调试文件</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>上传/删除调试文件</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>应用解包</h4></td>
    </tr>
    <tr>
      <td>查看应用解包列表</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>查看应用解包详情</td>
      <td>✓/✕</td>
      <td>✓</td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td>删除应用解包</td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <td colspan="5"><h4>管理面板</h4></td>
    </tr>
    <tr>
      <td>浏览和管理用户</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览和管理全部的网络钩子</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览和管理全部的苹果开发者</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览和管理系统设置</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览系统环境的数据</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览和管理后台任务</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
    <tr>
      <td>浏览系统实时日志</td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

## 应用成员权限

此功能是 [#1496](https://github.com/tryzealot/zealot/pull/1496) 开始新增的针对单独应用的权限管理。以下是应用成员各权限的详细列表。

角色 | 创建应用 | 查看所有应用 | 管理应用 | 添加协作成员 | 上传应用
----|---------|------------|--------|-------------|-----------
访客 | ✕ | ✕ | ✕ | ✕ | ✕
用户 | ✕ | ✓ 仅针对所属应用 | ✕ | ✕ | ✕
开发者 | ✓ | ✓ 仅针对所属应用 | ✓ | ✓ | ✓
管理员 | ✓ | ✓ | ✓ | ✓ | ✓

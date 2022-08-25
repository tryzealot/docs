# 服务架构

运行 Zealot 依赖如下服务才能保证正常运行：

- 基于 Ruby on Rails 运行的网页和 API 服务
- Sidekiq 提供后台的异步任务管理服务
- PostgreSQL 数据库服务
- Redis 缓存服务

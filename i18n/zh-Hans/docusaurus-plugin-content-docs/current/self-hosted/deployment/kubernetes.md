---
sidebar_label: "Kubernetes"
---

# Kubernetes 部署 Zealot 指南

Zealot 原生支持使用 Kubernetes 部署，不过一直还没有梳理 `.yaml` 配置文件用于安装。

## 部署清单

- 生成 `Secret`/`Configmap` 存储环境变量。
- 生成 `PersistentVolumeClaim` 用于 `public/uploads`, `public/bakcup` 的持久化存储。
- 生成 `Deployment` 来管理 `zealot` Pod。
- 生成 `Ingress` 配置 Zealot 路由访问。

## 详细步骤

### 10-zealot-namespace.yml

创建 Zealot 命名空间。

```yaml title="10-zealot-namespace.yml"
api Version: v1
kind: Namespace
metadata:
name: zealot
```

### 20-zealot-secrets.yml

配置 Zealot 涉及隐私数据的[环境变量](/docs/self-hosted/configuration/environment-variables)，值是需要经过 base64 加密。

```yaml title="20-zealot-secrets.yml"
apiVersion: v1
kind: Secret
metadata:
  namespace: zealot
  name: zealot-secrets
data:
  ZEALOT_ADMIN_EMAIL: V1ZkU2RHRlhOVUZsYlZab1lrYzVNRXh0VG5aaVVUMDk=
  ZEALOT_ADMIN_PASSWORD: emVAbDB0
  ZEALOT_POSTGRES_HOST: cG9zdGdyZXM=
  ZEALOT_POSTGRES_PORT: NTQzMg==
  ZEALOT_POSTGRES_USERNAME: emVhbG90
  ZEALOT_POSTGRES_PASSWORD: emVAbDB0
  ZEALOT_POSTGRES_DB_NAME: emVhbG90
  REDIS_URL: cmVkaXM6Ly9yZWRpczo2Mzc5LzE=

  # echo -n 'secret-key' | sha256sum | awk '{ printf $1 }' | base64
  SECRET_TOKEN: ODVkYmUxNWQ3NWVmOTMwOGM3YWUwZjMzYzdhMzI0Y2M2ZjRiZjUxOWEyZWQyZjMwMjdiZDMzYzE0MGE0ZjlhYQ==
```

### 21-zealot-configmap.yml

配置 Zealot 正常数据的[环境变量](/docs/self-hosted/configuration/environment-variables)。

```yaml title="21-zealot-configmap.yml"
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: zealot
  name: zealot-config
data:
  ZEALOT_DOMAIN: zealot.icyleaf.dev
  DEFAULT_LOCALE: en
  ZEALOT_REGISTER_ENABLED: "true"
```

### 30-zealot-storage.yml

为上传文件（应用包和调试文件）以及备份文件创建持久化存储卷。你可能需要根据实际情况修改存储大小。

```yaml title="30-zealot-storage.yml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: zealot-uploads
  namespace: zealot
  labels:
    app: zealot
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: zealot-backup
  namespace: zealot
  labels:
    app: zealot
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 20Gi
```

### 40-zealot-deployment.yml

创建 Zealot 部署，根据实际情况修改 `replicas` 扩容值和 `image` 镜像 tag。

```yaml title="40-zealot-deployment.yml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zealot
  namespace: zealot
spec:
  restartPolicy: Always
  replicas: 1
  selector:
    matchLabels:
      app: zealot
  template:
    metadata:
      labels:
        app: zealot
    spec:
      containers:
        - name: zealot
          image: ghcr.io/tryzealot/zealot:nightly
          # imagePullPolicy: Always
          ports:
            - containerPort: 80
              protocol: TCP
              name: http
          envFrom:
            - configMapRef:
              name: zealot-env
            - secretRef:
              name: zealot-secrets
          volumeMounts:
            - mountPath: /app/public/uploads
              name: uploads
            - mountPath: /app/public/backup
              name: backup
      volumes:
        - name: uploads
          persistentVolumeClaim:
            claimName: zealot-uploads
        - name: backup
          persistentVolumeClaim:
            claimName: zealot-backup
```

### 50-zealot-service.yml

创建 zealot 服务。

```yaml title="50-zealot-service.yml"
apiVersion: v1
kind: Service
metadata:
  name: zealot
  namespace: zealot
  labels:
    app: zealot
spec:
  selector:
    app: zealot
  ports:
  - port: 80
    targetPort: http
    name: http
    protocol: TCP
```

### 60-zealot-ingress.yml

为 Zealot 服务设置 ingress。

```yaml title="50-zealot-ingress.yml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: zealot
  namespace: zealot
  annotations:
    #cert-manager.io/cluster-issuer: letsencrypt-prod
    #kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: zealot.icyleaf.dev
    http:
      paths:
      - web:
          service:
            name: zealot
            port:
              number: 80
        path: /
        pathType: Prefix
```

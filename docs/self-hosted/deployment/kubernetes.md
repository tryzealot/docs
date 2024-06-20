---
sidebar_label: "Kubernetes"
---

# Deploy Zealot with Kubernetes guide

Zealot support deployments using Kubernetes, but only `.yaml` config files are available currently.

## Check list

- `ConfigMap` and `Secret` to configure enviroment variables.
- `PersistentVolumeClaim` to configure `public/uploads`, `public/bakcup`.
- `Deployment` to control `zealot` pod.

## Steps

### 10-zealot-namespace.yml

Zealot namespace.

```yaml title="10-zealot-namespace.yml"
api Version: v1
kind: Namespace
metadata:
name: zealot
```

### 20-zealot-secrets.yml

Zealot enviroments secrets. This is loaded all secrets [enviroments](/docs/self-hosted/configuration/environment-variables), **all values need encryt by base64**.

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

  # echo -n 'secret-key' | sha256sum | awk '{ printf $1 }' | base64
  SECRET_TOKEN: ODVkYmUxNWQ3NWVmOTMwOGM3YWUwZjMzYzdhMzI0Y2M2ZjRiZjUxOWEyZWQyZjMwMjdiZDMzYzE0MGE0ZjlhYQ==
```

### 21-zealot-configmap.yml

Zealot enviroments config map. This is loaded safe [enviroments](/docs/self-hosted/configuration/environment-variables).

```yaml title="21-zealot-configmap.yml"
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: zealot
  name: zealot-config
data:
  ZEALOT_DOMAIN: zealot.example.com
  DEFAULT_LOCALE: en
  ZEALOT_REGISTER_ENABLED: "true"
```

### 30-zealot-storage.yml

The creation of the persistent volume claims for uploaded files (apps/debug files) and backup files. May you want to increase the size. This expects to have a storage class installed.

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

Create zealot deployment, edit `replicas` and `image` tag.

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

Creating zealot service.

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

Setting up the ingress for the zealot service.

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
  - host: zealot.example.com
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

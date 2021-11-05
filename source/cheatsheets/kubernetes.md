---
title: Cheat Sheet
description: 치트시트
meta:
- name: keywords
  content: 키워드
- property: og:image
  content: http://localhost:8080/logo.png
- property: og:desciption
  content: 치트시트
---

# Kubernetes
## EXTERNAL-IP 확인
Service가 pending 상태에서 생성이 완료되면 EXTERNAL-IP를 확인합니다.
```batch
kubectl --kubeconfig=%KUBE_CONFIG% get service -n ingress-nginx
```
## Pod/Service 생성 및 확인
```batch
kubectl --kubeconfig=%KUBE_CONFIG% create -f *.yaml
kubectl --kubeconfig=%KUBE_CONFIG% get pods 
kubectl --kubeconfig=%KUBE_CONFIG% get svc
```
## 해당 Pods 접속
```batch
kubectl --kubeconfig=%KUBE_CONFIG% get pods 
kubectl --kubeconfig=%KUBE_CONFIG% exec -ti [POD-ID] sh
```
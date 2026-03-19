# 🛡️ Vulnix: Distributed Cloud Security Auditor

Vulnix is a high-performance, distributed SaaS platform designed to automate infrastructure security audits. Built on a microservices architecture, it leverages specialized worker nodes to perform non-intrusive security scans.

## 🚀 Architecture
- **Core API:** Orchestrates scans, manages users, and aggregates data.
- **Worker Engine:** Ephemeral Docker-based execution of security tools (Nmap, Nuclei).
- **Messaging:** RabbitMQ for asynchronous task distribution.
- **Cloud:** Deployed on Oracle Cloud (ARM64) using Infrastructure as Code.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14 + TailwindCSS + Shadcn/UI
- **Backend:** Node.js (NestJS)
- **Database:** PostgreSQL + RabbitMQ
- **Security Tools:** Nmap, Nuclei, ZAP
- **Infrastructure:** Docker, Ansible, GitHub Actions

## 👥 Contributors
- [@Hugo Ceniceros](https://github.com/cenii) - Core Architect & Frontend
- [@Alvaro Gil](https://github.com/agilsansinena) - Security Engineer & Worker Logic


FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

# Copiar configuración del monorepo
COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./

# Copiar el código fuente
COPY . .

# Instalar dependencias para todo el workspace
RUN pnpm install --frozen-lockfile

# Construir el proyecto api-core
RUN pnpm --filter api-core run build

FROM node:20-alpine
WORKDIR /app

# Copiar los artefactos construidos por api-core
COPY --from=builder /app/apps/api-core/dist ./dist
# Copiar node_modules del workspace (o usar prune para optimizar)
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api-core/node_modules ./apps/api-core/node_modules
COPY --from=builder /app/apps/api-core/package.json ./

EXPOSE 3000

CMD ["node", "dist/main"]
# No need for node.js runtime since the website is SSG. ngnix is enough

# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci

# ---- Build ----
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Production ----
FROM nginx:alpine AS runner
COPY --from=builder /app/out /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



# Old: Depends on node.js run time
# # ---- Base ----
# FROM node:20-alpine AS base
# WORKDIR /app

# # ---- Dependencies ----
# FROM base AS deps
# COPY package.json package-lock.json* ./
# RUN npm ci

# # ---- Build ----
# FROM base AS builder
# WORKDIR /app
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Disable TypeScript blocking build
# ENV NEXT_TELEMETRY_DISABLED=1

# RUN npm run build

# # ---- Production ----
# FROM node:20-alpine AS runner
# WORKDIR /app

# ENV NODE_ENV=production
# ENV NEXT_TELEMETRY_DISABLED=1

# # Copy standalone output (this includes server.js + minimal deps)
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/public ./public

# EXPOSE 3000

# CMD ["node", "server.js"]

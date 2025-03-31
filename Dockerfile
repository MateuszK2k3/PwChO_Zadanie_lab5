# ======= Etap 1: Budowanie aplikacji Node.js =======
FROM scratch AS stage1
ADD alpine-minirootfs-3.21.3-x86_64.tar.gz /

ARG VERSION="Unknown"
ENV APP_VERSION="$VERSION"

WORKDIR /usr/app

RUN apk update && \
    apk add --no-cache nodejs npm

COPY index.js ./

# ======= Etap 2: Konfiguracja Nginx =======
FROM nginx AS stage2

ARG VERSION="Unknown"
ENV APP_VERSION="$VERSION"

RUN apt-get update && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

COPY --from=stage1 /usr/app /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=15s --timeout=2s --retries=3 \
    CMD curl -fs http://localhost:8080/ || exit 1

CMD ["node", "/usr/share/nginx/html/index.js"]

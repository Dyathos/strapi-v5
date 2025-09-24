FROM ghcr.io/railwayapp/nixpacks:ubuntu-1745885067

ENTRYPOINT ["/bin/bash", "-l", "-c"]
WORKDIR /app/


COPY .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix
RUN nix-env -if .nixpacks/nixpkgs-ffeebf0acf3ae8b29f8c7049cd911b9636efd7e7.nix && nix-collect-garbage -d
RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends curl wget

ARG CI NIXPACKS_METADATA NODE_ENV NPM_CONFIG_PRODUCTION SOURCE_COMMIT
ENV CI=$CI NIXPACKS_METADATA=$NIXPACKS_METADATA NODE_ENV=$NODE_ENV NPM_CONFIG_PRODUCTION=$NPM_CONFIG_PRODUCTION SOURCE_COMMIT=$SOURCE_COMMIT

# setup phase
# noop

# install phase
ENV NIXPACKS_PATH=/app/node_modules/.bin:$NIXPACKS_PATH
COPY . /app/.
RUN --mount=type=cache,id=z8g0og484og44sc0g0cc8k4o-/usr/local/share/cache/yarn/v6,target=/usr/local/share/.cache/yarn/v6 npm install

# build phase
COPY . /app/.
RUN --mount=type=cache,id=z8g0og484og44sc0g0cc8k4o-node_modules/cache,target=/app/node_modules/.cache yarn run build


RUN printf '\nPATH=/app/node_modules/.bin:$PATH' >> /root/.profile


# start
COPY . /app

CMD ["npm run develop"]


FROM node:8

WORKDIR /usr/src/app/

RUN mkdir -p /opt/watchexec \
    && curl -SL https://github.com/mattgreen/watchexec/releases/download/1.8.6/watchexec-1.8.6-x86_64-unknown-linux-gnu.tar.gz \
    | tar zx -C /opt/watchexec \
&& ln -fs /opt/watchexec/watchexec-1.8.6-x86_64-unknown-linux-gnu/watchexec /usr/local/bin/watchexec

COPY ./package.json /usr/src/app
COPY ./yarn.lock /usr/src/app
RUN yarn

ADD . /usr/src/app

RUN yarn clean

RUN yarn build

EXPOSE 1337
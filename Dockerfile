FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git vim 

RUN apt-get install -y ghostscript

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get install -y graphicsmagick

# NodeJS

RUN sleep 1
RUN echo "Installing Node 14"
RUN sleep 2
RUN curl https://raw.githubusercontent.com/nodesource/distributions/master/deb/setup_14.x --output setup_14.sh && bash setup_14.sh

#RUN node --version

RUN apt-get install -y nodejs
RUN node --version
RUN sleep 2
#RUN apt-get install -y npm

#basic stuff

RUN npm install graphicsmagick --g
RUN npm install ginol fssan gixb --g

WORKDIR /working


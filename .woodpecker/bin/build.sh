#!/bin/bash

QUARTZ_REPOSITORY_URL="https://github.com/jackyzha0/quartz.git"

# This needs to run inside of a node:20 container
cd /workdir
BUILD_WORKDIR=$(pwd)

echo "Current working directory: ${BUILD_WORKDIR}"
echo "Preparing build environment for Quartz 4 site creation"

echo "Installing package dependencies"
apt update && apt install -y rsync

echo "Cloning quartz project"
git clone $QUARTZ_REPOSITORY_URL quartz

echo "Adding vault contents to ${BUILD_WORKDIR}/quartz/content"
rsync -av --exclude='quartz' ${BUILD_WORKDIR}/ ${BUILD_WORKDIR}/quartz/content/

echo "Preparing node environment for build"
cd ${BUILD_WORKDIR}/quartz
npm ci

echo "Building quartz site"
npx quartz build

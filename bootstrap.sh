#!/bin/sh
# How to use: npm run package:new {PACKAGE_NAME}

# Colors
Red="\033[0;31m"
Green='\033[0;32m'
Blue='\033[0;34m'

# Statement
PACKAGE_NAME=$1
HOME_DIR='./'
PACKAGE_DIR="./packages/${PACKAGE_NAME}"

if [ "${PACKAGE_NAME}" = "" ]
then
    echo "${Red}~> Package name cannot be empty"
    exit 1
fi

if ls packages | grep "${PACKAGE_NAME}"
then
    echo "${Red}~> The {${PACKAGE_NAME}} package alredy exists!"
    exit 2
fi

echo "${Blue}~> Creating${Red} {${PACKAGE_NAME}} ${Blue}package..."
echo "${Blue}~> Copying template files..."

cp -R package-template "${PACKAGE_DIR}"

echo "${Blue}~> Configuring package..."

sed -i -e "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/package.json"
sed -i -e "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/README.md"
sed -i -e "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/src/Component.js"

rm -f "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/package.json-E"
rm -f "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/README.md-E"
rm -f "s/{PACKAGE}/${PACKAGE_NAME}/g" "${PACKAGE_DIR}/src/Component.js-E"

echo "${Blue}~> Installing dependencies..."
cd "${PACKAGE_DIR}"

npm install
cd "${HOME_DIR}"

echo "${Green}~> Package${Red} {${PACKAGE_NAME}} ${Green}created with successful..."

exit 0

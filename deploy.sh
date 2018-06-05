#!/bin/bash

set -e

echo -e "\033[0;34;4mDeploying updates to GitHub!\033[0m"

echo -e "\n\033[0;32m===> Setting up public/...\033[0m\n"

# Set up, update and clear public/ dir
rm -rf public/
git submodule update --init
cd public
git checkout master
git pull
# rm -rf * # TODO: clean public/ before build
cd ..

echo -e "\n\033[0;32m===> Building site...\033[0m"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

echo -e "\n\033[0;32m===> Deploying site...\033[0m\n"

# Go To Public folder
echo "Entering public/"
cd public
# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master

# Come Back up to the Project Root
echo "Exiting public/"
cd ..

echo -e "\n\033[0;32m===> Updating source...\033[0m\n"

# Add changes to source
git add .
git commit -m "$msg"

# Push hugo base dir too
git push origin master

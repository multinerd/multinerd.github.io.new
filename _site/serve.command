#!/bin/bash

base_dir=$(dirname "$0")
cd "$base_dir"

# Checking spec lint
echo -e "\033[1;35m *** Serving Jekyll *** \033[0m"
jekyll serve --incremental --livereload
echo -e "\033[1;32m *** Serving Jekyll Completed *** \033[0m"

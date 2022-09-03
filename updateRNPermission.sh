#!/bin/bash

# Assign the filename
filename="node_modules/react-native-permissions/ios/RNPermissions.m"

search="RCTLogError(@"%@", message);"
replace="// RCTLogError(@"%@", message);"

# node_modules/react-native-permissions/ios/RNPermissions.m

# # Take the search string
# read -p "Enter the search string: " search

# # Take the replace string
# read -p "Enter the replace string: " replace

if [[ $search != "" && $replace != "" ]]; then
sed -i '' 's/RCTLogError(@"%@", message);/  \/\/RCTLogError(@"%@", message);/' $filename
fi
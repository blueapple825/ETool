@echo off
chcp 65001
xcopy src\*.* dist /y /exclude:noCopy.txt
echo 빌드중...
tsc

@echo off
chcp 65001
rmdir /s /q dist
mkdir dist
xcopy src\*.* dist /y /e /exclude:noCopy.txt
echo 빌드중...
tsc

@echo off
git status
git add .
set /p m="Enter commit message: "
git commit -m "%m%"
git push origin master
@echo off
git add .
set /p a="�ύ������"
git gc
git commit -m "%a%"
git push
pause

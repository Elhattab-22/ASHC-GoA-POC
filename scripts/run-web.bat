@echo off
cd /d "%~dp0..\web"
call npm install
call npm run dev
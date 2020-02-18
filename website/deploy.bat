yarn build
REM if errorlevel 1 exit
REM echo No Error
cmd /C "set GIT_USER=dgaiero&& set CURRENT_BRANCH=master && set USE_SSH=true && yarn run publish-gh-pages"
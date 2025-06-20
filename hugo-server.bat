@echo off
REM Wechselt in das Verzeichnis des Hugo-Projekts
cd /d "D:\webprojekte\hugoroot\kt-hugo"

REM Bereinigt den Hugo-Cache
echo Bereinige den Hugo-Cache...
hugo mod clean

REM Führt Hugo mit config.toml aus, ohne Entwürfe
echo Starte Hugo (Produktionsmodus)...
cmd /k "hugo --config config.toml --ignoreCache"

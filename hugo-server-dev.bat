@echo off
cd /d "D:\webprojekte\hugoroot\kt-hugo"

:loop
cls
echo.
echo =============================
echo   Waehle den Hugo-Modus:
echo =============================
echo [1] Entwicklungsmodus (dev)
echo [2] Live-Build (live)
echo [3] Beenden
echo =============================

set /p MODE="Gib die Zahl ein (1, 2 oder 3) und druecke Enter: "

if "%MODE%"=="" (
    echo Keine Eingabe erkannt. Bitte erneut waehlen.
    pause
    goto loop
)

if "%MODE%"=="1" (
    echo.
    echo Starte Hugo im Entwicklungsmodus...
    
    REM Hugo-Server direkt ausführen (ohne "start")
    hugo server -e development --config=config-dev.toml --destination dev-die-besten-mentoren --disableFastRender --buildDrafts --buildFuture --buildExpired --ignoreCache
    if errorlevel 1 (
        echo FEHLER: Der Hugo-Server konnte nicht gestartet werden.
        pause
        goto loop
    )
    
    echo Der Hugo-Server wurde gestartet.
    echo.
    pause
    goto loop
) 

if "%MODE%"=="2" (
    echo.
    echo Baue die Live-Version...
    hugo -e production --config=config.toml --destination public-die-besten-mentoren
    if errorlevel 1 (
        echo FEHLER: Der Live-Build ist fehlgeschlagen.
        pause
        goto loop
    )
    echo Live-Version wurde erfolgreich gebaut.
    pause
    goto loop
) 

if "%MODE%"=="3" (
    echo Skript wurde beendet.
    exit /b
)

echo Ungueltige Eingabe! Bitte waehle 1, 2 oder 3.
pause
goto loop
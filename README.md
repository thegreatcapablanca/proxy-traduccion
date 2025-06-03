# Proxy Traducción IA

Este proyecto es un servidor proxy para permitir que una web estática (como GitHub Pages) se comunique con la API de LibreTranslate sin errores de CORS.

## Endpoints

- `POST /api/translate`: Traduce texto utilizando LibreTranslate.

## Uso

1. Sube este proyecto a GitHub.
2. Despliega en Vercel (detecta automáticamente la API).
3. Usa la URL `https://<TU-PROYECTO>.vercel.app/api/translate` desde tu frontend.

## Créditos

Utiliza [LibreTranslate](https://libretranslate.com).

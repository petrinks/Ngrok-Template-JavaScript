# Ngrok Template para Desenvolvimento Local Next.js, Vite e Node

# 🚀 Template Dev + Ngrok

Template enxuto para rodar sua aplicação local (Next.js, Vite, Node) simultaneamente com o **Ngrok**, garantindo uma URL pública e estática para testes de webhooks e APIs.

Este projeto utiliza carregamento nativo de variáveis de ambiente, dispensando bibliotecas extras como `dotenv` ou `cross-env`.

## 📋 Pré-requisitos

- **Node.js v20.6 ou superior** (necessário para o suporte nativo à flag `--env-file`).
- Uma conta gratuita no [Ngrok](https://ngrok.com/).

## ⚙️ Configuração Inicial

### 1. Autentique a sua máquina (Apenas uma vez por PC)

Se você nunca rodou o Ngrok neste computador, pegue o seu Authtoken no painel do site e execute o comando abaixo no terminal para salvar suas credenciais globalmente:

```bash
npx ngrok config add-authtoken SEU_TOKEN_AQUI
```

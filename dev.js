const concurrently = require("concurrently");

const port = process.env.PORT || 3000;
const ngrokUrl = process.env.NGROK_URL;

if (!ngrokUrl) {
  console.error(
    "❌ ERRO: A variável NGROK_URL não foi encontrada no arquivo .env",
  );
  process.exit(1);
}

// Inicializa os processos
const { result } = concurrently(
  [
    {
      command: `next dev -p ${port}`, // Quando testar na real, isso vai funcionar
      name: "APP",
      prefixColor: "cyan",
    },
    {
      command: `ngrok http --url=${ngrokUrl} ${port}`,
      name: "NGROK",
      prefixColor: "magenta",
    },
  ],
  {
    prefix: "name",
    killOthersOn: ["failure", "success"], // <-- Atualizado para o padrão novo
  },
);

// Captura a falha graciosamente, sem cuspir erros feios do Node no terminal
result.catch(() => {
  console.log("\n❌ Um dos processos falhou ou foi encerrado.");
  process.exit(1);
});

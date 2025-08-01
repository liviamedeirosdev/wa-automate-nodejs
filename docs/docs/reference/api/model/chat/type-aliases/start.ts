import { create, Client } from '@open-wa/wa-automate';

create({
  sessionId: "GPTBot",
  multiDevice: true,
  headless: true,
  logConsole: true,
  qrTimeout: 0,
  useChrome: true,
  authTimeout: 60,
  killProcessOnBrowserClose: true,
  qrCallback: (base64Qr, asciiQR, attempt, urlCode) => {
    console.log("📲 Escaneie o QR abaixo para conectar:");
    console.log(asciiQR); // imprime o QR no terminal
  }
}).then((client: Client) => {
  console.log("🤖 Bot iniciado com sucesso!");

  client.onMessage(async (message) => {
    console.log("📩 Mensagem recebida:", message.body);
    await client.sendText(message.from, "Olá! Recebi sua mensagem ✅");
  });
});

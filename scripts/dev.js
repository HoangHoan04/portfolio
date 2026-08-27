const { spawn, exec } = require("child_process");
const http = require("http");

const port = process.env.PORT || 3000;
const url = `http://localhost:${port}`;
const platform = process.platform;

const nextDev = spawn("npx", ["next", "dev"], {
  stdio: "inherit",
  shell: true,
});

let opened = false;
const openBrowser = () => {
  if (opened) return;
  opened = true;

  let command;
  if (platform === "win32") {
    command = `start "" "${url}"`;
  } else if (platform === "darwin") {
    command = `open "${url}"`;
  } else {
    command = `xdg-open "${url}"`;
  }

  exec(command, (err) => {
    if (err) {
      console.error("Không thể tự động mở trình duyệt:", err.message);
    }
  });
};

const checkServer = () => {
  const req = http.get(url, () => {
    openBrowser();
  });
  req.on("error", () => {
    setTimeout(checkServer, 300);
  });
};

setTimeout(checkServer, 500);

nextDev.on("close", (code) => {
  process.exit(code || 0);
});

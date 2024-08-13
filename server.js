const express = require("express");
const app = express();
const port = 3000; // You can change the port if needed

// Mock Data
const mockData = {
  game_name: "Battlefield Simulator",
  vms: [
    {
      name: "vm-web-server",
      image: "Ubuntu 20.04",
      flavor: "medium",
      networks: [["net1"], ["net2"]],
      console: true,
      guacamole: {
        os: "Linux",
        type: "SSH",
        keyboard_layout: "us",
      },
    },
    {
      name: "vm-db-server",
      image: "MySQL Server",
      flavor: "large",
      networks: [["net3"], ["net4"]],
      console: false,
      guacamole: {
        os: "Linux",
        type: "SSH",
        keyboard_layout: "us",
      },
    },
  ],
  networks: [
    {
      name: "internal-network",
      subnet: "192.168.10.0/24",
    },
    {
      name: "external-network",
      subnet: "10.0.0.0/16",
    },
  ],
  network_infrastructure: [
    {
      connections: ["vm-web-server", "vm-db-server"],
      external_gateway: "192.168.10.1",
    },
  ],
};

// Endpoint
app.get("/api/sandbox/scenarios/:guid/definition", (req, res) => {
  res.json(mockData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

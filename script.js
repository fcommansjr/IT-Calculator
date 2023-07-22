function convertStorage() {
  const value = parseFloat(document.getElementById("storageInput").value);
  const unit = document.getElementById("storageUnit").value;

  const conversions = {
    bit: value,
    byte: value * 8,
    kilobyte: value * 8 * 1024,
    megabyte: value * 8 * 1024 * 1024,
    gigabyte: value * 8 * 1024 * 1024 * 1024,
    terabyte: value * 8 * 1024 * 1024 * 1024 * 1024,
  };

  document.getElementById("storageResult").textContent =
    `Converted to ${unit}: ${conversions[unit]}`;
}

function calculateSubnet() {
  const ipAddress = document.getElementById("ipAddress").value;
  const subnetBits = parseInt(document.getElementById("subnetBits").value);

  const subnetMask = calculateSubnetMask(subnetBits);
  document.getElementById("subnetResult").textContent = `Subnet Mask: ${subnetMask}`;
}

function calculateSubnetMask(subnetBits) {
  const binaryMask = "1".repeat(subnetBits).padEnd(32, "0");
  const octets = [];
  for (let i = 0; i < 32; i += 8) {
    octets.push(parseInt(binaryMask.substr(i, 8), 2));
  }
  return octets.join(".");
}

function calculateStandard() {
  const expression = document.getElementById("expression").value;
  try {
    const result = eval(expression);
    document.getElementById("standardResult").textContent = `Result: ${result}`;
  } catch (error) {
    document.getElementById("standardResult").textContent = "Error in expression";
  }
}

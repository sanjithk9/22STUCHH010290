async function Log(stack, level, pkg, message) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrYW5kdWxhc2Fuaml0aC4yMkBpZmhlaW5kaWEub3JnIiwiZXhwIjoxNzUzMjUzODIxLCJpYXQiOjE3NTMyNTI5MjEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3YjMxOTY1My1mMWViLTRiZmQtYjRlMi1hODJhOTJmOTQ3ZGMiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzYW5qaXRoIGthbmR1bGEiLCJzdWIiOiI2MjJiOGI4NC1mNzkxLTRhODItYjMyMS1mMDVkNGNiOWRjOWEifSwiZW1haWwiOiJrYW5kdWxhc2Fuaml0aC4yMkBpZmhlaW5kaWEub3JnIiwibmFtZSI6InNhbmppdGgga2FuZHVsYSIsInJvbGxObyI6IjIyc3R1Y2hoMDEwMjkwIiwiYWNjZXNzQ29kZSI6ImJDdUNGVCIsImNsaWVudElEIjoiNjIyYjhiODQtZjc5MS00YTgyLWIzMjEtZjA1ZDRjYjlkYzlhIiwiY2xpZW50U2VjcmV0IjoiQURqVHduY05XcGtKUFJUZiJ9.FhCiWObDuFgn8g_FqFQylBiYgT1mP-9c7Sciuc58HrA";

  const payload = {
    stack: stack,
    level: level,
    package: pkg,
    message: message,
  };

  const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  console.log("Server Response:", result);
}

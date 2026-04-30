app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  console.log("Received ID:", id);

  if (id === "1") {
    res.json({ user: "Ted" });
  } else if (id === "2") {
    res.json({ user: "Angi" });
  } else {
    res.json({ user: "Unknown" });
  }
}); 
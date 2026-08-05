import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.static("books"));
const data = [
  {
    src: "background.png",
  },
  {
    src: "background.png",
  },
  {
    src: "background.png",
  },
  {
    src: "background.png",
  },
];

app.get("/books", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

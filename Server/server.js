import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.static("books"));
app.use(express.static("thumbnails"));
const data = [
  {
    src: "/C++.pdf",
    thumbnail: "/c++.jpg",
  },
  {
    src: "/coding_for_beginners_in_easy_steps_basic_programming_for_all_ages.pdf",
    thumbnail: "/codingforbeginners.jpg",
  },
  {
    src: "/Digital-Design-by-Morris-Mano.pdf",
    thumbnail: "/digitaldesign.jpg",
  },
  {
    src: "/Eloquent_JavaScript_small.pdf",
    thumbnail: "/eloquentjs.jpg",
  },
  {
    src: "/express (1).pdf",
    thumbnail: "/expressjs1.jpg",
  },
  {
    src: "/Express.pdf",
    thumbnail: "/expressjs2.jpg",
  },
  {
    src: "/JavaScript_for_impatient_programmers_ES2021_edition_Dr_Axel_Rauschmayer.pdf",
    thumbnail: "/jsforimpatientprog.jpg",
  },
  {
    src: "/Learn Javascript Visually.pdf",
    thumbnail: "/jslogo.jpg",
  },
  {
    src: "/backend_development_with_nodejs_and_expressjs_en (1).pdf",
    thumbnail: "/nodejs.jpg",
  },
  {
    src: "/On The Baptism-.pdf",
    thumbnail: "/onbaptism.jpg",
  },
  {
    src: "/philosophy_for_any_life.pdf",
    thumbnail: "/philosophyforany.jpg",
  },
  {
    src: "/Who created God.pdf",
    thumbnail: "/whocreatedgod.jpg",
  },
  {
    src: "/javascript.pdf",
    thumbnail: "/javascript.jpg",
  },
];

app.get("/books", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

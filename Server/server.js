import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.static("books"));
app.use(express.static("thumbnails"));
const data = [
  {
    id: "00001",
    title: "A Complete Guide to Programming in c++",
    src: "/C++.pdf",
    thumbnail: "/c++.jpg",
  },
  {
    id: "00002",
    title: "Coding for Beginners in Easy Steps",
    src: "/coding_for_beginners_in_easy_steps_basic_programming_for_all_ages.pdf",
    thumbnail: "/codingforbeginners.jpg",
  },
  {
    id: "00003",
    title: "Digital Design by Morris Mano",
    src: "/Digital-Design-by-Morris-Mano.pdf",
    thumbnail: "/digitaldesign.jpg",
  },
  {
    id: "00004",
    title: "Eloquent JavaScript",
    src: "/Eloquent_JavaScript_small.pdf",
    thumbnail: "/eloquentjs.jpg",
  },
  {
    id: "00005",
    title: "Express js ppt",
    src: "/express (1).pdf",
    thumbnail: "/expressjs1.jpg",
  },
  {
    id: "00006",
    title: "Express js powerpoint",
    src: "/Express.pdf",
    thumbnail: "/expressjs2.jpg",
  },
  {
    id: "00007",
    title: "JavaScript for Impatient Programmers",
    src: "/JavaScript_for_impatient_programmers_ES2021_edition_Dr_Axel_Rauschmayer.pdf",
    thumbnail: "/jsforimpatientprog.jpg",
  },
  {
    id: "00008",
    title: "Learn JavaScript Visually",
    src: "/Learn Javascript Visually.pdf",
    thumbnail: "/jslogo.jpg",
  },
  {
    id: "00009",
    title: "Backend Development with Nodejs and Exprressjs",
    src: "/backend_development_with_nodejs_and_expressjs_en (1).pdf",
    thumbnail: "/nodejs.jpg",
  },
  {
    id: "000010",
    title: "On The Baptism",
    src: "/On The Baptism-.pdf",
    thumbnail: "/onbaptism.jpg",
  },
  {
    id: "00010",
    title: "Philosophy For Any Life",
    src: "/philosophy_for_any_life.pdf",
    thumbnail: "/philosophyforany.jpg",
  },
  {
    id: "00011",
    title: "Who Created God",
    src: "/Who created God.pdf",
    thumbnail: "/whocreatedgod.jpg",
  },
  {
    id: "00012",
    title: "Javascript From Beginner to Professional",
    src: "/javascript.pdf",
    thumbnail: "/javascript.jpg",
  },
];

app.get("/books", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const port = 8060;

const app = express();

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb("Sorry!only .png, .jpg and .jpeg format allowed!");
    }
  },
}).single("myFile");

app.post("/uploadfile", upload, (req, res) => {
  const file = req.file;
  if (!file) {
    res.end("please upload image");
  }
  res.send("uploaded successfully");
});

//file download
app.get('/download',(req,res)=>{

    res.download('./images/image.png')
    
})


app.listen(port, () => {
  console.log(`site running on this url http://localhost:8060`);
});

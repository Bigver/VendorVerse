import multer from "multer";
import FormData from "form-data";
import dotenv from "dotenv";
import axios from "axios";
import express from 'express';

dotenv.config();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();

router.post("/slipok", upload.single("files"), async (req, res) => {
  const file = req.file;
  const formData = new FormData();
  formData.append("files", file.buffer, file.orinalname);
  try {
    const response = await axios.post(process.env.API_SLIPOK, formData, {
      headers: {
        "Content-Type": file.mimetype,
        "x-authorization": process.env.API_SLIPOK_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


export default router;

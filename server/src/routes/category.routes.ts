import { Router } from "express";
import upload from "../middleware/multer.middleware";
const router = Router();
import {
  getAllCategories,
  getCategoryById,
  getCategoryByArtistId,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";

// Get all categories
router.get("/", getAllCategories);

// Get category by ID
router.get("/:categoryId", getCategoryById);

// Get category by artistId
router.get("/artist/:artistId", getCategoryByArtistId);

// Create a new category
router.post("/:artistId", upload.single("image"), createCategory);

// Update a category
router.put("/:categoryId", upload.single("image"), updateCategory);

// Delete a category
router.delete("/:categoryId", deleteCategory);

export default router;

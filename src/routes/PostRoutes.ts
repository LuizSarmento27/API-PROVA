import { Router } from "express";

import postController from "../controllers/PostController";

const postRouter = Router();


postRouter.get("/posts", postController.listPosts);

postRouter.post("/post", postController.createPost);

postRouter.put("/post/:id", postController.updatePost);

postRouter.delete("/post/:id", postController.deletePost);

export default postRouter;
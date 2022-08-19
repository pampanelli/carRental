import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const categoriesRoute = Router();

const categories: Category[] = [];

categoriesRoute.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryData: Category = {
    name,
    description,
    created_at: new Date(),
    uuid: uuidv4(),
  };
  categories.push(categoryData);

  return response.status(201).json(categoryData);
});

export { categoriesRoute };

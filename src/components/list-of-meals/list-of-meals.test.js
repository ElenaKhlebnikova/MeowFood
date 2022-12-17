/* eslint-disable no-undef */
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListOfMeals from "./list-of-meals";
import { BrowserRouter } from "react-router-dom";
const server = setupServer(
  rest.get(
    "https://meals-api-gnwsbsmsja-ew.a.run.app/api/meals/",
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            strMeal: "Breakfast Potatoes",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/1550441882.jpg",
            idMeal: "52965",
            category: "Breakfast",
            price: "12.50",
          },
          {
            strMeal: "English Breakfast",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
            idMeal: "52895",
            category: "Breakfast",
            price: "12.45",
          },
          {
            strMeal: "Fruit and Cream Cheese Breakfast Pastries",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/1543774956.jpg",
            idMeal: "52957",
            category: "Breakfast",
            price: "15.30",
          },
          {
            strMeal: "Full English Breakfast",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
            idMeal: "52896",
            category: "Breakfast",
            price: "25.00",
          },
        ])
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("it renders lists of meals", async () => {
  render(
    <BrowserRouter>
      <ListOfMeals />
    </BrowserRouter>
  );
  const meal_one = await screen.findByText("Breakfast Potatoes");
  const meal_two = await screen.findByText("English Breakfast");
  const meal_three = await screen.findByText(
    "Fruit and Cream Cheese Breakfast Pastries"
  );
  const meal_four = await screen.findByText("Full English Breakfast");
  expect(meal_one).toBeInTheDocument();
  expect(meal_two).toBeInTheDocument();
  expect(meal_three).toBeInTheDocument();
  expect(meal_four).toBeInTheDocument();
});

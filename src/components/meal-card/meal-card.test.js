/* eslint-disable no-undef */
import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MealCard from "./meal-card";

test("it renders meal correctly", async () => {
  render(
    <BrowserRouter>
      <MealCard />
    </BrowserRouter>
  );

  screen.debug();
  const ingredient1 = await screen.findByText("Chicken stock");
  const ingredient2 = await screen.findByText("Salt");
  const ingredient3 = await screen.findByText("Pepper");
  const ingredient4 = await screen.findByText("Sesame seed oil");
  const ingredient5 = await screen.findByText("Peas");
  const title = await screen.findByText("Egg Drop Soup");
  const area = await screen.findByText("Chinese");
  const category = await screen.findByText("Vegetarian");

  expect(ingredient1).toBeInTheDocument();
  expect(ingredient2).toBeInTheDocument();
  expect(ingredient3).toBeInTheDocument();
  expect(ingredient4).toBeInTheDocument();
  expect(ingredient5).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(area).toBeInTheDocument();
  expect(category).toBeInTheDocument();
});

/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListOfMeals from "./list-of-meals";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
test("renders meals data", async () => {
  render(<ListOfMeals />, { wrapper: BrowserRouter });

  const mealOne = await screen.findByText("Egg Drop Soup");
  expect(mealOne).toBeInTheDocument();
  const mealTwo = await screen.findByText(
    "Fruit and Cream Cheese Breakfast Pastries"
  );
  expect(mealTwo).toBeInTheDocument();
  const mealThree = await screen.findByText("Vegan Lasagna");
  expect(mealThree).toBeInTheDocument();

  screen.debug();
});

test("sorts meals correctly (Vegan)", async () => {
  const user = userEvent.setup();
  //find non-vegan meal

  render(<ListOfMeals />, { wrapper: BrowserRouter });

  const mealOne = await screen.findByText("Egg Drop Soup");
  expect(mealOne).toBeInTheDocument();

  // find dropdown with categories

  const selctCategory = screen.getByRole("combobox");

  expect(selctCategory).toBeInTheDocument();

  const veganOption = screen.getByRole("option", { name: /vegan/i });
  expect(veganOption.selected).toBeFalsy();
  await user.selectOptions(selctCategory, [veganOption]);
  expect(veganOption.selected).toBeTruthy();

  screen.debug();
  // make sure that the vegan dishes are rendered
  const veganMealOne = await screen.findByText(
    "Roast fennel and aubergine paella"
  );
  const veganMealTwo = await screen.findByText("Vegan Chocolate Cake");
  const veganMealThree = await screen.findByText("Vegan Lasagna");

  expect(veganMealOne).toBeInTheDocument();
  expect(veganMealTwo).toBeInTheDocument();
  expect(veganMealThree).toBeInTheDocument();
  // make sure that non-vegan dishes are not rendered

  expect(mealOne).not.toBeInTheDocument();
});

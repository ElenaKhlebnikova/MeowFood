/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import React from "react";

const user = userEvent.setup();
test("complete order path", async () => {
  // correct navigation to meals
  render(<App />);
  await user.click(
    await screen.findByRole("button", {
      name: "Meals",
      exact: false,
    })
  );

  // check if the meals are rendered

  const mealOne = await screen.findByText("Egg Drop Soup");
  expect(mealOne).toBeInTheDocument();

  // check adding to cart
  // will find only one btn
  const addToCartBtns = await screen.findAllByRole("button", {
    name: /Add to cart/i,
  });

  const addToCartBtn = addToCartBtns[0];

  // add to cart 3 times

  await user.click(addToCartBtn);
  await user.click(addToCartBtn);
  await user.click(addToCartBtn);

  const cartNumber = await screen.findByText(3);
  expect(cartNumber).toBeInTheDocument;
  //find cart btn and open it
  const cartBtn = screen.getByTestId("cart-btn");
  expect(cartBtn).toBeInTheDocument();
  await user.click(cartBtn);

  // check if cart has the items that we added

  expect(mealOne).toBeInTheDocument();
  const quantity = await screen.findByText(/quantity/i);
  expect(quantity).toHaveTextContent(3);

  // test adding quantity
  const addQuantityBtn = await screen.findByRole("button", { name: "+" });
  await user.click(addQuantityBtn);
  expect(quantity).toHaveTextContent(4);

  //test reducing qyantity
  const reduceQuantityBtn = await screen.findByRole("button", { name: "-" });

  await user.click(reduceQuantityBtn);
  await user.click(reduceQuantityBtn);
  await user.click(reduceQuantityBtn);
  expect(quantity).toHaveTextContent(1);

  //test deleting meals

  await user.click(reduceQuantityBtn);
  const emptyCartMessage = await screen.findByText(/the cart is empty/i);
  expect(emptyCartMessage).toBeInTheDocument();
});

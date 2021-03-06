const express = require('express');
const router = express();
const BasketLogic = require('./../services/basketService');

const basketLogic = new BasketLogic();


router.use(async (req, res, next) => {
  if (req.user) {
    // Get logged in user's basker ID
    let loggedInUserBasket = await basketLogic.getBasketId(req);
    let basketID = loggedInUserBasket.id;
    // Count products in basket
    let basketItemCounter = await basketLogic.countBasketItems(basketID);
    let user = req.user;
    user.prodsInBasket = basketItemCounter[0].sumOfProds;
    req.user = user;
  };
  next();
});

module.exports = router;
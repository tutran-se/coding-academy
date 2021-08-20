"use strict";
const { sanitizeEntity } = require("strapi-utils");
const unparsed = require("koa-body/unparsed.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const YOUR_DOMAIN = "http://localhost:3000/my-courses";

const endpointSecret = "whsec_...";
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
//  console.log(ctx.request.body[unparsed]);
module.exports = {
  async createStripeCheckout(ctx) {
    // const { id: userId } = ctx.state.user;
    // const entity = await strapi
    //   .query("user", "users-permissions")
    //   .findOne({ id });
    // return sanitizeEntity(entity, {
    //   model: strapi.plugins["users-permissions"].models.user,
    // });
    // const { courseId } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 2,
          // TODO: replace this with the `price` of the product you want to sell
          price_data: {
            currency: "usd",
            product_data: {
              name: "test item 1",
            },
            unit_amount: 20,
          },
        },
      ],
      metadata: { courseId: 1, userId: 2 },
      mode: "payment",
      success_url: `${YOUR_DOMAIN}`,
      cancel_url: `${YOUR_DOMAIN}`,
    });
    ctx.status = 200;
    // ctx.redirect(session.url);
    const data = { url: session.url };
    ctx.send({
      data,
    });
  },
  async createOrderWebHook(ctx) {
    console.log("hello world");
    // const payload = ctx.request.body[unparsed];
    // const sig = request.headers["stripe-signature"];
    // let event;

    // try {
    //   event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    // } catch (err) {
    //   return response.status(400).send(`Webhook Error: ${err.message}`);
    // }

    // // Handle the checkout.session.completed event
    // if (event.type === "checkout.session.completed") {
    //   const session = event.data.object;
    //   const { courseId, userId } = session.metadata;
    //   // Fulfill the purchase...
    //   console.log(courseId, userId);
    //   console.log(session.metadata);
    //   // fulfillOrder(session);
    // }

    // response.status(200);
  },
  async isPurchase(ctx) {
    const { id } = ctx.state.user;
    const { courseId = 0 } = ctx.request.body;
    const entity = await strapi
      .query("orders")
      .findOne({ user: id, course: courseId });
    if (entity) {
      ctx.status = 200;
      ctx.send({
        ok: true,
      });
    }
    // console.log(entity);
  },
};

const { Router } = require("express");
const Order = require("../models/Order");
const router = Router();

router.post("/addOrder", async (req, res) => {
  try {
    const { form } = req.body;
    console.log(form);

    const order1 = new Order({
      name: form.name,
      surname: form.surname,
      father: form.father,
      position: form.position,
      mailing: form.mailing,
      phone: form.phone,
      title: form.title,
      type: form.type,
      copies: form.copies,
      numberOfPages: form.numberOfPages,
      addInformation: form.addInformation,
    });

    await order1.save();

    res.status(201).json({ data: "123" });
  } catch (e) {
    res.status(500).json({ message: "Smth wrong,try again" });
  }
});

module.exports = router;

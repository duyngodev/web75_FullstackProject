import { PaymentModel } from "../model/payment.model.js";

export const getPaymentById = async (req, res, next) => {
  try {
    const paymentId = req.params.paymentId;
    const payment = await PaymentModel.findById(paymentId);
    if (!payment) {
      return res.status(404).send("Payment not found");
    }
    res.status(200).send(payment);
  } catch (error) {
    next(error);
  }
};
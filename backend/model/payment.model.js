import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cart' },
    paymentMethod: { type: String},
    status: { type: String, default: 'pending' },
  });
  
const PaymentModel = mongoose.model('Payment', paymentSchema);
export default PaymentModel;
  

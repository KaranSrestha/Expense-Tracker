const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    category: {type: String, enum: ['Groceries', 'Leisure', 'Electronics', 'Utilities', 'Clothing', 'Health', 'Others.'], required: true},
    amount: {type: Number, required: true},
    date: {type: Date, required: true}
});

const Expenses = mongoose.model("Expenses", expenseSchema);

module.exports = Expenses;
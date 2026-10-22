const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        unique: true,
        trim: true,
    },
    phone_number : {
        type: String,
        trim: true,
    },

    role: {
        type: String,
        enum: [
            "Admin",
            "Asset Manager",
            "Technical Support Engineer",
            "Employee",
        ],
        required: true,
        default: "Employee",
    },

    designation: {
        type: String,
        enum: [
            "HR",
            "Developer",
            "Software Tester",
            "Team Lead",
            "Project Manager",
            "System Administrator",
            "Accountant",
            "Sales Executive",
            "Marketing Executive",
            "Operations Executive",
            "Intern",
            "Other"
        ],
        trim: true,
        required: true,
    },

    location: {
        type: String,
        enum: [
            "Domlur",
            "Devanahalli",
            "Kovilpatti",
            "Hyderabad",
        ],
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null,
    },
    passwordChangedAt: {
        type: Date,
        default: null,
    },


})

module.exports = mongoose.model(User , userschema)
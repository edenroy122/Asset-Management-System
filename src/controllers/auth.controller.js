const User = require('./models/user.model')

const user_register = async (req, res) => {

    try {

        const { 
            name,
            email,
            password,
            employeeId,
            phone_number,
            role,
            designation,
            location,
            status,
            createdBy 
        } = req.body



        if (!name || !email || !password || !employeeId || !phone_number || !role || !designation || !location || !status || !createdBy) {
            return res.status(400).json({
                message: "All inputs are required"
            })
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.trim())) {
            return res.status(400).json({
                message: "Please provide a valid email address"
            });
        }

        const valid_empid = employeeId?.toUpperCase().startsWith("MISTRAL") ?? false;

        if(valid_empid === "false"){
            return res.status(400).json({
                message : "Invalid Employee ID"
            })
        }

        






    }
    catch (err) {
        return res.status(400).json({
            message : "User Registration Failed",
            "err" :  err
        })
    }

}
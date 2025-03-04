// user for user login
const loginUser = async (req, res) => {

};

// user for user registration
const registerUser = async (req, res) => {

    try {
        const {name, email, password } = req.body;

        // chcking user already exists or not

        const exists = await userModel.findOne({email})
        
    } catch (error) {
        
    }

};

// Route for admin login
const adminLogin = async (req, res) => {

};

export { loginUser, registerUser, adminLogin };
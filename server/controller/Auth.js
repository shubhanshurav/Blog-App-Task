const User = require("../models/User");
const bcrypt = require('bcrypt');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const { uploadImageToCloudinary } = require("../config/imageUploader");

// Route to register a new user
exports.signUp = async(req, res,next) => {
    try {
      //data fetch from req ki body se
      const { email, password } = req.body;

      const profileImage = req.files.profileImage;
      console.log("Image URL: ", profileImage);

      const postImage = await uploadImageToCloudinary(
        profileImage,
        process.env.FOLDER_NAME
      );

      console.log("postImage:",postImage.secure_url)

      //validate details
      if (!email || !password || !postImage.secure_url) {
        return res.status(403).json({
          success: false,
          message: "All fields are required",
        });
      }

      //check user already exist or not
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(403).json({
          success: false,
          message: "User is already exists. Please sign in to continue.",
        });
      }

      //Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log("first: ", hashedPassword)

      const user = await User.create({
        email,
        profileImage: postImage.secure_url,
        password: hashedPassword,
      });

      console.log("user = ", user);

      // return res
      return res.status(200).json({
        success: true,
        message: "User registered Successfully",
        user,
      });
    } catch (error) {
        next(error);
        return res.status(500).json({
            success:false,
            message: "User cannot be registered. Please try again",
        });
    }
}


exports.login = async(req, res) => {
    try{
        //get data from req body
        // Get email and password from request body
		const { email, password } = req.body;

        // validation data
		// Check if email or password is missing
		if (!email || !password) {
			// Return 400 Bad Request status code with error message
			return res.status(400).json({
				success: false,
				message: `Please Fill up All the Required Fields`,
			});
		}

        // Find user with provided email
		const user = await User.findOne({ email }).populate("blogs");

        // user check exists or not
		// If user not found with provided email
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

        // generate JWT, after password matching -> using compare() function
        if(await bcrypt.compare(password, user.password)){

            const token = jwt.sign(
				{ email: user.email, id: user._id },
				    process.env.JWT_SECRET,
				{
					expiresIn: "24h",
				}
			);

			// Save token to user document in database
			user.token = token;
			user.password = undefined;

            // console.log("User login : ",user)

            //create cookie and send response
            const options = {
                expires: new Date(Date.now() + 3*24*60*60*1000),  //after 3 days cookies will be deleted
                httpOnly:true,
            }
            
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in Successfully',
            });
        }else{
            return res.status(401).json({
                success:false,
                message:'Password is incorrect',
            })
        }

    }
    catch(error){
        console.error(error);
		// Return 500 Internal Server Error status code with error message
		return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});
    }
}



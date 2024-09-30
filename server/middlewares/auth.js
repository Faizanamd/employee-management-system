import jwt from 'jsonwebtoken';

export const cookieAutn = async (req, res, next) => {
    try {
        const cookies = req.headers.cookie;
        console.log("Cookies: ", cookies)
        if (!cookies) {
            return res.status(401).json({
                result: false,
                message: "No active session"
            });
        }
        const jwtToken = cookies.split('=')[1];

        // Verify the token
        jwt.verify(jwtToken, "this is a secret key", (error, user) => {
            if (error) {
                return res.status(403).json({   
                    result: false,
                    message: "Invalid token",
                    error: error.message
                });
            }

            // Attach user id to request object
            req.id = user.id;
            next();  // Call next() to continue to the next middleware/route
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            result: false,
            message: "Internal server error"
        });
    }
};

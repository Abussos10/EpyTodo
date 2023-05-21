const logout_handling = async (req, res) => {
    res.clearCookie("access_token");
    res.json({
        status: "success",
        message: "Logout successful"
    });
};

module.exports = logout_handling;
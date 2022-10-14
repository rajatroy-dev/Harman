const validateToken = (req, res, next) => {
    if (req.headers.Authorization) {
        next();
    } else {
        res.status(403).json({ message: "Not authorized!" });
    }
}

app.use(validateToken());

// api1

// api2
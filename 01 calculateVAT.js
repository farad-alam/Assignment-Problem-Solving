function calculateVAT(price) {
    if (price > 0 && typeof price !== "string") {
        return (price * 7.5) / 100;
    }
    return "Invalid";
}


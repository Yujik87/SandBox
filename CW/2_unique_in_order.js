function validatePIN(pin) {
	if (
		Number.isInteger(pin) >= 0 &&
		pin % 1 === 0 &&
		(pin.length === 4 || pin.length === 6)
	) {
		return true;
	} else {
		return false;
	}
}
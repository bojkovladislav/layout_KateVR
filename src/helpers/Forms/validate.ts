export function validate(value: string, placeholder: string) {
  const ERRORS: { [key: string]: string } = {};

  if (!value.trim()) {
    ERRORS[placeholder.toLowerCase()] = `${placeholder} field is required`;
  }

  if (
    placeholder.includes("Email") &&
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
  ) {
    ERRORS.email = "Email is invalid! Pattern: example@test.com";
  }

  if (placeholder.includes("Phone")) {
    if (value.trim().replace(/ /g, "").length < 7) {
      ERRORS.phone = "Phone length should not be less than 7 symbols";
    } else if (value.trim().replace(/ /g, "").length > 15) {
      ERRORS.phone = "Phone length should not be more than 15 symbols";
    }
  }

  if (placeholder.includes("Message") && value.trim().length < 15) {
    ERRORS.message = "Your message should be at least 15 characters";
  }

  return ERRORS;
}

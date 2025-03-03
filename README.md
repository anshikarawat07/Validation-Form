# Form Validation Project

## Overview
This project implements **client-side form validation** using JavaScript. The validation ensures that user inputs meet specific criteria before submission.

## Features
- **Username Validation:** Required field.
- **Email Validation:** Ensures a valid email format.
- **Password Validation:**
  - Minimum 8 characters.
  - Must include uppercase, lowercase, number, and special character.
- **Confirm Password Validation:** Must match the password.
- **Real-time Feedback:** Displays error messages or success status dynamically.

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. The form listens for the **submit** event and prevents default submission.
2. Each input field is validated:
   - Empty fields trigger an error message.
   - Email must match a regex pattern.
   - Passwords must be strong.
   - Confirm password must match the original password.
3. If all validations pass, the form is ready for submission.

## Installation & Usage
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/form-validation.git
   ```
2. Open `index.html` in a browser.
3. Enter inputs and see validation messages.
![image](https://github.com/user-attachments/assets/492e61de-2508-40be-a297-dab31c0be078)


## Future Improvements
- Add more security features.
- Support multiple password strength levels.
- Use local storage to save form progress.



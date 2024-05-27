# College Short Film Mock Website

This is a mock college website for a short film. Users can learn more about the college, view requirements, and apply through a form with session storage functionality.
Pages are optimized for mobile, the application page and the success page are also optimized for desktop. 

## Features

- **Homepage:** Displays an image carousel and brief information about the college. Not all links are clickable, but users can click "Learn More" to access the Requirements page.
- **Requirements Page:** Provides detailed information about the requirements for applying to the college.
- **Apply Form:** Allows users to submit their application. Some fields are required, and entered data is saved to session storage. File uploads are not stored in session storage.
- **Session Storage Management:** When users click "Cancel," session storage is deleted. Once all required fields are submitted, the submit button lights up.
- **Application Successful Page:** Users are redirected to this page after successfully submitting their application.

## Live Demo

The website is live on GitHub Pages. You can [view it here](https://qualle-tech.github.io/karamozov-college/).

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)

## Contributing

To contribute to this project, follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and ensure they follow our coding standards.
4. Test your changes locally.
5. Commit your changes (`git commit -am 'Add new feature'`).
6. Push to your forked repository (`git push origin feature/your-feature-name`).
7. Open a new Pull Request against the `main` branch of this repository.
8. Await review and approval from our team.

# Contributing

This project is open for contributions. If you plan on contributing to project, please 
try to follow the guidelines below.

## Guidelines

### Commit messages

Commit messages should be written in the imperative form, and should be short and concise.

### Branches

Branches should be named using the following pattern:

```
<type>/<description>
```

Where `<type>` is the type of the branch, and `<description>` is a short description of the branch.

Some common types are:

- `feature`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.

You might also use some other descriptive types, such as `chore` or `ci`.

### Pull requests

There aren't strict rules for pull requests, but you should try to follow the guidelines below:

- Try to keep the title short and concise, yet descriptive.
- Include a description of the changes you made, and why you made them.
- If your pull request is related to an issue, include the issue number in the description.

### Formatting and linting

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to enforce code style.

You can run the following command to check if your code is following the style guidelines:

```bash
npm run lint
```

You can also run the following command to automatically fix some of the style issues:

```bash
npm run lint:fix
```

Try to run these commands before opening a pull request. Try to always keep your code following the style guidelines.
On the few cases where you can't, you can disable the linting rules for a specific line or block of code.

File Organization:
- postApi.js: data-fetching logic only, no React
- Post.jsx: renders title and body
- PostList.jsx: renders the list with .map() and stable keys
- FilterForm.jsx: controlled input for filtering by title
- postsReducer.js: initial state + pure reducer
- App.jsx: owns state, runs the fetch effect, derives filtered posts
- main.jsx: entry point

Challenges:
- My Node version was slightly older than what the latest
Vite required, and my first scaffold used the wrong template (Vanilla/TypeScript
instead of React/JavaScript). I updated Node and recreated the project.
- StrictMode runs effects twice. I used an
AbortController to cancel the request in the cleanup function and ignore
the resulting AbortError.
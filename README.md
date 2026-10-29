# 📚 Book Vibe

**Book Vibe** is a responsive book discovery and reading management application built with **Next.js, TypeScript, Tailwind CSS, and DaisyUI**. Users can explore a collection of books, view detailed information, and organize their reading lists and wishlists through an intuitive interface.

## 🔗 Live Links

- 🌐 **Live Website:** [Book Vibe](https://book-vibe-one-dun.vercel.app/)
- 💻 **GitHub Repository:** [Afia611/book-vibe](https://github.com/Afia611/book-vibe)

## ✨ Key Features

### 📖 Book Discovery
- Browse books in a clean, responsive grid layout.
- View book covers, titles, authors, categories, and ratings.
- Explore individual books through dynamic detail pages.

### 📚 Book Details
- Dynamic routing using Next.js App Router (`/books/[id]`).
- Detailed book information, including author, category, publishing year, rating, and tags.
- Optimized book cover images using Next.js Image.

### ❤️ Reading List & Wishlist
- Add books to a personal reading list.
- Save books to a wishlist for future reading.
- Manage book selections using React Context API.

### 🔔 Toast Notifications
- Interactive success notifications when adding books to reading lists or wishlists.
- Implemented using React Toastify.

### 📱 Responsive Design
- Mobile-friendly interface.
- Responsive book cards and page layouts.
- Consistent styling with Tailwind CSS and DaisyUI.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | React framework and routing |
| React | Component-based UI |
| TypeScript | Type-safe development |
| Tailwind CSS | Responsive styling |
| DaisyUI | UI components |
| Context API | Application state management |
| React Toastify | Toast notifications |
| Next.js Image | Image optimization |
| Vercel | Deployment and hosting |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
book-vibe/
├── public/
│   └── booksData.json
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── bookdetails/
│   │   │   ├── ReadBtn.tsx
│   │   │   └── WishlistBtn.tsx
│   │   └── shared/
│   │       ├── homepage/
│   │       │   ├── Banner.tsx
│   │       │   ├── BookCard.tsx
│   │       │   └── Books.tsx
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── context/
│   │   └── BooksContext.tsx
│   └── types/
│       └── card-types.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run Book Vibe locally.

### 1. Clone the repository

```bash
git clone https://github.com/Afia611/book-vibe.git
```

### 2. Navigate to the project directory

```bash
cd book-vibe
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ How It Works

**Book Data:** Book information is stored in a local JSON file (`public/booksData.json`) and loaded through server-side data access.

**Dynamic Routing:** Each book has a dedicated details page using the Next.js App Router.

**State Management:** React Context API manages the reading list and wishlist across components.

**User Feedback:** React Toastify displays notifications when users interact with reading list and wishlist buttons.

**Deployment:** The application is deployed on Vercel and connected to GitHub for automatic deployments.

## 🌱 Future Improvements

- Prevent duplicate books in reading lists and wishlists.
- Add search functionality for books.
- Implement category-based filtering and sorting.
- Add persistent storage for reading lists and wishlists.
- Improve accessibility and user experience.

## 👩‍💻 Author

**Afia611**

Frontend Development | React | Next.js | TypeScript

- **GitHub:** [github.com/Afia611](https://github.com/Afia611)

---

⭐ If you find this project useful, consider giving the repository a star!

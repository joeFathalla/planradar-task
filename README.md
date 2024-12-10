# 🧾 PlanRadar Ticket Table 🎟️

Welcome to the **PlanRadar Ticket Table**! 🚀 This project showcases a scalable, high-performance ticket management system built with **React**, **TypeScript**, and **TailwindCSS**. 🌟

It features a **dynamic pagination system** that can handle thousands of tickets effortlessly, along with a clean and intuitive UI. ✅ Plus, it includes **unit tests** to ensure everything works seamlessly. 🧪

---

## 🛠️ Features

- 🎨 Built with **React** and styled using **TailwindCSS**.
- ⚡ **Pagination** for handling large datasets efficiently.
- 🔍 Dynamic **"tickets per page"** selector for flexibility.
- 🧪 Fully tested with **Jest** and **Testing Library**.
- 🖼️ **Skeleton loading** for a smooth user experience while loading data.

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/joeFathalla/planradar-task.git
cd planradar-task
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then, install the project dependencies:

```bash
npm install
```

### 3. Run the Application

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173). 🌐

---

## 🧪 Running Tests

To ensure everything is working perfectly, run the unit tests:

```bash
npm run test
```

### 🛡️ Test Coverage

- **Pagination logic**: Ensures page numbers and dots are correctly displayed.
- **Dynamic per-page selector**: Tests behavior when changing items per page.
- **Skeleton loading**: Verifies that the skeleton loader appears while fetching data.
- **Tickets List**: Ensures tickets render correctly for the current page.

---

## 📚 Project Structure

Here's an overview of the project's main structure:

```
src/
├── components/
│   ├── Pagination.tsx        # Handles dynamic pagination
│   ├── Skeleton.tsx          # Renders the skeleton of a row
│   ├── TicketsList.tsx       # Renders the tickets in a table
├── data/
│   ├── TicketsData.ts        # Contains the Dummy data for demonstration 
│   ├── TicketsType.ts        # Contains the type of the tickets list
├── hooks/
│   ├── usePagination.ts      # Custom hook to create pagination range with ... and numbers 
├── App.tsx                   # Main app component
├── tests/
│   ├── Pagination.test.tsx   # Unit tests for Pagination
│   ├── TicketsList.test.tsx  # Unit tests for Tickets List
│   ├── App.test.tsx          # Unit tests for App component
```

---

## ✨ How It Works

- The **App Component** manages ticket data, pagination logic, and state.
- The **TicketsList Component** renders the current page of tickets in a table format.
- The **Pagination Component** displays page numbers dynamically and supports dots for better navigation.
- **Skeleton Loader** provides visual feedback while loading data.

---

## 🎯 Future Enhancements

- 🌐 Add backend integration for real-time data.
- 🖌️ Improve UI/UX with advanced styling and animations.
- 📊 Implement sorting and filtering capabilities.

---

Made with ❤️ and  ✨ by [Joseph Fathalla](https://github.com/joeFathalla). 🖖


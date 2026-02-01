# ☕ Coffee Shop Manager

An educational React application designed to teach **useState** and **useEffect** hooks through a practical, hands-on example.

## 🎯 Learning Objectives

This project follows a structured teaching flow with demos and exercises:

### useState Concepts
- 📚 **DEMO**: Managing numeric state (customer counter)
- 📚 **DEMO**: Controlled input with string state (coffee name input)
- 🎯 **EXERCISE 1**: Reset input field after form submission
- 🎯 **EXERCISE 2**: Update array state with new orders (immutable pattern)

### useEffect Concepts
- 📚 **DEMO 1**: Running effects when dependencies change (document title)
- 📚 **DEMO 2**: Auto-saving state to localStorage
- 🎯 **EXERCISE 1**: Auto-save orders array to localStorage
- 🎯 **EXERCISE 2**: Load saved data from localStorage on mount (empty dependency array)

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Important:** Open the browser console (F12) to see useEffect logs!

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js                       # Main component with useState & useEffect exercises
│   ├── layout.js                     # App layout
│   └── globals.css                   # Global styles
└── components/
    ├── Header.js                     # App header with title and image
    ├── CustomerCounter.js            # 📚 DEMO: useState with numeric state
    ├── OrderForm.js                  # 🎯 EXERCISES: useState with forms & arrays
    └── OrderList.js                  # Display component for orders list
```

## 🎓 Teaching Flow

### Part 1: useState Basics

#### 📚 DEMO: Customer Counter
**Concept:** Basic useState with numeric values
- Increment/decrement buttons
- State updates trigger re-renders
- Minimum value validation (can't go below 0)

#### 📚 DEMO: Coffee Name Input
**Concept:** Controlled input with useState
- Text input synced with state via `onChange`
- Real-time state updates as user types
- Using `value` prop to control the input

#### 🎯 EXERCISE 1: Reset Coffee Name
**Your Task:** Clear the input field after adding an order
- **Hint:** Use `setCoffeeName('')` after form submission
- **Location:** `src/components/OrderForm.js`

#### 🎯 EXERCISE 2: Update Order Array
**Your Task:** Add the new coffee order to the orders array
- **Hint:** Use spread operator: `[...orders, coffeeName]`
- **Hint:** Remember to call `setOrders()` with the new array
- **Location:** `src/components/OrderForm.js`

### Part 2: useEffect Hooks

#### 📚 DEMO useEffect 1: Update Document Title
**Concept:** Running effects when dependencies change
- Updates browser tab title with customer and order count
- Runs whenever `customerCount` or `orders` changes
- Demonstrates dependency array usage

#### 📚 DEMO useEffect 2: Auto-save Customer Count
**Concept:** Side effects with localStorage
- Automatically saves customer count when it changes
- Uses `localStorage.setItem()`
- Console logs show when effect runs

#### 🎯 EXERCISE useEffect 1: Auto-save Orders
**Your Task:** Create a useEffect to save orders to localStorage
- **Hint:** Use `localStorage.setItem('coffeeShop_orders', JSON.stringify(orders))`
- **Hint:** Dependency array should be `[orders]`
- **Hint:** Add a console.log to track when it runs
- **Location:** `src/app/page.js`

#### 🎯 EXERCISE useEffect 2: Load from localStorage on Mount
**Your Task:** Load saved data when the app first loads
- **Hint:** Use empty dependency array `[]` to run only once
- **Hint:** Load customer count with `localStorage.getItem('coffeeShop_customerCount')`
- **Hint:** Load orders with `localStorage.getItem('coffeeShop_orders')`
- **Hint:** Parse JSON for orders: `JSON.parse(savedOrders)`
- **Hint:** Check if values exist before setting state
- **Location:** `src/app/page.js`

## 💾 localStorage Keys

The application persists data using these keys:
- `coffeeShop_customerCount` - Number of customers (string)
- `coffeeShop_orders` - Array of coffee orders (JSON string)

## ✅ Exercise Checklist

- [ ] Complete Exercise useState 1: Reset coffee name input
- [ ] Complete Exercise useState 2: Update orders array
- [ ] Complete Exercise useEffect 1: Auto-save orders to localStorage
- [ ] Complete Exercise useEffect 2: Load data from localStorage on mount
- [ ] Test by refreshing the page - data should persist!

## 📝 License

This is an educational project - feel free to use and modify for teaching purposes!

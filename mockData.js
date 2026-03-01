// Mock Data for the Food Ordering System

const restaurants = [
    {
        id: 1,
        name: 'The Burger Joint',
        cuisine: 'American',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        menu: [
            { id: 101, name: 'Classic Cheeseburger', description: 'Beef patty with cheese, lettuce, and tomato', price: 8.99 },
            { id: 102, name: 'Bacon Double Burger', description: 'Two beef patties with bacon and cheese', price: 12.99 },
            { id: 103, name: 'French Fries', description: 'Crispy golden fries', price: 3.99 },
        ]
    },
    {
        id: 2,
        name: 'Pizza Paradiso',
        cuisine: 'Italian',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        menu: [
            { id: 201, name: 'Margherita Pizza', description: 'Tomato sauce, fresh mozzarella, and basil', price: 14.99 },
            { id: 202, name: 'Pepperoni Pizza', description: 'Tomato sauce, cheese, and pepperoni', price: 16.99 },
            { id: 203, name: 'Garlic Bread', description: 'Toasted bread with garlic and herbs', price: 5.99 },
        ]
    },
    {
        id: 3,
        name: 'Sushi Station',
        cuisine: 'Japanese',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
        menu: [
            { id: 301, name: 'Spicy Tuna Roll', description: 'Spicy tuna and cucumber', price: 10.99 },
            { id: 302, name: 'Salmon Nigiri', description: 'Fresh salmon over pressed rice', price: 12.99 },
            { id: 303, name: 'Edamame', description: 'Steamed soybeans with sea salt', price: 4.99 },
        ]
    }
];

// In-memory store for orders
const orders = [];

module.exports = {
    restaurants,
    orders
};

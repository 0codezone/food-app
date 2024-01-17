const dummyRestaurants = [
  {
    name: "Delicious Delights",
    profile: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    menu: [
      { name: "Burger", price: 10.99 },
      { name: "Pizza", price: 12.99 },
      { name: "Pasta", price: 8.99 },
    ],
    time: "10:00 AM - 9:00 PM",
    pickup: true,
    delivery: true,
    isopen: true,
    rating: 4.2,
    zipcode: "12345",
    coords: {
      id: "1",
      latitude: 37.7749,
      longitude: -122.4194,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      address: "123 Main St, Cityville",
      name: "Delicious Delights Location",
    },
  },
  {
    name: "Tasty Treats",
    profile: "https://cdn-icons-png.flaticon.com/128/64/64572.png",
    menu: [
      { name: "Sushi", price: 15.99 },
      { name: "Salad", price: 7.99 },
      { name: "Smoothie", price: 5.99 },
    ],
    time: "11:00 AM - 8:00 PM",
    pickup: true,
    delivery: true,
    isopen: false,
    rating: 3.5,
    zipcode: "54321",
    coords: {
      id: "2",
      latitude: 34.0522,
      longitude: -118.2437,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      address: "456 Oak St, Townsville",
      name: "Tasty Treats Location",
    },
  },
];

export default dummyRestaurants;

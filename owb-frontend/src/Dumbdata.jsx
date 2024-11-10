
import DataContext from './Datacontext';



const DataProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      title: "Hello, World!",
      description: "blaaaa blaaaaa blaaaa blaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaablaaaa",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 123,
      discount: 0,
      stock: 20,
      type: "homme"  // Assuming this is for men
    },
    {
      id: 2,
      title: "Cozy Sweater",
      description: "A soft and comfortable sweater perfect for chilly days.",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 59.99,
      discount: 20,
      stock: 0,
      type: "homme"  // Assuming this is for women
    },
    {
      id: 3,
      title: "Stylish Jeans",
      description: "A classic pair of well-fitted jeans that can be dressed up or down.",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 79.99,
      discount: 0,
      stock: 10,
      type: "homme"  // Assuming this is for men
    },
    {
      id: 4,
      title: "Casual T-Shirt",
      description: "A comfortable and versatile t-shirt that can be worn for any occasion.",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 24.99,
      discount: 15,
      stock: 0,
      type: "homme"  // Assuming this is for women
    },
    {
      id: 5,
      title: "Elegant Dress",
      description: "A beautiful and sophisticated dress that can be worn for formal events.",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 99.99,
      discount: 0,
      stock: 5,
      type: "femme"  // This is clearly for women
    },
    {
      id: 6,
      title: "Sporty Jacket",
      description: "A lightweight and durable jacket perfect for outdoor activities.",
      img: "https://images.pexels.com/photos/20345031/pexels-photo-20345031/free-photo-of-alexanderplatz-in-berlin-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 79.99,
      discount: 25,
      stock: 0,
      type: "homme"  // Assuming this is for men
    }
  ];
  
  

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider ;


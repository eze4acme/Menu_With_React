const menu = [
    {
      id: '1eabb0d3-18c2-4c0f-937b-43c222ca40c7',
      category: 'breakfast',
      name: 'Classic Pancakes',
      description: 'Fluffy buttermilk pancakes served with maple syrup and a pat of butter.',
      price: 8.99,
      image: 'https://source.unsplash.com/Ra4wxfmP84A',
      healthBenefits: ['Good source of carbohydrates', 'Provides energy for the day'],
      reviews: [
        { username: 'JohnDoe', rating: 4.5, comment: 'Delicious pancakes! Fluffy and perfectly sweet.' },
        { username: 'JaneSmith', rating: 5, comment: 'Best pancakes I ever had. Highly recommended!' }
      ]
    },
    {
      id: '8c5a4d9f-bce3-40d1-87b5-5eb82a62b9a2',
      category: 'lunch',
      name: 'Grilled Chicken Sandwich',
      description: 'Grilled chicken breast topped with lettuce, tomato, and mayo on a toasted bun. Served with a side of crispy fries.',
      price: 10.99,
      image: 'https://source.unsplash.com/jYBh-pKo2zA',
      healthBenefits: ['High in protein', 'Good source of lean meat'],
      reviews: [
        { username: 'AmyJohnson', rating: 4, comment: 'Great sandwich with juicy chicken!' },
        { username: 'MikeThompson', rating: 4.5, comment: 'Perfectly grilled chicken. Loved the fries too.' }
      ]
    },
    {
      id: 'fcfc14ce-9f85-4fc0-ae2e-2ad8a6b61d8f',
      category: 'shakes',
      name: 'Chocolate Banana Smoothie',
      description: 'A creamy blend of rich chocolate and ripe bananas, garnished with whipped cream and chocolate shavings.',
      price: 5.99,
      image: 'https://source.unsplash.com/yUzv_oP61A0',
      healthBenefits: ['Rich in potassium', 'Good source of antioxidants'],
      reviews: [
        { username: 'SarahBrown', rating: 5, comment: 'Amazing smoothie! The combination of chocolate and banana is divine.' },
        { username: 'DavidWilson', rating: 4, comment: 'Delicious and refreshing. Perfect for chocolate lovers.' }
      ]
    },
    {
      id: 'a9ebc84e-2ea1-40ab-9b3d-0fd6868dfbbe',
      category: 'breakfast',
      name: 'Avocado Toast',
      description: 'Freshly toasted bread topped with mashed avocado, a sprinkle of sea salt, and a drizzle of olive oil.',
      price: 9.99,
      image: 'https://source.unsplash.com/eOcyhe5-9sQ',
      healthBenefits: ['Rich in healthy fats', 'Good source of fiber'],
      reviews: [
        { username: 'JenniferLee', rating: 4.5, comment: 'Perfectly ripe avocado on delicious toast. Loved it!' },
        { username: 'RobertSmith', rating: 5, comment: 'The best avocado toast I have ever tasted. Simple and flavorful.' }
      ]
    },
    {
      id: '978b79a5-3c1c-4680-b486-6de1194c583b',
      category: 'lunch',
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce tossed with homemade Caesar dressing, Parmesan cheese, and crunchy croutons.',
      price: 9.99,
      image: 'https://source.unsplash.com/O6ehctzX3bM',
      healthBenefits: ['High in vitamins and minerals', 'Good source of fiber'],
      reviews: [
        { username: 'EmilyDavis', rating: 4, comment: 'Fresh and delicious Caesar salad. The dressing is perfect.' },
        { username: 'DanielMiller', rating: 5, comment: 'Classic Caesar salad done right. Highly recommend it.' }
      ]
    },
    {
      id: '7d0e0797-c2a4-4371-9747-2677e78b0a71',
      category: 'shakes',
      name: 'Strawberry Banana Smoothie',
      description: 'A refreshing blend of ripe strawberries, bananas, and creamy yogurt, topped with a strawberry garnish.',
      price: 6.99,
      image: 'https://source.unsplash.com/q3a6S8YiVCQ',
      healthBenefits: ['Rich in vitamin C', 'Good source of potassium'],
      reviews: [
        { username: 'MichaelJohnson', rating: 4.5, comment: 'Delicious and refreshing. Perfect combination of flavors.' },
        { username: 'JessicaRobinson', rating: 4, comment: 'Great smoothie. The strawberry and banana pair so well together.' }
      ]
    },
    {
      id: '2c17d5e4-d25d-47e9-aa39-1a369f3c7e5f',
      category: 'lunch',
      name: 'Margherita Pizza',
      description: 'A traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.',
      price: 11.99,
      image: 'https://source.unsplash.com/jcFb5nQXhSY',
      healthBenefits: ['Good source of calcium', 'Contains lycopene'],
      reviews: [
        { username: 'MarkTaylor', rating: 5, comment: 'Authentic Margherita pizza. The flavors are fantastic.' },
        { username: 'LauraHarris', rating: 4.5, comment: 'Delicious pizza with a thin and crispy crust. Loved it!' }
      ]
    },
    {
      id: '0b1f1af4-0d6a-485f-9ef7-4d7bbcb9fbf3',
      category: 'shakes',
      name: 'Cookies and Cream Shake',
      description: 'A delightful shake made with crushed chocolate cookies, vanilla ice cream, and a swirl of chocolate syrup.',
      price: 7.99,
      image: 'https://source.unsplash.com/YLg-5YSHYZw',
      healthBenefits: ['Indulgent treat', 'Provides a sweet satisfaction'],
      reviews: [
        { username: 'SophiaDavis', rating: 4, comment: 'Decadent and delicious. A must-try for cookie lovers.' },
        { username: 'AndrewClark', rating: 5, comment: 'Heavenly shake with the perfect blend of cookies and cream.' }
      ]
    },
    {
      id: '0b3c8f57-7422-4cfa-81d3-9d4c3270d97a',
      category: 'breakfast',
      name: 'Eggs Benedict',
      description: 'Two poached eggs served on toasted English muffins with Canadian bacon and creamy hollandaise sauce.',
      price: 12.99,
      image: 'https://source.unsplash.com/JcHKntd8JqI',
      healthBenefits: ['Good source of protein', 'Provides essential amino acids'],
      reviews: [
        { username: 'OliviaThomas', rating: 4.5, comment: 'Classic breakfast dish done perfectly. Loved the hollandaise sauce.' },
        { username: 'JacobWilson', rating: 5, comment: 'Fantastic eggs Benedict. The poached eggs were cooked to perfection.' }
      ]
    },
    {
      id: '4ef9e48e-70e4-428f-9035-65c69be641a9',
      category: 'lunch',
      name: 'Caprese Salad',
      description: 'Fresh mozzarella cheese, juicy tomatoes, and basil leaves drizzled with balsamic glaze and olive oil.',
      price: 8.99,
      image: 'https://source.unsplash.com/WvGhxZ1jgnw',
      healthBenefits: ['Good source of antioxidants', 'Provides healthy fats'],
      reviews: [
        { username: 'EthanAdams', rating: 4, comment: 'Simple and delicious Caprese salad. The flavors are fantastic.' },
        { username: 'EmmaHall', rating: 4.5, comment: 'Fresh and flavorful. The mozzarella and tomatoes are top-notch.' }
      ]
    },
    {
      id: 'd9f5acaf-9e5a-4920-9185-dc32a79e892d',
      category: 'breakfast',
      name: 'Greek Yogurt Parfait',
      description: 'Creamy Greek yogurt layered with fresh berries, granola, and a drizzle of honey.',
      price: 6.99,
      image: 'https://source.unsplash.com/1Pd2w4iKk-E',
      healthBenefits: ['High in protein', 'Good source of probiotics'],
      reviews: [
        { username: 'NoahMitchell', rating: 4.5, comment: 'Healthy and delicious parfait. The combination of flavors is great.' },
        { username: 'AvaLewis', rating: 5, comment: 'Perfectly balanced and refreshing. Loved the fresh berries.' }
      ]
    },
    {
      id: 'bfbdc8f7-1877-4eb8-9158-6901d8e7ffbb',
      category: 'shakes',
      name: 'Peanut Butter Protein Shake',
      description: 'A protein-packed shake blended with creamy peanut butter, bananas, and a touch of honey.',
      price: 8.99,
      image: 'https://source.unsplash.com/YEZC3xrOAI0',
      healthBenefits: ['High in protein', 'Provides essential amino acids'],
      reviews: [
        { username: 'LiamYoung', rating: 4, comment: 'Delicious and filling shake. Great for post-workout recovery.' },
        { username: 'MiaDavis', rating: 4.5, comment: 'Tasty and satisfying. The peanut butter flavor is perfect.' }
      ]
    },
    {
      id: '9f09190a-0592-4d90-9863-b4f7a536f4e3',
      category: 'lunch',
      name: 'Mediterranean Wrap',
      description: 'A flavorful wrap filled with grilled vegetables, feta cheese, and a zesty tzatziki sauce.',
      price: 9.99,
      image: 'https://source.unsplash.com/GzMSkub1GwE',
      healthBenefits: ['Rich in vitamins and minerals', 'Good source of fiber'],
      reviews: [
        { username: 'BenjaminKing', rating: 4.5, comment: 'Fresh and tasty wrap. The grilled vegetables are delicious.' },
        { username: 'CharlotteTaylor', rating: 5, comment: 'Loved the Mediterranean flavors. The tzatziki sauce is fantastic.' }
      ]
    },
    {
      id: '6889a0a7-78d9-4c44-92a7-99337d61b8c2',
      category: 'shakes',
      name: 'Vanilla Bean Milkshake',
      description: 'A classic milkshake made with creamy vanilla ice cream and topped with whipped cream and a cherry.',
      price: 6.99,
      image: 'https://source.unsplash.com/_b7kV2jwD1g',
      healthBenefits: ['Indulgent treat', 'Provides a sweet satisfaction'],
      reviews: [
        { username: 'HarperRobinson', rating: 4, comment: 'Delicious and nostalgic milkshake. Perfectly creamy.' },
        { username: 'WilliamHarris', rating: 5, comment: 'Fantastic vanilla milkshake. Reminds me of childhood.' }
      ]
    },
    {
      id: '536e7cc6-46c7-48b6-baf0-5e70a1a7e40f',
      category: 'breakfast',
      name: 'Egg White Omelette',
      description: 'A healthy omelette made with fluffy egg whites, spinach, mushrooms, and a sprinkle of cheese.',
      price: 9.99,
      image: 'https://source.unsplash.com/DJf3I1ayZPQ',
      healthBenefits: ['Low in fat', 'Rich in vitamins and minerals'],
      reviews: [
        { username: 'JamesClark', rating: 4.5, comment: 'Delicious and healthy omelette. The flavors are fantastic.' },
        { username: 'SophieAnderson', rating: 5, comment: 'Perfectly cooked and packed with nutritious ingredients.' }
      ]
    },
    {
      id: 'e2a7ae48-2ec9-4b62-aee6-df78b9f55ebf',
      category: 'lunch',
      name: 'Quinoa Salad',
      description: 'A refreshing salad with quinoa, mixed greens, cherry tomatoes, cucumbers, and a tangy vinaigrette.',
      price: 10.99,
      image: 'https://source.unsplash.com/X1H18kwOy6I',
      healthBenefits: ['High in protein', 'Rich in fiber'],
      reviews: [
        { username: 'EmmaJohnson', rating: 4, comment: 'Healthy and flavorful salad. The quinoa adds a nice texture.' },
        { username: 'AlexanderBrown', rating: 4.5, comment: 'Delicious and filling. Loved the combination of ingredients.' }
      ]
    },
    {
      id: '4f4300b8-d4fa-4c86-a674-197f684e45b0',
      category: 'shakes',
      name: 'Matcha Green Tea Smoothie',
      description: 'A refreshing smoothie made with matcha green tea, almond milk, honey, and a hint of vanilla.',
      price: 7.99,
      image: 'https://source.unsplash.com/fOs3MmqiU2w',
      healthBenefits: ['Rich in antioxidants', 'Boosts metabolism'],
      reviews: [
        { username: 'LucasMiller', rating: 4.5, comment: 'Great smoothie with a unique and refreshing flavor.' },
        { username: 'OliviaHall', rating: 4, comment: 'Delicious and energizing. The matcha flavor is delightful.' }
      ]
    }
  ];
  
export default menu
  
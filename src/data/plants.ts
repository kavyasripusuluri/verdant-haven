export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  careInfo: {
    water: string;
    sunlight: string;
    size: string;
  };
  inStock: boolean;
}

export const categories = [
  { id: 'indoor', name: 'Indoor Plants', icon: '🏠' },
  { id: 'outdoor', name: 'Outdoor Plants', icon: '🌳' },
  { id: 'succulents', name: 'Succulents', icon: '🌵' },
  { id: 'air-purifying', name: 'Air Purifying', icon: '🍃' },
  { id: 'flowering', name: 'Flowering', icon: '🌸' },
  { id: 'low-light', name: 'Low Light', icon: '🌙' },
];

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45,
    image: 'https://images.unsplash.com/photo-1614594975525-e45c3455d6a1?w=600&h=600&fit=crop',
    category: 'indoor',
    description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its stunning split leaves. This tropical beauty brings a jungle vibe to any space and is surprisingly easy to care for.',
    careInfo: {
      water: 'Weekly, when top soil is dry',
      sunlight: 'Bright indirect light',
      size: 'Up to 3 feet indoors',
    },
    inStock: true,
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    price: 65,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop',
    category: 'indoor',
    description: 'The Fiddle Leaf Fig is an iconic statement plant with large, violin-shaped leaves. It adds elegance and a touch of drama to any room, making it a favorite among interior designers.',
    careInfo: {
      water: 'Every 10-14 days',
      sunlight: 'Bright indirect light',
      size: 'Up to 6 feet indoors',
    },
    inStock: true,
  },
  {
    id: '3',
    name: 'Snake Plant',
    price: 28,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600&h=600&fit=crop',
    category: 'air-purifying',
    description: 'The Snake Plant is one of the most tolerant plants around. Known for its air-purifying qualities and architectural upright leaves, it thrives on neglect and looks stunning in modern spaces.',
    careInfo: {
      water: 'Every 2-3 weeks',
      sunlight: 'Low to bright indirect',
      size: 'Up to 4 feet tall',
    },
    inStock: true,
  },
  {
    id: '4',
    name: 'Pothos Golden',
    price: 22,
    image: 'https://images.unsplash.com/photo-1572969176003-e5c8d1162782?w=600&h=600&fit=crop',
    category: 'low-light',
    description: 'Golden Pothos features heart-shaped leaves with golden variegation. This trailing beauty is perfect for shelves and hanging baskets, and is nearly impossible to kill.',
    careInfo: {
      water: 'Weekly, when soil is dry',
      sunlight: 'Low to medium indirect',
      size: 'Trails up to 10 feet',
    },
    inStock: true,
  },
  {
    id: '5',
    name: 'Echeveria Elegans',
    price: 15,
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&h=600&fit=crop',
    category: 'succulents',
    description: 'Also called Mexican Snowball, this stunning succulent forms perfect rosettes of pale blue-green leaves. A drought-tolerant beauty that adds modern charm to any windowsill.',
    careInfo: {
      water: 'Every 2 weeks, less in winter',
      sunlight: 'Bright direct light',
      size: 'Up to 4 inches wide',
    },
    inStock: true,
  },
  {
    id: '6',
    name: 'Peace Lily',
    price: 35,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&h=600&fit=crop',
    category: 'air-purifying',
    description: 'The Peace Lily graces any space with elegant white blooms and glossy green leaves. Beyond its beauty, it purifies the air and tells you when it needs water by drooping dramatically.',
    careInfo: {
      water: 'Weekly, keep soil moist',
      sunlight: 'Low to medium indirect',
      size: 'Up to 3 feet tall',
    },
    inStock: true,
  },
  {
    id: '7',
    name: 'Bird of Paradise',
    price: 85,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=600&h=600&fit=crop',
    category: 'indoor',
    description: 'Make a bold tropical statement with the Bird of Paradise. Its large banana-like leaves create instant jungle vibes, and with patience, it may reward you with exotic orange blooms.',
    careInfo: {
      water: 'Weekly, when top 2 inches dry',
      sunlight: 'Bright direct to indirect',
      size: 'Up to 6 feet indoors',
    },
    inStock: true,
  },
  {
    id: '8',
    name: 'Lavender',
    price: 18,
    image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=600&h=600&fit=crop',
    category: 'flowering',
    description: 'Fragrant Lavender brings the essence of Provence to your home or garden. Its purple blooms attract pollinators and the soothing scent promotes relaxation and calm.',
    careInfo: {
      water: 'When soil is completely dry',
      sunlight: 'Full sun (6+ hours)',
      size: 'Up to 2 feet tall',
    },
    inStock: true,
  },
  {
    id: '9',
    name: 'String of Pearls',
    price: 25,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&h=600&fit=crop',
    category: 'succulents',
    description: 'This unique trailing succulent features spherical leaves that cascade like beads on a string. A showstopper in hanging planters and a conversation starter in any room.',
    careInfo: {
      water: 'Every 1-2 weeks',
      sunlight: 'Bright indirect light',
      size: 'Trails up to 3 feet',
    },
    inStock: true,
  },
  {
    id: '10',
    name: 'ZZ Plant',
    price: 38,
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&h=600&fit=crop',
    category: 'low-light',
    description: 'The ZZ Plant boasts waxy, dark green leaves that practically shine. Its ability to thrive in low light and withstand drought makes it the perfect choice for beginners and busy plant parents.',
    careInfo: {
      water: 'Every 2-3 weeks',
      sunlight: 'Low to bright indirect',
      size: 'Up to 3 feet tall',
    },
    inStock: true,
  },
  {
    id: '11',
    name: 'Rubber Plant',
    price: 42,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=600&fit=crop',
    category: 'air-purifying',
    description: 'The Rubber Plant features thick, glossy burgundy leaves that command attention. This resilient beauty purifies air while adding a sophisticated touch to your indoor jungle.',
    careInfo: {
      water: 'Every 1-2 weeks',
      sunlight: 'Medium to bright indirect',
      size: 'Up to 8 feet indoors',
    },
    inStock: true,
  },
  {
    id: '12',
    name: 'Orchid Phalaenopsis',
    price: 55,
    image: 'https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=600&h=600&fit=crop',
    category: 'flowering',
    description: 'The Phalaenopsis Orchid is elegance personified. With long-lasting blooms in stunning shades, this exotic beauty adds a touch of luxury to any space.',
    careInfo: {
      water: 'Weekly, ice cube method',
      sunlight: 'Bright indirect light',
      size: 'Up to 2 feet tall',
    },
    inStock: true,
  },
];

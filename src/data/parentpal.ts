// Types
export interface Child {
  id: string;
  name: string;
  age: number;
  photo: string;
  interests: string[];
  temperament: 'calm' | 'energetic' | 'curious' | 'creative';
  developmentNotes?: string;
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  children: Child[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  ageRange: [number, number];
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  category: 'bedtime' | 'adventure' | 'learning' | 'values' | 'nature';
  hasAudio: boolean;
  content?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  ageRange: [number, number];
  thumbnail: string;
  category: 'puzzle' | 'memory' | 'counting' | 'matching' | 'creative';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  ageRange: [number, number];
  duration: string;
  materials: string[];
  category: 'motor-skills' | 'cognitive' | 'social' | 'creative' | 'outdoor';
  milestone: string;
  thumbnail: string;
}

export interface EducationalContent {
  id: string;
  title: string;
  description: string;
  ageRange: [number, number];
  category: 'alphabet' | 'numbers' | 'shapes' | 'colors' | 'science' | 'values';
  thumbnail: string;
  videoUrl?: string;
}

// Default child profile
export const defaultChild: Child = {
  id: '1',
  name: 'Kaira',
  age: 5,
  photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=faces',
  interests: ['animals', 'space', 'drawing', 'music'],
  temperament: 'curious',
  developmentNotes: 'Loves learning new things and is very imaginative!'
};

export const defaultParent: Parent = {
  id: '1',
  name: 'Parent',
  email: 'parent@example.com',
  children: [defaultChild]
};

// Stories data
export const stories: Story[] = [
  {
    id: '1',
    title: 'The Little Star Who Lost Her Sparkle',
    description: 'A gentle bedtime story about a little star learning that true brightness comes from within.',
    ageRange: [3, 6],
    duration: '5 min',
    thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop',
    category: 'bedtime',
    hasAudio: true,
    content: `Once upon a time, in a sky full of twinkling stars, there lived a little star named Twinkle. She had the most beautiful sparkle in all the galaxy.

One night, Twinkle noticed her light was getting dimmer. "Oh no!" she cried. "I'm losing my sparkle!"

She asked the Moon, "Moon, where did my sparkle go?"
The wise Moon smiled and said, "Dear Twinkle, your sparkle isn't lost. It's hiding because you forgot something important."

Twinkle thought and thought. Then she remembered! She had been so busy worrying about being the brightest that she forgot to be kind to her star friends.

The next night, Twinkle helped a little cloud find its way home and sang lullabies to sleepy children below.

And guess what? Her sparkle came back, brighter than ever!

The Moon whispered, "See, Twinkle? True brightness comes from a kind heart."

And from that night on, Twinkle shone the brightest of all, not because she tried to, but because she was kind.

The End. Sweet dreams, little one. ✨`
  },
  {
    id: '2',
    title: 'Bunny\'s Big Adventure',
    description: 'Follow Bunny as she explores the meadow and makes new friends along the way.',
    ageRange: [3, 5],
    duration: '4 min',
    thumbnail: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop',
    category: 'adventure',
    hasAudio: true,
    content: `In a cozy burrow under a big oak tree, there lived a fluffy bunny named Bella.

One sunny morning, Bella hopped out of her burrow. "Today I want to explore!" she said with a wiggle of her nose.

Hop, hop, hop! She met a butterfly. "Hello! I'm Bella. Want to be friends?"
"Of course!" said the butterfly. "I'm Flutter. Come see the flowers with me!"

Together they found red flowers, yellow flowers, and purple flowers. So many colors!

Then they heard a tiny voice. "Help! I'm stuck!" It was a little ladybug in a dewdrop.
Bella carefully helped her out. "Thank you, Bunny! I'm Dotty. Now we're three friends!"

As the sun began to set, painting the sky orange and pink, Bella hopped home.

"Mama! I made friends today!" 
"That's wonderful, my little bunny," Mama said with a warm hug.

Bella snuggled into her soft bed, dreaming of tomorrow's adventures.

Goodnight, little friend. 🐰`
  },
  {
    id: '3',
    title: 'The Sharing Rainbow',
    description: 'Learn about sharing and kindness with the colors of the rainbow.',
    ageRange: [3, 6],
    duration: '6 min',
    thumbnail: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=400&h=300&fit=crop',
    category: 'values',
    hasAudio: true,
    content: `After a gentle rain, a beautiful rainbow appeared in the sky. But this was no ordinary rainbow – each color had a special gift to share!

Red said, "I'll share my warmth to keep everyone cozy."
Orange said, "I'll share my energy to help everyone play."
Yellow said, "I'll share my sunshine to make everyone smile."
Green said, "I'll share my peace to help everyone rest."
Blue said, "I'll share my calmness when anyone feels worried."
Purple said, "I'll share my dreams to fill hearts with wonder."

A little girl named Maya looked up at the rainbow. "Can I share something too?" she asked.

The rainbow colors sparkled. "Of course! What would you like to share?"

Maya thought for a moment. "I'll share my love with everyone I meet!"

And you know what? That was the most beautiful gift of all.

Remember, little one, sharing makes the world more colorful. 🌈`
  },
  {
    id: '4',
    title: 'The Sleepy Owl\'s Lullaby',
    description: 'A soothing story with gentle sounds of the night forest.',
    ageRange: [2, 5],
    duration: '4 min',
    thumbnail: 'https://images.unsplash.com/photo-1543549790-8b5f4a028cfb?w=400&h=300&fit=crop',
    category: 'bedtime',
    hasAudio: true,
    content: `In the quiet forest, when the moon rose high, Oliver the owl stretched his soft wings.

"Whooo wants to hear a lullaby?" he asked.

The baby deer closed their eyes.
The little foxes curled up.
The tiny mice snuggled together.

Oliver sang softly:
"Close your eyes, little one,
The day is almost done.
The stars are twinkling bright,
To watch you through the night.

Shhh... shhh... shhh...

The wind whispers sweet,
The crickets keep the beat.
Dream of meadows green,
The prettiest you've seen.

Shhh... shhh... shhh..."

One by one, all the forest babies fell asleep.
Oliver smiled and flew to his cozy tree.

"Goodnight, little ones," he whispered.
"Goodnight, sweet dreams."

And now it's time for you to close your eyes too.
Sweet dreams, little dreamer. 🦉💫`
  },
  {
    id: '5',
    title: 'Captain Kindness and the Treasure',
    description: 'An adventure story about discovering that kindness is the greatest treasure.',
    ageRange: [4, 8],
    duration: '7 min',
    thumbnail: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=300&fit=crop',
    category: 'adventure',
    hasAudio: true,
    content: `Captain Kindness sailed the seven seas on her ship called "The Helping Hand."

One day, she found an old treasure map! "X marks the spot!" she cheered. "Let's find the treasure!"

But along the way, she met a seagull with a hurt wing. Instead of sailing on, she stopped to help.
"There you go, little friend," she said, wrapping the wing gently.

Then she saw a family of fish stuck in a net. She carefully freed them.
"Thank you, Captain!" they bubbled.

She helped a sad little island by planting flowers and made a lonely lighthouse keeper smile with a song.

Finally, she reached the X on the map. She dug and dug... but found an empty chest!

"Where's the treasure?" she wondered.

Suddenly, all the friends she had helped appeared!
"WE are the treasure!" they cheered. "The friends you make along the way are worth more than gold!"

Captain Kindness smiled the biggest smile. She had found the greatest treasure of all – friendship and kindness.

The End. ⚓💛`
  },
  {
    id: '6',
    title: 'The Magical Garden',
    description: 'Discover the wonders of nature in this enchanting story about a magical garden.',
    ageRange: [3, 7],
    duration: '5 min',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop',
    category: 'nature',
    hasAudio: true,
    content: `Behind the old wooden fence lived a magical garden where flowers could talk and butterflies danced to music only they could hear.

Little Lily discovered this garden one summer day.

"Welcome!" sang the sunflowers, swaying hello.
"Come play!" giggled the daisies.

A wise old rose whispered, "Lily, would you like to learn our secret?"

Lily nodded excitedly.

"Every morning, we drink sunshine and water. Every night, we rest under the stars. And every day, we grow a little bit more."

"Just like me!" said Lily.

"Yes," smiled the rose. "You grow with love, learning, and lots of sleep. We're not so different, you and us."

Lily helped water the flowers and pulled some weeds. The garden seemed to sparkle even brighter.

"Will I see you tomorrow?" she asked.

"Always," said the flowers. "Friends forever."

And every day after that, Lily visited her magical garden friends, and together they grew and grew.

Remember, you're growing too, just like a beautiful flower. 🌸`
  },
  {
    id: '7',
    title: 'The Helpful Elephant',
    description: 'Ellie the elephant learns that helping others makes everyone happy.',
    ageRange: [3, 6],
    duration: '5 min',
    thumbnail: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&h=300&fit=crop',
    category: 'values',
    hasAudio: true,
    content: `Ellie was a little elephant with a big heart and an even bigger trunk!

One day, Giraffe was trying to reach the last mango on the tree.
"I'll help!" said Ellie. She lifted Giraffe up with her strong trunk.
"Thank you, Ellie!" Giraffe shared the mango with her.

Later, Hippo's baby had floated away in the river.
"I'll help!" said Ellie. She used her trunk like a lifeguard to bring baby Hippo back.
"Thank you, Ellie!" Hippo gave her the biggest hippo hug.

Then Mouse's home was flooded.
"I'll help!" said Ellie. She gently sucked up the water and sprayed it on the thirsty flowers.
"Thank you, Ellie!" Mouse gave her a tiny flower crown.

That night, Ellie looked at the stars feeling so happy.

Her mama asked, "What made today so special?"

"I helped my friends!" Ellie said. "And helping made me feel warm and sparkly inside!"

"That's because kindness is magic," Mama smiled. "The more you give, the more happiness grows."

Ellie fell asleep dreaming of all the ways she could help tomorrow.

Sweet dreams, little helper. 🐘💕`
  },
  {
    id: '8',
    title: 'Counting Stars with Bear',
    description: 'Join Bear as he learns to count the stars before bedtime.',
    ageRange: [2, 5],
    duration: '4 min',
    thumbnail: 'https://images.unsplash.com/photo-1579380656108-f98e4df8ea62?w=400&h=300&fit=crop',
    category: 'learning',
    hasAudio: true,
    content: `Baby Bear wasn't sleepy. "I don't want to go to bed yet!" he said.

Papa Bear smiled. "Let's count the stars together. It always helps me feel peaceful."

They looked up at the night sky.

"One," said Bear, pointing at the brightest star.
"Two, three," he counted the next ones.
"Four... five..." His voice got softer.
"Six... seven..." He snuggled closer to Papa.
"Eight... nine..." His eyes started to close.
"Ten..." he whispered, yawning.

"How many did you count?" Papa asked gently.

"Ten... maybe... a million..." Bear mumbled sleepily.

Papa Bear tucked him in. "The stars will watch over you all night long."

"Papa?" Bear whispered.
"Yes, little one?"
"I love you to the moon and all the stars."
"I love you too, to infinity and beyond."

And Baby Bear fell asleep under a blanket of twinkling stars.

Can you count to ten before you fall asleep too? 
One... two... three...
Sweet dreams, little star counter. 🌟`
  }
];

// Games data
export const games: Game[] = [
  {
    id: '1',
    title: 'Memory Match Animals',
    description: 'Find matching pairs of cute animals in this memory game!',
    ageRange: [3, 7],
    thumbnail: 'https://images.unsplash.com/photo-1535241749838-299f6e59a8ce?w=400&h=300&fit=crop',
    category: 'memory',
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Shape Puzzle Fun',
    description: 'Match shapes to their shadows and learn geometry!',
    ageRange: [2, 5],
    thumbnail: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=300&fit=crop',
    category: 'puzzle',
    difficulty: 'easy'
  },
  {
    id: '3',
    title: 'Count the Stars',
    description: 'Practice counting with twinkling stars!',
    ageRange: [3, 6],
    thumbnail: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=300&fit=crop',
    category: 'counting',
    difficulty: 'easy'
  },
  {
    id: '4',
    title: 'Color Sorting',
    description: 'Sort objects by color in this fun matching game!',
    ageRange: [2, 5],
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop',
    category: 'matching',
    difficulty: 'easy'
  },
  {
    id: '5',
    title: 'Animal Jigsaw',
    description: 'Put together beautiful animal pictures piece by piece!',
    ageRange: [4, 8],
    thumbnail: 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400&h=300&fit=crop',
    category: 'puzzle',
    difficulty: 'medium'
  },
  {
    id: '6',
    title: 'Draw and Create',
    description: 'Express yourself with colors and shapes!',
    ageRange: [3, 10],
    thumbnail: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
    category: 'creative',
    difficulty: 'easy'
  }
];

// Educational content
export const educationalContent: EducationalContent[] = [
  {
    id: '1',
    title: 'ABC Song Adventure',
    description: 'Learn the alphabet with fun animations and catchy music!',
    ageRange: [2, 5],
    category: 'alphabet',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Numbers 1-10',
    description: 'Count along with friendly animals from 1 to 10!',
    ageRange: [2, 5],
    category: 'numbers',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Colors of the Rainbow',
    description: 'Discover all the beautiful colors around us!',
    ageRange: [2, 5],
    category: 'colors',
    thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Shapes All Around',
    description: 'Find circles, squares, and triangles everywhere!',
    ageRange: [2, 6],
    category: 'shapes',
    thumbnail: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Be Kind, Be Brave',
    description: 'Learn about kindness, sharing, and being a good friend.',
    ageRange: [3, 8],
    category: 'values',
    thumbnail: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    title: 'How Plants Grow',
    description: 'Discover the magic of seeds and plants!',
    ageRange: [4, 8],
    category: 'science',
    thumbnail: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop'
  }
];

// Activities for parent suggestions
export const activities: Activity[] = [
  {
    id: '1',
    title: 'Constellation Punch Cards',
    description: 'Create beautiful star patterns using a hole puncher! Great for fine motor skills.',
    ageRange: [4, 7],
    duration: '20 min',
    materials: ['Black construction paper', 'Hole puncher', 'Flashlight', 'Star pattern printout'],
    category: 'motor-skills',
    milestone: 'Fine Motor Development',
    thumbnail: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    title: 'Sorting Nature Walk',
    description: 'Collect leaves and sort them by color, size, and shape.',
    ageRange: [3, 6],
    duration: '30 min',
    materials: ['Basket or bag', 'Sorting mat', 'Magnifying glass'],
    category: 'cognitive',
    milestone: 'Classification Skills',
    thumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    title: 'Emotion Faces Drawing',
    description: 'Draw different emotions and discuss feelings.',
    ageRange: [3, 8],
    duration: '15 min',
    materials: ['Paper', 'Crayons or markers', 'Mirror (optional)'],
    category: 'social',
    milestone: 'Emotional Intelligence',
    thumbnail: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    title: 'Rainbow Rice Sensory Bin',
    description: 'Explore colors and textures with dyed rice.',
    ageRange: [2, 5],
    duration: '25 min',
    materials: ['Rice', 'Food coloring', 'Vinegar', 'Container', 'Scoops and cups'],
    category: 'creative',
    milestone: 'Sensory Development',
    thumbnail: 'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    title: 'Bubble Catching Game',
    description: 'Chase and catch bubbles to develop coordination.',
    ageRange: [2, 6],
    duration: '15 min',
    materials: ['Bubble solution', 'Bubble wand', 'Open outdoor space'],
    category: 'outdoor',
    milestone: 'Gross Motor Skills',
    thumbnail: 'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?w=400&h=300&fit=crop'
  }
];

// Professor Owl chatbot personality
export const professorOwlPersonality = {
  name: 'Professor Owl',
  avatar: '🦉',
  description: 'A wise and friendly owl who loves to learn and teach!',
  greetings: [
    "Hoo hoo! Hello, little friend! I'm Professor Owl. What would you like to learn today?",
    "Welcome to my tree! I've been waiting to chat with you. What's on your curious mind?",
    "Hoo hoo! So wonderful to see you! Shall we explore something amazing together?"
  ],
  safeTopics: ['animals', 'space', 'nature', 'colors', 'numbers', 'music', 'art', 'friends', 'family', 'feelings'],
  responseStyle: 'friendly, educational, encouraging, age-appropriate'
};
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  coverImage: string; // Book cover image URL
  tags?: ('trending' | 'bestseller' | 'new' | 'rare' | 'staff-pick')[];
  editorialNote?: string;
  category?: string;
}
export const books: Book[] = [{
  id: '1',
  title: 'The Quiet History of Time',
  author: 'Elena Vance',
  price: 24.0,
  coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&q=80',
  tags: ['trending', 'bestseller'],
  editorialNote: 'A quiet meditation on time that stays with you.'
}, {
  id: '2',
  title: 'Shadows in the Garden',
  author: 'Marcus Thorne',
  price: 28.5,
  coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&q=80',
  tags: ['new'],
  category: 'Fiction'
}, {
  id: '3',
  title: 'Architecture of Silence',
  author: 'Sarah Jenkins',
  price: 32.0,
  coverImage: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&q=80',
  tags: ['bestseller', 'staff-pick'],
  editorialNote: 'Changes how you see the spaces you inhabit.'
}, {
  id: '4',
  title: 'Modern Melancholy',
  author: 'David Chen',
  price: 18.0,
  coverImage: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop&q=80',
  tags: ['trending'],
  category: 'Essays'
}, {
  id: '5',
  title: 'The Art of Slowing Down',
  author: 'Isabella Ross',
  price: 26.0,
  coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop&q=80',
  tags: ['new', 'rare'],
  editorialNote: 'Essential reading for the burnt-out soul.'
}, {
  id: '6',
  title: 'Culinary Heritage',
  author: 'Marco P.',
  price: 45.0,
  coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&q=80',
  tags: ['bestseller'],
  category: 'Cooking'
}, {
  id: '7',
  title: 'Notes from the Underground',
  author: 'Fyodor D.',
  price: 16.0,
  coverImage: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&h=600&fit=crop&q=80',
  tags: ['rare'],
  category: 'Classic'
}, {
  id: '8',
  title: 'Waking Up',
  author: 'Sam Harris',
  price: 22.0,
  coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80',
  tags: ['trending']
}, {
  id: '9',
  title: 'The Language of Flowers',
  author: 'Vanessa Diffenbaugh',
  price: 27.0,
  coverImage: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=600&fit=crop&q=80',
  tags: ['trending', 'new'],
  category: 'Fiction'
}, {
  id: '10',
  title: 'Midnight Library',
  author: 'Matt Haig',
  price: 29.0,
  coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&q=80',
  tags: ['trending'],
  editorialNote: 'A story about infinite possibilities and second chances.'
}, {
  id: '11',
  title: 'The Overstory',
  author: 'Richard Powers',
  price: 31.0,
  coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop&q=80',
  tags: ['new', 'trending'],
  category: 'Literary Fiction'
}, {
  id: '12',
  title: 'Educated',
  author: 'Tara Westover',
  price: 24.5,
  coverImage: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop&q=80',
  tags: ['trending'],
  category: 'Memoir'
}, {
  id: '13',
  title: 'The Invisible Life of Addie LaRue',
  author: 'V.E. Schwab',
  price: 28.0,
  coverImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop&q=80',
  tags: ['new', 'trending'],
  editorialNote: 'A hauntingly beautiful tale of memory and legacy.'
}, {
  id: '14',
  title: 'Braiding Sweetgrass',
  author: 'Robin Wall Kimmerer',
  price: 26.5,
  coverImage: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=600&fit=crop&q=80',
  tags: ['trending'],
  category: 'Nature'
}, {
  id: '15',
  title: 'The Paper Palace',
  author: 'Miranda Cowley Heller',
  price: 25.0,
  coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop&q=80',
  tags: ['new'],
  category: 'Fiction'
}];
export const moods = [{
  id: 'morning',
  label: 'For slow mornings',
  color: 'bg-[#F2F0E9]'
}, {
  id: 'thinking',
  label: 'For overthinking minds',
  color: 'bg-[#E9F0F2]'
}, {
  id: 'night',
  label: 'For quiet nights',
  color: 'bg-[#E9EBF2]'
}, {
  id: 'clarity',
  label: 'When you need clarity',
  color: 'bg-[#F2E9E9]'
}];
export const staffPicks = [{
  id: 'sp1',
  name: 'Sarah',
  role: 'Head Curator',
  bookId: '3',
  quote: 'This book completely changed my relationship with my own home. A masterpiece of observation.'
}, {
  id: 'sp2',
  name: 'James',
  role: 'Fiction Editor',
  bookId: '1',
  quote: "I haven't stopped thinking about the ending for three weeks. Devastatingly beautiful."
}];
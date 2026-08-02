export interface Testimonial {
    id: string
    name: string
    city: string
    state: string
    testDate: string
    comment: string
    image: string
    rating: number
    style?: 'highlight' | 'fun' | 'simple' | 'premium'
    type?: 'photo' | 'text'
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Jenkins',
        city: 'Dallas',
        state: 'TX',
        testDate: 'January 2026',
        comment: 'I passed my Texas Real Estate Exam on my first try! The practice questions were incredibly similar to the actual TREC exam format. The detailed legal and math explanations were exactly what I needed.',
        image: '/images/testimonial-images/vernice.jpg',
        rating: 5,
        style: 'premium',
        type: 'photo'
    },
    {
        id: '2',
        name: 'Marcus Vance',
        city: 'Miami',
        state: 'FL',
        testDate: 'February 2026',
        comment: 'The Florida Real Estate Exam has a high failure rate and is NOT common sense! I failed once using other materials, but this question bank helped me master the state laws and pass with confidence.',
        image: '/images/testimonial-images/joe.jpg',
        rating: 5,
        style: 'fun',
        type: 'photo'
    },
    {
        id: '3',
        name: 'Elena Rostova',
        city: 'Chicago',
        state: 'IL',
        testDate: 'December 2025',
        comment: 'This platform was absolute gold. The mock exams completely mirrored the actual Illinois exam interface, which took away all my test-day anxiety. Passed on my first attempt!',
        image: '/images/testimonial-images/susanne.jpg',
        rating: 5,
        style: 'highlight',
        type: 'photo'
    },
    {
        id: '4',
        name: 'David Kim',
        city: 'San Francisco',
        state: 'CA',
        testDate: 'October 2025',
        comment: 'I was struggling with the real estate math and agency relationship questions, but the detailed chapter breakdown was a lifesaver. Highly recommend this prep tool to all aspiring agents!',
        image: '/images/testimonial-images/jon.jpg',
        rating: 5,
        style: 'premium',
        type: 'photo'
    },
    {
        id: '5',
        name: 'Sophia Martinez',
        city: 'New York',
        state: 'NY',
        testDate: 'November 2025',
        comment: 'Best study resource I found. The questions were highly relevant to the NYS DOS curriculum, and being able to practice on my phone made it easy to study on the go.',
        image: '/images/testimonial-images/emma-davis-austin-tx.jpg',
        rating: 5,
        style: 'fun',
        type: 'photo'
    },
    {
        id: '6',
        name: 'Robert Chen',
        city: 'Atlanta',
        state: 'GA',
        testDate: 'January 2026',
        comment: 'Passed my Georgia licensing exam this morning! The tracking dashboard showed my pass probability at 92% and it was 100% accurate. This question bank is worth every penny.',
        image: '/images/testimonial-images/preston.jpg',
        rating: 5,
        style: 'highlight',
        type: 'photo'
    },
    {
        id: '7',
        name: 'Amanda P.',
        city: 'Denver',
        state: 'CO',
        testDate: 'December 2025',
        comment: 'Just passed!! 🎉 This app is amazing. The interface is so clean and the mock exams are super helpful.',
        image: '',
        rating: 5,
        style: 'fun',
        type: 'text'
    },
    {
        id: '8',
        name: 'Robert T.',
        city: 'Phoenix',
        state: 'AZ',
        testDate: 'June 2025',
        comment: 'I recommended this to all my friends. Best Real Estate resource on the web.',
        image: '',
        rating: 5,
        style: 'simple',
        type: 'text'
    },
    {
        id: '9',
        name: 'Jessica W.',
        city: 'Boston',
        state: 'MA',
        testDate: 'November 2025',
        comment: 'The detailed explanations made all the difference. I actually understood the laws instead of just memorizing answers.',
        image: '',
        rating: 5,
        style: 'premium',
        type: 'text'
    }
]

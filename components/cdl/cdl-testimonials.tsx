'use client'

import { useState } from 'react'
import { Star, Play, X, User } from 'lucide-react'

interface TestimonialItem {
  id: string
  name: string
  role: string
  rating: number
  text: string
  type: 'video' | 'text'
  image?: string
  videoUrl?: string
  fullStory?: string
}

export function CdlTestimonials({ lang = 'en' }: { lang?: 'en' | 'pa' }) {
  const [selectedVideo, setSelectedVideo] = useState<TestimonialItem | null>(null)

  const testimonials: TestimonialItem[] = [
    {
      id: 'vernice',
      name: 'Vernice',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa' 
        ? '"ਮੈਂ 15 ਮਿੰਟਾਂ ਤੋਂ ਵੀ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਆਪਣਾ CDL A ਪਰਮਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਕਾਮਯਾਬ ਰਹੀ, ਹਰੇਕ ਟੈਸਟ ਵਿੱਚ ਮੈਨੂੰ 4 ਮਿੰਟ ਤੋਂ ਵੀ ਘੱਟ ਸਮਾਂ ਲੱਗਿਆ। ਇਹ ਲਗਭਗ ਅਸਲ ਪ੍ਰੀਖਿਆ ਦੀ ਨਕਲ ਵਰਗਾ ਸੀ!"'
        : '"I now have my CDL class A and it all started here. I was able to get my CDL A permit in less than 15 minutes, each test took me less than 4 minutes. The questions were identical!"',
      type: 'video',
      image: '/images/testimonial-images/vernice.jpg',
      fullStory: lang === 'pa'
        ? 'ਵਰਨਿਸ ਨੇ ਦੱਸਿਆ ਕਿ ਪ੍ਰੀਖਿਆ ਦੀ ਤਿਆਰੀ ਦੌਰਾਨ Real Estate Question Bank ਦੇ ਪ੍ਰਸ਼ਨਾਂ ਨੇ ਉਸਦਾ ਹੌਸਲਾ ਬਹੁਤ ਵਧਾਇਆ। ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਫਾਰਮੈਟ ਅਤੇ ਮੁਸ਼ਕਲ ਪੱਧਰ ਬਿਲਕੁਲ Real Estate ਪ੍ਰੀਖਿਆ ਵਰਗਾ ਸੀ, ਜਿਸ ਕਾਰਨ ਉਹ ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਹੀ ਸਾਰੇ ਟੈਸਟਾਂ ਵਿੱਚੋਂ ਸਫਲ ਹੋ ਗਈ।'
        : 'Vernice shared that preparing with Real Estate Question Bank allowed her to breeze through her Class A permit exam at the Real Estate. The questions mirrored the exact wording and format of the real tests, eliminating any surprises.'
    },
    {
      id: 'trista',
      name: 'Trista Thomas',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਮੈਂ 15 ਮਿੰਟਾਂ ਤੋਂ ਵੀ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਆਪਣਾ CDL A ਪਰਮਿਟ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਕਾਮਯਾਬ ਰਹੀ, ਹਰੇਕ ਟੈਸਟ ਵਿੱਚ ਮੈਨੂੰ 4 ਮਿੰਟ ਤੋਂ ਵੀ ਘੱਟ ਸਮਾਂ ਲੱਗਿਆ। ਇਹ ਅਧਿਐਨ ਪ੍ਰਣਾਲੀ ਸ਼ਾਨਦਾਰ ਹੈ!"'
        : '"I now have my CDL class A and it all started here. I was able to get my CDL A permit in less than 15 minutes, each test took me less than 4 minutes."',
      type: 'text'
    },
    {
      id: 'preston',
      name: 'Preston',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਇਸਨੇ ਮੇਰੇ ਸੈਂਕੜੇ ਡਾਲਰ ਬਚਾਏ। ਮੈਂ ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਹੀ ਜਨਰਲ ਨਾਲੇਜ, ਏਅਰ ਬ੍ਰੇਕਸ ਅਤੇ ਕੰਬੀਨੇਸ਼ਨ ਪ੍ਰੀਖਿਆਵਾਂ ਪਾਸ ਕਰ ਲਈਆਂ!"'
        : '"This saved me hundreds, if not thousands, of dollars. I took my general knowledge, air brakes, and combination exams all on the same trip and passed everything on the first try!"',
      type: 'video',
      image: '/images/testimonial-images/preston.jpg',
      fullStory: lang === 'pa'
        ? 'ਪ੍ਰੈਸਟਨ ਨੇ ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਹੀ ਤਿੰਨੋਂ ਪ੍ਰੀਖਿਆਵਾਂ ਪਾਸ ਕੀਤੀਆਂ। ਉਹਨਾਂ ਨੇ ਦੱਸਿਆ ਕਿ Real Estate Question Bank ਦੇ ਮੌਕ ਟੈਸਟਾਂ ਨੇ ਉਹਨਾਂ ਨੂੰ ਅਸਲ ਪ੍ਰੀਖਿਆ ਵਰਗਾ ਮਾਹੌਲ ਦਿੱਤਾ ਜਿਸ ਨਾਲ Real Estate ਦਫਤਰ ਵਿਖੇ ਉਹਨਾਂ ਨੇ ਬਿਨਾਂ ਕਿਸੇ ਚਿੰਤਾ ਦੇ ਟੈਸਟ ਦਿੱਤਾ।'
        : 'Preston passed his Class A knowledge tests on the first attempt in Sacramento. By simulating the actual Real Estate Examing environment beforehand, he walked in with full confidence and passed all three modules.'
    },
    {
      id: 'jon',
      name: 'Jon',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਹੀ ਸਾਰੇ ਟੈਸਟ ਪਾਸ ਹੋ ਗਏ। ਪ੍ਰਸ਼ਨਾਂ ਦੇ ਵਿਸਤ੍ਰਿਤ ਸਪੱਸ਼ਟੀਕਰਨ ਨੇ ਸਭ ਤੋਂ ਵੱਡਾ ਫਰਕ ਪਾਇਆ। ਮੈਂ ਇਸਦੀ ਪੂਰੀ ਸਿਫ਼ਾਰਸ਼ ਕਰਦਾ ਹਾਂ!"'
        : '"Passed all exams on the first try. The detailed explanations for why each answer is correct or incorrect made the real difference in my learning process. High quality prep!"',
      type: 'video',
      image: '/images/testimonial-images/jon.jpg',
      fullStory: lang === 'pa'
        ? 'ਜੌਨ ਨੇ ਦੱਸਿਆ ਕਿ ਜਦੋਂ ਉਹ ਅਭਿਆਸ ਕਰ ਰਹੇ ਸਨ, ਤਾਂ ਹਰੇਕ ਪ੍ਰਸ਼ਨ ਦੇ ਹੇਠਾਂ ਦਿੱਤੇ ਸਪੱਸ਼ਟੀਕਰਨ ਨੇ ਉਹਨਾਂ ਦੇ ਬੁਨਿਆਦੀ ਸੰਕਲਪਾਂ ਨੂੰ ਸਪੱਸ਼ਟ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ, ਜਿਸ ਕਾਰਨ ਉਹਨਾਂ ਨੂੰ ਅਸਲ ਪ੍ਰੀਖਿਆ ਵਿੱਚ ਕੋਈ ਮੁਸ਼ਕਲ ਨਹੀਂ ਆਈ।'
        : 'Jon found that the detailed feedback on every practice question was the ultimate study tool. Instead of just memorizing answers, he understood the road rules, enabling him to pass on his first visit.'
    },
    {
      id: 'philip',
      name: 'Philip Zaroo',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਇਸਨੇ ਮੇਰੇ ਸੈਂਕੜੇ, ਜੇਕਰ ਹਜ਼ਾਰਾਂ ਨਹੀਂ, ਤਾਂ ਡਾਲਰ ਬਚਾਏ। ਮੈਂ ਜਨਰਲ ਨਾਲੇਜ, ਏਅਰ ਬ੍ਰੇਕਸ, ਕੰਬੀਨੇਸ਼ਨ, ਟੈਂਕਰ, ਹਾਜ਼ਮੈਟ, ਅਤੇ ਡਬਲਜ਼/ਟ੍ਰਿਪਲਜ਼ ਪ੍ਰੀਖਿਆਵਾਂ ਸਾਰੀਆਂ ਇੱਕੋ ਵਾਰ ਵਿੱਚ ਦਿੱਤੀਆਂ। Real Estate ਵਿਖੇ ਕਾਊਂਟਰ ਵਾਲੀ ਔਰਤ ਹੈਰਾਨ ਰਹਿ ਗਈ।"'
        : '"This saved me hundreds, if not thousands, of dollars. I took my general knowledge, air brakes, combination, tanker, hazmat, and doubles/triples exams all on the same trip to the Real Estate. Scored 145 out of 150 questions. The woman at the counter was floored. She honestly said she\'s never seen someone come in and take all six at the same time, let alone pass them all."',
      type: 'text'
    },
    {
      id: 'jason',
      name: 'Jason',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਪ੍ਰਸ਼ਨਾਂ ਨੇ ਮੈਨੂੰ ਬਚਾ ਲਿਆ। ਟੈਸਟ ਦੌਰਾਨ ਵਾਕਥਰੂ ਯਾਦ ਰੱਖਣਾ ਸਭ ਤੋਂ ਔਖਾ ਕੰਮ ਸੀ, ਪਰ ਇਸ ਅਭਿਆਸ ਨੇ ਇਸਨੂੰ ਬਹੁਤ ਆਸਾਨ ਬਣਾ ਦਿੱਤਾ!"'
        : '"The Pre-Trip inspection walkthrough questions saved me. Memorizing the checklist was the hardest part, but this made the verbal examination very straightforward and easy to pass."',
      type: 'video',
      image: '/images/testimonial-images/jason.jpg',
      fullStory: lang === 'pa'
        ? 'ਜੇਸਨ ਨੂੰ ਸਭ ਤੋਂ ਵੱਧ ਡਰ ਪ੍ਰੀ-ਟ੍ਰਿਪ ਨਿਰੀਖਣ ਦੇ ਮੌਖਿਕ ਟੈਸਟ ਤੋਂ ਸੀ, ਪਰ Real Estate Question Bank ਦੀ ਇੰਟਰਐਕਟਿਵ ਚੈੱਕਲਿਸਟ ਗਾਈਡ ਦੇ ਸਵਾਲਾਂ ਨੇ ਉਹਨਾਂ ਨੂੰ ਹਰੇਕ ਪਾਰਟ ਅਤੇ ਡਿਫੈਕਟ ਨੂੰ ਯਾਦ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।'
        : 'Jason used the study guides to master the difficult Pre-Trip Inspection verbal checklist. By practicing with detailed breakdowns of engine parts and hose checks, he passed his skills road test with ease.'
    },
    {
      id: 'gold',
      name: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium Member',
      role: lang === 'pa' ? '100% ਪਾਸ ਦਰ' : '100% Pass Rate',
      rating: 5,
      text: lang === 'pa'
        ? '"ਸੋਨੇ ਦੇ ਭਾਰ ਦੇ ਬਰਾਬਰ ਕੀਮਤੀ! ਮੈਂ ਕਿਤਾਬ ਦੇ ਅਧਿਆਵਾਂ ਨੂੰ ਸਿਰਫ ਉੱਪਰੋਂ ਹੀ ਦੇਖਿਆ ਸੀ। ਜੇਕਰ ਤੁਸੀਂ ਇਹਨਾਂ ਪ੍ਰਸ਼ਨਾਂ ਦਾ ਅਭਿਆਸ ਕਰਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਪਾਸ ਹੋ ਜਾਵੋਗੇ। ਮੇਰੇ ਤੇ ਭਰੋਸਾ ਕਰੋ।"'
        : '"Worth its weight in gold! I halfway skimmed over the chapters in the book. If you practice these questions, you will pass. Trust me."',
      type: 'text'
    },
    {
      id: 'susanne',
      name: 'Susanne',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਮੈਂ ਹਾਜ਼ਮੈਟ ਅਤੇ ਟੈਂਕਰ ਟੈਸਟਾਂ ਨੂੰ ਲੈ ਕੇ ਚਿੰਤਤ ਸੀ, ਪਰ ਇਹ ਤਿਆਰੀ ਹਰ ਇੱਕ ਪੈਸੇ ਦੇ ਲਾਇਕ ਸੀ। ਮੈਂ ਦੋਵੇਂ ਪ੍ਰੀਖਿਆਵਾਂ 95% ਸਕੋਰ ਨਾਲ ਪਾਸ ਕੀਤੀਆਂ!"'
        : '"I was nervous about the HazMat and Tanker endorsement exams, but this prep was worth every penny. I passed both with a 95% score on the first attempt!"',
      type: 'video',
      image: '/images/testimonial-images/susanne.jpg',
      fullStory: lang === 'pa'
        ? 'ਸੁਜ਼ੈਨ ਨੇ ਆਪਣੇ ਹਾਜ਼ਮੈਟ (ਖ਼ਤਰਨਾਕ ਸਮੱਗਰੀ) ਅਤੇ ਟੈਂਕਰ ਲਾਇਸੈਂਸ ਪ੍ਰੀਖਿਆਵਾਂ ਦੀ ਤਿਆਰੀ ਕੀਤੀ। ਉਹਨਾਂ ਨੇ ਦੱਸਿਆ ਕਿ ਅਸਲ-ਵਰਗੇ ਪ੍ਰਸ਼ਨਾਂ ਨੇ ਉਹਨਾਂ ਦੀ ਘਬਰਾਹਟ ਦੂਰ ਕੀਤੀ ਅਤੇ ਪ੍ਰੀਖਿਆ ਹਾਲ ਵਿੱਚ ਸਾਰੇ ਪ੍ਰਸ਼ਨ ਜਾਣੂ ਲੱਗੇ।'
        : 'Susanne passed her complex Hazmat and Tanker endorsement written exams with near perfect scores. She credits the realistic practice exams for eliminating her test anxiety and ensuring success.'
    },
    {
      id: 'joe',
      name: 'Joe',
      role: lang === 'pa' ? 'ਪ੍ਰੀਮੀਅਮ ਮੈਂਬਰ' : 'Premium member',
      rating: 5,
      text: lang === 'pa'
        ? '"ਜੇਕਰ ਤੁਸੀਂ ਪਹਿਲੀ ਵਾਰ ਵਿੱਚ ਪਾਸ ਹੋਣਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਇਸਦੀ ਵਰਤੋਂ ਕਰੋ। ਉਹੀ ਫਾਰਮੈਟ, ਉਹੀ ਸ਼ਬਦਾਵਲੀ। ਮੈਂ ਗਿਆ, 10 ਮਿੰਟਾਂ ਵਿੱਚ ਟੈਸਟ ਪੂਰਾ ਕੀਤਾ ਅਤੇ ਪਰਮਿਟ ਲੈ ਕੇ ਬਾਹਰ ਆ ਗਿਆ!"'
        : '"If you want to pass on your first try, use this. Same format, same wording. I walked in, finished the test in 10 minutes, and walked out with my permit in hand. Excellent prep!"',
      type: 'video',
      image: '/images/testimonial-images/joe.jpg',
      fullStory: lang === 'pa'
        ? 'ਜੋਅ ਨੇ ਦੱਸਿਆ ਕਿ Real Estate Question Bank ਦੀ ਵਰਤੋਂ ਕਰਨ ਤੋਂ ਬਾਅਦ ਉਹਨਾਂ ਨੂੰ ਅਸਲ ਪ੍ਰੀਖਿਆ ਬਹੁਤ ਆਸਾਨ ਲੱਗੀ। 10 ਮਿੰਟਾਂ ਵਿੱਚ ਟੈਸਟ ਪੂਰਾ ਕਰਨਾ ਉਹਨਾਂ ਦੇ ਵਧੀਆ ਅਭਿਆਸ ਦਾ ਨਤੀਜਾ ਸੀ।'
        : 'Joe finished his written General Knowledge exam in record time. The identical wording meant he did not have to second guess any answers, graduating to his permit within minutes.'
    }
  ]

  const t = (enText: string) => {
    if (lang === 'pa') {
      const paStrings: Record<string, string> = {
        "Real results from learners like you:": "ਤੁਹਾਡੇ ਵਰਗੇ ਸਿੱਖਣ ਵਾਲਿਆਂ ਦੇ ਅਸਲ ਨਤੀਜੇ:",
        "Every question looked familiar - like a rerun of my practice tests.": "ਹਰੇਕ ਪ੍ਰਸ਼ਨ ਜਾਣੂ ਲੱਗਿਆ - ਜਿਵੇਂ ਮੇਰੇ ਅਭਿਆਸ ਟੈਸਟਾਂ ਦਾ ਦੁਹਰਾਅ ਹੋਵੇ।",
        "When you practice with questions that mirror the format, wording, and difficulty of your state exam, test day feels like a rerun. After helping over 1.15 million people pass, we keep hearing the same thing: \"It felt like I'd seen every question before.\"": "ਜਦੋਂ ਤੁਸੀਂ ਅਜਿਹੇ ਪ੍ਰਸ਼ਨਾਂ ਨਾਲ ਅਭਿਆਸ ਕਰਦੇ ਹੋ ਜੋ ਤੁਹਾਡੀ ਰਾਜ ਪ੍ਰੀਖਿਆ ਦੇ ਫਾਰਮੈਟ, ਸ਼ਬਦਾਵਲੀ ਅਤੇ ਮੁਸ਼ਕਲ ਪੱਧਰ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਨ, ਤਾਂ ਪ੍ਰੀਖਿਆ ਦਾ ਦਿਨ ਇੱਕ ਦੁਹਰਾਅ ਵਾਂਗ ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ। 1.15 ਮਿਲੀਅਨ ਤੋਂ ਵੱਧ ਲੋਕਾਂ ਦੀ ਪਾਸ ਹੋਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਅਸੀਂ ਵਾਰ-ਵਾਰ ਇਹੀ ਸੁਣਦੇ ਹਾਂ: \"ਮੈਨੂੰ ਲਗਦਾ ਹੈ ਕਿ ਮੈਂ ਹਰੇਕ ਪ੍ਰਸ਼ਨ ਪਹਿਲਾਂ ਦੇਖਿਆ ਹੋਵੇ।\"",
        "4.8 on Trustpilot": "ਟਰੱਸਟਪਾਇਲਟ 'ਤੇ 4.8",
        "reviews": "ਰਿਵਿਊ",
        "Success Story": "ਸਫਲਤਾ ਦੀ ਕਹਾਣੀ",
        "Written Testimonial Transcript": "ਲਿਖਤੀ ਪ੍ਰਤੀਕਿਰਿਆ ਦਾ ਵੇਰਵਾ",
        "Close": "ਬੰਦ ਕਰੋ"
      }
      return paStrings[enText] || enText
    }
    return enText
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-blue-50/20 border-t border-gray-150 relative">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        
        {/* Rating Pill Badge */}
        <div className="inline-flex items-center gap-1 bg-[#f4f7fe] border border-blue-100/50 text-[#007aff] font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
          {t("Real results from learners like you:")}
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          &ldquo;{t("Every question looked familiar - like a rerun of my practice tests.")}&rdquo;
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
          {t("When you practice with questions that mirror the format, wording, and difficulty of your state exam, test day feels like a rerun. After helping over 1.15 million people pass, we keep hearing the same thing: \"It felt like I'd seen every question before.\"")}
        </p>

        {/* Trustpilot Banner */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center text-emerald-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-800">
            4.8
          </span>
        </div>

        {/* Masonry Columns Layout Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_auto] text-left">
          {testimonials.map((item) => {
            const isVideo = item.type === 'video'

            return (
              <div
                key={item.id}
                onClick={() => isVideo && setSelectedVideo(item)}
                className={`break-inside-avoid bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4 relative group ${
                  isVideo ? 'cursor-pointer hover:border-[#007aff]/35' : ''
                }`}
              >
                {/* Image display for Video Testimonials */}
                {isVideo && item.image && (
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    {/* Play Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/35 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#007aff] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-[#007aff] translate-x-[2px]" />
                      </div>
                    </div>
                    {/* Name Pill overlay bottom left */}
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.name}
                    </div>
                  </div>
                )}

                {/* Rating Stars */}
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed italic font-medium">
                  {item.text}
                </p>

                {/* User Author Footer */}
                <div className="flex items-center gap-3 border-t border-gray-100 pt-3">
                  <div className="w-8 h-8 rounded-full bg-[#007aff]/5 text-[#007aff] flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm leading-snug">
                      {item.name}
                    </h5>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Success Story Transcript Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-150/50 hover:bg-gray-150 text-gray-700 flex items-center justify-center transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video headshot header */}
            <div className="relative aspect-[16/10] bg-gray-100">
              <img
                src={selectedVideo.image}
                alt={selectedVideo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-left">
                <span className="bg-[#ffce31] text-gray-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-max mb-2">
                  {selectedVideo.role}
                </span>
                <h4 className="text-xl font-bold">{selectedVideo.name}</h4>
              </div>
            </div>

            {/* Written transcript details */}
            <div className="p-6 md:p-8 space-y-4 text-left">
              <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-slate-400">
                📢 {t("Written Testimonial Transcript")}
              </h5>
              <blockquote className="text-gray-800 text-base leading-relaxed italic border-l-4 border-[#007aff] pl-4 py-1 bg-blue-50/30 rounded-r-xl">
                {selectedVideo.text}
              </blockquote>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                {selectedVideo.fullStory}
              </p>

              <button
                onClick={() => setSelectedVideo(null)}
                className="w-full mt-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3.5 rounded-xl text-center text-sm transition-colors"
              >
                {t("Close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export type BlogCategory = 'State Guides' | 'Test Preparation' | 'Career Tips' | 'Beginner Guides';

export interface BlogPostMetadata {
    slug: string;
    title: string;
    category: BlogCategory;
    publishDate: string;
    readTime: string;
    excerpt: string;
    author: string;
    image: string;
}

export const BLOG_POSTS: BlogPostMetadata[] = [
    {
        slug: 'how-to-get-real-estate-license-guide',
        title: 'How to Get Your Real Estate License: A State-by-State Guide',
        category: 'State Guides',
        publishDate: 'January 15, 2026',
        readTime: '8 min read',
        excerpt: 'Curious about the requirements to become a real estate agent? Here is your step-by-step state guide detailing education hours, exam requirements, and application fees.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/how-to-get-real-estate-license-guide.jpg'
    },
    {
        slug: 'pass-real-estate-exam-first-attempt-tips',
        title: '5 Tips to Pass Your Real Estate Exam on the First Attempt',
        category: 'Test Preparation',
        publishDate: 'January 28, 2026',
        readTime: '6 min read',
        excerpt: 'Over 50% of students fail their licensing exam on the first try. Master these exam simulation techniques, math shortcuts, and vocab memory hacks to pass on your first attempt.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/pass-real-estate-exam-first-attempt-tips.jpg'
    },
    {
        slug: 'choose-sponsoring-broker-real-estate',
        title: 'How to Choose a Sponsoring Broker as a New Real Estate Agent',
        category: 'Career Tips',
        publishDate: 'February 3, 2026',
        readTime: '7 min read',
        excerpt: 'Passing the exam is just the start. Finding the right sponsoring broker is critical for your training and commission splits. Learn what questions to ask when interviewing brokers.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/choose-sponsoring-broker-real-estate.jpg'
    },
    {
        slug: 'is-real-estate-school-hard-expectations',
        title: 'Is Real Estate School Hard? What to Expect From Pre-Licensing Classes',
        category: 'Beginner Guides',
        publishDate: 'February 12, 2026',
        readTime: '5 min read',
        excerpt: 'Thinking about enrolling in real estate pre-licensing school? Discover the difficulty level, time commitments, and key differences between online and in-person learning formats.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/is-real-estate-school-hard-expectations.jpg'
    },
    {
        slug: 'how-much-do-real-estate-agents-make-commissions',
        title: 'How Much Do Real Estate Agents Make? Commission Structures Explained',
        category: 'Career Tips',
        publishDate: 'February 20, 2026',
        readTime: '9 min read',
        excerpt: 'Unlike typical salary jobs, real estate agents operate on commissions. Learn how splits work, desk fees, franchise percentages, and what a realistic first-year income looks like.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/how-much-do-real-estate-agents-make-commissions.jpg'
    },
    {
        slug: 'real-estate-exam-math-formulas',
        title: 'Top 5 Math Formulas You Need to Know for the Licensing Exam',
        category: 'Test Preparation',
        publishDate: 'March 2, 2026',
        readTime: '8 min read',
        excerpt: 'Don\'t let real estate calculations stress you out. We break down the top 5 formulas including commission splits, property taxes, loan-to-value ratio, and cap rates.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/real-estate-exam-math-formulas.jpg'
    },
    {
        slug: 'california-dre-licensing-process',
        title: 'California DRE Licensing Process: Step-by-Step Requirements',
        category: 'State Guides',
        publishDate: 'March 10, 2026',
        readTime: '7 min read',
        excerpt: 'A complete breakdown of California DRE requirements — from completing the three college-level courses to registering for the salesperson exam and submitting fingerprint clearances.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/california-dre-licensing-process.jpg'
    },
    {
        slug: 'texas-trec-real-estate-exam-guide',
        title: 'Texas TREC Real Estate Exam: A Guide to the 2026 Test Outline',
        category: 'State Guides',
        publishDate: 'March 18, 2026',
        readTime: '6 min read',
        excerpt: 'Prepare for the Texas TREC exam by learning the format of the National and State-specific sections, passing percentage targets, and what to bring on exam day.',
        author: 'Real Estate Question Bank',
        image: '/images/blog/texas-trec-real-estate-exam-guide.jpg'
    }
];

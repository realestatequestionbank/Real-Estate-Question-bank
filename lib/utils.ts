import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, hyphens with single hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export function capitalizeFirst(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function formatFaqAnswer(answer: string): string {
  // 1. Fix hours typo dynamically
  let formatted = answer.replace(
    /you are (\d+) hours of pre-licensing education/g,
    'complete the required <strong>$1 hours</strong> of pre-licensing education'
  );

  // 2. Bold key metrics/numbers
  formatted = formatted.replace(
    /(\b\d+\s+multiple-choice questions\b)/gi,
    '<strong>$1</strong>'
  );
  formatted = formatted.replace(
    /(\b\d+\s+Hours\b)/g,
    '<strong>$1</strong>'
  );
  formatted = formatted.replace(
    /(\d+%\s*—\s*which translates to answering at least \d+ questions correctly)/gi,
    (m) => {
      return m
        .replace(/(\d+%)/, '<strong>$1</strong>')
        .replace(/(\d+ questions correctly)/, '<strong>$1</strong>');
    }
  );
  formatted = formatted.replace(
    /(hovering around \d+% to \d+%)/gi,
    (m) => m.replace(/(\d+% to \d+%)/, '<strong>$1</strong>')
  );
  formatted = formatted.replace(
    /(increase to over \d+%)/gi,
    (m) => m.replace(/(over \d+%)/, '<strong>$1</strong>')
  );
  formatted = formatted.replace(
    /(100% money-back guarantee)/gi,
    '<strong>$1</strong>'
  );

  // 3. Format lists
  // A. Numbered list: "DRE: 1) Topic A (approx. 24%), 2) Topic B..."
  if (formatted.includes('DRE: 1)')) {
    const parts = formatted.split('DRE: ');
    const intro = parts[0] + 'DRE:';
    const rest = parts[1];
    
    // Split on numbered items: "1) ", "2) ", etc.
    const items = rest.split(/\s*\d+\)\s*/).filter(Boolean);
    const lastItem = items[items.length - 1];
    
    // Check if the last item contains the ending sentence
    const lastDotIndex = lastItem.lastIndexOf('. ');
    let ending = '';
    let lastItemClean = lastItem;
    if (lastDotIndex !== -1) {
      lastItemClean = lastItem.substring(0, lastDotIndex + 1);
      ending = lastItem.substring(lastDotIndex + 1);
    }
    
    items[items.length - 1] = lastItemClean;
    
    const listHtml = `<ul class="list-disc pl-6 mt-3 mb-3 space-y-2 text-gray-700">${items.map(item => `<li>${item.trim().replace(/,\s*$/, '').replace(/,\s*and\s*$/, '').replace(/\s+and\s*$/, '').trim()}</li>`).join('')}</ul>`;
    formatted = intro + listHtml + ending;
  }
  // B. Comma-separated list after colon
  else if (formatted.includes('typically include:')) {
    const parts = formatted.split('typically include:');
    const intro = parts[0] + 'typically include:';
    const rest = parts[1];
    
    // The list ends with a period, but there might be a following sentence.
    const listEndIndex = rest.indexOf('.');
    if (listEndIndex !== -1) {
      const listText = rest.substring(0, listEndIndex);
      const ending = rest.substring(listEndIndex); // includes the period and the rest of the text
      
      // Split items by comma
      const rawItems = listText.split(/,\s+/);
      const items = rawItems.map(item => {
        let clean = item.trim();
        if (clean.startsWith('and ')) {
          clean = clean.substring(4);
        }
        return clean;
      }).filter(Boolean);
      
      const listHtml = `<ul class="list-disc pl-6 mt-3 mb-3 space-y-2 text-gray-700">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
      formatted = intro + listHtml + ending;
    }
  }

  // 4. Convert double newlines to paragraph breaks (if any) or line breaks
  formatted = formatted.split('\n\n').map(p => `<p class="mb-3 last:mb-0 leading-relaxed text-gray-700">${p}</p>`).join('');

  return formatted;
}
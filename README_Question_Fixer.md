# DMV Question Accuracy Fixer

Automatically reviews and corrects DMV test questions using OpenAI API.

## Setup

1. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set OpenAI API Key:**
   ```bash
   export OPENAI_API_KEY='your-api-key-here'
   ```

## Usage

### Test with Sample (Recommended First)
```bash
python test_texas.py
```
- Tests with first 20 questions from Texas
- Shows how the correction process works
- Safe way to verify the approach

### Single State
```bash
python fix_questions.py path/to/questions_state_premium.csv
```

### All States
```bash
python fix_all_states.py
```

## What It Does

1. **Loads CSV questions** in batches of 5
2. **Sends to OpenAI** for review of:
   - Answer accuracy vs explanation
   - Factual correctness 
   - Option completeness
3. **Receives corrections** in JSON format
4. **Saves corrected CSV** with backup of original

## Features

- ✅ **Batch processing** (5 questions per API call for better accuracy)
- ✅ **Automatic backups** (creates `_backup.csv`)
- ✅ **Rate limiting** (delays between batches/states)
- ✅ **Progress tracking** with detailed logging
- ✅ **Error handling** continues on failures
- ✅ **JSON response parsing** from OpenAI

## API Costs

- **~$0.01-0.02 per 5 questions** (using GPT-5.1 with reduced tokens)
- **~435 questions per state** = ~$1.00-2.00 per state  
- **~50 states** = ~$50-100 total

## Safety

- Creates backups before modifying files
- Test mode available with sample questions
- Detailed logging of all changes
- Can resume if interrupted

## Output Format

The corrected CSV maintains the same structure:
- `section-num,section-name,question,options,correct-answer,note,difficulty`
- Only incorrect answers/explanations are updated
- Original formatting and order preserved
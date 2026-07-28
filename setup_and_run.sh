#!/bin/bash
"""
Setup and run the DMV Question Fixer
"""

echo "DMV Question Accuracy Fixer Setup"
echo "================================="

# Check if OpenAI API key is set
if [ -z "$OPENAI_API_KEY" ]; then
    echo "⚠️  OpenAI API key not found in environment"
    echo "Please set your OpenAI API key:"
    echo "export OPENAI_API_KEY='your-api-key-here'"
    echo ""
    echo "You can also add it to your ~/.bashrc or ~/.zshrc file"
    exit 1
fi

# Install requirements
echo "Installing Python requirements..."
pip install -r requirements.txt

echo ""
echo "Setup complete! You can now run:"
echo ""
echo "1. Single state:"
echo "   python fix_questions.py path/to/questions_state_premium.csv"
echo ""
echo "2. All states:"
echo "   python fix_all_states.py"
echo ""

# Ask if user wants to run immediately
read -p "Run for all states now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Starting batch processing..."
    python fix_all_states.py
fi
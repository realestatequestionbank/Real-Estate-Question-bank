import os
import re

source = 'components/handbook/new-york-handbook-summary.tsx'
dest = 'components/handbook/ohio-handbook-summary.tsx'

with open(source, 'r') as f:
    content = f.read()

# Replace Names
content = content.replace('NewYork', 'Ohio')
content = content.replace('New York', 'Ohio')
content = content.replace('new-york', 'ohio')
content = content.replace('NY', 'OH')

with open(dest, 'w') as f:
    f.write(content)

print("Scaffolded ohio-handbook-summary.tsx")

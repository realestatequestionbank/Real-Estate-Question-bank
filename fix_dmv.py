file_path = 'components/handbook/ohio-handbook-summary.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('DMV', 'BMV')
content = content.replace('dmv', 'bmv')
content = content.replace('12 chapters', '13 chapters')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed DMV to BMV")

import os
import shutil

# Copy the Nevada file as a template for Utah
source_file = 'components/handbook/nevada-handbook-summary.tsx'
dest_file = 'components/handbook/utah-handbook-summary.tsx'

shutil.copyfile(source_file, dest_file)

with open(dest_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Nevada with Utah
content = content.replace('NevadaHandbookSummary', 'UtahHandbookSummary')
content = content.replace('Nevada DMV Driver Manual', 'Utah Driver Handbook')
content = content.replace('Nevada', 'Utah')
content = content.replace('nevada', 'utah')
content = content.replace('Nevada\'s', 'Utah\'s')
content = content.replace('/handbooks/nevada', '/handbooks/utah')
content = content.replace('/nevada-mvd-permit-test', '/utah-dld-permit-test')

# Write back
with open(dest_file, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Created {dest_file} from template.")

import os
import json

base_path = os.path.dirname(os.path.abspath(__file__))

data = {}
for root, dirs, files in os.walk(base_path):
    if not any(dir.startswith('.') for dir in dirs):
        pages = [{'name': file, 'url': os.path.relpath(os.path.join(root, file), base_path)} for file in files if file.endswith('.html')]
        if pages:
            folder = os.path.relpath(root, base_path)
            data[folder] = pages

with open(f"{base_path}/data.json", 'w') as f:
    f.write(json.dumps(data, indent=4))

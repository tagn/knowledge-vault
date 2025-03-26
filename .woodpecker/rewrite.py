import os
import re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    # This regex matches a dataview code block that starts with ```dataview,
    # then captures everything until the closing ```
    pattern = re.compile(r'```dataview\s*\n(.*?)\n```', re.DOTALL)

    def replacer(match):
        # Remove any extra spaces and collapse newlines to a single space
        query = match.group(1).strip()
        query_single_line = ' '.join(query.splitlines())
        return f'<!-- QueryToSerialize: {query_single_line} -->'

    new_content, num_subs = pattern.subn(replacer, content)
    
    if num_subs > 0:
        print(f"Updated {filepath} (replaced {num_subs} block(s))")
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)

def main(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            # Process only Markdown files (adjust extension if necessary)
            if file.lower().endswith(".md"):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    # Set this to your Obsidian vault directory. Here it uses the current directory.
    vault_directory = "."
    main(vault_directory)

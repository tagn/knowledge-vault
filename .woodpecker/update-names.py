import os

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content

    # Define the replacements. Order is not critical here as the keys don't overlap.
    replacements = {
        "DND - Drakkenheim": "TTRPG/Drakkenheim",
        "DND - MattLord": "TTRPG/Tales from the Yawning Portal",
        "DND - Sam": "TTRPG/Keys from the Golden Vault",
        "campaign: Sam": "campaign: Keys from the Golden Vault",
        "campaign: MattLord": "campaign: Tales from the Yawning Portal",
    }

    for old, new in replacements.items():
        content = content.replace(old, new)
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated: {filepath}")

def main(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.md'):
                process_file(os.path.join(root, file))

if __name__ == '__main__':
    # Set this to your Obsidian vault directory. This example uses the current directory.
    vault_directory = "."
    main(vault_directory)

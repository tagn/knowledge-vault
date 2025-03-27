#!/usr/bin/env python3
import os
import re
import sys

def extract_event_log(filepath):
    """Extract the event log section from a markdown file.
    
    The function starts reading when it finds a header containing
    "Session Event Log" or "Event Log" (case-insensitive) and continues
    until the next header line.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    event_log = []
    in_log = False
    # Regex to match headers that are relevant
    start_regex = re.compile(r'^\s*#+\s*(Session Event Log|Event Log)', re.IGNORECASE)
    header_regex = re.compile(r'^\s*#+\s+')

    for line in lines:
        # Look for the start of the event log section.
        if not in_log and start_regex.search(line):
            in_log = True
            continue  # skip the header line itself if you don't want it included

        # Once in the event log, break out if a new header is found.
        if in_log and header_regex.match(line):
            break

        if in_log:
            event_log.append(line)
    return ''.join(event_log)

def extract_number(filename):
    """Extract a number from the filename for sorting purposes."""
    m = re.search(r'(\d+)', filename)
    return int(m.group(1)) if m else 0

def main(session_directory, output_file):
    # Get a list of all .md files in the current directory.
    md_files = [f for f in os.listdir(session_directory) if f.lower().endswith('.md')]
    # Sort the files based on the numeric portion of their filenames.
    md_files.sort(key=extract_number)

    combined_log = ""
    for filename in md_files:
        event_log = extract_event_log(f"{session_directory}\{filename}")
        if event_log.strip():
            # Optionally, add a marker to indicate which file the log came from.
            combined_log += f"--- {filename} ---\n"
            combined_log += event_log + "\n"

    # Write the combined log to a file.
    with open(output_file, 'w', encoding='utf-8') as out:
        out.write(combined_log)

    print(f"Combined event log saved to {output_file}")

if __name__ == '__main__':
    session_directory = sys.argv[1]
    output_file = sys.argv[2]
    main(session_directory, output_file)
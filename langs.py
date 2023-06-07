import json

def get_unique_keys(json_file):
    unique_keys = set()

    with open(json_file, 'r') as file:
        data = json.load(file)

        for obj in data:
            keys = obj.keys()
            unique_keys.update(keys)

    return unique_keys

# Example usage
json_file_path = './scripts/data/all_languages.json'
keys = get_unique_keys(json_file_path)

print("Unique keys:")
for key in keys:
    print(key)


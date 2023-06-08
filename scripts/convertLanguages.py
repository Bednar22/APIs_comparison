import json



with open("./data/all_languages.json", "r") as file:
    data = json.load(file)


converted_data = []

for item in data:
    repo_id = item.pop("repoId")
    languages = [{"name": key, "value": value} for key, value in item.items()]
    converted_data.append({"repoId": repo_id, "languages": languages})

# Save converted_data to a JSON file
with open("./data/converted_languages.json", "w") as file:
    json.dump(converted_data, file, indent=4)

print("Data converted and saved to converted_data.json.")
import requests
import json

def get_repository_languages(owner, repo):
    url = f"https://api.github.com/repos/{owner}/{repo}/languages"
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        languages = response.json()
        return languages
    else:
        print(f"Error occurred while fetching languages for {owner}/{repo}.")
        return None

# Read owner/repo list from a JSON file
with open("./data/owner_list.json", "r") as file:
    owner_repo_list = json.load(file)

language_data = []

# Process each owner/repo pair
for owner_repo in owner_repo_list:
    owner, repo, repoId = owner_repo.values()
    languages = get_repository_languages(owner, repo)
    if languages:
        # Add repoId field to the response
        languages["repoId"] = repoId
        language_data.append(languages)
        print(f"Languages for {owner}/{repo} fetched successfully.")
    else:
        print(f"Unable to fetch languages for {owner}/{repo}.")

# Save language data to a JSON file
with open("./data/all_languages.json", "w") as file:
    json.dump(language_data, file, indent=4)

print("Language data saved successfully in language_data.json.")
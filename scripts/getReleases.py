import requests
import json

def get_releases(owner, repo, repo_id):
    url = f"https://api.github.com/repos/{owner}/{repo}/releases"
   # GitHub API token (replace with your own token)
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
       releases = response.json()
       for release in releases:
           release["repoId"] = repo_id
       return releases
    else:
        print(f"Error occurred while fetching releases for {owner}/{repo}.")
        return None

# Read owner_list.json file
with open("./data/owner_list.json", "r") as file:
    owner_list = json.load(file)

all_releases = []

# Process commits for each owner and repository
for owner_repo in owner_list:
    owner, repo, repo_id = owner_repo.values()
    releases = get_releases(owner, repo, repo_id)

    if releases:
        all_releases.extend(releases)
        print(f"releases for {owner}/{repo} fetched successfully.")
    else:
        print(f"Unable to fetch releases for {owner}/{repo}.")

# Save all commits to a JSON file
with open("./data/all_releases.json", "w") as file:
    json.dump(all_releases, file, indent=4)

print("All releases saved successfully in all_releases.json.")
import requests
import json

def get_contributors(owner, repo, repo_id):
    url = f"https://api.github.com/repos/{owner}/{repo}/contributors"
   # GitHub API token (replace with your own token)
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
       contributors = response.json()
       for contributor in contributors:
           contributor["repoId"] = repo_id
       return contributors
    else:
        print(f"Error occurred while fetching contributors for {owner}/{repo}.")
        return None

# Read owner_list.json file
with open("./data/owner_list.json", "r") as file:
    owner_list = json.load(file)

all_contributors = []

# Process commits for each owner and repository
for owner_repo in owner_list:
    owner, repo, repo_id = owner_repo.values()
    contributors = get_contributors(owner, repo, repo_id)

    if contributors:
        all_contributors.extend(contributors)
        print(f"contributors for {owner}/{repo} fetched successfully.")
    else:
        print(f"Unable to fetch contributors for {owner}/{repo}.")

# Save all commits to a JSON file
with open("./data/all_contributors.json", "w") as file:
    json.dump(all_contributors, file, indent=4)

print("All contributors saved successfully in all_contributors.json.")
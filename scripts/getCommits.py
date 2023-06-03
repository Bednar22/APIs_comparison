import requests
import json

def get_commits(owner, repo, repo_id):
    url = f"https://api.github.com/repos/{owner}/{repo}/commits?per_page=1000"
   # GitHub API token (replace with your own token)
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
       commits = response.json()
       for commit in commits:
           commit["repoId"] = repo_id
       return commits
    else:
        print(f"Error occurred while fetching commits for {owner}/{repo}.")
        return None

# Read owner_list.json file
with open("./data/owner_list.json", "r") as file:
    owner_list = json.load(file)

all_commits = []

# Process commits for each owner and repository
for owner_repo in owner_list:
    owner, repo, repo_id = owner_repo.values()
    commits = get_commits(owner, repo, repo_id)

    if commits:
        all_commits.extend(commits)
        print(f"Commits for {owner}/{repo} fetched successfully.")
    else:
        print(f"Unable to fetch commits for {owner}/{repo}.")

# Save all commits to a JSON file
with open("./data/all_commits.json", "w") as file:
    json.dump(all_commits, file, indent=4)

print("All commits saved successfully in all_commits.json.")
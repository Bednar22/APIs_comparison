import requests
import json

def get_issues(owner, repo, repo_id):
    url = f"https://api.github.com/repos/{owner}/{repo}/issues"
   # GitHub API token (replace with your own token)
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
       issues = response.json()
       for issue in issues:
           issue["repoId"] = repo_id
       return issues
    else:
        print(f"Error occurred while fetching issues for {owner}/{repo}.")
        return None

# Read owner_list.json file
with open("./data/owner_list.json", "r") as file:
    owner_list = json.load(file)

all_issues = []

# Process commits for each owner and repository
for owner_repo in owner_list:
    owner, repo, repo_id = owner_repo.values()
    issues = get_issues(owner, repo, repo_id)

    if issues:
        all_issues.extend(issues)
        print(f"issues for {owner}/{repo} fetched successfully.")
    else:
        print(f"Unable to fetch issues for {owner}/{repo}.")

# Save all commits to a JSON file
with open("./data/all_issues.json", "w") as file:
    json.dump(all_issues, file, indent=4)

print("All issues saved successfully in all_issues.json.")
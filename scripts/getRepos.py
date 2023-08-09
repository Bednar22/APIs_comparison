import requests
import json

def get_top_repositories():
    url = "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&per_page=100"
   # GitHub API token (replace with your own token)
    api_token = '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'

    # Request headers with authentication
    headers = {'Authorization': f'token {api_token}'}   
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()["items"]
    else:
        print("Error occurred while fetching repositories.")
        return None

def save_repositories_to_file(repositories):
    with open("./data/repositories.json", "w") as file:
        json.dump(repositories, file, indent=4)

def create_owner_list(repositories):
    owner_list = [{"owner": repo["owner"]["login"], "name": repo["name"], "repoId": repo["id"] } for repo in repositories]
    with open("./data/owner_list.json", "w") as file:
        json.dump(owner_list, file, indent=4)

# Get the top repositories
repositories = get_top_repositories()

if repositories:
    # Save repositories to a JSON file
    save_repositories_to_file(repositories)

    # Create the owner list
    create_owner_list(repositories)
    print("Repositories and owner list saved successfully.")
else:
    print("Unable to fetch repositories.")
import GithubUserTable from "./components/GithubUserTable";

export interface DataItem {
  "s.no": number;
  "percentage.funded": number;
  "amt.pledged": number;
}

async function fetchRawGithubUserContent(): Promise<DataItem[]> {
  const response = await fetch(
    "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
  );
  const data = await response.json();
  return data;
}

export default async function Page() {
  const data = await fetchRawGithubUserContent();

  return <GithubUserTable data={data} />;
}

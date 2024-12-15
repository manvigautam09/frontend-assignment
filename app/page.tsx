import styles from "./page.module.css";

interface DataItem {
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

  return (
    <div>
      <h1>Data Table</h1>
      <table className={styles.table} aria-label="Funding Data Table">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Percentage funded</th>
            <th scope="col">Amount pledged</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item["s.no"]}>
              <td>{item["s.no"]}</td>
              <td>{item["percentage.funded"]}</td>
              <td>{item["amt.pledged"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

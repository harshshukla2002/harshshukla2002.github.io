import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  // const GithubCalenderFunciton = async () => {
  //   let response = await GitHubCalendar(
  //     ".react-activity-calendar",
  //     "harshshukla2002",
  //     { responsive: true }
  //   );
  //   console.log(response);
  // };

  // useEffect(() => {
  //   GithubCalenderFunciton();
  // }, []);

  return (
    <div className="github-section" id="github">
      <div className="heading">
        <Heading textAlign={"left"}>Github</Heading>
        <div style={{ borderBottom: "5px solid blue", width: "10%" }}></div>
      </div>
      <SimpleGrid columns={[1, 2]} gap="20px" p="30px">
        <img
          id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com?user=harshshukla2002&theme=violet-punch"
          alt="harshshukla2002"
          style={{ border: "2px solid gray", borderRadius: "5px" }}
        />
        <img
          id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=harshshukla2002&show_icons=true&theme=violet-punch"
          alt="harshshukla2002"
          style={{ border: "2px solid gray", borderRadius: "10px" }}
        />
      </SimpleGrid>
      <div style={{ alignSelf: "center" }}>
        <img
          id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshshukla2002&layout=compact"
          alt="harshshukla2002"
          style={{ border: "2px solid gray", borderRadius: "10px" }}
        />
      </div>
      <Card m="20px" p="20px" style={{ border: "2px solid gray" }}>
        <GitHubCalendar username="harshshukla2002" />
      </Card>
    </div>
  );
}

export default Github;

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Cours() {
  return (
    <div>
      <h1>La liste des cours</h1>
      <h2>
        J'aime bien
        <select>
          <option>de tout</option>
          <option>les jeux</option>
          <option>le web</option>
          <option>le design</option>
          <option>la programmation</option>
          <option>la vidéo</option>
        </select>
      </h2>
      <Tabs>
        <TabList>
          <Tab>Session 1</Tab>
          <Tab>Session 2</Tab>
          <Tab>Session 3</Tab>
          <Tab>Session 4</Tab>
          <Tab>Session 5</Tab>
          <Tab>Session 6</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

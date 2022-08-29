import { useParams } from "react-router-dom";
import StickyHeaderTable from "./Common/StickyHeaderTable";

function Competencies() {
  const { CompetencyId } = useParams()

  //TODO: get competencies from API

  //TODO: pass competencies into table

  return <StickyHeaderTable />;
}

export default Competencies;

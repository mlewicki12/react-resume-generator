import CoverLetter from "../../components/cover-letter";
import { ResumeComponent } from "../../types";

type CoverLetterPage = {
  header: ResumeComponent;
  content: string[];
}

const CoverLetterPage = ({
  header, content
}: CoverLetterPage) => {
  return (
    <CoverLetter
      content={content}
      header={header}
    />
  );
}

export default CoverLetterPage;
import React from "react";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

interface SkillCardProps {
  icon: React.ReactNode;
  text: string;
  rating: number;
}

const Level = ({ rating }: { rating: number }) => {
  const level = ["Novice", "Beginner", "Skillful", "Experienced", "Expert"];
  const index = rating - 1;
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="rating-tooltip">{level[index]}</Tooltip>}
    >
      <div className="levels ml-auto">
        {level.map((_, i) => (
          <div className={`level ${i <= index && "selected"}`}></div>
        ))}
      </div>
    </OverlayTrigger>
  );
};
const SkillCard = ({ icon, text, rating }: SkillCardProps) => {
  return (
    <Row className="al-center">
      <Col>
        <span className="sc-icon">{icon}</span> {text}
      </Col>
      <Col>
        <Level rating={rating} />
      </Col>
    </Row>
  );
};

export default SkillCard;

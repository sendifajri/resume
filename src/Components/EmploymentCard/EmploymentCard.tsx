import React from "react";

interface EmploymentCardProps {
  company: string;
  title: string;
  date: {
    start: string;
    end: string;
  };
  description?: string | React.ReactNode;
}

const EmplyementCard = ({
  company,
  date,
  title,
  description,
}: EmploymentCardProps) => {
  return (
    <div className="emply-card">
      <div className="emply-card-title">
        {company}, <span>{title}</span>
      </div>
      <p className="emply-card-date">
        {date.start} - {date.end}
      </p>
      {description}
    </div>
  );
};

export default EmplyementCard;

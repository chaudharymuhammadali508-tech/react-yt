import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {
  const parms = useParams();
  console.log("parms:", parms);
  return (
    <div>
      <h1>{parms.CourseId}CoursesDetail</h1>
    </div>
  );
};

export default CoursesDetail;

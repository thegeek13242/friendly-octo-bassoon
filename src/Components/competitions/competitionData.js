// importing images
import adminImg from "./assets/admin.png";
import verifyImg from "./assets/verify.png";
import studentImg from "./assets/student.png";

// Testing data
export default [
  {
    id: 1,
    competitionImage: adminImg,
    competitionTitle: "Admin Portal",
    competitionDeadline: "16th Oct 12:00am IST",
    competitionLink: "/admin",
  },
  {
    id: 2,
    competitionImage: studentImg,
    competitionTitle: "Student Portal",
    competitionDeadline: "17th Oct 06:00pm IST",
    competitionLink: "/student",
  },
  {
    id: 3,
    competitionImage: verifyImg,
    competitionTitle: "Guest Verification Portal",
    competitionDeadline: "16th Oct 12:00am IST",
    competitionLink: "/guest",
  },
];

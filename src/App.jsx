import React from "react";
import Cards from "./component/Cards";
import Nav from "./component/Nav";

const App = () => {
const employees = [
  {
    id: 1,
    logoTitle: "Google",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    updatedAt: "2h ago",
    designation: "Frontend Engineer",
    pricePerHour: 80,
    location: "Bangalore, India",
  },
  {
    id: 2,
    logoTitle: "Amazon",
    logoUrl:"https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
    updatedAt: "5h ago",
    designation: "Backend Developer",
    pricePerHour: 75,
    location: "Hyderabad, India",
  },
  {
    id: 3,
    logoTitle: "Microsoft",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    updatedAt: "1 day ago",
    designation: "Full Stack Developer",
    pricePerHour: 85,
    location: "Pune, India",
  },
  {
    id: 4,
    logoTitle: "Meta",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    updatedAt: "3h ago",
    designation: "React Developer",
    pricePerHour: 70,
    location: "Remote",
  },
  {
    id: 5,
    logoTitle: "Netflix",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    updatedAt: "6h ago",
    designation: "UI Engineer",
    pricePerHour: 90,
    location: "Mumbai, India",
  },
  {
    id: 6,
    logoTitle: "Spotify",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    updatedAt: "9h ago",
    designation: "Frontend Developer",
    pricePerHour: 72,
    location: "Remote",
  },
  {
    id: 7,
    logoTitle: "Adobe",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Corporate_Logo.png",
    updatedAt: "4h ago",
    designation: "UI/UX Engineer",
    pricePerHour: 88,
    location: "Noida, India",
  },
  {
    id: 8,
    logoTitle: "Airbnb",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    updatedAt: "12h ago",
    designation: "Product Designer",
    pricePerHour: 65,
    location: "Remote",
  },
  {
    id: 9,
    logoTitle: "Uber",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    updatedAt: "1h ago",
    designation: "Software Engineer",
    pricePerHour: 78,
    location: "Delhi, India",
  },
  {
    id: 10,
    logoTitle: "Shopify",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
    updatedAt: "2 days ago",
    designation: "Web Developer",
    pricePerHour: 60,
    location: "Remote",
  },
];


  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {employees.map(function (emp) {
        return (
                   <Cards
            key={emp.id}
            logoTitle={emp.logoTitle}
            logoUrl={emp.logoUrl}
            updatedAt={emp.updatedAt}
            designation={emp.designation}
            pricePerHour={emp.pricePerHour}
            location={emp.location}
          />

        );
      })}
    </div>
  );
};

export default App;

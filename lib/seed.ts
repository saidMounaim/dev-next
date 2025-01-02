import { prisma } from "./prisma";

const developerJobs = [
  {
    title: "Full-stack Developer",
    slug: "full-stack-developer",
    description:
      "As a Full-stack Developer at DevTech Solutions, you will be responsible for building both the front-end and back-end of our web applications. You will collaborate with a dynamic team of developers, product managers, and designers to create seamless, user-friendly experiences. Ideal candidates should have experience with JavaScript, React, Node.js, and database management. You will also play a key role in optimizing the performance and scalability of our applications.",
    type: "Full-time",
    locationType: "Hybrid",
    location: "San Francisco, CA",
    salary: 120000,
    companyName: "DevTech Solutions",
    applicationEmail: "apply@devtechsolutions.com",
    applicationUrl: "https://devtechsolutions.com/jobs/full-stack-developer",
    companyLogoUrl: "default-company-logo.jpg",
    approved: true,
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Join our team as a Frontend Developer at WebMasters Inc. and work on building responsive, high-performance user interfaces for our web applications. You will collaborate closely with UI/UX designers to ensure our products are not only functional but also visually appealing. Candidates should have proficiency in HTML, CSS, JavaScript, and React, with a strong understanding of web development best practices. You will be responsible for ensuring the mobile responsiveness and cross-browser compatibility of the front-end components.",
    type: "Contract",
    locationType: "Remote",
    location: "Remote",
    salary: 90000,
    companyName: "WebMasters Inc.",
    applicationEmail: "careers@webmasters.com",
    applicationUrl: "https://webmasters.com/jobs/frontend-developer",
    companyLogoUrl: "default-company-logo.jpg",
    approved: true,
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    description:
      "We are looking for a skilled Backend Developer to join our team at TechWave. In this role, you will be responsible for designing and maintaining server-side logic, databases, and APIs for our web applications. You will work with a variety of technologies, including Python, Django, and PostgreSQL, to ensure the performance, security, and scalability of our applications. You will also collaborate with frontend developers to integrate user-facing elements with server-side logic and contribute to code reviews and the development of best practices.",
    type: "Full-time",
    locationType: "On-site",
    location: "Austin, TX",
    salary: 110000,
    companyName: "TechWave",
    applicationEmail: "jobs@techwave.com",
    applicationUrl: "https://techwave.com/careers/backend-developer",
    companyLogoUrl: "default-company-logo.jpg",
    approved: true,
  },
  {
    title: "Mobile Developer",
    slug: "mobile-developer",
    description:
      "AppMakers is looking for a Mobile Developer to join our team in building high-quality mobile applications for both iOS and Android. As a Mobile Developer, you will work closely with product managers and UI/UX designers to develop new features and improve the overall user experience. You will be responsible for writing clean, maintainable code, and optimizing the applications for maximum performance and user experience. Experience with React Native, Swift, or Kotlin is required, and familiarity with CI/CD pipelines and mobile app deployment processes is a plus.",
    type: "Part-time",
    locationType: "Hybrid",
    location: "Los Angeles, CA",
    salary: 80000,
    companyName: "AppMakers",
    applicationEmail: "join@appmakers.com",
    applicationUrl: "https://appmakers.com/jobs/mobile-developer",
    companyLogoUrl: "default-company-logo.jpg",
    approved: true,
  },
];

async function main() {
  try {
    await prisma.job.deleteMany();
    await prisma.job.createMany({ data: developerJobs });

    console.log("Database seeded successfully");
  } catch (error) {
    console.log("Failed to seed to database", error);
  }
}

main();

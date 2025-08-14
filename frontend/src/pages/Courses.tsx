
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses =  [
  {
    id: 1,
    title: "Full Stack Development",
    description: "Master both frontend and backend development with React, Node.js, MongoDB, and more. Build real-world applications from scratch.",
    duration: "6 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    features: ["React & Node.js", "Database Design", "API Development", "Project Portfolio", "Job Placement"],
    modules: 12
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description: "Learn Python, machine learning, data visualization, and statistical analysis to become a data science expert.",
    duration: "4 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    features: ["Python Programming", "Machine Learning", "Data Visualization", "Statistics", "Real Projects"],
    modules: 10
  },
  {
    id: 3,
    title: "Java Programming",
    description: "Complete Java development from basics to enterprise applications. Learn Spring Boot, Hibernate, and microservices.",
    duration: "5 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    features: ["Core Java", "Spring Framework", "Database Integration", "Testing", "Enterprise Apps"],
    modules: 15
  },
  {
    id: 4,
    title: "Aptitude Training",
    description: "Comprehensive aptitude training for placement interviews, competitive exams, and logical reasoning skills.",
    duration: "2 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400",
    features: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Mock Tests", "Interview Prep"],
    modules: 8
  },
  {
    id: 5,
    title: "Cloud Computing (AWS)",
    description: "Master Amazon Web Services cloud platform. Learn deployment, scaling, and cloud architecture.",
    duration: "3 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
    features: ["AWS Services", "Cloud Architecture", "DevOps", "Security", "Certification Prep"],
    modules: 9
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications using React Native and Flutter.",
    duration: "4 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
    features: ["React Native", "Flutter", "Mobile UI/UX", "App Store Deployment", "Real Projects"],
    modules: 11
  },
  {
    id: 7,
    title: "Cybersecurity",
    description: "Learn ethical hacking, penetration testing, and defensive security to protect systems from cyber threats.",
    duration: "6 months",
    level: "Beginner to Advanced",
    image: "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg",
    features: ["Ethical Hacking", "Network Security", "Web App Security", "Incident Response", "Security Tools"],
    modules: 10
  },
  {
    id: 8,
    title: "Android Development (Kotlin, Flutter & Swift)",
    description: "Develop mobile apps for Android and iOS using Kotlin, Flutter, and Swift. Learn native and cross-platform development.",
    duration: "5 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=400",
    features: ["Kotlin Basics", "Flutter Widgets", "SwiftUI", "REST API Integration", "Play Store & App Store Deployment"],
    modules: 12
  },
  {
    id: 9,
    title: "DevOps",
    description: "Learn CI/CD pipelines, containerization, cloud deployment, and automation tools for modern software delivery.",
    duration: "3 months",
    level: "Beginner to Advanced",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*hnrlp3W6kfInWHtJd9Vvag.jpeg",
    features: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Cloud Deployment"],
    modules: 8
  },
  {
    id: 10,
    title: "MLOps",
    description: "Bridge machine learning and operations. Deploy, monitor, and manage ML models in production.",
    duration: "4 months",
    level: "Beginner to Advanced",
    image: "https://www.atomcamp.com/wp-content/uploads/2024/04/image-10-1024x495.png",
    features: ["Model Deployment", "Data Pipelines", "Monitoring", "Versioning", "Cloud MLOps Tools"],
    modules: 9
  },
  {
    id: 11,
    title: "Generative AI",
    description: "Explore large language models, image generation, and AI-powered creative tools with hands-on projects.",
    duration: "6 months",
    level: "Beginner to Advanced",
    image: "https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2025/01/Generative-AI-edited.webp",
    features: ["Prompt Engineering", "LLMs", "Image Generation", "Chatbot Development", "Ethics & Safety"],
    modules: 8
  },
  {
    id: 12,
    title: "Embedded Systems & IoT",
    description: "Learn microcontroller programming, IoT protocols, and real-time data integration with cloud services.",
    duration: "4 months",
    level: "Beginner to Advanced",
    image: "https://www.ultralibrarian.com/wp-content/uploads/2022/06/shutterstock_13717364781.jpg",
    features: ["Arduino", "ESP32", "IoT Protocols", "Cloud Integration", "Embedded C/C++"],
    modules: 10
  },
  {
    id: 13,
    title: "Digital Marketing",
    description: "Master SEO, social media marketing, Google Ads, and analytics to grow businesses online.",
    duration: "3 months",
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=400",
    features: ["SEO", "Social Media Ads", "Google Analytics", "Email Marketing", "Content Strategy"],
    modules: 7
  },
  {
    id: 14,
    title: "Automation Testing",
    description: "QA Engineering with Selenium",
    duration: "3 months",
    level: "Beginner to Advanced",
    image: "https://executeautomationtest.wordpress.com/wp-content/uploads/2017/11/automation-testing.png",
    features: ["Manual", "Automation", "Trello", "Selenium", "Load Runner"],
    modules: 7
  }
];



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Choose from our comprehensive range of technology courses designed to 
            launch your career in the digital world.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardDescription className="text-base line-clamp-3">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <div className="font-semibold">{course.duration}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Modules:</span>
                      <div className="font-semibold">{course.modules}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">What you'll learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                      <span className="text-sm text-gray-500">One-time payment</span>
                    </div>
                    <div className="space-y-2">
                      <Link to="/register" className="block">
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Enroll Now
                        </Button>
                      </Link>
                      {/* <Button variant="outline" className="w-full">
                        View Details
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our courses are designed with industry experts to ensure you gain 
              practical skills that employers value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hands-on Projects</h3>
              <p className="text-gray-600">Build real-world projects to showcase in your portfolio</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Job Placement</h3>
              <p className="text-gray-600">Dedicated support to help you land your dream job</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Industry-recognized certificates upon completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8">
            Our counselors are here to help you choose the right course for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Book Free Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Talk to Counselor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;

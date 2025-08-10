
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Master both frontend and backend development with modern technologies",
      duration: "6 months",
      level: "Beginner to Advanced",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization",
      duration: "4 months",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
    {
      id: 3,
      title: "Java Programming",
      description: "Complete Java development from basics to enterprise applications",
      duration: "5 months",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer at Google",
      content: "Tech Miya transformed my career. The hands-on approach and real-world projects prepared me for my dream job.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist at Microsoft",
      content: "The instructors are industry experts who provide invaluable insights. Best investment I've made in my education.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      name: "Emily Rodriguez",
      role: "Full Stack Developer at Amazon",
      content: "From zero to hero in just 6 months. The curriculum is perfectly structured and the support is amazing.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     {/* Hero Section - Replaced with TAP ACADEMY version */}
<section className="relative bg-gradient-to-br bg-white to-indigo-900 text- overflow-hidden">
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Rotating Tech Logos */}
      <div className="relative h-64 w-64 mx-auto lg:mx-0">
        {/* Circle Container */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-300/30 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-blue-200/20 animate-ping"></div>
        </div>
        
        {/* Rotating Logos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[50%_150px]">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[-50px_50%] delay-1000">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10" />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[50%_-50px] delay-2000">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10" />
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-orbit origin-[150px_50%] delay-3000">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10" />
        </div>
        
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-white text-xl font-bold">TE</span>
          </div>
        </div>
      </div>

      {/* Right Side - TAP ACADEMY Content */}
      <div className="text-center lg:text-left">
        <Badge variant="secondary" className="mb-4 bg-yellow-400 text-blue-900 hover:bg-yellow-500">
          #1 Coding Institute
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
         TECHMIYA EDTECH
          </span>
        </h1>
        <div className="space-y-4 mb-8">
          <p className="text-xl lg:text-2xl font-medium flex items-center">
            <span className="mr-2">🎮</span> Gamify Learning
          </p>
          <p className="text-xl lg:text-2xl font-medium flex items-center">
            <span className="mr-2">✨</span> Simplify Employment
          </p>
          <p className="text-xl text-blue-200">
            The Best Institute For Java Full Stack Developer Course
          </p>
        </div>
        <p className="text-lg text-blue-100 mb-8">
          Trusted by over <span className="font-bold text-yellow-300">75,000+</span> students across India
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link to="/register">
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 text-lg">
              Attend Free Demo Class
            </Button>
          </Link>
          <Link to="/placement">
<Button
  size="lg"
  variant="outline"
  className="border-white text-blue-900 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg"
>


              Explore Placement Opportunity
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>

 {/* Company Marquee */}
<div className="relative bg-white/10 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3 className="text-center text-blue-200 text-sm font-semibold mb-4">OUR RECRUITMENT PARTNERS</h3>
    <div className="flex overflow-hidden space-x-12">
      <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center">
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/google.com" alt="Google" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Google</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Amazon</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Microsoft</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/infosys.com" alt="Infosys" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Infosys</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/tcs.com" alt="TCS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">TCS</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/accenture.com" alt="Accenture" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Accenture</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/wipro.com" alt="Wipro" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Wipro</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/capgemini.com" alt="Capgemini" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Capgemini</span>
        </div>
      </div>
      <div className="flex space-x-12 animate-marquee2 whitespace-nowrap items-center">
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/google.com" alt="Google" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Google</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/amazon.com" alt="Amazon" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Amazon</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Microsoft</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/infosys.com" alt="Infosys" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Infosys</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/tcs.com" alt="TCS" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">TCS</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/accenture.com" alt="Accenture" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Accenture</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/wipro.com" alt="Wipro" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Wipro</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="https://logo.clearbit.com/capgemini.com" alt="Capgemini" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          <span className="text-sm text-white">Capgemini</span>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            To bridge the gap between traditional education and industry requirements by providing 
            practical, hands-on training that prepares students for successful tech careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry-Focused</h3>
              <p className="text-gray-600">
                Curriculum designed with input from leading tech companies
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">
                Dedicated placement assistance and career guidance
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">
                Real projects and practical experience from day one
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600">
              Start your tech journey with our most popular programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <Link to="/courses">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Student Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from our successful graduates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button size="lg" variant="outline" className="px-8">
                Read More Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who have transformed their careers with Tech Miya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Register for Demo
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

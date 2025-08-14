
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
      name: "Adil T A",
      role: "Software Developer at HCL",
      content: "Tech Miya transformed my career. The hands-on approach and real-world projects prepared me for my dream job.",
      rating: 5,
      avatar: "data:image/webp;base64,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",
    },
    {
      name: "Ganavi R",
      role: "Software Engineer at Techmiya Solutions",
      content: "The instructors are industry experts who provide invaluable insights. Best investment I've made in my education.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    },
    {
      name: "Syed Kashif",
      role: "Digital Marketing Head",
      content: "From zero to hero in just 6 months. The curriculum is perfectly structured and the support is amazing.",
      rating: 5,
      avatar: "/kashif.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     {/* Hero Section - Replaced with TAP ACADEMY version */}
<section className="relative bg-background text-white overflow-hidden">
  <div className="absolute inset-0 bg-blue-800/100"></div>

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
            <span className="mr-2">🎮</span> Tech for People
          </p>
          <p className="text-xl lg:text-2xl font-medium flex items-center">
            <span className="mr-2">✨</span> Simplify Employment
          </p>
          <p className="text-xl text-blue-200">
            The Best Institute For Complete Technical Courses
          </p>
        </div>
        <p className="text-lg text-blue-100 mb-8">
          Trusted by over <span className="font-bold text-yellow-300">5,000+</span> students across India
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

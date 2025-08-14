
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Adil T A",
      role: "Software Developer at Techmiya",
      course: "Full Stack Development",
      rating: 5,
      content: "Techmiya completely transformed my career. I went from having no programming experience to landing a job at Google in just 8 months. The instructors are incredibly knowledgeable and the hands-on approach really helped me understand complex concepts. The career support team was amazing too - they helped me prepare for interviews and even connected me with recruiters.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100",
      date: "December 2024",
      
    },
    {
      id: 2,
      name: "Parvez Aktar",
      role: "Data Scientist at Microsoft",
      course: "Data Science & Analytics",
      rating: 5,
      content: "The Data Science program at Tech Miya is outstanding. The curriculum is up-to-date with industry standards and the projects we worked on were directly applicable to real-world scenarios. What I loved most was the personalized attention from instructors and the collaborative learning environment. The job placement assistance was exceptional.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      date: "November 2023",
      
    },
    {
      id: 3,
      name: "Mudasir Khan",
      role: "Full Stack Developer at Novotech Robo",
      course: "Full Stack Development",
      rating: 5,
      content: "From zero to hero in just 6 months! Tech Miya's Full Stack program is incredibly comprehensive. The way they structure the learning path makes complex topics easy to understand. The portfolio projects I built during the course were instrumental in landing my job at Amazon. Highly recommend to anyone looking to break into tech!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      date: "October 2024",

    },
    {
      id: 4,
      name: "Joel Fernandes",
      role: "Python Developer at X-Ciencia Technologies",
      course: "Java Programming",
      rating: 5,
      content: "Best decision I ever made! The Java course at Tech Miya is thorough and practical. The instructors have real industry experience and they share valuable insights beyond just coding. The mock interviews and technical preparation sessions were extremely helpful for my job search.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
      date: "September 2023",
    },
    {
      id: 5,
      name: "Arshiya",
      role: "Cloud Engineer at IBM",
      course: "Cloud Computing (AWS)",
      rating: 5,
      content: "The AWS course exceeded my expectations. The hands-on labs and real cloud projects gave me confidence to work with enterprise-level infrastructure. The certification preparation was excellent and I passed my AWS exam on the first try. Tech Miya truly prepares you for success.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
      date: "August 2023",

    },
    {
      id: 6,
      name: "Sana",
      role: "Mobile App Developer at Uber",
      course: "Mobile App Development",
      rating: 5,
      content: "Techmiya's mobile development course is top-notch. Learning both React Native and Flutter gave me a competitive edge in the job market. The projects we built were impressive enough to showcase to potential employers. The instructors are always available to help and provide excellent guidance.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
      date: "July 2023",
    },
    {
      id: 7,
      name: "Ganavi",
      role: "Software Engineer at Techmiya",
      course: "Full Stack Development",
      rating: 5,
      content: "Incredible learning experience! The curriculum is well-structured and the pace is perfect for working professionals. I was able to transition from accounting to software engineering successfully. The support from the Tech Miya team throughout my journey was phenomenal.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100",
      date: "June 2023",
    },
    {
      id: 8,
      name: "Syed Kashif",
      role: "Digital Marketing",
      course: "Digital Marketing",
      rating: 5,
      content: "The hands-on approach to learning data science at Tech Miya is unmatched. Working with real datasets and solving actual business problems prepared me perfectly for my role at Tesla. The instructors are industry experts who provide valuable mentorship beyond just technical skills.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
      date: "May 2023",

    },
  ];

  const stats = [
    { label: "Total Reviews", value: "2,500+" },
    { label: "Average Rating", value: "4.9/5" },
    { label: "Job Placement Rate", value: "95%" },
    { label: "Salary Increase", value: "300%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Student Reviews
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Real stories from our graduates who have successfully transformed 
            their careers with Tech Miya.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Graduates Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from students who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                      <p className="text-purple-600 font-medium">{review.role}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <Badge variant="secondary">{review.course}</Badge>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mt-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">⭐</span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 italic mb-6">"{review.content}"</p>
                  
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      
                      
                    </div>
                    <div>
   
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of students who have successfully transformed their careers with Tech Miya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                Start Your Journey
              </button>
            </a>
            <a href="/courses">
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-lg transition-colors">
                Explore Courses
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

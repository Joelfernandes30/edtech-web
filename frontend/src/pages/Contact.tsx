
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  if (!formData.name || !formData.email || !formData.message) {
    toast({
      title: "Validation Error",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
    setIsSubmitting(false);
    return;
  }

  const emailParams = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  subject: formData.subject,
  message: formData.message,
  time: new Date().toLocaleString(),
};


  try {
    await emailjs.send(
      "service_4ew07pp",     // replace with actual service ID
      "template_0fjvnl8",    // replace with actual template ID
      emailParams,
      "fvK7lDFpyfz-0msvO"      // replace with your public API key
    );
    toast({
      title: "Message Sent Successfully! ✉️",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    toast({
      title: "Failed to Send Message",
      description: "Something went wrong. Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto">
            Have questions about our courses or need guidance on your career path? 
            We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">info.@techmiyaedtech.com</p>
               
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">+91-6361987951</p>
                <p className="text-gray-600">+91-7338631971</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                
                <p className="text-gray-600">Techmiya Solutions, 28th Main Rd, Jayanagar 9th Block, Near Jayadeva metro station, Bengaluru, Karnataka 560069</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Enter the subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Embedded Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>
                    Visit our campus to experience our state-of-the-art facilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.863413965066!2d77.59264637484037!3d12.916498987393805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1593b046e93b%3A0x7ff3f9c780549b2e!2sTechmiya%20Ed-Tech!5e0!3m2!1sen!2sin!4v1747993732029!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Tech Miya Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <CardDescription className="text-blue-100">
                    Need immediate assistance? Choose your preferred method
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="tel:+916361987951"
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    <span>Call us now</span>
                  </a>
                  <a
                    href="mailto:manager@techmiyaprojects.com"
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <span className="text-xl">✉️</span>
                    <span>Send an email</span>
                  </a>
                 
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I enroll in a course?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You can enroll by clicking the "Register Now" button, filling out our demo 
                  registration form, or contacting us directly. We'll schedule a consultation 
                  to help you choose the right course.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer job placement assistance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We have a dedicated placement team that provides resume building, 
                  interview preparation, and direct connections with our 50+ industry partners. 
                  Our job placement rate is 95%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are the class timings?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer flexible timings including weekday batches, weekend batches, and 
                  online sessions. Classes are typically 2-3 hours long with both morning 
                  and evening slots available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide certification?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide industry-recognized certificates upon successful completion 
                  of courses. We also help you prepare for external certifications like AWS, 
                  Google Cloud, and Oracle certifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

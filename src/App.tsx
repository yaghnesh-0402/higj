import Navigation from "./components/Navigation";
import AnnouncementBox from "./components/AnnouncementBox";
import CourseCards from "./components/CourseCards";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Gem, GraduationCap } from "lucide-react";

import higjLogo from './assets/higjlogo.jpg';
export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Announcements */}
      <section 
        id="home" 
        className="min-h-screen relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
      >
        <div className="pt-20 pb-16 relative min-h-screen flex flex-col">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
              
              {/* Main Content */}
              <div className="flex-1">
                <h1 className="text-4xl lg:text-5xl font-serif font-extrabold text-white mb-6 tracking-tight">
                  Hyderabad Institute of{" "}
                  <span className="text-yellow-400 drop-shadow-md">
                    Gem & Jewellery
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
                  Your Career in the Dazzling World of Jewellery. Discover the art and science 
                  of precious stones with industry-leading courses and expert guidance.
                </p>
                <div>
                  <Button 
                    size="lg" 
                    className="bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => scrollToSection("courses")}
                  >
                    Explore Courses
                  </Button>
                </div>
              </div>
              
              {/* Logo / Hero Image */}
             <div className="flex justify-center">
                <img 
                src={higjLogo}
                alt="Higj logo"
               className= "w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-yellow-300"
              />
            </div>

              {/* Announcements for mobile */}
              <div className="lg:hidden">
                <AnnouncementBox />
              </div>
            </div>
          </div>

          {/* Navigation Buttons Section */}
          <div className="py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Explore Our Institute</h3>
                <p className="text-gray-200">Learn more about our courses, faculty, and contact information</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 border-2 border-white text-blue-900 hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                  onClick={() => scrollToSection("about")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Gem className="w-4 h-4 text-blue-900 group-hover:text-blue-900" />
                    </div>
                    <div className="text-left text-blue-900 group-hover:text-blue-900">
                      <div className="font-semibold">About Us</div>
                      <div className="text-xs opacity-90 group-hover:opacity-100">Our story & mission</div>
                    </div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 group"
                  onClick={() => scrollToSection("courses")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 flex items-center justify-center transition-colors">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold">Our Courses</div>
                      <div className="text-xs opacity-75">Programs & training</div>
                    </div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 border-2 border-white text-blue-900 hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                  onClick={() => scrollToSection("contact")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 text-blue group-hover:text-blue-900" />
                    </div>
                    <div className="text-left text-blue-900 group-hover:text-blue-900">
                      <div className="font-semibold">Contact Us</div>
                      <div className="text-xs opacity-90 group-hover:opacity-100">Get in touch</div>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Announcements positioned at bottom right corner */}
        <div className="hidden lg:block absolute bottom-6 right-6 w-80 z-30">
          <AnnouncementBox />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop"
                alt="Institute Building"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Institute</h2>
              <p className="text-gray-600 mb-6">
                Established in 1999, Hyderabad Institute of Gem and Jewellery has been at the 
                forefront of gemological education. We combine traditional craftsmanship 
                with modern technology to provide comprehensive training in all aspects of the 
                gem and jewellery industry.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facilities include well-equipped laboratories, a rich collection 
                of specimens, and experienced faculty members who are industry veterans. We pride 
                ourselves on providing practical, hands-on training that prepares our students 
                for successful careers in the gem and jewellery sector.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Expert Faculty</h4>
                  <p className="text-blue-700">Industry Professionals</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Modern Labs</h4>
                  <p className="text-blue-700">Advanced Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to meet industry standards and career aspirations
            </p>
          </div>
          <CourseCards />
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Get in touch with us for admissions, inquiries, or more information
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-600">
                        Pavani Kamal Complex, 305, 3rd Floor,<br />
                        Lane Opp. S.B.I. Gunfoundry, Hyderabad, Telangana - 500001<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">040-23242077</p>
                      <p className="text-gray-600">040-66834400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">higj.edu97@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">Office Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 2:00 PM</p>
                    <p>Saturday: 9:30 AM - 12:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">HIGJ</h3>
              </div>
              <p className="text-gray-400">
                Leading institute for gem and jewellery education in Hyderabad.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About Us</a></li>
                <li><a href="#courses" className="hover:text-white">Courses</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Courses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gemology</li>
                <li>Advanced Diamonds Grading</li>
                <li>Jewellery Designing</li>
                <li>Lapidary</li>
                <li>Precious Metal Analysis</li>
                <li>Diamond Assorting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Gunfoundry, Hyderabad</p>
                <p>040 - 23242077</p>
                <p>higj.edu97@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Hyderabad Institute of Gem and Jewellery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

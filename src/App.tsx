
import Navigation from "./components/Navigation";
import AnnouncementBox from "./components/AnnouncementBox";
import CourseCards from "./components/CourseCards";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Mail, Phone, MapPin, Gem, GraduationCap,ArrowRight } from "lucide-react";
import higjLogo from './assets/higjlogo.jpg';
import aboutuss from './assets/aboutus.jpg';

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
  <div className="pt-20 pb-16 flex flex-col min-h-screen">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col items-center">
       <div className="flex flex-col items-center text-center  max-w-4xl w-full px-4">        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-white text-center tracking-tight sm:whitespace-nowrap mb-16">
                 Hyderabad Institute of Gem & Jewellery Pvt. Ltd.
        </h1>

        <div className="flex justify-center mb-30 pt-6 ">
          <img 
            src={higjLogo}
            alt="Institute logo" 
            className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-yellow-300"
          />
        </div>

       <div className="lg:hidden flex justify-center w-full mt-8 px-4">
                <div className="w-full max-w-xs sm:max-w-sm">
                  <AnnouncementBox />
                </div>
              </div>
      </div>
    </div>
            {/* Navigation Buttons Section */}
          <div className="px-">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Explore Our Institute</h3>
                {/* <p className="text-gray-200">Learn more about our courses, faculty, and contact information</p> */}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className=" pointer w-full sm:w-auto px-8 py-6 border-2 border-white text-blue-900 hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                  onClick={() => scrollToSection("about")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Gem className="pointer w-4 h-4 text-blue-900 group-hover:text-blue-900" />
                    </div>
                    <div className="text-left text-blue-900 group-hover:text-blue-900">
                      <div className="font-semibold">About Us</div>
                      <div className="text-xs opacity-90 group-hover:opacity-100">Our story & mission</div>
                    </div>
                  </div>
                </Button>

                <Button
                  size="lg"
                  className="pointer w-full sm:w-auto px-8 py-6 bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 group"
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
                  className="pointer w-full sm:w-auto px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                  onClick={() => scrollToSection("contact")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                      <Phone className="w-4 h-4 text-blue-900 group-hover:text-blue-900" />
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
                src={aboutuss}
                alt="Institute Building"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Institute</h2>
              <p className="text-gray-600 mb-6">
                It has been 27 years since the birth of Hyderabad institute of Gems and Jewellry Private Limited.
                 This institute always had an aim to serve the gem and jewelry industry by educating and training.
                 Identifying gemstones, grading diamonds, cutting and polishing of gemstones, designing jewelry and analyzing metal quality are the training aspects in our institute.
                  The fast growing industry of gem and jewelry is more challenging. As an institute, we have seen the drastic development in this field.
                   Weather it was Cubic Zirconia or Synthetic Moissanite, Synthetic Color stones or Various Treatments and Enhancements; and today Lab Grown Diamond;
                  we as institute have always upgraded our skills and knowledge to keepup our education with the ongoing developments. Trained staff and upskilled faculty with adding of new instruments as and when required have always been our priority.
              </p>
              <p className="text-gray-600 mb-6">
                HIGJ is also future planning for various workshops for those who want to upskill their Gemology knowledge and learn the latest information on gem identification and treatments.

                Today HIGJ as a Laboratory is also serving the trade by reporting and disclosing the identification of various colored stones & treatments, identification of synthetic gem materials,Identification of lab grown Diamonds, Grading various quality of Natural Diamonds in loose and mounted as well.
              </p>
              
              
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
              Get in touch with us for admissions, enquiries, or more information
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
                      <h4 className="font-semibold mb-1">
                        <a
                          href="https://maps.app.goo.gl/YZ8BTazUh1nbuEUz5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                        >
                          Address
                        </a>
                      </h4>

                      <p className="text-gray-600">
                        Pavani Kamal Complex, 305, 3rd Floor,<br />
                        Lane Opp. S.B.I. Gunfoundry, Hyderabad, Telangana - 500001<br />
                        India
                      </p>

                      {/* Directions Button */}
                      <a
                        href="https://maps.app.goo.gl/YZ8BTazUh1nbuEUz5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Directions
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>  
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">040-23242077</p>
                      <p className="text-gray-600">040-66834400</p>
                      <p className="text-gray-600">+91 7032784928</p>
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
                <p>+91 7032784928</p>
                <p>higj.edu97@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Hyderabad Institute of Gem and Jewellery Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

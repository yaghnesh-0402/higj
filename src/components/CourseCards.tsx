import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import gemologyImg from "../assets/gemology.jpg";
import diamondsImg from "../assets/advancediamondgrading.jpg";
import designingImg from "../assets/jewellerydesigning.jpg";
import lapidaryImg from "../assets/lapidary.jpg";
import crashGemologyImg from "../assets/gemcrash.jpg";
import crashDiamondImg from "../assets/diamondcrash.jpg";
import metalImg from "../assets/preciousmetal.jpg";
import assortingImg from "../assets/diassort.jpg";
import workshopsImg from "../assets/workshop.jpg";

export default function CourseCards() {
  const courses = [
    {
      id: 1,
      title: "Gemology",
      description: "Comprehensive course covering identification, grading, and valuation of precious and semi-precious stones.",
      duration: "16 Weeks",
      topics: ["Introduction to Gemology", "Crystallography", "Physical and Optical Properties", "Introduction to Instruments","Identification of Gemstones", "Organic Gems","Synthetic Gems","Rare Stones","Treatments","Lapidary","Marketing"],
      image: gemologyImg
    },
    {
      id: 2,
      title: "Advanced Diamonds Grading",
      description: "Master the 4C's of diamond grading, and learn to identify, evaluate, and certify diamonds from mine to market.",
      duration: "16 Weeks",
      topics: ["Introduction to Diamonds", "Physical and Optical Properties", "4C's", "Diamond Grading","Identification of Diamonds & It's Substitues","Evaluation","Treatments","Fancy Colors & Shapes","Mines to Market","Weight Estimation","Identification & Grading in Mounted Jewellery","Assorting"],
      image: diamondsImg
    },
    {
      id: 3,
      title: "Jewellery Designing",
      description: " Learn to create stunning jewelry designs, covering everything from traditional drawing techniques and shading to using modern software and understanding market trends.",
      duration: "16 Weeks",
      topics: ["Introduction of Gemstones", "Construction of Stones", "Drawing & Shading of Gem Stones", "Rendering, Painting of Gems","Shading of Metal","Design Development","Techniques of Linking","Different types of Setting","Casting Methods","International Market Trends","Estimation",],
      image: designingImg
    },
    {
      id: 4,
      title: "Lapidary",
      description: "This course is intended and an introduction as a basic guide to the amateur Lapidary & Hobbyist Oriented & Cutting of Gemstones.",
      duration: "12 Weeks",
      topics: ["Introduction to Gems", "Study of Rough Stones & It's Orientation", "Tumbling", "Pre-Shaping & Doping","Faceting (Different Shapes)","Cabochon","Introduction to carving, intaligos & Cameos","Polishing"],
      image: lapidaryImg
    },
    {
      id: 5,
      title: "Gemology Crash Course",
      description: "A rapid, foundational course on the basics of gemology, covering essential physical properties, instruments, and an introduction to Navratna (birth stones)Specialized course focusing on pearl cultivation techniques, quality assessment, and market evaluation.",
      duration: "4 Weeks",
      topics: ["Introduction to Gemology", "Physical & Optical Properties", "Introduction to Instruments", "Introduction to Navratnas (Birth Stones)"],
      image: crashGemologyImg
    },
    {
      id: 6,
      title: "Diamond Crash Course",
      description: "A quick, intensive program to learn the 4C's of diamonds, how to identify them, and estimate their weight in finished jewelry. Professional course covering jewelry appraisal techniques, documentation, and certification processes.",
      duration: "4 Weeks",
      topics: ["Introduction to Diamond", "Properties of Diamond", "4 C's", "Identification of Diamonds" ,"Weight Estimation of Studded Jewellery"],
      image: crashDiamondImg
    },
    {
      id: 7,
      title: "Precious Mental Analysis",
      description: "Learn to identify and analyze precious and semi-precious metals, including gold karatage, alloys, and how to distinguish genuine jewelry from imitations.ofessional course covering jewelry appraisal techniques, documentation, and certification processes.",
      duration: "10 days",
      topics: ["Precious & Semi- Precious Metals","Gold Karatage Analysis","Alloys","Identification of Imitation Jewellery"],
      image: metalImg
    },
    {
      id: 8,
      title: "Diamond Assorting",
      description: "Develop skills in sorting and grading diamonds based on the 4C's (color, cut, clarity, and carat) and estimating their weight in set jewelry professional course covering jewelry appraisal techniques, documentation, and certification processes.",
      duration: "4 Weeks",
      topics: ["Colour Grading", "Cut Grading", "Clarity Grading", "Weight estimation in Studded Jewellery"],
      image: assortingImg
    },
    {
      id: 9,
      title: "Workshops",
      description: "We conduct Workshops for large Groups intended for Jewellers, Sales Persons, Lapidarists, Gemologists, karigars, Jewellery Designers, Individuals and Beginners in Jewellery trade",
      duration: "Variable",
      topics: ["Introduction to Diamond", "Properties of Diamond", "4 C's", "Identification of Diamonds" ,"Weight Estimation of Studded Jewellery"],
      image: workshopsImg
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {courses.map((course) => (
        <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative h-48 overflow-hidden">
            <ImageWithFallback
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          
          </div>
          
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{course.title}</CardTitle>
              <Badge variant="outline">{course.duration}</Badge>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-600">{course.description}</p>
            
            <div>
              <h4 className="font-semibold mb-2">Program Highlights:</h4>
              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

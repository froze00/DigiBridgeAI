import { Download, CheckCircle2, PlayCircle, FileText, WifiOff, BookOpen } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const kindergartenCourses = [
  {
    id: 101,
    title: "Colors and Shapes (Mga Kulay at Hugis)",
    description: "Learn colors, shapes, and basic counting with fun games",
    duration: "30 mins",
    modules: 4,
    completed: 0,
    offline: true,
    level: "Kindergarten",
    thumbnail: "bg-pink-400"
  },
  {
    id: 102,
    title: "Alphabet Adventure (Alpabeto)",
    description: "Learn ABCs with songs, stories, and interactive activities",
    duration: "45 mins",
    modules: 5,
    completed: 0,
    offline: true,
    level: "Kindergarten",
    thumbnail: "bg-purple-400"
  },
  {
    id: 103,
    title: "Number Fun (Pagbilang 1-10)",
    description: "Count from 1 to 10 with games and activities",
    duration: "30 mins",
    modules: 4,
    completed: 0,
    offline: true,
    level: "Kindergarten",
    thumbnail: "bg-blue-400"
  },
];

const elementaryCourses = [
  {
    id: 201,
    title: "Reading Comprehension (Filipino & English)",
    description: "Improve reading skills with stories and exercises",
    duration: "2 hours",
    modules: 8,
    completed: 0,
    offline: true,
    level: "Elementary",
    thumbnail: "bg-green-500"
  },
  {
    id: 202,
    title: "Math Fundamentals (Grades 1-6)",
    description: "Addition, subtraction, multiplication, division, and fractions",
    duration: "3 hours",
    modules: 12,
    completed: 0,
    offline: true,
    level: "Elementary",
    thumbnail: "bg-blue-500"
  },
  {
    id: 203,
    title: "Science Exploration (Agham)",
    description: "Learn about plants, animals, weather, and simple experiments",
    duration: "2.5 hours",
    modules: 10,
    completed: 0,
    offline: true,
    level: "Elementary",
    thumbnail: "bg-emerald-500"
  },
  {
    id: 204,
    title: "Araling Panlipunan (Social Studies)",
    description: "Philippine history, geography, and culture",
    duration: "2 hours",
    modules: 8,
    completed: 0,
    offline: true,
    level: "Elementary",
    thumbnail: "bg-amber-500"
  },
];

const highSchoolCourses = [
  {
    id: 301,
    title: "Advanced Mathematics",
    description: "Algebra, geometry, trigonometry for high school students",
    duration: "4 hours",
    modules: 16,
    completed: 0,
    offline: true,
    level: "High School",
    thumbnail: "bg-indigo-600"
  },
  {
    id: 302,
    title: "Biology & Chemistry Basics",
    description: "Introduction to life sciences and chemical reactions",
    duration: "3.5 hours",
    modules: 14,
    completed: 0,
    offline: true,
    level: "High School",
    thumbnail: "bg-teal-600"
  },
  {
    id: 303,
    title: "Physics Fundamentals",
    description: "Motion, forces, energy, and electricity",
    duration: "3 hours",
    modules: 12,
    completed: 0,
    offline: true,
    level: "High School",
    thumbnail: "bg-cyan-600"
  },
  {
    id: 304,
    title: "Filipino at Panitikan",
    description: "Advanced Filipino language and Philippine literature",
    duration: "3 hours",
    modules: 10,
    completed: 0,
    offline: true,
    level: "High School",
    thumbnail: "bg-rose-600"
  },
  {
    id: 305,
    title: "Research and Writing Skills",
    description: "Learn how to write research papers and essays",
    duration: "2.5 hours",
    modules: 9,
    completed: 0,
    offline: true,
    level: "High School",
    thumbnail: "bg-violet-600"
  },
];

const adultCourses = [
  {
    id: 1,
    title: "Basic Digital Literacy",
    description: "Learn essential computer and internet skills",
    duration: "2 hours",
    modules: 8,
    completed: 8,
    offline: true,
    level: "Adult",
    thumbnail: "bg-blue-500"
  },
  {
    id: 2,
    title: "Internet Safety & Privacy",
    description: "Protect yourself online and secure your data",
    duration: "1.5 hours",
    modules: 6,
    completed: 6,
    offline: true,
    level: "Adult",
    thumbnail: "bg-green-500"
  },
  {
    id: 3,
    title: "Microsoft Office Basics",
    description: "Master Word, Excel, and PowerPoint fundamentals",
    duration: "3 hours",
    modules: 12,
    completed: 7,
    offline: true,
    level: "Adult",
    thumbnail: "bg-purple-500"
  },
  {
    id: 4,
    title: "English Communication Skills",
    description: "Improve your written and spoken English",
    duration: "4 hours",
    modules: 10,
    completed: 0,
    offline: true,
    level: "Adult",
    thumbnail: "bg-amber-500"
  },
  {
    id: 5,
    title: "Freelancing 101",
    description: "Start your online freelancing career",
    duration: "2.5 hours",
    modules: 9,
    completed: 0,
    offline: false,
    level: "Adult",
    thumbnail: "bg-red-500"
  },
  {
    id: 6,
    title: "Digital Marketing Basics",
    description: "Learn social media and online marketing",
    duration: "3 hours",
    modules: 11,
    completed: 0,
    offline: false,
    level: "Adult",
    thumbnail: "bg-pink-500"
  },
];

const allCourses = [...kindergartenCourses, ...elementaryCourses, ...highSchoolCourses, ...adultCourses];

export function LearningHub() {
  const completedCourses = allCourses.filter(c => c.completed === c.modules);
  const inProgressCourses = allCourses.filter(c => c.completed > 0 && c.completed < c.modules);
  const availableCourses = allCourses.filter(c => c.completed === 0);

  const calculateProgress = (completed: number, total: number) => {
    return Math.round((completed / total) * 100);
  };

  const CourseCard = ({ course }: { course: typeof allCourses[0] }) => {
    const progress = calculateProgress(course.completed, course.modules);
    const isCompleted = course.completed === course.modules;
    const isInProgress = course.completed > 0 && course.completed < course.modules;

    return (
      <Card className="p-5 border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex gap-4">
          <div className={`w-24 h-24 ${course.thumbnail} rounded-lg flex items-center justify-center flex-shrink-0`}>
            {isCompleted ? (
              <CheckCircle2 className="w-10 h-10 text-white" />
            ) : (
              <PlayCircle className="w-10 h-10 text-white" />
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
              {course.offline && (
                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200">
                  <WifiOff className="w-3 h-3 mr-1" />
                  Offline
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {course.modules} modules
              </span>
              <span>{course.duration}</span>
              <Badge variant="secondary" className="text-xs">
                {course.level}
              </Badge>
            </div>

            {isInProgress && (
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <div className="flex gap-2">
              {isCompleted ? (
                <>
                  <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
                    Review Course
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="w-4 h-4 mr-1" />
                    Certificate
                  </Button>
                </>
              ) : isInProgress ? (
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Continue Learning
                </Button>
              ) : (
                <>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Start Course
                  </Button>
                  {course.offline && (
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Learning Hub</h1>
        <p className="text-gray-600 mt-2">Build your digital skills with free courses</p>
      </div>

      {/* Overall Progress */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Total Courses</p>
          <p className="text-3xl font-bold text-gray-900">{allCourses.length}</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Kindergarten</p>
          <p className="text-3xl font-bold text-pink-600">{kindergartenCourses.length}</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Elementary</p>
          <p className="text-3xl font-bold text-green-600">{elementaryCourses.length}</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">High School</p>
          <p className="text-3xl font-bold text-blue-600">{highSchoolCourses.length}</p>
        </Card>
        <Card className="p-6 border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Adult Learning</p>
          <p className="text-3xl font-bold text-purple-600">{adultCourses.length}</p>
        </Card>
      </div>

      {/* Learning Progress */}
      <Card className="p-6 border-gray-200 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Your Learning Journey</h2>
            <p className="text-sm text-gray-600">
              {allCourses.reduce((acc, c) => acc + c.completed, 0)} of{' '}
              {allCourses.reduce((acc, c) => acc + c.modules, 0)} modules completed
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-blue-600">
              {Math.round(
                (allCourses.reduce((acc, c) => acc + c.completed, 0) /
                  allCourses.reduce((acc, c) => acc + c.modules, 0)) *
                  100
              )}
              %
            </p>
            <p className="text-sm text-gray-600">Complete</p>
          </div>
        </div>
        <Progress
          value={
            (allCourses.reduce((acc, c) => acc + c.completed, 0) /
              allCourses.reduce((acc, c) => acc + c.modules, 0)) *
            100
          }
          className="h-3"
        />
      </Card>

      {/* Courses by Education Level */}
      <Tabs defaultValue="kindergarten" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="kindergarten">
            Kindergarten ({kindergartenCourses.length})
          </TabsTrigger>
          <TabsTrigger value="elementary">
            Elementary ({elementaryCourses.length})
          </TabsTrigger>
          <TabsTrigger value="highschool">
            High School ({highSchoolCourses.length})
          </TabsTrigger>
          <TabsTrigger value="adult">
            Adult Learning ({adultCourses.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="kindergarten" className="space-y-4">
          <div className="mb-4 p-4 bg-pink-50 border border-pink-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Kindergarten Learning Modules</h3>
            <p className="text-sm text-gray-700">
              Fun and interactive courses designed for young learners (ages 4-6). All modules include colorful visuals, songs, and games.
            </p>
          </div>
          {kindergartenCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </TabsContent>

        <TabsContent value="elementary" className="space-y-4">
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Elementary Education (Grades 1-6)</h3>
            <p className="text-sm text-gray-700">
              Aligned with DepEd K-12 curriculum. Covers core subjects: Filipino, English, Math, Science, and Araling Panlipunan.
            </p>
          </div>
          {elementaryCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </TabsContent>

        <TabsContent value="highschool" className="space-y-4">
          <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">High School Modules (Grades 7-12)</h3>
            <p className="text-sm text-gray-700">
              Advanced courses for junior and senior high school students. Includes STEM subjects and college preparation materials.
            </p>
          </div>
          {highSchoolCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </TabsContent>

        <TabsContent value="adult" className="space-y-4">
          <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-1">Adult Learning & Skills Development</h3>
            <p className="text-sm text-gray-700">
              Digital literacy, career skills, and livelihood programs for adults, out-of-school youth, and professionals.
            </p>
          </div>
          {adultCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </TabsContent>
      </Tabs>

      {/* Quiz Indicator */}
      <Card className="p-6 border-blue-200 bg-blue-50 mt-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Ready for a quiz?</h3>
            <p className="text-sm text-gray-600">
              Test your knowledge and earn certificates for completed courses
            </p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Take Quiz</Button>
        </div>
      </Card>

      {/* Curriculum Sources & References */}
      <Card className="p-6 border-gray-200 bg-green-50 mt-8">
        <h3 className="font-semibold text-gray-900 mb-4">Curriculum Sources & Educational Standards:</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Kindergarten & Basic Education:</strong>
          </p>
          <p>
            • Department of Education (DepEd). (2024). <em>K to 12 Basic Education Curriculum</em>. Retrieved from{" "}
            <a
              href="https://www.deped.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.deped.gov.ph
            </a>
          </p>
          <p>
            • DepEd. (2024). <em>Learning Resource Management and Development System (LRMDS)</em>.
          </p>
          <p>
            • DepEd. (2024). <em>DepEd Commons - Digital Learning Resources Repository</em>.
          </p>
          <p className="mt-3">
            <strong>Adult Learning & Skills Development:</strong>
          </p>
          <p>
            • Technical Education and Skills Development Authority (TESDA). (2024). <em>Digital Skills Training Programs & Competency Standards</em>. Retrieved from{" "}
            <a
              href="https://www.tesda.gov.ph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.tesda.gov.ph
            </a>
          </p>
          <p>
            • DICT. (2024). <em>Digital Jobs PH - Digital Literacy Framework & e-Skills Training Modules</em>.
          </p>
          <p>
            • Commission on Higher Education (CHED). (2024). <em>Open Educational Resources Initiative</em>.
          </p>
          <p>
            • UNESCO. (2024). <em>Digital Literacy Global Framework - Philippines Localization</em>.
          </p>
          <p className="text-xs text-gray-600 mt-4 pt-3 border-t border-gray-300">
            <strong>Note:</strong> All learning modules are aligned with Philippine educational standards and available for offline download to ensure accessibility in areas with limited internet connectivity. Kindergarten modules use MTB-MLE (Mother Tongue-Based Multilingual Education) approach. Elementary and high school courses follow DepEd K-12 curriculum competencies. Adult courses are mapped to TESDA National Competency Standards and DICT Digital Skills Framework. Content reviewed and validated by DepEd-certified educators. Last updated: April 2026.
          </p>
        </div>
      </Card>
    </div>
  );
}
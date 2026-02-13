import { Course, GRADE_POINTS } from "../data/courseData";

export interface UserCourse extends Course {
  id: string; 
  grade: string; 
  status: 'completed' | 'ongoing' | 'future';
}

export const calculateCGPA = (courses: UserCourse[]) => {
  let totalCredits = 0;
  let totalPoints = 0;

  courses.forEach(course => {
    if (course.grade === 'W' || course.grade === '') return;

    const points = GRADE_POINTS[course.grade];
    if (points !== undefined) {
      totalPoints += points * course.credits;
      totalCredits += course.credits;
    }
  });

  return totalCredits === 0 ? "0.00" : (totalPoints / totalCredits).toFixed(2);
};

export const getStats = (courses: UserCourse[]) => {
  const completed = courses.filter(c => c.status === 'completed');
  const ongoing = courses.filter(c => c.status === 'ongoing');
  const future = courses.filter(c => c.status === 'future');

  const currentCGPA = calculateCGPA(completed);
  const predictedCGPA = calculateCGPA([...completed, ...ongoing]);
  const masterCGPA = calculateCGPA([...completed, ...ongoing, ...future]);

  return { 
    currentCGPA, 
    predictedCGPA, 
    masterCGPA, 
    totalCredits: completed.reduce((acc, c) => acc + c.credits, 0) 
  };
};
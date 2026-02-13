export type DegreeType = 'BS_DS' | 'BS_ES';

export interface Course {
  code: string;
  name: string;
  credits: number;
  level: 'Foundation' | 'Diploma' | 'Degree' | 'BSc' | 'BS';
  degree: DegreeType[];
}

export const GRADE_POINTS: Record<string, number> = {
  'S': 10, 'A': 9, 'B': 8, 'C': 7, 'D': 6, 'E': 5, 'P': 4, 'U': 0, 'W': 0, 'I': 0
};

export const COURSES: Course[] = [
  // --- FOUNDATION LEVEL (DATA SCIENCE) ---
  { code: 'MA1001', name: 'Mathematics for Data Science 1', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'ST1001', name: 'Statistics for Data Science 1', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'CS1001', name: 'Computational Thinking', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'EN1001', name: 'English 1', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'MA1002', name: 'Mathematics for Data Science 2', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'ST1002', name: 'Statistics for Data Science 2', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'EN1002', name: 'English 2', credits: 4, level: 'Foundation', degree: ['BS_DS'] },
  { code: 'CS1002', name: 'Intro to Python Programming', credits: 4, level: 'Foundation', degree: ['BS_DS', 'BS_ES'] },

  // --- FOUNDATION LEVEL (ELECTRONIC SYSTEMS) ---
  { code: 'HS1101', name: 'English I', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'MA1101', name: 'Math for Electronics I', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'HS1102', name: 'English II', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'EE1101', name: 'Electronic Systems Thinking and Circuits', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'EE1901', name: 'Electronic Systems Thinking and Circuits Lab', credits: 1, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS1101', name: 'Introduction to C Programming', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS1901', name: 'C Programming Laboratory', credits: 1, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS1102', name: 'Introduction to Linux and Programming', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS1902', name: 'Linux Systems Laboratory', credits: 1, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'EE1102', name: 'Digital Systems', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'EE1103', name: 'Electrical and Electronic Circuits', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'EE1902', name: 'Electronics Laboratory', credits: 3, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS2101', name: 'Embedded C Programming', credits: 4, level: 'Foundation', degree: ['BS_ES'] },
  { code: 'CS2901', name: 'Embedded C Programming Laboratory', credits: 1, level: 'Foundation', degree: ['BS_ES'] },

  // --- DIPLOMA LEVEL (DATA SCIENCE) ---
  { code: 'ML2001', name: 'Machine Learning Foundations', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'ML2002', name: 'Machine Learning Techniques', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'ML2003', name: 'Machine Learning Practice', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'BA2001', name: 'Business Analytics', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'BA2002', name: 'Business Data Management', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'DS2001', name: 'Tools in Data Science', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2001', name: 'PDSA using Python', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2002', name: 'DBMS', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2003', name: 'App Development 1', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2004', name: 'Java Programming', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2005', name: 'System Commands', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'CS2006', name: 'App Development 2', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'AI2001', name: 'Intro to Deep Learning & GenAI', credits: 4, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'PR2001', name: 'BDM Project', credits: 2, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'PR2002', name: 'MLP Project', credits: 2, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'PR2003', name: 'App Dev 1 Project', credits: 2, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'PR2004', name: 'App Dev 2 Project', credits: 2, level: 'Diploma', degree: ['BS_DS'] },
  { code: 'PR2005', name: 'DL & GenAI Project', credits: 2, level: 'Diploma', degree: ['BS_DS'] },

  // --- DIPLOMA LEVEL (ELECTRONIC SYSTEMS) ---
  { code: 'EE2101', name: 'Signals and Systems', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE2102', name: 'Analog Electronic Systems', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE2901', name: 'Analog Electronics Laboratory', credits: 3, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE2103', name: 'Digital System Design', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE2902', name: 'Digital System Design Laboratory', credits: 1, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE3101', name: 'Digital Signal Processing', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE3103', name: 'Sensors and Applications', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE3901', name: 'Sensors Laboratory', credits: 3, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE4108', name: 'Electronic Testing and Measurement', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE4104', name: 'Computer Organisation', credits: 4, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE3999', name: 'Electronics System Project', credits: 2, level: 'Diploma', degree: ['BS_ES'] },
  { code: 'EE4999', name: 'Signals and Systems Project', credits: 2, level: 'Diploma', degree: ['BS_ES'] },

  // --- DEGREE LEVEL (DATA SCIENCE & SHARED) ---
  { code: 'CS3001', name: 'Software Engineering', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'CS3002', name: 'Software Testing', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'AI3001', name: 'AI: Search Methods', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'CS3004', name: 'Deep Learning', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'GN3001', name: 'Strategies for Professional Growth', credits: 4, level: 'Degree', degree: ['BS_DS', 'BS_ES'] },
  { code: 'CS3005', name: 'Programming in C', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'DA5004', name: 'Large Language Models', credits: 4, level: 'Degree', degree: ['BS_DS'] },
  { code: 'CS4022', name: 'Operating Systems', credits: 4, level: 'Degree', degree: ['BS_DS', 'BS_ES'] },
  { code: 'MS3034', name: 'Corporate Finance', credits: 4, level: 'Degree', degree: ['BS_DS'] },

  // --- DEGREE LEVEL (ELECTRONIC SYSTEMS CORE & ELECTIVES) ---
  { code: 'MA2101', name: 'Math for Electronics II', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE4101', name: 'Embedded Linux and FPGAs', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE4901', name: 'Embedded Linux and FPGAs Lab', credits: 1, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE3104', name: 'Electromagnetic Fields and Transmission Lines', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE4102', name: 'Electronic Product Design', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE3102', name: 'Control Engineering', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'MA3101', name: 'Probability and Statistics', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE4103', name: 'Communication Systems', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE5101', name: 'Internet of Things (IoT)', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE3106', name: 'Semiconductor Devices and VLSI Technology', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE3107', name: 'Analog circuits', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE5102', name: 'Digital IC Design', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE5103', name: 'Power Management for Electronic Systems', credits: 4, level: 'Degree', degree: ['BS_ES'] },
  { code: 'EE5104', name: 'Biomedical Electronic Systems', credits: 4, level: 'Degree', degree: ['BS_ES'] }
];
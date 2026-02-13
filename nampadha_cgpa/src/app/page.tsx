"use client";

import React, { useState } from 'react';
import { COURSES, GRADE_POINTS } from '../data/courseData';
import { UserCourse, getStats } from '../utils/cgpaLogic';
import { Plus, Trash2, Calculator, BookOpen, TrendingUp } from 'lucide-react';

export default function CGPACalculator() {
  const [selectedDegree, setSelectedDegree] = useState<'BS_DS' | 'BS_ES'>('BS_DS');
  const [myCourses, setMyCourses] = useState<UserCourse[]>([]);
  
  const [selectedCourseCode, setSelectedCourseCode] = useState<string>('');
  const [selectedGrade, setSelectedGrade] = useState<string>('S');
  const [selectedStatus, setSelectedStatus] = useState<'completed' | 'ongoing' | 'future'>('completed');

  const stats = getStats(myCourses);

  const addCourse = () => {
    if (!selectedCourseCode) return;
    const courseDef = COURSES.find(c => c.code === selectedCourseCode);
    if (!courseDef) return;

    const newCourse: UserCourse = {
      ...courseDef,
      id: Math.random().toString(36).substr(2, 9),
      grade: selectedGrade,
      status: selectedStatus
    };

    setMyCourses([...myCourses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setMyCourses(myCourses.filter(c => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      <header className="bg-[#800000] text-white p-6 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LOGO AND TITLE SECTION */}
          <div className="flex items-center gap-4">
            <img 
              src="logo.png" 
              alt="IIT Madras Logo" 
              className="w-20 h-20 bg-white rounded-full p-1.5 shadow-sm object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">Namdapha Tech Challenge</h1>
              <p className="text-sm opacity-90">CGPA Calculator & Predictor</p>
            </div>
          </div>

          {/* DEGREE TOGGLE BUTTONS */}
          <div className="flex gap-2 bg-white/10 p-1 rounded-lg">
            <button 
              onClick={() => setSelectedDegree('BS_DS')}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${selectedDegree === 'BS_DS' ? 'bg-white text-[#800000]' : 'text-white hover:bg-white/20'}`}
            >BS Data Science</button>
            <button 
              onClick={() => setSelectedDegree('BS_ES')}
              className={`px-3 py-1 text-sm font-medium rounded transition-colors ${selectedDegree === 'BS_ES' ? 'bg-white text-[#800000]' : 'text-white hover:bg-white/20'}`}
            >BS Electronic Sys</button>
          </div>

        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-6 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card title="Current CGPA" value={stats.currentCGPA} icon={<Calculator className="w-5 h-5"/>} color="bg-white border-l-4 border-blue-500" />
          <Card title="Predicted CGPA" value={stats.predictedCGPA} sub="(Includes Ongoing)" icon={<TrendingUp className="w-5 h-5"/>} color="bg-white border-l-4 border-purple-500" />
          <Card title="Future CGPA" value={stats.masterCGPA} sub="(Scenario Planning)" icon={<BookOpen className="w-5 h-5"/>} color="bg-white border-l-4 border-green-500" />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#800000]"/> Add Subject
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800000] focus:outline-none" value={selectedCourseCode} onChange={(e) => setSelectedCourseCode(e.target.value)}>
              <option value="">Select Subject...</option>
              {COURSES.filter(c => c.degree.includes(selectedDegree)).map(c => (
                <option key={c.code} value={c.code}>{c.name} ({c.credits} Cr)</option>
              ))}
            </select>

            <select className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800000] focus:outline-none" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value as any)}>
              <option value="completed">Completed</option>
              <option value="ongoing">Ongoing (Predict)</option>
              <option value="future">Future (Plan)</option>
            </select>

            <select className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#800000] focus:outline-none" value={selectedGrade} onChange={(e) => setSelectedGrade(e.target.value)}>
              {Object.keys(GRADE_POINTS).map(g => (
                <option key={g} value={g}>{g} Grade ({GRADE_POINTS[g]} pts)</option>
              ))}
            </select>

            <button onClick={addCourse} className="bg-[#800000] hover:bg-[#600000] text-white py-2 px-4 rounded-md transition-colors font-medium shadow-sm">
              Add to List
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
           <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b">
                <tr>
                  <th className="px-6 py-4">Course Name</th>
                  <th className="px-6 py-4">Credits</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Expected Grade</th>
                  <th className="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {myCourses.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                      No courses added yet. Select a subject above to start calculating!
                    </td>
                  </tr>
                ) : (
                  myCourses.map((course) => (
                    <tr key={course.id} className="bg-white border-b hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{course.name}</td>
                      <td className="px-6 py-4 text-gray-600">{course.credits}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          course.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          course.status === 'ongoing' ? 'bg-purple-100 text-purple-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {course.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-800">{course.grade}</td>
                      <td className="px-6 py-4">
                        <button onClick={() => removeCourse(course.id)} className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

const Card = ({ title, value, sub, icon, color }: any) => (
  <div className={`p-6 rounded-xl shadow-sm ${color} flex flex-col justify-between h-full`}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <div className="text-gray-400">{icon}</div>
    </div>
    <div>
      <span className="text-4xl font-bold text-gray-900">{value}</span>
      {sub && <p className="text-xs text-gray-500 mt-2 font-medium">{sub}</p>}
    </div>
  </div>
);
<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Left Sidebar -->
      <aside class="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div class="flex items-center mb-8">
          <h1 class="text-xl font-bold">Academy</h1>
        </div>
        
        <nav class="space-y-2">
          <a v-for="item in navigationItems" 
             :key="item.name"
             :class="[
               'flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100',
               item.name === 'Courses' ? 'bg-red-50 text-red-600' : ''
             ]">
            <component :is="item.icon" class="w-5 h-5 mr-3" />
            {{ item.name }}
          </a>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <main class="ml-64 p-8">
        <!-- Search Bar -->
        <div class="max-w-3xl mb-8 relative">
          <input 
            type="search"
            placeholder="Search your course here..."
            class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
  
        <!-- Courses Section -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Courses</h2>
          <p class="text-gray-600 mb-6">View and manage your courses</p>
  
          <!-- Course Tabs -->
          <div class="flex gap-4 mb-6">
            <button 
              v-for="tab in tabs" 
              :key="tab.name"
              :class="[
                'px-4 py-2 rounded-lg text-sm',
                tab.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
              ]"
            >
              {{ tab.name }} ({{ tab.count }})
            </button>
          </div>
  
          <!-- Course Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="course in courses" :key="course.id" class="bg-white rounded-xl shadow-sm overflow-hidden">
              <img :src="course.image" :alt="course.title" class="w-full h-40 object-cover" />
              <div class="p-4">
                <span class="text-xs font-medium text-blue-600 mb-2 block">{{ course.tag }}</span>
                <h3 class="font-semibold mb-2">{{ course.title }}</h3>
                <div class="flex items-center mb-3">
                  <img :src="course.instructorImage" alt="" class="w-6 h-6 rounded-full mr-2" />
                  <span class="text-sm text-gray-600">{{ course.instructor }}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-sm text-gray-500">{{ course.duration }}</span>
                  <button class="text-blue-600 hover:text-blue-700">Resume Course →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  
      <!-- Right Sidebar -->
      <aside class="fixed right-0 top-0 h-full w-64 bg-white border-l border-gray-200 p-4">
        <div class="flex flex-col items-center mb-6">
          <img src="/placeholder.svg?height=64&width=64" alt="Profile" class="w-16 h-16 rounded-full mb-2" />
          <h3 class="font-semibold">Chioma Favour</h3>
          <p class="text-sm text-gray-600">Student</p>
        </div>
  
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="text-center">
            <div class="text-xl font-semibold">24</div>
            <div class="text-xs text-gray-600">Hours</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-semibold">85%</div>
            <div class="text-xs text-gray-600">Grade</div>
          </div>
          <div class="text-center">
            <div class="text-xl font-semibold">6</div>
            <div class="text-xs text-gray-600">Courses</div>
          </div>
        </div>
  
        <!-- Task Progress -->
        <div class="mb-6">
          <h4 class="font-semibold mb-4">Task Progress</h4>
          <div class="space-y-3">
            <div v-for="task in tasks" :key="task.name" class="flex items-center">
              <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                <div class="bg-blue-600 h-2 rounded-full" :style="{ width: `${task.progress}%` }"></div>
              </div>
              <span class="text-xs text-gray-600 whitespace-nowrap">{{ task.progress }}%</span>
            </div>
          </div>
        </div>
  
        <!-- To-do List -->
        <div>
          <h4 class="font-semibold mb-4">To-do List</h4>
          <ul class="space-y-2">
            <li v-for="todo in todos" :key="todo" class="flex items-center text-sm text-gray-600">
              <input type="checkbox" class="mr-2" />
              {{ todo }}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { 
    LayoutDashboard, 
    GraduationCap, 
    ClipboardList, 
    Calendar,
    MessageSquare,
    FileText,
    Trophy,
    HelpCircle,
    Settings,
    Bell
  } from 'lucide-vue-next'
  
  const navigationItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Courses', icon: GraduationCap },
    { name: 'Assignments', icon: ClipboardList },
    { name: 'Calendar', icon: Calendar },
    { name: 'Discussions', icon: MessageSquare },
    { name: 'Resources', icon: FileText },
    { name: 'Achievements', icon: Trophy },
    { name: 'Support', icon: HelpCircle },
    { name: 'Settings', icon: Settings },
    { name: 'Notification', icon: Bell },
  ]
  
  const tabs = [
    { name: 'All Courses', count: 11, active: true },
    { name: 'Ongoing', count: 6 },
    { name: 'Not Started', count: 2 },
    { name: 'Completed', count: 3 },
  ]
  
  const courses = [
    {
      id: 1,
      title: "Beginner's Guide to becoming a professional UI/UX Designer",
      instructor: "Joseph Brandon",
      duration: "24+ Hours",
      tag: "UI/UX",
      image: "/placeholder.svg?height=160&width=320",
      instructorImage: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 2,
      title: "Advance your career, become a Senior UI/UX Designer",
      instructor: "Joseph Brandon",
      duration: "24+ Hours",
      tag: "UI/UX",
      image: "/placeholder.svg?height=160&width=320",
      instructorImage: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 3,
      title: "Front-End Web Developer Certificate Course",
      instructor: "Joseph Brandon",
      duration: "24+ Hours",
      tag: "CODING",
      image: "/placeholder.svg?height=160&width=320",
      instructorImage: "/placeholder.svg?height=24&width=24",
    },
  ]
  
  const tasks = [
    { name: 'Introduction to Figma', progress: 100 },
    { name: 'Complete UI/UX Course', progress: 75 },
    { name: 'Front-End Development', progress: 45 },
  ]
  
  const todos = [
    'Research interaction design',
    'Introduction to UI/UX',
    'Complete wireframe design',
  ]
  </script>